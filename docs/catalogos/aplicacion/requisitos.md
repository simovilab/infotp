<!-- AUTO-GENERATED FILE - DO NOT EDIT. See scripts/generate-catalogs.mjs -->

# Requisitos

### Metadatos

| Campo | Valor |
| --- | --- |
| Versión | 1.0 |
| Fecha | 2025-09-18 |
| Descripción | A catalog of architectural requirements for a Public Transportation Information System. |
| Autores | César Alvarado Castro, Fabián Abarca Calderón |
| Organización | Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI) |
| Contacto | simovi@ucr.ac.cr |
| Licencia | CC BY-NC 4.0 |


<a id="requirement-001"></a>
## Procesamiento en tiempo real

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:001</code></span>

- Descripción: El sistema deberá procesar datos de rastreo y telemetría con una latencia menor a 1 segundo.
- Tipo: Performance
- Prioridad: Critical
- Justificación: Garantiza actualizaciones precisas y oportunas en el ecosistema de transporte público.
- Applications: application:servidor-tiempo-real
- Partes interesadas: stakeholder:001, stakeholder:002, stakeholder:006
- Actores relacionados: actor:013, actor:002
- Entidades de datos relacionadas: data-entity:001, data-entity:002
- Componentes relacionados: component:007
- Interfaces relacionadas: interface:003

<a id="requirement-002"></a>
## Escalabilidad horizontal

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:002</code></span>

- Descripción: El sistema deberá distribuir la carga entre múltiples instancias para soportar aumentos de demanda.
- Tipo: Technical
- Prioridad: High
- Justificación: Permite la continuidad del servicio durante picos de uso y expansión del sistema.
- Applications: application:servidor-tiempo-real
- Partes interesadas: stakeholder:006, stakeholder:007
- Actores relacionados: actor:013, actor:025
- Entidades de datos relacionadas: data-entity:001, data-entity:002
- Componentes relacionados: component:007, component:005
- Interfaces relacionadas: interface:001, interface:003

<a id="requirement-003"></a>
## Tolerancia a fallos

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:003</code></span>

- Descripción: El sistema deberá mantener redundancia automática y recuperación ante interrupciones.
- Tipo: Reliability
- Prioridad: High
- Justificación: Minimiza el tiempo de inactividad y mejora la resiliencia del sistema.
- Applications: application:servidor-tiempo-real
- Partes interesadas: stakeholder:002, stakeholder:006
- Actores relacionados: actor:013, actor:003
- Entidades de datos relacionadas: data-entity:001, data-entity:002
- Componentes relacionados: component:007
- Interfaces relacionadas: interface:003

<a id="requirement-004"></a>
## Validación de datos

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:004</code></span>

- Descripción: El sistema deberá verificar la integridad y consistencia de los datos entrantes de telemetría.
- Tipo: Functional
- Prioridad: High
- Justificación: Asegura que los datos procesados y distribuidos sean confiables y consistentes.
- Applications: application:servidor-tiempo-real
- Partes interesadas: stakeholder:002, stakeholder:003, stakeholder:006
- Actores relacionados: actor:005, actor:014
- Entidades de datos relacionadas: data-entity:001, data-entity:002, data-entity:005
- Componentes relacionados: component:007
- Interfaces relacionadas: interface:003

<a id="requirement-005"></a>
## Transformación de protocolos

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:005</code></span>

- Descripción: El sistema deberá convertir datos entre formatos de telemetría propietarios y estándares GTFS.
- Tipo: Technical
- Prioridad: Medium
- Justificación: Garantiza interoperabilidad entre diferentes sistemas de transporte y proveedores.
- Applications: application:servidor-tiempo-real
- Partes interesadas: stakeholder:002, stakeholder:007
- Actores relacionados: actor:009, actor:010
- Entidades de datos relacionadas: data-entity:001, data-entity:002
- Componentes relacionados: component:007
- Interfaces relacionadas: interface:003

<a id="requirement-006"></a>
## Monitoreo y alertas

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:006</code></span>

- Descripción: El sistema deberá incluir métricas y notificaciones automáticas sobre el rendimiento y estado operativo.
- Tipo: Operational
- Prioridad: High
- Justificación: Permite la detección temprana de fallos y mejora la capacidad de respuesta.
- Applications: application:servidor-tiempo-real
- Partes interesadas: stakeholder:006, stakeholder:007
- Actores relacionados: actor:013, actor:025
- Entidades de datos relacionadas: data-entity:001, data-entity:002
- Componentes relacionados: component:007, component:012
- Interfaces relacionadas: interface:001

<a id="requirement-007"></a>
## API de integración

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:007</code></span>

- Descripción: El sistema deberá ofrecer conectores de integración con sistemas CAD/AVL y plataformas de terceros.
- Tipo: Functional
- Prioridad: Medium
- Justificación: Facilita la interoperabilidad y la reutilización de datos entre diferentes plataformas.
- Applications: application:servidor-tiempo-real
- Partes interesadas: stakeholder:002, stakeholder:007
- Actores relacionados: actor:009, actor:010, actor:013
- Entidades de datos relacionadas: data-entity:001, data-entity:002, data-entity:005
- Componentes relacionados: component:007, component:003
- Interfaces relacionadas: interface:001, interface:003

<a id="requirement-008"></a>
## Motor relacional

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:008</code></span>

- Descripción: La base de datos deberá soportar transacciones ACID y mantener integridad referencial.
- Tipo: Technical
- Prioridad: High
- Justificación: Garantiza la confiabilidad y consistencia de los datos almacenados.
- Applications: application:base-datos
- Partes interesadas: stakeholder:006, stakeholder:007
- Actores relacionados: actor:014, actor:013
- Entidades de datos relacionadas: data-entity:001, data-entity:005, data-entity:006
- Componentes relacionados: component:001
- Interfaces relacionadas: interface:001

<a id="requirement-009"></a>
## Extensión geoespacial

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:009</code></span>

- Descripción: La base de datos deberá permitir consultas espaciales e índices geométricos para análisis de proximidad.
- Tipo: Functional
- Prioridad: High
- Justificación: Habilita análisis geográficos y consultas de localización esenciales para transporte público.
- Applications: application:base-datos
- Partes interesadas: stakeholder:003, stakeholder:008
- Actores relacionados: actor:012, actor:005
- Entidades de datos relacionadas: data-entity:001, data-entity:003
- Componentes relacionados: component:001
- Interfaces relacionadas: interface:001, interface:004

<a id="requirement-010"></a>
## Soporte JSON/JSONB/BSON

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:010</code></span>

- Descripción: La base de datos deberá permitir el almacenamiento flexible de metadatos y configuraciones dinámicas.
- Tipo: Technical
- Prioridad: Medium
- Justificación: Permite gestionar datos semiestructurados sin comprometer el rendimiento.
- Applications: application:base-datos
- Partes interesadas: stakeholder:006, stakeholder:007
- Actores relacionados: actor:014
- Entidades de datos relacionadas: data-entity:002, data-entity:003
- Componentes relacionados: component:001
- Interfaces relacionadas: interface:001

<a id="requirement-011"></a>
## Series temporales optimizadas

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:011</code></span>

- Descripción: La base de datos deberá soportar particionamiento automático y compresión de datos históricos por tiempo.
- Tipo: Performance
- Prioridad: High
- Justificación: Optimiza el manejo de grandes volúmenes de datos históricos de operación.
- Applications: application:base-datos
- Partes interesadas: stakeholder:006, stakeholder:003
- Actores relacionados: actor:005, actor:011
- Entidades de datos relacionadas: data-entity:001, data-entity:002
- Componentes relacionados: component:001
- Interfaces relacionadas: interface:001

<a id="requirement-012"></a>
## Respaldo automatizado

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:012</code></span>

- Descripción: La base de datos deberá ejecutar respaldos incrementales con retención configurable.
- Tipo: Reliability
- Prioridad: High
- Justificación: Protege contra pérdida de información y facilita la recuperación ante incidentes.
- Applications: application:base-datos
- Partes interesadas: stakeholder:006, stakeholder:007
- Actores relacionados: actor:025
- Entidades de datos relacionadas: data-entity:001, data-entity:005, data-entity:006
- Componentes relacionados: component:001
- Interfaces relacionadas: interface:001

<a id="requirement-013"></a>
## Latencia sub-milisegundo

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:013</code></span>

- Descripción: La base de datos en memoria deberá proporcionar acceso inmediato a datos frecuentemente consultados.
- Tipo: Performance
- Prioridad: Critical
- Justificación: Asegura respuestas instantáneas durante el procesamiento en tiempo real.
- Applications: application:base-datos-memoria
- Partes interesadas: stakeholder:006, stakeholder:001
- Actores relacionados: actor:013
- Entidades de datos relacionadas: data-entity:001, data-entity:004
- Componentes relacionados: component:005
- Interfaces relacionadas: interface:004, interface:005, interface:006

<a id="requirement-014"></a>
## Estructura de datos especializada

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:014</code></span>

- Descripción: La base de datos en memoria deberá soportar tablas hash y conjuntos ordenados para consultas rápidas.
- Tipo: Technical
- Prioridad: High
- Justificación: Optimiza el rendimiento en operaciones de búsqueda y filtrado intensivas.
- Applications: application:base-datos-memoria
- Partes interesadas: stakeholder:006, stakeholder:007
- Actores relacionados: actor:014
- Entidades de datos relacionadas: data-entity:001, data-entity:004
- Componentes relacionados: component:005
- Interfaces relacionadas: interface:004, interface:006

<a id="requirement-015"></a>
## Expiración automática de datos (TTL)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:015</code></span>

- Descripción: El sistema deberá eliminar automáticamente datos obsoletos mediante configuración de tiempo de vida.
- Tipo: Functional
- Prioridad: Medium
- Justificación: Evita la acumulación de datos innecesarios y mantiene la eficiencia de memoria.
- Applications: application:base-datos-memoria
- Partes interesadas: stakeholder:006
- Actores relacionados: actor:014
- Entidades de datos relacionadas: data-entity:001, data-entity:004
- Componentes relacionados: component:005
- Interfaces relacionadas: interface:004

<a id="requirement-016"></a>
## Persistencia opcional

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:016</code></span>

- Descripción: La base de datos en memoria deberá soportar snapshots periódicos para recuperación ante fallos.
- Tipo: Reliability
- Prioridad: Medium
- Justificación: Permite reiniciar el servicio sin pérdida de datos temporales críticos.
- Applications: application:base-datos-memoria
- Partes interesadas: stakeholder:006
- Actores relacionados: actor:025
- Entidades de datos relacionadas: data-entity:001, data-entity:004
- Componentes relacionados: component:005
- Interfaces relacionadas: interface:004

<a id="requirement-017"></a>
## Compresión en memoria

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:017</code></span>

- Descripción: El sistema deberá comprimir datos en memoria para optimizar el uso de RAM.
- Tipo: Performance
- Prioridad: Medium
- Justificación: Aumenta la capacidad efectiva del sistema de caché sin degradar el rendimiento.
- Applications: application:base-datos-memoria
- Partes interesadas: stakeholder:006
- Actores relacionados: actor:013
- Entidades de datos relacionadas: data-entity:001
- Componentes relacionados: component:005
- Interfaces relacionadas: interface:004

<a id="requirement-018"></a>
## Pub/Sub integrado

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:018</code></span>

- Descripción: La base de datos en memoria deberá ofrecer notificaciones en tiempo real de cambios de estado.
- Tipo: Functional
- Prioridad: High
- Justificación: Facilita la sincronización de sistemas dependientes y la distribución inmediata de eventos.
- Applications: application:base-datos-memoria
- Partes interesadas: stakeholder:006, stakeholder:007
- Actores relacionados: actor:013, actor:014
- Entidades de datos relacionadas: data-entity:001, data-entity:004
- Componentes relacionados: component:005, component:007
- Interfaces relacionadas: interface:005, interface:006

<a id="requirement-019"></a>
## Especificación OpenAPI 3.0

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:019</code></span>

- Descripción: La API REST deberá documentarse mediante OpenAPI 3.0 con interfaz interactiva para desarrolladores.
- Tipo: Technical
- Prioridad: High
- Justificación: Proporciona documentación estandarizada y mejora la interoperabilidad entre sistemas.
- Applications: application:api-rest
- Partes interesadas: stakeholder:007, stakeholder:006, stakeholder:008
- Actores relacionados: actor:013, actor:014, actor:015
- Entidades de datos relacionadas: data-entity:001, data-entity:004
- Componentes relacionados: component:003
- Interfaces relacionadas: interface:004

<a id="requirement-020"></a>
## Autenticación OAuth 2.0 / JWT

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:020</code></span>

- Descripción: La API REST deberá implementar autenticación segura basada en OAuth 2.0 con tokens JWT renovables.
- Tipo: Security
- Prioridad: Critical
- Justificación: Garantiza el acceso seguro y controlado a los recursos del sistema.
- Applications: application:api-rest
- Partes interesadas: stakeholder:004, stakeholder:006, stakeholder:007
- Actores relacionados: actor:005, actor:019
- Entidades de datos relacionadas: data-entity:001, data-entity:005, data-entity:006
- Componentes relacionados: component:003, component:010, component:011
- Interfaces relacionadas: interface:004, interface:001

<a id="requirement-021"></a>
## Control de tasa (Rate Limiting)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:021</code></span>

- Descripción: La API REST deberá limitar el número de solicitudes por segundo por cliente (IP/Key).
- Tipo: Security
- Prioridad: High
- Justificación: Protege contra ataques de denegación de servicio (DoS) y uso excesivo de recursos.
- Applications: application:api-rest
- Partes interesadas: stakeholder:006, stakeholder:007
- Actores relacionados: actor:013, actor:025
- Entidades de datos relacionadas: data-entity:001, data-entity:004
- Componentes relacionados: component:003, component:005
- Interfaces relacionadas: interface:004

<a id="requirement-022"></a>
## CORS configurable

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:022</code></span>

- Descripción: La API REST deberá permitir la configuración granular de Cross-Origin Resource Sharing (CORS).
- Tipo: Technical
- Prioridad: Medium
- Justificación: Garantiza la seguridad y compatibilidad de las peticiones desde diferentes dominios web.
- Applications: application:api-rest
- Partes interesadas: stakeholder:007
- Actores relacionados: actor:014
- Entidades de datos relacionadas: data-entity:004
- Componentes relacionados: component:003
- Interfaces relacionadas: interface:004

<a id="requirement-023"></a>
## Pagos de datos eficiente

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:023</code></span>

- Descripción: La API REST deberá soportar la paginación con cursores para conjuntos de datos grandes.
- Tipo: Performance
- Prioridad: High
- Justificación: Reduce la latencia en las respuestas y minimiza la carga de red en el cliente.
- Applications: application:api-rest
- Partes interesadas: stakeholder:007, stakeholder:008
- Actores relacionados: actor:014, actor:015
- Entidades de datos relacionadas: data-entity:001, data-entity:004
- Componentes relacionados: component:003
- Interfaces relacionadas: interface:004, interface:001

<a id="requirement-024"></a>
## Soporte para consultas complejas

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:024</code></span>

- Descripción: La API REST deberá soportar filtrado, ordenamiento y proyección de campos.
- Tipo: Functional
- Prioridad: High
- Justificación: Permite a los desarrolladores recuperar solo los datos necesarios y ejecutar lógica compleja en el servidor.
- Applications: application:api-rest
- Partes interesadas: stakeholder:007, stakeholder:008
- Actores relacionados: actor:014, actor:015
- Entidades de datos relacionadas: data-entity:001, data-entity:004
- Componentes relacionados: component:003
- Interfaces relacionadas: interface:004, interface:001

<a id="requirement-025"></a>
## Evitar sobre-obtención de datos

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:025</code></span>

- Descripción: La interfaz GraphQL deberá permitir al cliente especificar los campos exactos que necesita.
- Tipo: Performance
- Prioridad: High
- Justificación: Optimiza el uso de ancho de banda y mejora la velocidad de respuesta para aplicaciones cliente.
- Applications: application:api-graphql
- Partes interesadas: stakeholder:007, stakeholder:008
- Actores relacionados: actor:014, actor:015
- Entidades de datos relacionadas: data-entity:001, data-entity:004
- Componentes relacionados: component:008
- Interfaces relacionadas: interface:002

<a id="requirement-026"></a>
## Suscripciones en tiempo real

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:026</code></span>

- Descripción: La interfaz GraphQL deberá soportar consultas de suscripción (WebSockets) para eventos en vivo.
- Tipo: Functional
- Prioridad: High
- Justificación: Permite que los clientes reciban actualizaciones en tiempo real sin polling constante.
- Applications: application:api-graphql
- Partes interesadas: stakeholder:007, stakeholder:001
- Actores relacionados: actor:013, actor:014
- Entidades de datos relacionadas: data-entity:001, data-entity:004
- Componentes relacionados: component:008, component:005
- Interfaces relacionadas: interface:002

<a id="requirement-027"></a>
## Esquema tipado y estricto

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:027</code></span>

- Descripción: La interfaz GraphQL deberá validar todas las consultas contra un esquema estricto (SDL).
- Tipo: Technical
- Prioridad: High
- Justificación: Mejora la calidad del código del cliente y la estabilidad del backend al evitar consultas inválidas.
- Applications: application:api-graphql
- Partes interesadas: stakeholder:007
- Actores relacionados: actor:014
- Entidades de datos relacionadas: data-entity:001, data-entity:004
- Componentes relacionados: component:008
- Interfaces relacionadas: interface:002

<a id="requirement-028"></a>
## Seguridad por campo

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:028</code></span>

- Descripción: La interfaz GraphQL deberá aplicar políticas de acceso (permisos) a nivel de campo/tipo.
- Tipo: Security
- Prioridad: High
- Justificación: Proporciona control granular sobre los datos accesibles, según el rol del usuario autenticado.
- Applications: application:api-graphql
- Partes interesadas: stakeholder:004, stakeholder:006
- Actores relacionados: actor:005, actor:019
- Entidades de datos relacionadas: data-entity:005, data-entity:006
- Componentes relacionados: component:008
- Interfaces relacionadas: interface:002

<a id="requirement-029"></a>
## Transmisión unidireccional (SSE)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:029</code></span>

- Descripción: La interfaz SSE deberá enviar actualizaciones del servidor al cliente solo cuando los datos cambien.
- Tipo: Functional
- Prioridad: High
- Justificación: Evita el overhead del polling periódico y reduce la latencia en las actualizaciones.
- Applications: application:event-streaming
- Partes interesadas: stakeholder:001, stakeholder:006
- Actores relacionados: actor:013
- Entidades de datos relacionadas: data-entity:001, data-entity:004
- Componentes relacionados: component:004, component:005
- Interfaces relacionadas: interface:005

<a id="requirement-030"></a>
## Reconexión automática (SSE)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:030</code></span>

- Descripción: La interfaz SSE deberá incluir lógica de reconexión automática en el cliente en caso de desconexión.
- Tipo: Reliability
- Prioridad: Medium
- Justificación: Mejora la robustez de la aplicación cliente ante fallos de red transitorios.
- Applications: application:event-streaming
- Partes interesadas: stakeholder:001, stakeholder:007
- Actores relacionados: actor:014
- Entidades de datos relacionadas: data-entity:004
- Componentes relacionados: component:004
- Interfaces relacionadas: interface:005

<a id="requirement-031"></a>
## Comunicación bidireccional (WS)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:031</code></span>

- Descripción: La interfaz WebSocket deberá permitir tanto el envío de datos del servidor al cliente como comandos del cliente al servidor.
- Tipo: Functional
- Prioridad: High
- Justificación: Habilita casos de uso avanzados como control remoto o mensajería en tiempo real.
- Applications: application:event-streaming
- Partes interesadas: stakeholder:002, stakeholder:006
- Actores relacionados: actor:006, actor:007
- Entidades de datos relacionadas: data-entity:001, data-entity:006
- Componentes relacionados: component:005, component:011
- Interfaces relacionadas: interface:006

<a id="requirement-032"></a>
## Protocolo de sub-mensajería (WS)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:032</code></span>

- Descripción: La interfaz WebSocket deberá implementar un protocolo de sub-mensajería (ej. STOMP, WAMP) para routing de mensajes.
- Tipo: Technical
- Prioridad: Medium
- Justificación: Permite gestionar múltiples tópicos y mensajes complejos de manera organizada.
- Applications: application:event-streaming
- Partes interesadas: stakeholder:007
- Actores relacionados: actor:013
- Entidades de datos relacionadas: data-entity:001, data-entity:006
- Componentes relacionados: component:005
- Interfaces relacionadas: interface:006

<a id="requirement-033"></a>
## Cifrado TLS/SSL (WS)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:033</code></span>

- Descripción: La interfaz WebSocket deberá usar siempre el protocolo WSS (WebSockets sobre TLS) para asegurar la comunicación.
- Tipo: Security
- Prioridad: Critical
- Justificación: Protege los datos transmitidos en tiempo real contra la interceptación.
- Applications: application:event-streaming
- Partes interesadas: stakeholder:004, stakeholder:006
- Actores relacionados: actor:019
- Entidades de datos relacionadas: data-entity:001, data-entity:006
- Componentes relacionados: component:005
- Interfaces relacionadas: interface:006

<a id="requirement-034"></a>
## Bajo consumo de batería (MQT)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:034</code></span>

- Descripción: La interfaz MQTT deberá usar un protocolo ligero y un mecanismo 'keep-alive' eficiente para dispositivos IoT.
- Tipo: Performance
- Prioridad: High
- Justificación: Extiende la vida útil de la batería de los dispositivos a bordo (trackers).
- Applications: application:iot-messaging
- Partes interesadas: stakeholder:002, stakeholder:007
- Actores relacionados: actor:009, actor:010
- Entidades de datos relacionadas: data-entity:002
- Componentes relacionados: component:007
- Interfaces relacionadas: interface:003

<a id="requirement-035"></a>
## QoS configurable (MQT)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:035</code></span>

- Descripción: La interfaz MQTT deberá soportar niveles de Calidad de Servicio (QoS 0, 1, 2) según la criticidad del mensaje.
- Tipo: Reliability
- Prioridad: High
- Justificación: Garantiza la entrega del mensaje incluso en entornos de red inestables (ej. túneles o zonas rurales).
- Applications: application:iot-messaging
- Partes interesadas: stakeholder:002, stakeholder:007
- Actores relacionados: actor:009, actor:010
- Entidades de datos relacionadas: data-entity:002
- Componentes relacionados: component:007
- Interfaces relacionadas: interface:003

<a id="requirement-036"></a>
## Mensaje de Última Voluntad (MQT)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:036</code></span>

- Descripción: La interfaz MQTT deberá usar la función 'Last Will and Testament' para notificar la desconexión inesperada de un dispositivo.
- Tipo: Functional
- Prioridad: Medium
- Justificación: Permite al sistema detectar y reaccionar inmediatamente a fallos de hardware o red en los vehículos.
- Applications: application:iot-messaging
- Partes interesadas: stakeholder:002, stakeholder:006
- Actores relacionados: actor:007, actor:013
- Entidades de datos relacionadas: data-entity:002
- Componentes relacionados: component:007
- Interfaces relacionadas: interface:003

<a id="requirement-037"></a>
## Soporte RDF y Triplestores

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:037</code></span>

- Descripción: El sistema deberá almacenar datos semánticos utilizando el modelo Resource Description Framework (RDF).
- Tipo: Technical
- Prioridad: High
- Justificación: Facilita la representación y consulta de datos enlazados (Linked Data) en el sector transporte.
- Applications: application:knowledge-graph
- Partes interesadas: stakeholder:008, stakeholder:003
- Actores relacionados: actor:012, actor:014
- Entidades de datos relacionadas: data-entity:001, data-entity:004
- Componentes relacionados: component:009, component:002
- Interfaces relacionadas: interface:007

<a id="requirement-038"></a>
## Consulta SPARQL 1.1

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:038</code></span>

- Descripción: La interfaz SPARQL deberá soportar el estándar SPARQL 1.1 para consultas complejas y federadas.
- Tipo: Functional
- Prioridad: High
- Justificación: Permite a investigadores y desarrolladores ejecutar análisis complejos y unificar datos de múltiples fuentes semánticas.
- Applications: application:knowledge-graph
- Partes interesadas: stakeholder:008, stakeholder:003
- Actores relacionados: actor:012, actor:014
- Entidades de datos relacionadas: data-entity:001, data-entity:004
- Componentes relacionados: component:009, component:002
- Interfaces relacionadas: interface:007

<a id="requirement-039"></a>
## Control de inferencia

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:039</code></span>

- Descripción: El sistema deberá permitir la aplicación de reglas de inferencia (ej. RDFS, OWL) para generar nuevos hechos implícitos.
- Tipo: Technical
- Prioridad: Medium
- Justificación: Enriquece el grafo de conocimiento permitiendo consultas más inteligentes sobre relaciones no explícitas.
- Applications: application:knowledge-graph
- Partes interesadas: stakeholder:008
- Actores relacionados: actor:012
- Entidades de datos relacionadas: data-entity:001, data-entity:004
- Componentes relacionados: component:009, component:002
- Interfaces relacionadas: interface:007

<a id="requirement-040"></a>
## Serialización múltiple (RDF)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:040</code></span>

- Descripción: La interfaz SPARQL deberá soportar la serialización de resultados en formatos como JSON, XML, Turtle y N-Triples.
- Tipo: Technical
- Prioridad: Medium
- Justificación: Asegura la compatibilidad con diferentes herramientas de análisis semántico y clientes web.
- Applications: application:knowledge-graph
- Partes interesadas: stakeholder:008
- Actores relacionados: actor:014
- Entidades de datos relacionadas: data-entity:001
- Componentes relacionados: component:009
- Interfaces relacionadas: interface:007

<a id="requirement-041"></a>
## Integración de Modelo/Contexto (MCP)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:041</code></span>

- Descripción: La interfaz MCP deberá ofrecer un canal de comunicación seguro y estructurado para modelos de IA.
- Tipo: Functional
- Prioridad: High
- Justificación: Facilita el entrenamiento, despliegue y consumo de modelos de Machine Learning.
- Applications: application:ia-servicios
- Partes interesadas: stakeholder:008, stakeholder:007
- Actores relacionados: actor:014, actor:013
- Entidades de datos relacionadas: data-entity:001
- Componentes relacionados: component:006, component:013
- Interfaces relacionadas: interface:008

<a id="requirement-042"></a>
## Transferencia de tensor (MCP)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:042</code></span>

- Descripción: La interfaz MCP deberá optimizar la transferencia de datos numéricos complejos (tensores/vectores).
- Tipo: Performance
- Prioridad: High
- Justificación: Minimiza la latencia en las inferencias al reducir el tiempo de serialización y deserialización.
- Applications: application:ia-servicios
- Partes interesadas: stakeholder:008, stakeholder:007
- Actores relacionados: actor:013
- Entidades de datos relacionadas: data-entity:001
- Componentes relacionados: component:006, component:013
- Interfaces relacionadas: interface:008

<a id="requirement-043"></a>
## Gestión de ciclo de vida del conductor

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:043</code></span>

- Descripción: El sistema deberá registrar y actualizar las certificaciones, horarios y estado de los conductores.
- Tipo: Functional
- Prioridad: High
- Justificación: Asegura el cumplimiento normativo y permite la asignación eficiente de personal.
- Applications: application:gestion-operativa
- Partes interesadas: stakeholder:002, stakeholder:003, stakeholder:004
- Actores relacionados: actor:005, actor:006
- Entidades de datos relacionadas: data-entity:005
- Componentes relacionados: component:010
- Interfaces relacionadas: interface:001, interface:004

<a id="requirement-044"></a>
## Programación y asignación de viajes

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:044</code></span>

- Descripción: El sistema deberá permitir a los despachadores crear, modificar y asignar viajes a vehículos y conductores.
- Tipo: Functional
- Prioridad: High
- Justificación: Habilita la planificación operativa diaria y la reacción ante imprevistos.
- Applications: application:gestion-operativa
- Partes interesadas: stakeholder:002, stakeholder:006
- Actores relacionados: actor:006, actor:007
- Entidades de datos relacionadas: data-entity:001, data-entity:005, data-entity:006
- Componentes relacionados: component:011
- Interfaces relacionadas: interface:001, interface:004

<a id="requirement-045"></a>
## Mensajería bidireccional

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:045</code></span>

- Descripción: El centro de control deberá poder enviar mensajes en tiempo real a los conductores y viceversa.
- Tipo: Functional
- Prioridad: High
- Justificación: Mejora la comunicación operativa, seguridad y coordinación durante el servicio.
- Applications: application:gestion-operativa
- Partes interesadas: stakeholder:002, stakeholder:005
- Actores relacionados: actor:006, actor:007
- Entidades de datos relacionadas: data-entity:005, data-entity:006
- Componentes relacionados: component:011, component:007
- Interfaces relacionadas: interface:006

<a id="requirement-046"></a>
## Visualización geoespacial de flotas

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:046</code></span>

- Descripción: El sistema deberá mostrar la ubicación de todos los vehículos en un mapa en tiempo real con superposición de rutas.
- Tipo: Functional
- Prioridad: Critical
- Justificación: Permite el monitoreo operativo centralizado y la toma de decisiones inmediata.
- Applications: application:gestion-operativa
- Partes interesadas: stakeholder:002, stakeholder:003, stakeholder:006
- Actores relacionados: actor:006, actor:007, actor:005
- Entidades de datos relacionadas: data-entity:001, data-entity:006
- Componentes relacionados: component:011, component:005
- Interfaces relacionadas: interface:006, interface:004

<a id="requirement-047"></a>
## Almacenamiento de logs de auditoría

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:047</code></span>

- Descripción: El sistema deberá registrar todas las acciones del operador, cambios de configuración y eventos de seguridad.
- Tipo: Security
- Prioridad: High
- Justificación: Necesario para cumplimiento, detección de fraude y forenses post-incidente.
- Applications: application:gestion-operativa
- Partes interesadas: stakeholder:004, stakeholder:006
- Actores relacionados: actor:005, actor:019
- Entidades de datos relacionadas: data-entity:006
- Componentes relacionados: component:010, component:011
- Interfaces relacionadas: interface:001

<a id="requirement-048"></a>
## Carga de horarios estáticos (GTFS)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:048</code></span>

- Descripción: El sistema deberá soportar la importación y validación de archivos GTFS estáticos.
- Tipo: Functional
- Prioridad: Critical
- Justificación: Es el estándar global para la información de transporte estático (rutas, paradas, horarios).
- Applications: application:gestion-datos-estaticos
- Partes interesadas: stakeholder:002, stakeholder:003
- Actores relacionados: actor:003, actor:009
- Entidades de datos relacionadas: data-entity:007
- Componentes relacionados: component:014
- Interfaces relacionadas: interface:001

<a id="requirement-049"></a>
## Validación de coherencia GTFS

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:049</code></span>

- Descripción: El sistema deberá ejecutar un validador que detecte errores en la estructura y coherencia de los datos GTFS.
- Tipo: Functional
- Prioridad: High
- Justificación: Asegura la calidad de los datos consumidos por terceros (ej. Google Maps).
- Applications: application:gestion-datos-estaticos
- Partes interesadas: stakeholder:003, stakeholder:008
- Actores relacionados: actor:005, actor:014
- Entidades de datos relacionadas: data-entity:007
- Componentes relacionados: component:014
- Interfaces relacionadas: interface:001

<a id="requirement-050"></a>
## Generación de feeds GTFS-RT

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:050</code></span>

- Descripción: El sistema deberá generar feeds GTFS-Realtime (Protocol Buffers) para posiciones vehiculares, alertas y estimaciones de viaje.
- Tipo: Functional
- Prioridad: Critical
- Justificación: Permite la distribución masiva de datos en tiempo real bajo un estándar reconocido.
- Applications: application:gestion-datos-estaticos
- Partes interesadas: stakeholder:001, stakeholder:007
- Actores relacionados: actor:013, actor:015
- Entidades de datos relacionadas: data-entity:001, data-entity:007
- Componentes relacionados: component:007, component:005
- Interfaces relacionadas: interface:004

<a id="requirement-051"></a>
## Visualización de datos históricos

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:051</code></span>

- Descripción: El sistema deberá permitir la visualización de datos de rendimiento y rutas históricas en un mapa interactivo.
- Tipo: Functional
- Prioridad: High
- Justificación: Necesario para el análisis de rendimiento de las rutas y auditoría de servicio.
- Applications: application:analisis-informes
- Partes interesadas: stakeholder:002, stakeholder:003, stakeholder:008
- Actores relacionados: actor:005, actor:007, actor:012
- Entidades de datos relacionadas: data-entity:001, data-entity:007, data-entity:008
- Componentes relacionados: component:012
- Interfaces relacionadas: interface:001, interface:004

<a id="requirement-052"></a>
## Generación de informes programados

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:052</code></span>

- Descripción: El sistema deberá generar informes automáticamente (ej. diarios, semanales) sobre puntualidad y operación.
- Tipo: Functional
- Prioridad: High
- Justificación: Facilita la fiscalización y la gestión del rendimiento sin intervención manual diaria.
- Applications: application:analisis-informes
- Partes interesadas: stakeholder:002, stakeholder:003, stakeholder:004
- Actores relacionados: actor:005, actor:002
- Entidades de datos relacionadas: data-entity:008
- Componentes relacionados: component:012
- Interfaces relacionadas: interface:001

<a id="requirement-053"></a>
## Integración con herramientas BI externas

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:053</code></span>

- Descripción: El sistema deberá exponer datos de rendimiento a través de conectores ODBC/JDBC para herramientas de Business Intelligence (BI).
- Tipo: Technical
- Prioridad: Medium
- Justificación: Permite a las autoridades y operadores usar sus propias herramientas de análisis preferidas.
- Applications: application:analisis-informes
- Partes interesadas: stakeholder:003, stakeholder:006, stakeholder:007
- Actores relacionados: actor:005, actor:002
- Entidades de datos relacionadas: data-entity:008
- Componentes relacionados: component:012
- Interfaces relacionadas: interface:001

<a id="requirement-054"></a>
## Detección de congestión vehicular

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:054</code></span>

- Descripción: El sistema deberá utilizar modelos de IA (MCP) para identificar patrones de tráfico que causan retrasos.
- Tipo: Functional
- Prioridad: High
- Justificación: Permite la toma de decisiones proactiva para minimizar el impacto de la congestión.
- Applications: application:ia-servicios
- Partes interesadas: stakeholder:003, stakeholder:002
- Actores relacionados: actor:005, actor:007
- Entidades de datos relacionadas: data-entity:001, data-entity:008
- Componentes relacionados: component:013, component:006
- Interfaces relacionadas: interface:008

<a id="requirement-055"></a>
## Predicción de llegada (ETA)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:055</code></span>

- Descripción: El sistema deberá predecir la hora estimada de llegada a la parada con una precisión superior al 90%.
- Tipo: Performance
- Prioridad: Critical
- Justificación: Es un servicio fundamental para las personas usuarias y la información en tiempo real.
- Applications: application:ia-servicios
- Partes interesadas: stakeholder:001, stakeholder:007
- Actores relacionados: actor:013
- Entidades de datos relacionadas: data-entity:001
- Componentes relacionados: component:013, component:006, component:005
- Interfaces relacionadas: interface:008, interface:004, interface:006

<a id="requirement-056"></a>
## Detección de anomalías en el manejo

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:056</code></span>

- Descripción: El sistema deberá alertar automáticamente sobre eventos de manejo peligrosos (ej. frenadas bruscas, exceso de velocidad).
- Tipo: Functional
- Prioridad: High
- Justificación: Mejora la seguridad y permite la gestión del riesgo de los conductores.
- Applications: application:ia-servicios
- Partes interesadas: stakeholder:002, stakeholder:005
- Actores relacionados: actor:007
- Entidades de datos relacionadas: data-entity:002, data-entity:005
- Componentes relacionados: component:013, component:007
- Interfaces relacionadas: interface:003, interface:008

<a id="requirement-057"></a>
## Consumo de recursos bajo demanda

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:057</code></span>

- Descripción: El sistema deberá escalar automáticamente los recursos de IA (MCP Server) en función de la carga de inferencia.
- Tipo: Performance
- Prioridad: Medium
- Justificación: Optimiza los costos operativos al utilizar recursos solo cuando son necesarios.
- Applications: application:ia-servicios
- Partes interesadas: stakeholder:006, stakeholder:007
- Actores relacionados: actor:013, actor:025
- Entidades de datos relacionadas: data-entity:001
- Componentes relacionados: component:006
- Interfaces relacionadas: interface:008

<a id="requirement-058"></a>
## Disponibilidad del 99.9%

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:058</code></span>

- Descripción: El tiempo de inactividad anual planificado y no planificado del servicio de tiempo real no debe exceder de 8.76 horas.
- Tipo: Reliability
- Prioridad: Critical
- Justificación: Asegura la confianza de los usuarios y la continuidad del servicio esencial.
- Applications: application:general
- Partes interesadas: stakeholder:001, stakeholder:002, stakeholder:006
- Actores relacionados: actor:002, actor:013
- Entidades de datos relacionadas: data-entity:001
- Componentes relacionados: component:007, component:005
- Interfaces relacionadas: interface:004, interface:006

<a id="requirement-059"></a>
## Cifrado de datos en tránsito (TLS)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:059</code></span>

- Descripción: Todas las interfaces públicas (APIs, Streams) deberán utilizar cifrado TLS 1.2 o superior.
- Tipo: Security
- Prioridad: Critical
- Justificación: Protege la confidencialidad de los datos contra ataques de 'man-in-the-middle'.
- Applications: application:general
- Partes interesadas: stakeholder:004, stakeholder:006
- Actores relacionados: actor:019
- Entidades de datos relacionadas: data-entity:001, data-entity:005
- Componentes relacionados: component:003, component:008, component:006
- Interfaces relacionadas: interface:001, interface:002, interface:004, interface:005, interface:006, interface:007, interface:008

<a id="requirement-060"></a>
## Control de acceso basado en roles (RBAC)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:060</code></span>

- Descripción: El sistema deberá restringir el acceso a funciones y datos sensibles según el rol del usuario.
- Tipo: Security
- Prioridad: Critical
- Justificación: Asegura que solo usuarios autorizados puedan realizar cambios o ver información privilegiada.
- Applications: application:general
- Partes interesadas: stakeholder:004, stakeholder:006, stakeholder:002
- Actores relacionados: actor:005, actor:006, actor:007
- Entidades de datos relacionadas: data-entity:005, data-entity:006
- Componentes relacionados: component:010, component:011
- Interfaces relacionadas: interface:001, interface:002, interface:004

<a id="requirement-061"></a>
## Cumplimiento con RGPD/LOPD

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:061</code></span>

- Descripción: El sistema deberá implementar mecanismos para garantizar el derecho al olvido y la portabilidad de datos personales (ej. conductor/despachador).
- Tipo: Compliance
- Prioridad: High
- Justificación: Obligación legal para el manejo de datos de ciudadanos.
- Applications: application:general
- Partes interesadas: stakeholder:004
- Actores relacionados: actor:019, actor:021
- Entidades de datos relacionadas: data-entity:005, data-entity:006
- Componentes relacionados: component:010
- Interfaces relacionadas: interface:001

<a id="requirement-062"></a>
## Integración de identidad SSO/LDAP

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:062</code></span>

- Descripción: El sistema deberá integrarse con servicios de directorio (ej. LDAP o Azure AD) para la autenticación de empleados.
- Tipo: Technical
- Prioridad: Medium
- Justificación: Mejora la experiencia del usuario y simplifica la gestión de accesos corporativos.
- Applications: application:general
- Partes interesadas: stakeholder:006, stakeholder:002
- Actores relacionados: actor:006, actor:007
- Entidades de datos relacionadas: data-entity:005, data-entity:006
- Componentes relacionados: component:010, component:011
- Interfaces relacionadas: interface:001

<a id="requirement-063"></a>
## Separación de responsabilidades

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:063</code></span>

- Descripción: El sistema deberá dividir la aplicación en microservicios o componentes independientes con fronteras claras.
- Tipo: Technical
- Prioridad: High
- Justificación: Mejora la manetenibilidad, escalabilidad y permite diferentes tecnologías por componente.
- Applications: application:arquitectura
- Partes interesadas: stakeholder:006, stakeholder:007
- Actores relacionados: actor:013
- Componentes relacionados: component:007, component:003
- Interfaces relacionadas: interface:001, interface:004

<a id="requirement-064"></a>
## Despliegue automatizado (CI/CD)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:064</code></span>

- Descripción: El sistema deberá soportar el despliegue continuo de componentes a través de pipelines automatizadas (CI/CD).
- Tipo: Operational
- Prioridad: High
- Justificación: Reduce el error humano y acelera el tiempo de lanzamiento de nuevas funcionalidades.
- Applications: application:arquitectura
- Partes interesadas: stakeholder:006, stakeholder:007
- Actores relacionados: actor:013, actor:025
- Interfaces relacionadas: interface:001, interface:004

<a id="requirement-065"></a>
## Uso de contenedores (Docker/Kubernetes)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:065</code></span>

- Descripción: Todos los servicios de aplicación deberán estar empaquetados como contenedores para asegurar la portabilidad y el aislamiento.
- Tipo: Technical
- Prioridad: High
- Justificación: Facilita la orquestación, la escalabilidad y la gestión de dependencias del software.
- Applications: application:arquitectura
- Partes interesadas: stakeholder:006, stakeholder:007
- Actores relacionados: actor:013, actor:025
- Interfaces relacionadas: interface:001, interface:004

<a id="requirement-066"></a>
## Diseño para la observabilidad

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:066</code></span>

- Descripción: Cada componente deberá exponer métricas (Prometheus), logs (ELK) y traces (Jaeger) para monitoreo centralizado.
- Tipo: Operational
- Prioridad: High
- Justificación: Permite diagnosticar problemas rápidamente y medir el rendimiento real del sistema.
- Applications: application:arquitectura
- Partes interesadas: stakeholder:006
- Actores relacionados: actor:013
- Componentes relacionados: component:007, component:005
- Interfaces relacionadas: interface:001

<a id="requirement-067"></a>
## Integración de GIS de terceros

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:067</code></span>

- Descripción: El sistema deberá consumir servicios externos de mapas y geocodificación (ej. OpenStreetMap, ESRI, Waze).
- Tipo: Technical
- Prioridad: Medium
- Justificación: Reduce la necesidad de mantener datos geoespaciales propios y aprovecha la información de tráfico en tiempo real.
- Applications: application:interoperabilidad
- Partes interesadas: stakeholder:003, stakeholder:007
- Actores relacionados: actor:012, actor:015
- Componentes relacionados: component:013, component:011
- Interfaces relacionadas: interface:008, interface:004

<a id="requirement-068"></a>
## Intercambio de datos con CTP

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:068</code></span>

- Descripción: El sistema deberá proporcionar un canal seguro para que el CTP acceda a métricas de operación y datos históricos para fiscalización.
- Tipo: Functional
- Prioridad: High
- Justificación: Obligación de la plataforma para facilitar la labor de la autoridad reguladora del transporte.
- Applications: application:interoperabilidad
- Partes interesadas: stakeholder:003
- Actores relacionados: actor:002, actor:003
- Entidades de datos relacionadas: data-entity:001, data-entity:008
- Componentes relacionados: component:012
- Interfaces relacionadas: interface:001, interface:002

<a id="requirement-069"></a>
## Notificación de emergencias a 911

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:069</code></span>

- Descripción: El sistema deberá enviar alertas de pánico (botón de conductor) al 911 con datos de ubicación, según protocolo estandarizado.
- Tipo: Safety
- Prioridad: Critical
- Justificación: Mejora la respuesta ante emergencias y la seguridad de los conductores y pasajeros.
- Applications: application:seguridad
- Partes interesadas: stakeholder:005
- Actores relacionados: actor:022
- Entidades de datos relacionadas: data-entity:001, data-entity:005
- Componentes relacionados: component:007
- Interfaces relacionadas: interface:003

<a id="requirement-070"></a>
## Cifrado de datos en reposo (At Rest)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:070</code></span>

- Descripción: Todos los datos sensibles (personales, credenciales, logs de auditoría) deberán estar cifrados en la base de datos.
- Tipo: Security
- Prioridad: Critical
- Justificación: Protege los datos contra el acceso no autorizado a la infraestructura de almacenamiento.
- Applications: application:seguridad
- Partes interesadas: stakeholder:004, stakeholder:006
- Actores relacionados: actor:019
- Entidades de datos relacionadas: data-entity:005, data-entity:006
- Componentes relacionados: component:001, component:002
- Interfaces relacionadas: interface:001

<a id="requirement-071"></a>
## Monitoreo de integridad de archivos

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:071</code></span>

- Descripción: El sistema deberá monitorear y alertar sobre modificaciones no autorizadas a binarios críticos de la aplicación.
- Tipo: Security
- Prioridad: High
- Justificación: Ayuda a detectar intrusiones y malware que intenta alterar el comportamiento del sistema.
- Applications: application:seguridad
- Partes interesadas: stakeholder:006
- Actores relacionados: actor:013
- Interfaces relacionadas: interface:001

<a id="requirement-072"></a>
## Actualizaciones de firmware remotas

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:072</code></span>

- Descripción: El sistema deberá permitir la actualización de firmware de los dispositivos a bordo (trackers) de forma segura y remota.
- Tipo: Functional
- Prioridad: High
- Justificación: Facilita el mantenimiento, la corrección de errores y el despliegue de nuevas funcionalidades sin intervención física.
- Applications: application:iot-management
- Partes interesadas: stakeholder:002, stakeholder:007, stakeholder:006
- Actores relacionados: actor:007
- Entidades de datos relacionadas: data-entity:002
- Componentes relacionados: component:007
- Interfaces relacionadas: interface:003, interface:001

<a id="requirement-073"></a>
## Configuración remota de dispositivos

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:073</code></span>

- Descripción: El sistema deberá permitir modificar parámetros de configuración (ej. frecuencia de reporte) de los dispositivos a bordo.
- Tipo: Functional
- Prioridad: High
- Justificación: Permite optimizar el rendimiento y el consumo de datos de la flota en tiempo real.
- Applications: application:iot-management
- Partes interesadas: stakeholder:002, stakeholder:006
- Actores relacionados: actor:007
- Entidades de datos relacionadas: data-entity:002
- Componentes relacionados: component:007
- Interfaces relacionadas: interface:003, interface:001

<a id="requirement-074"></a>
## Inventario centralizado de dispositivos

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:074</code></span>

- Descripción: El sistema deberá mantener un inventario de todos los dispositivos, su estado (activo/inactivo) y su ubicación histórica.
- Tipo: Functional
- Prioridad: High
- Justificación: Esencial para el control de activos y la gestión de la flota.
- Applications: application:iot-management
- Partes interesadas: stakeholder:002, stakeholder:006
- Actores relacionados: actor:007
- Entidades de datos relacionadas: data-entity:002
- Componentes relacionados: component:010
- Interfaces relacionadas: interface:001

<a id="requirement-075"></a>
## Diseño para la accesibilidad (WCAG)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:075</code></span>

- Descripción: La interfaz web del usuario final (Infobús) deberá cumplir con las Pautas de Accesibilidad para el Contenido Web (WCAG 2.1 AA).
- Tipo: Usability
- Prioridad: High
- Justificación: Garantiza que personas con discapacidades puedan acceder y usar la información del transporte público.
- Applications: application:front-end
- Partes interesadas: stakeholder:001, stakeholder:004
- Actores relacionados: actor:020, actor:021
- Entidades de datos relacionadas: data-entity:004
- Componentes relacionados: component:004
- Interfaces relacionadas: interface:004, interface:005

<a id="requirement-076"></a>
## Multi-idioma (Español/Inglés)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:076</code></span>

- Descripción: La interfaz web deberá ser fácilmente conmutable entre español e inglés.
- Tipo: Usability
- Prioridad: Medium
- Justificación: Atiende a la población turística y promueve la adopción internacional.
- Applications: application:front-end
- Partes interesadas: stakeholder:001, stakeholder:008
- Actores relacionados: actor:015
- Entidades de datos relacionadas: data-entity:004
- Componentes relacionados: component:004
- Interfaces relacionadas: interface:004

<a id="requirement-077"></a>
## Diseño adaptable (Responsive Design)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:077</code></span>

- Descripción: La interfaz web deberá adaptarse correctamente a pantallas de escritorio, tabletas y móviles.
- Tipo: Usability
- Prioridad: High
- Justificación: Garantiza una experiencia de usuario consistente independientemente del dispositivo de acceso.
- Applications: application:front-end
- Partes interesadas: stakeholder:001
- Actores relacionados: actor:014
- Entidades de datos relacionadas: data-entity:004
- Componentes relacionados: component:004
- Interfaces relacionadas: interface:004

<a id="requirement-078"></a>
## Carga rápida (Web Core Vitals)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:078</code></span>

- Descripción: La interfaz web deberá optimizarse para una carga inicial rápida, cumpliendo con los Core Web Vitals (Largest Contentful Paint < 2.5s).
- Tipo: Performance
- Prioridad: High
- Justificación: Mejora la retención de usuarios y el posicionamiento en buscadores (SEO).
- Applications: application:front-end
- Partes interesadas: stakeholder:001
- Actores relacionados: actor:014
- Entidades de datos relacionadas: data-entity:004
- Componentes relacionados: component:004
- Interfaces relacionadas: interface:004

<a id="requirement-079"></a>
## Transparencia de datos de tarifa

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:079</code></span>

- Descripción: El sistema deberá mostrar la información de tarifa oficial (ARESEP) para cada ruta.
- Tipo: Functional
- Prioridad: High
- Justificación: Informa al usuario sobre el costo exacto del servicio, fomentando la transparencia.
- Applications: application:datos-publicos
- Partes interesadas: stakeholder:001, stakeholder:004
- Actores relacionados: actor:005
- Entidades de datos relacionadas: data-entity:007
- Componentes relacionados: component:003, component:004
- Interfaces relacionadas: interface:004

<a id="requirement-080"></a>
## Datos de cobertura y paradas

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:080</code></span>

- Descripción: El sistema deberá publicar el listado completo y geoespacial de paradas autorizadas y la cobertura de red.
- Tipo: Functional
- Prioridad: High
- Justificación: Información básica necesaria para la planificación de viajes por parte del usuario.
- Applications: application:datos-publicos
- Partes interesadas: stakeholder:001, stakeholder:003
- Actores relacionados: actor:012, actor:014
- Entidades de datos relacionadas: data-entity:007
- Componentes relacionados: component:003
- Interfaces relacionadas: interface:004

<a id="requirement-081"></a>
## Código fuente abierto (Open Source)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:081</code></span>

- Descripción: Las partes no críticas del código fuente (ej. cliente web, herramientas de análisis) deberán ser de código abierto (MIT/BSD).
- Tipo: Technical
- Prioridad: Medium
- Justificación: Fomenta la colaboración, la auditoría pública y la creación de ecosistemas por terceros.
- Applications: application:datos-publicos
- Partes interesadas: stakeholder:008, stakeholder:007
- Actores relacionados: actor:014, actor:015
- Componentes relacionados: component:004, component:014

<a id="requirement-082"></a>
## Copia de seguridad externa (Off-Site)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:082</code></span>

- Descripción: El sistema deberá mantener una copia de seguridad externa de todos los datos históricos y de configuración.
- Tipo: Reliability
- Prioridad: Critical
- Justificación: Protege contra fallos catastróficos o desastres que afecten la infraestructura principal.
- Applications: application:operaciones
- Partes interesadas: stakeholder:006, stakeholder:007
- Actores relacionados: actor:025
- Entidades de datos relacionadas: data-entity:001, data-entity:005
- Componentes relacionados: component:001
- Interfaces relacionadas: interface:001

<a id="requirement-083"></a>
## Restauración probada

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:083</code></span>

- Descripción: El proceso de restauración de datos deberá ser probado al menos una vez al mes para validar su éxito.
- Tipo: Operational
- Prioridad: Critical
- Justificación: Asegura que la política de copias de seguridad realmente puede recuperarse en caso de necesidad.
- Applications: application:operaciones
- Partes interesadas: stakeholder:006, stakeholder:007
- Actores relacionados: actor:025
- Entidades de datos relacionadas: data-entity:001, data-entity:005
- Componentes relacionados: component:001
- Interfaces relacionadas: interface:001

<a id="requirement-084"></a>
## Mantenimiento planificado

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:084</code></span>

- Descripción: El sistema deberá requerir un tiempo de inactividad planificado máximo de 4 horas por mes para mantenimiento.
- Tipo: Operational
- Prioridad: Medium
- Justificación: Balancea la necesidad de actualizaciones con la continuidad del servicio al usuario.
- Applications: application:operaciones
- Partes interesadas: stakeholder:006, stakeholder:007
- Actores relacionados: actor:013
- Interfaces relacionadas: interface:001, interface:004

<a id="requirement-085"></a>
## Protocolo de respuesta a incidentes

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:085</code></span>

- Descripción: El equipo de soporte deberá seguir un protocolo documentado para clasificar, escalar y resolver incidentes críticos (Severity 1).
- Tipo: Operational
- Prioridad: Critical
- Justificación: Minimiza el tiempo de resolución (MTTR) de fallos mayores.
- Applications: application:operaciones
- Partes interesadas: stakeholder:006, stakeholder:007
- Actores relacionados: actor:007, actor:013, actor:025
- Interfaces relacionadas: interface:001

<a id="requirement-086"></a>
## Desacoplamiento de almacenamiento

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:086</code></span>

- Descripción: El componente de Telemetría (Vehicle Telemetry Service) no debe depender de la base de datos relacional para su operación primaria.
- Tipo: Technical
- Prioridad: High
- Justificación: Evita que un fallo en la base de datos detenga el flujo de datos de telemetría en tiempo real.
- Applications: application:arquitectura
- Partes interesadas: stakeholder:006, stakeholder:007
- Actores relacionados: actor:013
- Entidades de datos relacionadas: data-entity:001
- Componentes relacionados: component:007, component:001
- Interfaces relacionadas: interface:003

<a id="requirement-087"></a>
## Mecanismos de anti-corrupción

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:087</code></span>

- Descripción: Se deberá incluir una capa de anti-corrupción para mapear los modelos de dominio externos a los modelos internos del sistema.
- Tipo: Technical
- Prioridad: Medium
- Justificación: Aísla el núcleo del sistema de los cambios en formatos de datos externos (ej. GTFS-RT de diferentes fuentes).
- Applications: application:arquitectura
- Partes interesadas: stakeholder:007
- Actores relacionados: actor:013
- Entidades de datos relacionadas: data-entity:001
- Componentes relacionados: component:007
- Interfaces relacionadas: interface:003, interface:001

<a id="requirement-088"></a>
## Comunicación asíncrona interna

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:088</code></span>

- Descripción: Los componentes internos (Telemetría, Info Server, BD) deberán comunicarse asíncronamente (colas/brokers de mensajes).
- Tipo: Technical
- Prioridad: High
- Justificación: Mejora la elasticidad, la tolerancia a fallos y la capacidad de absorber picos de tráfico.
- Applications: application:arquitectura
- Partes interesadas: stakeholder:006, stakeholder:007
- Actores relacionados: actor:013
- Entidades de datos relacionadas: data-entity:001
- Componentes relacionados: component:007, component:005
- Interfaces relacionadas: interface:003, interface:001

<a id="requirement-089"></a>
## Diseño para el testeo (Testability)

<span class="catalog-badge" style="--catalog-badge-bg:#FFF7E6"><span class="catalog-icon material-symbols-outlined">rule</span><code style="background:none;padding:0;margin:0;border:0;">requirement:089</code></span>

- Descripción: Cada componente de servicio deberá tener una interfaz clara para la inyección de dependencias y la simulación de datos (mocking).
- Tipo: Technical
- Prioridad: Medium
- Justificación: Facilita la escritura de pruebas unitarias y de integración, mejorando la calidad del software.
- Applications: application:arquitectura
- Partes interesadas: stakeholder:007
- Actores relacionados: actor:014
- Componentes relacionados: component:007, component:003
- Interfaces relacionadas: interface:001, interface:004
