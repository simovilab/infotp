<!-- AUTO-GENERATED FILE - DO NOT EDIT. See scripts/generate-catalogs.mjs | Generated: 2026-02-10 -->

# Estándares

### Metadatos

| Campo | Valor |
| --- | --- |
| Versión | 1.0 |
| Fecha | 2025-09-18 |
| Descripción | Un catálogo de estándares tecnológicos para un Sistema de Información de Transporte Público. |
| Autores | Fabián Abarca Calderón, Oriana Mora López |
| Organización | Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI) |
| Contacto | simovi@ucr.ac.cr |
| Licencia | CC BY-NC 4.0 |


<a id="standard-001"></a>
## HTTP

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:001</code></span>

- Description: Protocolo fundamental para la comunicación web, utilizado para el intercambio de información entre clientes y servidores.
- Type: Protocol
- Version: 2.0
- Organization: IETF
- Website: https://datatracker.ietf.org/doc/html/rfc9110
- Usage: Usado para la comunicación entre clientes y servidores en el sistema.
- Related technologies: HTTPS, REST API
- Status: Active
- Documentation: https://developer.mozilla.org/en-US/docs/Web/HTTP

<a id="standard-002"></a>
## TCP

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:002</code></span>

- Description: Protocolo de comunicación fundamental que proporciona una conexión confiable y orientada a la conexión entre dispositivos en una red.
- Type: Protocol
- Version: 1.0
- Organization: IETF
- Website: https://datatracker.ietf.org/doc/html/rfc793
- Usage: Usado para la transmisión de datos entre dispositivos en la red del sistema.
- Related technologies: IP, TLS
- Status: Active
- Documentation: https://developer.mozilla.org/en-US/docs/Glossary/TCP

<a id="standard-007"></a>
## WebSocket

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:007</code></span>

- Description: Protocolo de comunicación que proporciona canales de comunicación full-duplex sobre una única conexión TCP.
- Type: Protocol
- Version: RFC 6455
- Organization: IETF
- Website: https://datatracker.ietf.org/doc/html/rfc6455
- Usage: Usado para comunicación en tiempo real entre clientes y servidores en el sistema.
- Security: TLS
- Related technologies: HTTP, HTTPS
- Status: Active
- Documentation: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API

<a id="standard-012"></a>
## SSE

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:012</code></span>

- Description: Tecnología web que permite al servidor enviar datos automáticamente al navegador de forma continua a través de una conexión HTTP abierta.
- Type: Protocol
- Version: 1.0
- Organization: WHATWG
- Website: https://html.spec.whatwg.org/multipage/server-sent-events.html
- Usage: Usado para enviar actualizaciones en tiempo real desde el servidor al cliente en el sistema.
- Related technologies: HTTP, JavaScript
- Status: Active
- Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events

<a id="standard-013"></a>
## MQTT

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:013</code></span>

- Description: Protocolo de mensajería ligero diseñado para conexiones remotas con dispositivos con recursos limitados y redes de ancho de banda limitado.
- Type: Protocol
- Version: 3.1.1
- Organization: OASIS
- Website: https://mqtt.org/
- Usage: Usado para la comunicación eficiente entre dispositivos IoT en el sistema.
- Related technologies: TCP, TLS
- Status: Active
- Documentation: https://mqtt.org/documentation

<a id="standard-003"></a>
## REST

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:003</code></span>

- Description: Estilo arquitectónico para diseñar servicios web que utilizan HTTP para la comunicación entre sistemas distribuidos.
- Type: API Specification
- Version: 1.0
- Organization: Roy Fielding
- Website: https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm
- Usage: Usado para diseñar y desarrollar APIs web en el sistema.
- Related technologies: HTTP
- Data formats: JSON
- Security: TLS
- Status: Active
- Documentation: https://restfulapi.net/

<a id="standard-004"></a>
## OpenAPI

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:004</code></span>

- Description: Un estándar para definir APIs RESTful.
- Type: API Specification
- Version: 3.0.3
- Organization: OpenAPI Initiative
- Website: https://www.openapis.org/
- Usage: Usado para diseñar y documentar APIs RESTful en el sistema.
- Related technologies: Swagger, Postman
- Status: Active
- Documentation: https://swagger.io/specification/

<a id="standard-005"></a>
## GraphQL

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:005</code></span>

- Description: Lenguaje de consulta para APIs que permite a los clientes solicitar exactamente los datos que necesitan, habilitando una evolución flexible del esquema y una recuperación eficiente de datos.
- Type: API Specification
- Version: June 2018
- Organization: GraphQL Foundation
- Website: https://graphql.org/
- Usage: Usado para definir y consultar APIs con esquemas flexibles que permiten a los clientes solicitar solo los datos necesarios.
- Data formats: JSON
- Security: JWT, TLS
- Related technologies: HTTP, HTTPS
- Status: Active
- Documentation: https://spec.graphql.org/

<a id="standard-010"></a>
## gRPC

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:010</code></span>

- Description: Un framework de llamada a procedimiento remoto (RPC) de alto rendimiento que utiliza HTTP/2 para la comunicación entre servicios.
- Type: API Specification
- Version: 1.0
- Organization: Google
- Website: https://grpc.io/
- Usage: Usado para la comunicación eficiente entre microservicios en el sistema.
- Data formats: Protocol Buffers (protobuf)
- Related technologies: HTTP/2
- Status: Active
- Documentation: https://grpc.io/docs/

<a id="standard-008"></a>
## TLS

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:008</code></span>

- Description: Protocolo criptográfico que proporciona comunicaciones seguras sobre una red informática.
- Type: Security Standard
- Version: 1.3
- Organization: IETF
- Website: https://datatracker.ietf.org/doc/html/rfc8446
- Usage: Usado para asegurar las comunicaciones entre clientes y servidores en el sistema.
- Related technologies: HTTPS, TCP
- Status: Active
- Documentation: https://tools.ietf.org/html/rfc8446

<a id="standard-009"></a>
## SSL

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:009</code></span>

- Description: Protocolo criptográfico diseñado para proporcionar comunicaciones seguras a través de una red informática.
- Type: Security Standard
- Version: 3.0
- Organization: Netscape
- Website: https://datatracker.ietf.org/doc/html/rfc6101
- Usage: Usado para asegurar las comunicaciones entre clientes y servidores en el sistema.
- Related technologies: TLS, HTTPS
- Status: Active
- Documentation: https://tools.ietf.org/html/rfc6101

<a id="standard-010"></a>
## JWT

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:010</code></span>

- Description: Un estándar abierto para la transmisión segura de información entre partes como un objeto JSON.
- Type: Security Standard
- Version: RFC 7519
- Organization: IETF
- Website: https://datatracker.ietf.org/doc/html/rfc7519
- Usage: Usado para la autenticación y autorización de usuarios en el sistema.
- Related technologies: OAuth, OpenID Connect
- Status: Active
- Documentation: https://tools.ietf.org/html/rfc7519

<a id="standard-006"></a>
## OAuth

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:006</code></span>

- Description: Un marco de autorización que permite a las aplicaciones obtener acceso limitado a cuentas de usuario.
- Type: Security Standard
- Version: RFC 6749
- Organization: IETF
- Website: https://oauth.net/2/
- Usage: Usado para asegurar el acceso a APIs y la autenticación de usuarios.
- Related technologies: OpenID Connect, JWT
- Status: Active
- Documentation: https://tools.ietf.org/html/rfc6749

<a id="standard-010"></a>
## JSON

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:010</code></span>

- Description: Formato de datos ligero y fácil de leer y escribir, utilizado para el intercambio de datos entre sistemas.
- Type: Data Format
- Version: ECMA-404
- Organization: ECMA International
- Website: https://www.ecma-international.org/publications-and-standards/publications/ecma-404/
- Usage: Usado para el intercambio de datos entre componentes del sistema.
- Related technologies: REST API, GraphQL
- Status: Active
- Documentation: https://www.json.org/json-en.html

<a id="standard-011"></a>
## Protocol Buffers (protobuf)

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:011</code></span>

- Description: Un formato de serialización de datos estructurados, utilizado para la comunicación entre servicios.
- Type: Data Format
- Version: proto3
- Organization: Google
- Website: https://developers.google.com/protocol-buffers
- Usage: Usado para la serialización eficiente de datos en la comunicación entre servicios.
- Data formats: Binary
- Related technologies: gRPC
- Status: Active
- Documentation: https://developers.google.com/protocol-buffers/docs/overview
