<!-- AUTO-GENERATED FILE - DO NOT EDIT. See scripts/generate-catalogs.mjs | Generated: 2026-02-10 -->

# Componentes de arquitectura

### Metadatos

| Campo | Valor |
| --- | --- |
| Versión | 0.1 |
| Fecha | 2025-11-27 |
| Descripción | Un catálogo de componentes de arquitectura para el sistema de información de transporte público (InfoTP). |
| Autores | Fabián Abarca Calderón |
| Organización | Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI) |
| Contacto | simovi@ucr.ac.cr |
| Licencia | CC BY-NC 4.0 |


<a id="component-backend"></a>
## Backend

<span class="catalog-badge" style="--catalog-badge-bg:#E6FFFB"><span class="catalog-icon material-symbols-outlined">schema</span><code style="background:none;padding:0;margin:0;border:0;">component:backend</code></span>

- Code: backend
- Description: El componente de backend es responsable de la lógica de negocio, el procesamiento de datos, la gestión de la base de datos y la exposición de APIs para el sistema de información
- Technologies: technology:python

<a id="component-state"></a>
## State

<span class="catalog-badge" style="--catalog-badge-bg:#E6FFFB"><span class="catalog-icon material-symbols-outlined">schema</span><code style="background:none;padding:0;margin:0;border:0;">component:state</code></span>

- Code: state
- Description: El componente de estado representa la información actual del sistema, incluyendo datos en tiempo real sobre el transporte público, como horarios, ubicaciones de vehículos, condiciones del tráfico, etc.
- Technologies: technology:redis

<a id="component-realtime-engine"></a>
## Real-time Engine

<span class="catalog-badge" style="--catalog-badge-bg:#E6FFFB"><span class="catalog-icon material-symbols-outlined">schema</span><code style="background:none;padding:0;margin:0;border:0;">component:realtime-engine</code></span>

- Code: realtime-engine
- Description: El componente de motor en tiempo real es responsable de procesar y analizar los datos en tiempo real para generar información útil para los usuarios, como predicciones de llegada, alertas de tráfico, etc.
- Technologies: technology:python, technology:rust

<a id="component-store"></a>
## Store

<span class="catalog-badge" style="--catalog-badge-bg:#E6FFFB"><span class="catalog-icon material-symbols-outlined">schema</span><code style="background:none;padding:0;margin:0;border:0;">component:store</code></span>

- Code: store
- Description: El componente de almacenamiento es responsable de almacenar y gestionar los datos históricos y en tiempo real del sistema, incluyendo información sobre rutas, horarios, vehículos, usuarios, etc.
- Technologies: technology:postgresql

<a id="component-mqtt-broker"></a>
## MQTT Broker

<span class="catalog-badge" style="--catalog-badge-bg:#E6FFFB"><span class="catalog-icon material-symbols-outlined">schema</span><code style="background:none;padding:0;margin:0;border:0;">component:mqtt-broker</code></span>

- Code: mqtt-broker
- Description: El componente de broker MQTT es responsable de gestionar la comunicación entre los diferentes componentes del sistema utilizando el protocolo MQTT, facilitando la transmisión de datos en tiempo real.
- Technologies: technology:nanomq

<a id="component-publisher"></a>
## Publisher

<span class="catalog-badge" style="--catalog-badge-bg:#E6FFFB"><span class="catalog-icon material-symbols-outlined">schema</span><code style="background:none;padding:0;margin:0;border:0;">component:publisher</code></span>

- Code: publisher
- Description: El componente de publicador es responsable de publicar información relevante para los usuarios, como horarios, ubicaciones de vehículos, alertas, etc., a través de diferentes canales de comunicación.
- Technologies: technology:python, technology:celery

<a id="component-scheduler"></a>
## Scheduler

<span class="catalog-badge" style="--catalog-badge-bg:#E6FFFB"><span class="catalog-icon material-symbols-outlined">schema</span><code style="background:none;padding:0;margin:0;border:0;">component:scheduler</code></span>

- Code: scheduler
- Description: El componente de programador es responsable de gestionar y coordinar las tareas y procesos del sistema, asegurando que se ejecuten de manera eficiente y oportuna.
- Technologies: technology:python, technology:celerybeat

<a id="component-message-broker"></a>
## Message Broker

<span class="catalog-badge" style="--catalog-badge-bg:#E6FFFB"><span class="catalog-icon material-symbols-outlined">schema</span><code style="background:none;padding:0;margin:0;border:0;">component:message-broker</code></span>

- Code: message-broker
- Description: El componente de broker de mensajes es responsable de facilitar la comunicación entre los diferentes componentes del sistema, gestionando el enrutamiento y la entrega de mensajes de manera eficiente.
- Technologies: technology:rabbitmq

<a id="component-analytics-engine"></a>
## Analytics Engine

<span class="catalog-badge" style="--catalog-badge-bg:#E6FFFB"><span class="catalog-icon material-symbols-outlined">schema</span><code style="background:none;padding:0;margin:0;border:0;">component:analytics-engine</code></span>

- Code: analytics-engine
- Description: El componente de motor de análisis es responsable de procesar y analizar los datos del sistema para generar información útil para la toma de decisiones, como patrones de uso, tendencias, etc.
- Technologies: technology:python, technology:prefect
