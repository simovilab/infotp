import { defineConfig } from "vitepress"
import UnoCSS from "@unocss/vite"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "infotp",
  description: "Sistemas de información para el transporte público inteligente",
  lang: "es",
  cleanUrls: true,
  base: "/",

  markdown: {
    theme: {
      light: "min-light",
      dark: "min-dark",
    },
  },

  vite: {
    plugins: [UnoCSS() as any],
    optimizeDeps: {
      include: ["mermaid"],
    },
  },

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0,0",
      },
    ],
    ['link', { rel: 'icon', href: '/i.png' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: "/i.png",
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Introducción", link: "/introduccion/" },
      { text: "Diseño", link: "/diseno/" },
      { text: "Desarrollo", link: "/desarrollo/" },
      { text: "Gestión", link: "/gestion/" },
      { text: "Plan piloto", link: "/piloto/" },
      { text: "Catálogos", link: "/catalogos/" },
    ],

    sidebar: [
      {
        text: "Introducción",
        collapsed: true,
        items: [
          { text: "Resumen ejecutivo", link: "/introduccion/" },
          { text: "Visión del sistema", link: "/introduccion/vision" },
          { text: "Especificación GTFS", link: "/introduccion/gtfs" },
          { text: "Modelo del servicio", link: "/introduccion/modelo" },
        ],
      },
      {
        text: "Diseño",
        collapsed: true,
        items: [
          { text: "Introducción al diseño", link: "/diseno/" },
          { text: "Principios", link: "/diseno/principios" },
          {
            text: "Comunicación",
            collapsed: true,
            items: [
              { text: "Introducción", link: "/diseno/comunicacion/" },
              {
                text: "Canales",
                collapsed: true,
                items: [
                  {
                    text: "Introducción",
                    link: "/diseno/comunicacion/canales/",
                  },
                  {
                    text: "Medios digitales",
                    link: "/diseno/comunicacion/canales/medios-digitales",
                  },
                  {
                    text: "Señalética",
                    link: "/diseno/comunicacion/canales/senaletica",
                  },
                  {
                    text: "Material impreso",
                    link: "/diseno/comunicacion/canales/material-impreso",
                  },
                  {
                    text: "Redes sociales",
                    link: "/diseno/comunicacion/canales/redes-sociales",
                  },
                  {
                    text: "Atención al cliente",
                    link: "/diseno/comunicacion/canales/atencion-cliente",
                  },
                ],
              },
              {
                text: "Identidad visual",
                collapsed: true,
                items: [
                  { text: "Introducción", link: "/diseno/comunicacion/identidad-visual/" },
                  { text: "Elementos", link: "/diseno/comunicacion/identidad-visual/elementos" },
                ],
              },
            ],
          },
          {
            text: "Arquitectura tecnológica",
            collapsed: true,
            items: [
              { text: "Introducción", link: "/diseno/arquitectura/" },
              { text: "A1: Recolección", link: "/diseno/arquitectura/a1" },
              { text: "A2: Distribución", link: "/diseno/arquitectura/a2" },
              { text: "A3: Administración", link: "/diseno/arquitectura/a3" },
              { text: "A4: Operaciones", link: "/diseno/arquitectura/a4" },
            ],
          },
        ],
      },
      {
        text: "Desarrollo",
        collapsed: true,
        items: [
          { text: "Introducción al desarrollo", link: "/desarrollo/" },
          {
            text: "Databús",
            collapsed: true,
            items: [
              { text: "Componentes", link: "/desarrollo/databus/" },
              { text: "Diagrama", link: "/desarrollo/databus/diagrama" },
            ],
          },
          {
            text: "Infobús",
            collapsed: true,
            items: [
              { text: "Componentes", link: "/desarrollo/infobus/" },
              { text: "Diagrama", link: "/desarrollo/infobus/diagrama" },
            ],
          },
          {
            text: "Administración",
            collapsed: true,
            items: [
              { text: "Componentes", link: "/desarrollo/administracion/" },
              { text: "Diagrama", link: "/desarrollo/administracion/diagrama" },
            ],
          },
          {
            text: "Operaciones",
            collapsed: true,
            items: [
              { text: "Componentes", link: "/desarrollo/operaciones/" },
              { text: "Diagrama", link: "/desarrollo/operaciones/diagrama" },
            ],
          },
          { text: "Herramientas", link: "/desarrollo/herramientas" },
          { text: "Implementación", link: "/desarrollo/implementacion" },
        ],
      },
      {
        text: "Gestión",
        collapsed: true,
        items: [
          { text: "Introducción a la gestión", link: "/gestion/" },
          { text: "Gobernanza", link: "/gestion/gobernanza" },
          { text: "Unidad técnica", link: "/gestion/unidad-tecnica" },
          { text: "Monetización", link: "/gestion/monetizacion" },
        ],
      },
      {
        text: "Plan piloto",
        collapsed: true,
        items: [
          { text: "Introducción al plan piloto", link: "/piloto/" },
          { text: "Propuesta técnica", link: "/piloto/propuesta-tecnica" },
          { text: "Propuesta financiera", link: "/piloto/propuesta-financiera" },
        ],
      },
      {
        text: "Catálogos",
        collapsed: true,
        items: [
          { text: "Introducción a los catálogos", link: "/catalogos/" },
          {
            text: "Fundamentos",
            collapsed: true,
            items: [
              { text: "Introducción", link: "/catalogos/fundamentos/" },
              { text: "Principios", link: "/catalogos/fundamentos/principios" },
              { text: "Aplicaciones", link: "/catalogos/fundamentos/aplicaciones" },
              { text: "Requisitos", link: "/catalogos/fundamentos/requisitos" },
            ],
          },
          {
            text: "Servicio",
            collapsed: true,
            items: [
              { text: "Introducción", link: "/catalogos/servicio/" },
              { text: "Espacios físicos y entornos", link: "/catalogos/servicio/espacios" },
              { text: "Tiempos", link: "/catalogos/servicio/tiempos" },
              { text: "Contextos de uso", link: "/catalogos/servicio/contextos" },
            ],
          },
          {
            text: "Institucional",
            collapsed: true,
            items: [
              { text: "Introducción", link: "/catalogos/institucional/" },
              { text: "Partes interesadas", link: "/catalogos/institucional/partes-interesadas" },
              { text: "Actores", link: "/catalogos/institucional/actores" },
              { text: "Organizaciones", link: "/catalogos/institucional/organizaciones" },
            ],
          },
          {
            text: "Datos",
            collapsed: true,
            items: [
              { text: "Introducción", link: "/catalogos/datos/" },
              { text: "Entidades", link: "/catalogos/datos/entidades" },
              { text: "Componentes", link: "/catalogos/datos/componentes" },
              { text: "GTFS", link: "/catalogos/datos/gtfs" },
            ],
          },
          {
            text: "Arquitectura",
            collapsed: true,
            items: [
              { text: "Introducción", link: "/catalogos/arquitectura/" },
              { text: "Componentes", link: "/catalogos/arquitectura/componentes" },
              { text: "Patrones", link: "/catalogos/arquitectura/patrones" },
            ],
          },
          {
            text: "Tecnología",
            collapsed: true,
            items: [
              { text: "Introducción", link: "/catalogos/tecnologia/" },
              { text: "Tecnologías", link: "/catalogos/tecnologia/tecnologias" },
              { text: "Estándares", link: "/catalogos/tecnologia/estandares" },
              { text: "Interfaces", link: "/catalogos/tecnologia/interfaces" },
            ],
          },
          {
            text: "Comunicación",
            collapsed: true,
            items: [
              { text: "Introducción", link: "/catalogos/comunicacion/" },
              { text: "Marca", link: "/catalogos/comunicacion/marca" },
              { text: "Elementos gráficos", link: "/catalogos/comunicacion/elementos-graficos" },
              { text: "Señalización", link: "/catalogos/comunicacion/senalizacion" },
              { text: "Interfaces del usuario", link: "/catalogos/comunicacion/interfaces-usuario" },
            ],
          },
        ],
      },
      { text: "Cómo contribuir", link: "/contribuir" },
      { text: "Créditos", link: "/creditos" },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/simovilab/sistema-informacion",
      },
    ],

    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "Buscar",
                buttonAriaLabel: "Buscar",
              },
              modal: {
                displayDetails: "Mostrar lista detallada",
                resetButtonTitle: "Restablecer búsqueda",
                backButtonTitle: "Cerrar búsqueda",
                noResultsText: "Sin resultados",
                footer: {
                  selectText: "Seleccionar",
                  selectKeyAriaLabel: "Intro",
                  navigateText: "Navegar",
                  navigateUpKeyAriaLabel: "Flecha arriba",
                  navigateDownKeyAriaLabel: "Flecha abajo",
                  closeText: "Cerrar",
                  closeKeyAriaLabel: "Esc",
                },
              },
            },
          },
        },
      },
    },

    footer: {
      message: "Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI)",
      copyright: "Derechos reservados © 2025 Universidad de Costa&nbsp;Rica",
    },

    outlineTitle: "En esta página",
    lastUpdatedText: "Última actualización",
    darkModeSwitchLabel: "Apariencia",
    lightModeSwitchTitle: "Cambiar a modo claro",
    darkModeSwitchTitle: "Cambiar a modo oscuro",
    returnToTopLabel: "Volver arriba",
    docFooter: {
      prev: "Página anterior",
      next: "Página siguiente",
    },
  },
})
