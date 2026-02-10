<!-- AUTO-GENERATED FILE - DO NOT EDIT. See scripts/generate-catalogs.mjs | Generated: 2026-02-10 -->

# Señalización

### Metadatos

| Campo | Valor |
| --- | --- |
| Versión | 0.1 |
| Fecha | 2025-11-12 |
| Descripción | Catalog of physical signage elements for the public transportation system. |
| Autores | Fabián Abarca Calderón, Ian Gama Oashi |
| Organización | Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI) |
| Contacto | simovi@ucr.ac.cr |
| Licencia | CC BY-NC 4.0 |


<a id="sign-001"></a>
## Route Information

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">sign:001</code></span>

- Type: static
- Category: operational
- Description: Standard signage for bus stops indicating route information and stop name.
- Spaces: space:stop, space:station
- Typography: font:inter
- Color scheme: scheme:blue
- Mounting:

```json
{
  "type": "freestanding",
  "form": "single-posted",
  "surface": "ground",
  "zone": "eye-level"
}
```

- Lighting: none
- Content:

```json
{
  "text": "Parada",
  "gtfs": [
    "gtfs:route_short_name",
    "gtfs:stop_name"
  ],
  "icons": [
    "icon:bus"
  ],
  "logos": [
    "logo:system"
  ]
}
```

- Images:

```json
{
  "layout": "layout:001",
  "mockup": "https://images.com/mockup_sign_route_info.png"
}
```

- Materials: Aluminum with reflective vinyl
