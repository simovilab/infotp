workspace "Databús" "Recolección de datos y construcción de suministros (feeds) GTFS" {
	
	model {
		databus = softwareSystem "Databús" "Datos de transporte público en tiempo real" {
			backend = container "Servidor en tiempo real" "Gestiona el procesamiento de datos en tiempo real" "Django" {
				rtRest = component "API REST" "Expone endpoints REST públicos" "Django REST Framework"
				rtGraphql = component "API GraphQL" "Gestiona consultas y suscripciones GraphQL" "Strawberry GraphQL"
			}
			store = container "Base de datos" "Almacena datos de transporte" "PostgreSQL" "Database" {
				dbPostgis = component "Extensión PostGIS" "Soporte geoespacial" "PostGIS"
				dbTimescale = component "Extensión TimescaleDB" "Soporte de series temporales" "TimescaleDB"
				dbVector = component "Almacenamiento de vectores" "Almacena vectores" "pg_vector"
			}
			state = container "Estado del sistema" "Almacena en caché datos de acceso frecuente" "Redis" {
				imdbHash = component "Caché de hashes" "Almacena en caché instantáneas de datos" "Redis Hashes"
				imdbStream = component "Caché de flujos" "Almacena en caché datos de flujos en tiempo real" "Redis Streams"
			}
			realtimeEngine = container "Motor de tiempo real" "Real-time reasoning and state evolution." "Python | Rust"
			mqttBroker = container "Intermediador pub/sub" "Colas e ingreso MQTT" "NanoMQ"
			messageBroker = container "Intermediador de mensajes" "Gestión de colas de mensajes" "RabbitMQ"
			publisher = container "Publicador de datos" "Genera y publica suministros de datos" "Celery"
			scheduler = container "Programador de tareas" "Programa tareas periódicas" "Celery Beat"
			analytics = container "Plataforma de análisis" "Orquestación de tareas de análisis" "Prefect"
		}
		
		// -------------
		// Relationships
		// -------------
		
		backend -> store "Accede a datos del servicio y administrativos" "SQL"
		mqttBroker -> realtimeEngine "Reenvía telemetría" "MQTT"
		backend -> messageBroker "Emite comandos y tareas" "AMQP"
		realtimeEngine -> messageBroker "Emite observaciones" "AMQP"
		realtimeEngine -> store "Registra trazos de viajes" "SQL"
		realtimeEngine -> state "Actualiza estado del sistema" "Redis"
		scheduler -> publisher "Programa tareas de publicación" "AMQP"
		state -> publisher "Proporciona el estado del sistema para publicación" "Redis"
		publisher -> store "Registra datos publicados" "SQL"
		publisher -> messageBroker "Emite notificaciones" "AMQP"
		messageBroker -> realtimeEngine "Reenvía comandos y tareas" "AMQP"
		messageBroker -> publisher "Reenvía comandos y tareas" "AMQP"
		messageBroker -> backend "Reenvía observaciones" "AMQP"
		messageBroker -> backend "Reenvía notificaciones" "AMQP"
		store -> analytics "Proporciona datos para análisis" "SQL"
		
	}
	
	views {
		styles {
			element "Software System" {
				background "#1168bd"
				color "#ffffff"
				shape roundedBox
			}
			element "Container" {
				background "#438dd5"
				color "#ffffff"
				shape roundedBox
			}
			element "Component" {
				background "#85bbf0"
				color "#000000"
				shape roundedBox
			}
			element "Database" {
				shape cylinder
			}
			element "Other" {
				background "#999999"
				color "#000000"
			}
			element "App" {
				background "#1168bd"
				color "#ffffff"
				shape MobileDevicePortrait
			}
		}
	}
}
