<!-- AUTO-GENERATED FILE - DO NOT EDIT. See scripts/generate-catalogs.mjs | Generated: 2026-02-10 -->

# Componentes de datos

### Metadatos

| Campo | Valor |
| --- | --- |
| Versión | 1.0.0 |
| Fecha | 2025-09-18 |
| Descripción | Componentes lógicos/físicos que realizan/gestionan entidades de datos en el Sistema de Información de Transporte Público. |
| Autores | Fabián Abarca Calderón, Jostin Cubero Torres |
| Organización | Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI) |
| Contacto | simovi@ucr.ac.cr |
| Licencia | CC BY-NC 4.0 |


<a id="component-001"></a>
## Relational Database Manager

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">component:001</code></span>

- Description: Transactional relational database (e.g., PostgreSQL) that materializes canonical GTFS entities.
- Data entities: data-entity:001, data-entity:002, data-entity:003, data-entity:004, data-entity:005, data-entity:006, data-entity:007, data-entity:008, data-entity:009, data-entity:010, data-entity:011, data-entity:012, data-entity:013, data-entity:014, data-entity:015, data-entity:016, data-entity:017, data-entity:018, data-entity:019, data-entity:020, data-entity:021, data-entity:022, data-entity:023, data-entity:024, data-entity:025, data-entity:026, data-entity:027, data-entity:028, data-entity:029, data-entity:030, data-entity:031, data-entity:032

<a id="component-002"></a>
## Databús API (GTFS Ingestion)

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">component:002</code></span>

- Description: Ingestion service that imports and validates GTFS files and writes them into the relational database.
- Data entities: data-entity:001, data-entity:002, data-entity:003, data-entity:004, data-entity:005, data-entity:006, data-entity:007, data-entity:008, data-entity:009, data-entity:010, data-entity:011, data-entity:012, data-entity:013, data-entity:014, data-entity:015, data-entity:016, data-entity:017, data-entity:018, data-entity:019, data-entity:020, data-entity:021, data-entity:022, data-entity:023, data-entity:024, data-entity:025, data-entity:026, data-entity:027, data-entity:028, data-entity:029, data-entity:030, data-entity:031, data-entity:032

<a id="component-003"></a>
## Infobús API (Public Query)

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">component:003</code></span>

- Description: HTTP read-only API that exposes routes, trips, stops, and schedules to the public.
- Data entities: data-entity:001, data-entity:002, data-entity:003, data-entity:004, data-entity:005, data-entity:006, data-entity:007, data-entity:021, data-entity:022, data-entity:023, data-entity:024, data-entity:025, data-entity:030, data-entity:031, data-entity:032

<a id="component-004"></a>
## Infobús Screens (Display Server)

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">component:004</code></span>

- Description: Back-end service that feeds information displays for stations and users; consumes Infobús API.
- Data entities: data-entity:002, data-entity:003, data-entity:004, data-entity:005, data-entity:021, data-entity:022, data-entity:023, data-entity:031

<a id="component-005"></a>
## Infobús Info Server (Aggregation/Cache)

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">component:005</code></span>

- Description: Internal aggregation and caching service for combined catalog and real-time data queries.
- Data entities: data-entity:001, data-entity:002, data-entity:003, data-entity:004, data-entity:005, data-entity:006, data-entity:007, data-entity:021, data-entity:022, data-entity:023, data-entity:024, data-entity:025, data-entity:026, data-entity:027, data-entity:028, data-entity:029, data-entity:030, data-entity:031, data-entity:032

<a id="component-006"></a>
## Infobús Data (Analytics/BI)

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">component:006</code></span>

- Description: Analytical platform that consolidates historical data for reporting and business intelligence models (BI/ETL).
- Data entities: data-entity:001, data-entity:002, data-entity:003, data-entity:004, data-entity:005, data-entity:006, data-entity:007, data-entity:008, data-entity:009, data-entity:010, data-entity:011, data-entity:012, data-entity:013, data-entity:014, data-entity:015, data-entity:016, data-entity:017, data-entity:018, data-entity:019, data-entity:020, data-entity:021, data-entity:022, data-entity:023, data-entity:024, data-entity:025, data-entity:026, data-entity:027, data-entity:028, data-entity:029, data-entity:030, data-entity:031, data-entity:032

<a id="component-007"></a>
## Vehicle Telemetry Service

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">component:007</code></span>

- Description: Service that collects, stores, and publishes real-time telemetry and positioning data from vehicles and on-board devices.
- Data entities: data-entity:033, data-entity:034

<a id="component-008"></a>
## Infrastructure Device Manager

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">component:008</code></span>

- Description: Platform that supervises and monitors fixed infrastructure devices such as cameras, sensors, or communication gateways.
- Data entities: data-entity:035, data-entity:036

<a id="component-009"></a>
## Display Content Service

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">component:009</code></span>

- Description: Back-end responsible for generating and distributing dynamic content for passenger information screens.
- Data entities: data-entity:036, data-entity:003, data-entity:004, data-entity:005, data-entity:031, data-entity:032

<a id="component-010"></a>
## Driver Management System

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">component:010</code></span>

- Description: System that stores driver records, licensing, assignments, and attendance within the operational environment.
- Data entities: data-entity:037, data-entity:033

<a id="component-011"></a>
## Dispatch and Control Center

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">component:011</code></span>

- Description: Central platform that coordinates driver assignments, vehicle dispatch, incident monitoring, and schedule control.
- Data entities: data-entity:037, data-entity:038, data-entity:033, data-entity:004, data-entity:005, data-entity:006, data-entity:007, data-entity:017, data-entity:018

<a id="component-012"></a>
## Operational Data Warehouse

<span class="catalog-badge" style="--catalog-badge-bg:var(--vp-c-default-soft)"><code style="background:none;padding:0;margin:0;border:0;">component:012</code></span>

- Description: Analytical layer that integrates telemetry, driver performance, and infrastructure metrics for operational insights and dashboards.
- Data entities: data-entity:033, data-entity:034, data-entity:035, data-entity:036, data-entity:037, data-entity:038
