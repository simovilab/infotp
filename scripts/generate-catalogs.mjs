#!/usr/bin/env node
/**
 * Pre-generate Markdown pages for catalogs from YAML sources.
 *
 * Inputs (read-only): docs/public/catalogs/<locale>/*.yaml
 * Outputs: docs/catalogos/<slug>.md
 *
 * Locale selection for labels:
 * - If env CATALOG_I18N_LOCALE is set, use that (e.g., 'es', 'en', 'pt').
 * - Else, parse docs/.vitepress/config.mts and use defineConfig({ lang }).
 * - Else, default to 'en'.
 *
 * Overwrite policy:
 * - If the output file does not exist, create it.
 * - If it exists and contains the marker `AUTO-GENERATED FILE - DO NOT EDIT`, overwrite it.
 * - If it exists and looks like a simple <Catalog .../> stub, overwrite it.
 * - Otherwise, skip and print a note.
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { load as yamlLoad } from "js-yaml"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ROOT = path.resolve(__dirname, "..")
// Source YAMLs live under catalogs/<locale>.
const CATALOGS_DIR = path.join(ROOT, "docs/public/catalogos")

// Attempt to read the site language from VitePress config (docs/.vitepress/config.mts)
const CONFIG_PATH = path.join(ROOT, "docs/.vitepress/config.mts")
let SITE_LANG = null
try {
  if (fs.existsSync(CONFIG_PATH)) {
    const cfg = fs.readFileSync(CONFIG_PATH, "utf-8")
    const m = cfg.match(/\blang\s*:\s*["']([a-zA-Z-]+)["']/)
    if (m && m[1]) SITE_LANG = m[1].trim()
  }
} catch {
  // ignore parsing issues; we'll fall back to 'en'
}

// Determine source locale: env override -> site language (if folder exists) -> 'en'
let SRC_LOCALE = process.env.CATALOG_SRC_LOCALE || null
if (!SRC_LOCALE) {
  const candidate = SITE_LANG || ""
  if (candidate && fs.existsSync(path.join(CATALOGS_DIR, candidate))) {
    SRC_LOCALE = candidate
  } else {
    SRC_LOCALE = "en"
  }
}

const DATA_DIR = path.join(CATALOGS_DIR, SRC_LOCALE)
// i18n key maps live under catalogs/i18n
const I18N_DIR = path.join(CATALOGS_DIR, "i18n")
const OUT_DIR = path.join(ROOT, "docs/catalogos")

// Optional formatting configuration for catalogs (colors/icons)
let FORMAT = {}
try {
  const fmtPath = path.join(CATALOGS_DIR, "format.json")
  if (fs.existsSync(fmtPath)) {
    FORMAT = JSON.parse(fs.readFileSync(fmtPath, "utf-8"))
  }
} catch (e) {
  console.warn("Warning: unable to read format.json:", e?.message || e)
}

// Catalog configuration (single source of truth)
// - basename: YAML filename without extension under docs/public/catalogos/<locale>
// - outPath: output path under docs/catalogos
// - title: H1 title (fallback to metadata.title if omitted)
// - sectionKey/sectionLabel: primary array key and its display label
const CATALOG_DEFS = [
  { basename: "service-stakeholders", outPath: "servicio/partes-interesadas.md", title: "Partes interesadas", sectionKey: "stakeholders", sectionLabel: "Partes interesadas" },
  { basename: "service-spaces", outPath: "servicio/espacios.md", title: "Espacios físicos y entornos", sectionKey: "spaces", sectionLabel: "Espacios" },
  { basename: "service-times", outPath: "servicio/tiempos.md", title: "Tiempos", sectionKey: "times", sectionLabel: "Tiempos" },
  { basename: "service-contexts", outPath: "servicio/contextos.md", title: "Contextos", sectionKey: "contexts", sectionLabel: "Contextos" },
  { basename: "service-information-needs", outPath: "servicio/necesidades-informacion.md", title: "Necesidades de información", sectionKey: "needs", sectionLabel: "Necesidades" },

  { basename: "application-applications", outPath: "aplicacion/aplicaciones.md", title: "Aplicaciones", sectionKey: "applications", sectionLabel: "Aplicaciones" },
  { basename: "application-requirements", outPath: "aplicacion/requisitos.md", title: "Requisitos", sectionKey: "requirements", sectionLabel: "Requisitos" },

  { basename: "data-entities", outPath: "datos/entidades.md", title: "Entidades de datos", sectionKey: "data_entities", sectionLabel: "Entidades de datos" },
  { basename: "data-components", outPath: "datos/componentes.md", title: "Componentes de datos", sectionKey: "data_components", sectionLabel: "Componentes de datos" },

  { basename: "architecture-components", outPath: "arquitectura/componentes.md", title: "Componentes de arquitectura", sectionKey: "components", sectionLabel: "Componentes" },
  { basename: "architecture-patterns", outPath: "arquitectura/patrones.md", title: "Patrones de arquitectura", sectionKey: "patterns", sectionLabel: "Patrones" },  

  { basename: "technology-technologies", outPath: "tecnologia/tecnologias.md", title: "Tecnologías", sectionKey: "technologies", sectionLabel: "Tecnologías" },
  { basename: "technology-standards", outPath: "tecnologia/estandares.md", title: "Estándares", sectionKey: "standards", sectionLabel: "Estándares" },
  { basename: "technology-interfaces", outPath: "tecnologia/interfaces.md", title: "Interfaces", sectionKey: "interfaces", sectionLabel: "Interfaces" },

  { basename: "communication-brands", outPath: "comunicacion/marcas.md", title: "Marca", sectionKey: "brands", sectionLabel: "Marcas" },
  { basename: "communication-graphics", outPath: "comunicacion/elementos-graficos.md", title: "Elementos gráficos", sectionKey: "graphics", sectionLabel: "Elementos gráficos" },
  { basename: "communication-signage", outPath: "comunicacion/senalizacion.md", title: "Señalización", sectionKey: "signage", sectionLabel: "Señalización" },
  { basename: "communication-interfaces", outPath: "comunicacion/interfaces.md", title: "Interfaces gráficas", sectionKey: "components", sectionLabel: "Componentes" },

  { basename: "governance-organizations", outPath: "gobernanza/organizaciones.md", title: "Organizaciones", sectionKey: "organizations", sectionLabel: "Organizaciones" },
  { basename: "governance-actors", outPath: "gobernanza/actores.md", title: "Actores", sectionKey: "actors", sectionLabel: "Actores" },
  { basename: "governance-principles", outPath: "gobernanza/principios.md", title: "Principios", sectionKey: "principles", sectionLabel: "Principios" },
  { basename: "governance-regulations", outPath: "gobernanza/regulaciones.md", title: "Regulaciones", sectionKey: "regulations", sectionLabel: "Regulaciones" },
]

// Map single YAML basenames -> relative output paths under docs/catalogos
const fileToPath = Object.fromEntries(CATALOG_DEFS.map(def => [def.basename, def.outPath]))

// Optional: Display names for the H1 title (Spanish)
const catalogTitle = Object.fromEntries(
  CATALOG_DEFS.filter(def => def.title).map(def => [def.basename, def.title])
)

// Translate known section keys to Spanish for nicer headings
const sectionLabel = (() => {
  const base = {
    metadata: "Metadatos",
    governance: "Gobernanza",
    colors: "Colores",
    typography: "Tipografía",
    shapes: "Formas",
    icons: "Íconos",
  }
  for (const def of CATALOG_DEFS) {
    if (def.sectionKey && def.sectionLabel && !(def.sectionKey in base)) {
      base[def.sectionKey] = def.sectionLabel
    }
  }
  return base
})()

// Some output pages are composed by merging multiple source files
// key -> { slug, sources: [basenames...] }
const groupedSources = {}

const generationDate = new Date().toISOString().slice(0, 10)
const MARKER = `<!-- AUTO-GENERATED FILE - DO NOT EDIT. See scripts/generate-catalogs.mjs | Generated: ${generationDate} -->`

function prettifyKey(key) {
  if (!key) return ""
  if (sectionLabel[key]) return sectionLabel[key]
  return String(key)
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, m => m.toUpperCase())
}

function createSlug(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

function formatValue(v) {
  if (v === null || v === undefined) return "—"
  const t = typeof v
  if (t === "string" || t === "number" || t === "boolean") return String(v)
  if (Array.isArray(v)) {
    if (v.length === 0) return "—"
    if (typeof v[0] !== "object") return v.map(x => String(x)).join(", ")
    // Array of objects – compact JSON per entry
    return v.map(x => x.name || x.id || JSON.stringify(x)).join("; ")
  }
  try {
    return "```json\n" + JSON.stringify(v, null, 2) + "\n```"
  } catch {
    return String(v)
  }
}

function renderAttributesTable(attributes) {
  if (!Array.isArray(attributes) || attributes.length === 0) return "—"
  
  // Build table with columns: name (as code), type, description
  let table = "\n| Nombre | Tipo | Descripción |\n"
  table += "| --- | --- | --- |\n"
  
  for (const attr of attributes) {
    const name = attr.name ? `\`${attr.name}\`` : "—"
    const type = attr.type || "—"
    const description = attr.description || "—"
    table += `| ${name} | ${type} | ${description} |\n`
  }
  
  return table + "\n"
}

function renderMetadata(md) {
  if (!md || typeof md !== "object") return ""
  const rows = []
  const push = (label, value) => {
    if (value === undefined || value === null || value === "") return
    if (Array.isArray(value)) rows.push(`| ${label} | ${value.join(", ")} |`)
    else rows.push(`| ${label} | ${value} |`)
  }
  push("Versión", md.version)
  push("Fecha", md.date)
  push("Descripción", md.description)
  push("Autores", md.author)
  push("Organización", md.organization)
  push("Contacto", md.contact)
  push("Licencia", md.license)
  if (!rows.length) return ""
  return ["### Metadatos", "", "| Campo | Valor |", "| --- | --- |", ...rows, ""].join("\n")
}

function renderItem(sectionKey, item, index, labelForKey, headingLevel = 2) {
  const title = item?.name || item?.id || `${labelForKey(sectionKey)} ${index + 1}`
  // Stable anchor based on the item id (e.g., principles:001 -> #principles-001)
  const anchorId = item?.id
    ? String(item.id)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
    : null
  const hashes = "#".repeat(headingLevel)
  let out = `\n${anchorId ? `<a id="${anchorId}"></a>\n` : ""}${hashes} ${title}\n\n`
  // Render id as a styled badge with optional icon using FORMAT config
  if (item?.id) {
    let fmt = sectionKey && FORMAT[sectionKey] ? FORMAT[sectionKey] : null
    const color = fmt?.color || "var(--vp-c-default-soft)"
    const icon = fmt?.icon || ""
    const iconSpan = icon ? `<span class="catalog-icon material-symbols-outlined">${icon}</span>` : ""
    out += `<span class="catalog-badge" style="--catalog-badge-bg:${color}">${iconSpan}<code style="background:none;padding:0;margin:0;border:0;">${item.id}</code></span>\n\n`
  }
  // Render remaining fields (excluding 'name')
  const keys = Object.keys(item || {})
  for (const k of keys) {
    if (k === "name") continue
    if (k === "id") continue
    const v = item[k]
    const label = labelForKey(k)
    
    // Special case: render attributes/fields as a table for data entities and GTFS files
    if ((k === "attributes" || k === "fields") && Array.isArray(v) && v.length > 0 && v[0]?.name && v[0]?.type) {
      out += `\n**${label}:**\n`
      out += renderAttributesTable(v)
      continue
    }
    
    const rendered = formatValue(v)
    if (rendered.startsWith("```json")) {
      out += `- ${label}:\n\n${rendered}\n\n`
    } else {
      out += `- ${label}: ${rendered}\n`
    }
  }
  return out
}

function renderSection(key, value, labelForKey, isMultiCategory = false) {
  const title = sectionLabel[key] ? sectionLabel[key] : labelForKey(key)
  let out = ""
  
  // For array sections in multi-category catalogs, add H2 section heading and render items as H3
  if (Array.isArray(value)) {
    // Skip arrays that are not item collections (e.g., preceded_by, followed_by which are references)
    const isItemArray = value.length > 0 && value.every(v => v === null || (typeof v === "object" && (v.name || v.id)))
    if (!isItemArray) {
      // Render as a simple list
      return `\n**${title}:**\n` + formatValue(value) + "\n"
    }
    
    if (isMultiCategory) {
      out += `\n## ${title}\n\n`
      value.forEach((item, i) => {
        out += renderItem(key, item, i, labelForKey, 3) // H3 for items in multi-category
      })
    } else {
      // Single-category catalogs: omit section title and render items as H2
      value.forEach((item, i) => {
        out += renderItem(key, item, i, labelForKey, 2) // H2 for items in single-category
      })
    }
    return out
  }
  
  const t = typeof value
  if (t === "string" || t === "number" || t === "boolean") {
    return `\n## ${title}\n\n` + String(value) + "\n\n"
  }
  if (value && t === "object") {
    out += `\n## ${title}\n\n`
    out += "\n"
    for (const [k, v] of Object.entries(value)) {
      const rendered = formatValue(v)
      if (rendered.startsWith("```json")) {
        out += `- ${labelForKey(k)}:\n\n${rendered}\n\n`
      } else {
        out += `- ${labelForKey(k)}: ${rendered}\n`
      }
    }
    out += "\n"
    return out
  }
  return out + "—\n\n"
}

function looksLikeStub(content) {
  if (!content) return false
  const trimmed = content.trim()
  if (trimmed.length > 300) return false
  return /<\s*Catalog\b|<\s*CatalogContent\b|<\s*CatalogItem\b/.test(trimmed)
}

// Load i18n key mapping if present: returns two maps per basename
// canonical->localized and localized->canonical per locale.
function loadI18nMaps(basename) {
  const file = path.join(I18N_DIR, `${basename}.i18n.json`)
  if (!fs.existsSync(file)) return null
  try {
    const arr = JSON.parse(fs.readFileSync(file, "utf-8"))
    const locales = new Set()
    for (const it of arr) for (const loc of Object.keys(it.translations || {})) locales.add(loc)
    const maps = {}
    for (const loc of locales) {
      const forward = {} // canonical -> localized
      const reverse = {} // localized -> canonical
      for (const it of arr) {
        const can = it.key
        const locVal = it.translations?.[loc]
        if (can && locVal) {
          forward[can] = locVal
          reverse[locVal] = can
        }
      }
      maps[loc] = { forward, reverse }
    }
    return maps
  } catch (e) {
    console.warn(`Warning: failed to read i18n for ${basename}:`, e?.message || e)
    return null
  }
}

// Normalize object keys from a given locale to canonical keys using reverse map
function normalizeKeys(obj, reverseMap) {
  if (!obj || typeof obj !== "object") return obj
  if (Array.isArray(obj)) return obj.map(v => normalizeKeys(v, reverseMap))
  const out = {}
  for (const [k, v] of Object.entries(obj)) {
    const nk = reverseMap?.[k] || k
    out[nk] = normalizeKeys(v, reverseMap)
  }
  return out
}

function capitalizeFirstUnicode(s, locale = "es") {
  if (!s) return s
  const first = s[0].toLocaleUpperCase(locale)
  return first + s.slice(1)
}

async function generateOneFromFile(basename, pathOverride = null) {
  const relPath = pathOverride || fileToPath[basename]
  if (!relPath) return { basename, skipped: true, reason: "no-path" }
  const inFile = path.join(DATA_DIR, `${basename}.yaml`)
  const outFile = path.join(OUT_DIR, relPath)
  const slug = path.basename(relPath, ".md")

  const src = fs.readFileSync(inFile, "utf-8")
  let data = yamlLoad(src)
  if (!data || typeof data !== "object") {
    return { basename, slug, skipped: true, reason: "empty-data" }
  }

  // If there is an i18n file and metadata.language is set (or an env var), normalize keys.
  const i18n = loadI18nMaps(basename)
  const desiredLocale = (process.env.CATALOG_I18N_LOCALE || SITE_LANG || "en").trim()
  if (i18n && desiredLocale && i18n[desiredLocale]) {
    data = normalizeKeys(data, i18n[desiredLocale].reverse)
  }

  const title = catalogTitle[basename] || data?.metadata?.title || prettifyKey(slug)

  let md = ""
  md += `${MARKER}\n\n`
  md += `# ${title}\n\n`

  // Metadata table
  if (data.metadata) {
    md += renderMetadata(data.metadata)
    md += "\n"
  }

  // Render all other sections deterministically (alphabetical keys except metadata first)
  const keys = Object.keys(data).filter(k => k !== "metadata")
  keys.sort()
  
  // Detect multi-category catalogs: catalogs with more than one array section
  const arraySections = keys.filter(k => Array.isArray(data[k]))
  const isMultiCategory = arraySections.length > 1
  
  const forward = i18n && desiredLocale && i18n[desiredLocale] ? i18n[desiredLocale].forward : null
  const labelForKey = k => {
    const s = String(k)
    const raw = forward?.[s] || s
    const spaced = raw.replace(/[_-]/g, " ")
    return capitalizeFirstUnicode(spaced, desiredLocale || "es")
  }
  for (const k of keys) {
    md += renderSection(k, data[k], labelForKey, isMultiCategory)
  }

  // Ensure output directory (including nested folders)
  fs.mkdirSync(path.dirname(outFile), { recursive: true })

  if (fs.existsSync(outFile)) {
    const existing = fs.readFileSync(outFile, "utf-8")
    const canOverwrite =
      existing.includes("AUTO-GENERATED FILE - DO NOT EDIT") || looksLikeStub(existing) || existing.trim().length === 0
    if (!canOverwrite) {
      return { basename, slug, skipped: true, reason: "exists-manual" }
    }
  }

  fs.writeFileSync(outFile, md, "utf-8")
  return { basename, slug, skipped: false }
}

async function generateGrouped(groupKey, sources) {
  const slug = groupKey
  const outFile = path.join(OUT_DIR, `${slug}.md`)

  // Merge metadata from the first source; keep sections from all
  let merged = { metadata: {} }
  const i18nMaps = {}
  const desiredLocale = (process.env.CATALOG_I18N_LOCALE || SITE_LANG || "en").trim()

  for (const base of sources) {
    const srcPath = path.join(DATA_DIR, `${base}.yaml`)
    if (!fs.existsSync(srcPath)) return { basename: base, slug, skipped: true, reason: "missing-source" }
    const src = fs.readFileSync(srcPath, "utf-8")
    let data = yamlLoad(src)
    if (!data || typeof data !== "object") continue
    if (!merged.metadata || Object.keys(merged.metadata).length === 0) merged.metadata = data.metadata || {}
    const i18n = loadI18nMaps(base)
    i18nMaps[base] = i18n
    if (i18n && desiredLocale && i18n[desiredLocale]) {
      data = normalizeKeys(data, i18n[desiredLocale].reverse)
    }
    for (const [k, v] of Object.entries(data)) {
      if (k === "metadata") continue
      merged[k] = v
    }
  }

  const title = catalogTitle[slug] || merged?.metadata?.title || prettifyKey(slug)
  let md = ""
  md += `${MARKER}\n\n`
  md += `# ${title}\n\n`
  if (merged.metadata) {
    md += renderMetadata(merged.metadata)
    md += "\n"
  }
  // Build a combined forward map for labels, preferring the first source that defines a key
  const combinedForward = {}
  for (const base of sources) {
    const i18n = i18nMaps[base]
    const fwd = i18n && desiredLocale && i18n[desiredLocale] ? i18n[desiredLocale].forward : null
    if (!fwd) continue
    for (const [k, v] of Object.entries(fwd)) if (!(k in combinedForward)) combinedForward[k] = v
  }
  const labelForKey = k => {
    const s = String(k)
    const raw = combinedForward?.[s] || s
    const spaced = raw.replace(/[_-]/g, " ")
    return capitalizeFirstUnicode(spaced, desiredLocale || "es")
  }
  const keys = Object.keys(merged)
    .filter(k => k !== "metadata")
    .sort()
  for (const k of keys) {
    md += renderSection(k, merged[k], labelForKey)
  }

  fs.mkdirSync(OUT_DIR, { recursive: true })
  if (fs.existsSync(outFile)) {
    const existing = fs.readFileSync(outFile, "utf-8")
    const canOverwrite =
      existing.includes("AUTO-GENERATED FILE - DO NOT EDIT") || looksLikeStub(existing) || existing.trim().length === 0
    if (!canOverwrite) return { basename: slug, slug, skipped: true, reason: "exists-manual" }
  }
  fs.writeFileSync(outFile, md, "utf-8")
  return { basename: slug, slug, skipped: false }
}

async function main() {
  const entries = fs.readdirSync(DATA_DIR)
  const basenames = entries.filter(f => f.endsWith(".yaml")).map(f => path.basename(f, ".yaml"))

  const targets = basenames.filter(b => fileToPath[b])
  const results = []
  for (const b of targets) {
    try {
      results.push(await generateOneFromFile(b))
    } catch (e) {
      results.push({ basename: b, skipped: true, reason: "error", error: e?.message || String(e) })
    }
  }
  // Generate grouped pages
  for (const [groupKey, cfg] of Object.entries(groupedSources)) {
    try {
      results.push(await generateGrouped(cfg.slug, cfg.sources))
    } catch (e) {
      results.push({ basename: groupKey, skipped: true, reason: "error", error: e?.message || String(e) })
    }
  }

  const created = results.filter(r => !r.skipped)
  const skipped = results.filter(r => r.skipped)
  console.log(`Catalog generation complete. Created ${created.length}, skipped ${skipped.length}.`)
  if (skipped.length) {
    for (const s of skipped) {
      console.log(
        `- Skipped ${s.basename}${s.slug ? ` -> ${s.slug}` : ""}: ${s.reason}${s.error ? ` (${s.error})` : ""}`
      )
    }
  }
}

main().catch(err => {
  console.error("Generator failed:", err)
  process.exit(1)
})
