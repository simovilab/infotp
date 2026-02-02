<!-- AUTO-GENERATED FILE - DO NOT EDIT. See scripts/generate-catalogs.mjs -->

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

- Descripción: Protocolo fundamental para la comunicación web, utilizado para el intercambio de información entre clientes y servidores.
- Type: Protocol
- Versión: 2.0
- Organización: IETF
- Sitio web: https://datatracker.ietf.org/doc/html/rfc9110
- Uso: Usado para la comunicación entre clientes y servidores en el sistema.
- Tecnologías relacionadas: HTTPS, REST API
- Estado: Active
- Documentación: https://developer.mozilla.org/en-US/docs/Web/HTTP

<a id="standard-002"></a>
## TCP

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:002</code></span>

- Descripción: Protocolo de comunicación fundamental que proporciona una conexión confiable y orientada a la conexión entre dispositivos en una red.
- Type: Protocol
- Versión: 1.0
- Organización: IETF
- Sitio web: https://datatracker.ietf.org/doc/html/rfc793
- Uso: Usado para la transmisión de datos entre dispositivos en la red del sistema.
- Tecnologías relacionadas: IP, TLS
- Estado: Active
- Documentación: https://developer.mozilla.org/en-US/docs/Glossary/TCP

<a id="standard-007"></a>
## WebSocket

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:007</code></span>

- Descripción: Protocolo de comunicación que proporciona canales de comunicación full-duplex sobre una única conexión TCP.
- Type: Protocol
- Versión: RFC 6455
- Organización: IETF
- Sitio web: https://datatracker.ietf.org/doc/html/rfc6455
- Uso: Usado para comunicación en tiempo real entre clientes y servidores en el sistema.
- Security: TLS
- Tecnologías relacionadas: HTTP, HTTPS
- Estado: Active
- Documentación: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API

<a id="standard-012"></a>
## SSE

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:012</code></span>

- Descripción: Tecnología web que permite al servidor enviar datos automáticamente al navegador de forma continua a través de una conexión HTTP abierta.
- Type: Protocol
- Versión: 1.0
- Organización: WHATWG
- Sitio web: https://html.spec.whatwg.org/multipage/server-sent-events.html
- Uso: Usado para enviar actualizaciones en tiempo real desde el servidor al cliente en el sistema.
- Tecnologías relacionadas: HTTP, JavaScript
- Estado: Active
- Documentación: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events

<a id="standard-013"></a>
## MQTT

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:013</code></span>

- Descripción: Protocolo de mensajería ligero diseñado para conexiones remotas con dispositivos con recursos limitados y redes de ancho de banda limitado.
- Type: Protocol
- Versión: 3.1.1
- Organización: OASIS
- Sitio web: https://mqtt.org/
- Uso: Usado para la comunicación eficiente entre dispositivos IoT en el sistema.
- Tecnologías relacionadas: TCP, TLS
- Estado: Active
- Documentación: https://mqtt.org/documentation

<a id="standard-003"></a>
## REST

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:003</code></span>

- Descripción: Estilo arquitectónico para diseñar servicios web que utilizan HTTP para la comunicación entre sistemas distribuidos.
- Type: API Specification
- Versión: 1.0
- Organización: Roy Fielding
- Sitio web: https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm
- Uso: Usado para diseñar y desarrollar APIs web en el sistema.
- Tecnologías relacionadas: HTTP
- Data formats: JSON
- Security: TLS
- Estado: Active
- Documentación: https://restfulapi.net/

<a id="standard-004"></a>
## OpenAPI

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:004</code></span>

- Descripción: Un estándar para definir APIs RESTful.
- Type: API Specification
- Versión: 3.0.3
- Organización: OpenAPI Initiative
- Sitio web: https://www.openapis.org/
- Uso: Usado para diseñar y documentar APIs RESTful en el sistema.
- Tecnologías relacionadas: Swagger, Postman
- Estado: Active
- Documentación: https://swagger.io/specification/

<a id="standard-005"></a>
## GraphQL

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:005</code></span>

- Descripción: Lenguaje de consulta para APIs que permite a los clientes solicitar exactamente los datos que necesitan, habilitando una evolución flexible del esquema y una recuperación eficiente de datos.
- Type: API Specification
- Versión: June 2018
- Organización: GraphQL Foundation
- Sitio web: https://graphql.org/
- Uso: Usado para definir y consultar APIs con esquemas flexibles que permiten a los clientes solicitar solo los datos necesarios.
- Data formats: JSON
- Security: JWT, TLS
- Tecnologías relacionadas: HTTP, HTTPS
- Estado: Active
- Documentación: https://spec.graphql.org/

<a id="standard-010"></a>
## gRPC

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:010</code></span>

- Descripción: Un framework de llamada a procedimiento remoto (RPC) de alto rendimiento que utiliza HTTP/2 para la comunicación entre servicios.
- Type: API Specification
- Versión: 1.0
- Organización: Google
- Sitio web: https://grpc.io/
- Uso: Usado para la comunicación eficiente entre microservicios en el sistema.
- Data formats: Protocol Buffers (protobuf)
- Tecnologías relacionadas: HTTP/2
- Estado: Active
- Documentación: https://grpc.io/docs/

<a id="standard-008"></a>
## TLS

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:008</code></span>

- Descripción: Protocolo criptográfico que proporciona comunicaciones seguras sobre una red informática.
- Type: Security Standard
- Versión: 1.3
- Organización: IETF
- Sitio web: https://datatracker.ietf.org/doc/html/rfc8446
- Uso: Usado para asegurar las comunicaciones entre clientes y servidores en el sistema.
- Tecnologías relacionadas: HTTPS, TCP
- Estado: Active
- Documentación: https://tools.ietf.org/html/rfc8446

<a id="standard-009"></a>
## SSL

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:009</code></span>

- Descripción: Protocolo criptográfico diseñado para proporcionar comunicaciones seguras a través de una red informática.
- Type: Security Standard
- Versión: 3.0
- Organización: Netscape
- Sitio web: https://datatracker.ietf.org/doc/html/rfc6101
- Uso: Usado para asegurar las comunicaciones entre clientes y servidores en el sistema.
- Tecnologías relacionadas: TLS, HTTPS
- Estado: Active
- Documentación: https://tools.ietf.org/html/rfc6101

<a id="standard-010"></a>
## JWT

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:010</code></span>

- Descripción: Un estándar abierto para la transmisión segura de información entre partes como un objeto JSON.
- Type: Security Standard
- Versión: RFC 7519
- Organización: IETF
- Sitio web: https://datatracker.ietf.org/doc/html/rfc7519
- Uso: Usado para la autenticación y autorización de usuarios en el sistema.
- Tecnologías relacionadas: OAuth, OpenID Connect
- Estado: Active
- Documentación: https://tools.ietf.org/html/rfc7519

<a id="standard-006"></a>
## OAuth

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:006</code></span>

- Descripción: Un marco de autorización que permite a las aplicaciones obtener acceso limitado a cuentas de usuario.
- Type: Security Standard
- Versión: RFC 6749
- Organización: IETF
- Sitio web: https://oauth.net/2/
- Uso: Usado para asegurar el acceso a APIs y la autenticación de usuarios.
- Tecnologías relacionadas: OpenID Connect, JWT
- Estado: Active
- Documentación: https://tools.ietf.org/html/rfc6749

<a id="standard-010"></a>
## JSON

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:010</code></span>

- Descripción: Formato de datos ligero y fácil de leer y escribir, utilizado para el intercambio de datos entre sistemas.
- Type: Data Format
- Versión: ECMA-404
- Organización: ECMA International
- Sitio web: https://www.ecma-international.org/publications-and-standards/publications/ecma-404/
- Uso: Usado para el intercambio de datos entre componentes del sistema.
- Tecnologías relacionadas: REST API, GraphQL
- Estado: Active
- Documentación: https://www.json.org/json-en.html

<a id="standard-011"></a>
## Protocol Buffers (protobuf)

<span class="catalog-badge" style="--catalog-badge-bg:#FFFBE6"><span class="catalog-icon material-symbols-outlined">flag</span><code style="background:none;padding:0;margin:0;border:0;">standard:011</code></span>

- Descripción: Un formato de serialización de datos estructurados, utilizado para la comunicación entre servicios.
- Type: Data Format
- Versión: proto3
- Organización: Google
- Sitio web: https://developers.google.com/protocol-buffers
- Uso: Usado para la serialización eficiente de datos en la comunicación entre servicios.
- Data formats: Binary
- Tecnologías relacionadas: gRPC
- Estado: Active
- Documentación: https://developers.google.com/protocol-buffers/docs/overview
