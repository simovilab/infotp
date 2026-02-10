<!-- AUTO-GENERATED FILE - DO NOT EDIT. See scripts/generate-catalogs.mjs | Generated: 2026-02-10 -->

# Entidades de datos

### Metadatos

| Campo | Valor |
| --- | --- |
| Versión | 1.0.0 |
| Fecha | 2025-09-18 |
| Descripción | Entidades canónicas del Sistema de Información de Transporte Público (alineadas a GTFS y extensiones operativas). |
| Autores | Fabián Abarca Calderón, Jostin Cubero Torres |
| Organización | Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI) |
| Contacto | simovi@ucr.ac.cr |
| Licencia | CC BY-NC 4.0 |


<a id="data-entity-001"></a>
## Vehículo

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:001</code></span>

- Presence: Operational
- Description: Representa un vehículo de transporte (p. ej., autobús, tren) que opera servicios programados o no programados.

**Attributes:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `vehicle_id` | String | Identificador único del vehículo. |
| `vehicle_label` | String | Etiqueta pública o número de flota del vehículo. |
| `license_plate` | String | Placa de matrícula del vehículo. |
| `agency_id` | String | Agencia de transporte que posee u opera el vehículo. |
| `capacity` | Integer | Capacidad de pasajeros del vehículo. |


<a id="data-entity-002"></a>
## Dispositivo a bordo

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:002</code></span>

- Presence: Operational
- Description: Equipo electrónico instalado en los vehículos para adquisición de datos, posicionamiento o comunicación (p. ej., GPS, validador, APC).

**Attributes:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `device_id` | String | Identificador único del dispositivo a bordo. |
| `vehicle_id` | String | Identifica el vehículo donde está instalado el dispositivo. |
| `device_type` | String | Tipo de dispositivo (GPS, validador, cámara, etc.). |
| `firmware_version` | String | Versión actual del firmware o software. |
| `status` | String | Estado operativo del dispositivo (activo, fuera de línea, mantenimiento). |


<a id="data-entity-003"></a>
## Dispositivo de infraestructura

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:003</code></span>

- Presence: Operational
- Description: Equipamiento fijo instalado en estaciones o puntos de infraestructura para captura de datos o información al pasajero (p. ej., sensores, gateways, CCTV).

**Attributes:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `infra_device_id` | String | Identificador único del dispositivo de infraestructura. |
| `location_id` | String | Ubicación o parada donde está instalado el dispositivo. |
| `device_type` | String | Tipo de dispositivo (cámara, gateway, sensor, etc.). |
| `status` | String | Estado operativo (activo, fuera de línea, en mantenimiento). |


<a id="data-entity-004"></a>
## Pantalla

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:004</code></span>

- Presence: Operational
- Description: Pantalla de información pública instalada en vehículos o estaciones para presentar información de transporte en tiempo real.

**Attributes:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `screen_id` | String | Identificador único del dispositivo de pantalla. |
| `location_id` | String | Parada o estación asociada donde se ubica la pantalla. |
| `screen_type` | String | Tipo de pantalla (LED, LCD, e‑ink, etc.). |
| `content_source` | String | API o servidor que proporciona contenido a la pantalla. |
| `status` | String | Estado operativo (activo, fuera de línea, mantenimiento). |


<a id="data-entity-005"></a>
## Conductor

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:005</code></span>

- Presence: Operational
- Description: Operador humano de un vehículo, responsable de la ejecución segura y puntual del servicio.

**Attributes:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `driver_id` | String | Identificador único del conductor. |
| `driver_name` | String | Nombre completo del conductor. |
| `license_number` | String | Número de licencia profesional del conductor. |
| `agency_id` | String | Agencia que emplea al conductor. |
| `status` | String | Estado laboral o de asignación (en servicio, fuera de servicio, suspendido). |


<a id="data-entity-006"></a>
## Despachador

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">data-entity:006</code></span>

- Presence: Operational
- Description: Personal o software responsable de asignar, monitorear y controlar vehículos y conductores en operación.

**Attributes:**

| Nombre | Tipo | Descripción |
| --- | --- | --- |
| `dispatcher_id` | String | Identificador único del despachador. |
| `dispatcher_name` | String | Nombre completo del despachador (o nombre del sistema si es automatizado). |
| `agency_id` | String | Agencia o empresa operadora responsable del despachador. |
| `workstation` | String | Identificador o descripción del puesto de control. |
| `status` | String | Estado operativo (activo, fuera de línea, en espera). |

