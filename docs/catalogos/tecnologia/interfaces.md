<!-- AUTO-GENERATED FILE - DO NOT EDIT. See scripts/generate-catalogs.mjs | Generated: 2026-02-10 -->

# Interfaces

### Metadatos

| Campo | Valor |
| --- | --- |
| Versión | 0.1 |
| Fecha | 2025-11-13 |
| Descripción | Un catálogo de interfaces arquitectónicas para un Sistema de Información de Transporte Público. |
| Autores | Oriana Mora López, Fabián Abarca Calderón |
| Organización | Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI) |
| Contacto | simovi@ucr.ac.cr |
| Licencia | CC BY 4.0 |


<a id="interface-001"></a>
## Databús API

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:001</code></span>

- Description: Es una interfaz de programación de aplicaciones que facilita la gestión y distribución de datos en tiempo real entre dispositivos y aplicaciones. API RESTful para acceder a datos de transporte público en tiempo real y datos históricos del sistema Databús.
- Type: Application Programming Interface (API)
- Protocols: HTTPS, REST
- Data formats: JSON
- Security: API Keys, TLS
- Version: 1.0.0
- Owner: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contact: simovi@ucr.ac.cr
- Related components: Databús Backend, Databús Database
- Status: Active
- Documentation: https://docs.simovi.ucr.ac.cr/databus/api

<a id="interface-002"></a>
## Databús GraphQL

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:002</code></span>

- Description: Interfaz GraphQL es un lenguaje para consultas flexibles y eficientes de datos de transporte público del sistema Databús. El cliente recibe exactametne lo que pide, evitando sobrecarga de datos.
- Type: Query Interface
- Protocols: HTTPS
- Data formats: JSON
- Security: API Keys, JWT
- Version: 2021.0.0
- Owner: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contact: simovi@ucr.ac.cr
- Related components: Databús Backend, Databús Database
- Status: Active
- Documentation: https://docs.simovi.ucr.ac.cr/databus/graphql

<a id="interface-003"></a>
## Databús MQTT

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:003</code></span>

- Description: Interfaz de mensajería MQTT, diseñado para comunicaciones de máxima eficiencia en redes con bajo ancho de banda, alta latencia o entornos inestables para la transmisión de datos de transporte en tiempo real desde dispositivos IoT al sistema Databús.
- Type: Message Queue
- Protocols: TCP
- Data formats: JSON, Binary
- Security: TLS
- Version: 3.1.1
- Owner: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contact: simovi@ucr.ac.cr
- Related components: Databús IoT Gateway, Databús Backend
- Status: Active
- Documentation: https://docs.simovi.ucr.ac.cr/databus/mqtt

<a id="interface-004"></a>
## Infobús

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:004</code></span>

- Description: API RESTful para acceder a información de transporte público, rutas, horarios y servicios del sistema Infobús. Tambien llamado INTERBUS es un sistema de comunicación tipo fieldbus diseñado para transmitir datos entre controladores y módulos distribuidos de E/S (sensores, actuadores)
- Type: Application Programming Interface (API)
- Protocols: HTTP, TCP, WebSocket
- Data formats: JSON, XML
- Security: OAuth 2.0
- Version: 0.1.0
- Owner: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contact: simovi@ucr.ac.cr
- Related components: Infobús Backend, Infobús Database
- Status: Active
- Documentation: https://docs.simovi.ucr.ac.cr/infobus/api

<a id="interface-005"></a>
## Infobús SSE

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:005</code></span>

- Description: Interfaz de Server-Sent Events que se usa como canal estandarizado para que un servidor envíe datos al cliente en tiempo real mediante HTTP, para transmitir actualizaciones en tiempo real de transporte público a clientes web del sistema Infobús.
- Type: Event Stream
- Protocols: HTTPS
- Data formats: JSON, Text, XML
- Security: TLS
- Version: 0.1.0
- Owner: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contact: simovi@ucr.ac.cr
- Related components: Infobús Backend, Infobús Web Client
- Status: Active
- Documentation: https://docs.simovi.ucr.ac.cr/infobus/sse

<a id="interface-006"></a>
## Infobús WebSockets

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:006</code></span>

- Description: Interfaz WebSocket para comunicación bidireccional en tiempo real entre el sistema Infobús y aplicaciones cliente.
- Type: Event Stream
- Protocols: TCP, HTTPS
- Data formats: JSON, XML
- Security: TLS
- Version: 0.1.0
- Owner: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contact: simovi@ucr.ac.cr
- Related components: Infobús Backend, Infobús Mobile App, Infobús Web Client
- Status: Active
- Documentation: https://docs.simovi.ucr.ac.cr/infobus/websockets

<a id="interface-007"></a>
## Infobús SPARQL

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:007</code></span>

- Description: Interfaz SPARQL para consultas semánticas sobre datos enlazados de transporte público en el sistema Infobús.
- Type: Query Interface
- Protocols: HTTPS
- Data formats: JSON, XML
- Security: OAuth 2.0, TLS
- Version: 1.1.0
- Owner: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contact: simovi@ucr.ac.cr
- Related components: Infobús Knowledge Graph, Infobús RDF Store
- Status: Active
- Documentation: https://docs.simovi.ucr.ac.cr/infobus/sparql

<a id="interface-008"></a>
## Infobús MCP

<span class="catalog-badge" style="--catalog-badge-bg:#F0F5FF"><span class="catalog-icon material-symbols-outlined">hub</span><code style="background:none;padding:0;margin:0;border:0;">interface:008</code></span>

- Description: Interfaz de Protocolo de Contexto de Modelo (MCP) que permite a aplicaciones de IA acceder a datos y herramientas del sistema Infobús.
- Type: Remote Procedure Call (RPC)
- Protocols: HTTPS, WebSocket
- Data formats: JSON
- Security: TLS
- Version: 0.1.0
- Owner: Laboratorio de Sistemas de Movilidad Inteligente (SIMOVI)
- Contact: simovi@ucr.ac.cr
- Related components: Infobús MCP Server, AI Applications
- Status: Active
- Documentation: https://docs.simovi.ucr.ac.cr/infobus/mcp
