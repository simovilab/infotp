workspace "Databús" "Recolección de datos y construcción de suministros (feeds) GTFS" {
	
	model {
		operator = person "Operador" "Chofer o despachador que usa la aplicación móvil para configurar un viaje"
		group "Dispositivos en el vehículo" {
			sensors = softwareSystem "Sensores en el vehículo" "Dispositivos IoT en vehículos que envían datos de ubicación y estado" "Other"
			otherDevices = softwareSystem "Otros dispositivos" "Otros dispositivos IoT en vehículos que envían datos de ubicación y estado" "Other"
			app = softwareSystem "Databús App" "A1e\nAplicación móvil para datos de transporte público" "App" {
				mobilePlatform = container "Dispositivo móvil" "A1e-1\nAplicación móvil multiplataforma" "Capacitor" {
					mobileApp = component "Aplicación móvil" "Interfaz de usuario para conductores y operadores" "Ionic, Vue"
					mobileSensors = component "Sensores del dispositivo móvil" "Alternativa de bajo costo para rastreo y telemetría básica" "GPS, acelerómetros, otros sensores"
				}
				mobileMqttClient = container "Cliente móvil MQTT" "A1e-2\nGestiona datos en tiempo real vía MQTT" "Paho MQTT"
			}
		}
		group "Plataforma de datos" {
			databus = softwareSystem "Databús" "Datos de transporte público en tiempo real" {
				rt = container "Servidor en tiempo real" "A1a\nGestiona el procesamiento de datos en tiempo real" "Django" {
					rtGtfs = component "Procesador GTFS" "A1a-1\nProcesa datos GTFS" "Django app"
					rtRest = component "API REST" "A1a-2\nExpone endpoints REST públicos" "Django REST Framework"
					rtGraphql = component "API GraphQL" "A1a-3\nGestiona consultas y suscripciones GraphQL" "Strawberry GraphQL"
					rtQueue = component "Cola de tareas" "A1a-4\nGestiona tareas en segundo plano" "Celery"
					rtStream = component "Procesador de flujos de datos" "A1a-5\nProcesa flujos de datos en tiempo real" "Bytewax"
				}
				db = container "Base de datos" "A1b\nAlmacena datos de transporte" "PostgreSQL" "Database" {
					dbPostgis = component "Extensión PostGIS" "A1b-1\nSoporte geoespacial" "PostGIS"
					dbTimescale = component "Extensión TimescaleDB" "A1b-2\nSoporte de series temporales" "TimescaleDB"
					dbDocument = component "Almacenamiento de documentos" "A1b-3\nAlmacena documentos JSON" "DocumentDB"
				}
				imdb = container "Base de datos en memoria" "A1c\nAlmacena en caché datos de acceso frecuente" "Redis" {
					imdbHash = component "Caché de hashes" "A1c-1\nAlmacena en caché instantáneas de datos" "Redis Hashes"
					imdbStream = component "Caché de flujos" "A1c-2\nAlmacena en caché datos de flujos en tiempo real" "Redis Streams"
				}
				mqttBroker = container "Intermediador pub/sub" "A1d\nColas e ingreso MQTT" "RabbitMQ (MQTT)"
				
			}
		}
		group "Consumidores de datos" {
			consumers = softwareSystem "Otros sistemas" "Aplicaciones, investigadores, integradores (consumen feeds públicos)" "Other"
		}
		
		// -------------
		// Relationships
		// -------------
		
		sensors -> app "Proporciona datos de sensores del vehículo" "Bluetooth, CAN bus, Zigbee, REST/HTTPS"
		otherDevices -> app "Proporciona datos de otros dispositivos del vehículo" "Bluetooth, REST/HTTPS"
		app -> databus "Proporciona datos en tiempo real" "REST/HTTPS, WebSocket, MQTT"
		rtGtfs -> consumers "Publica GTFS Schedule" "HTTP/ZIP (.zip)"
		rtGtfs -> consumers "Publica GTFS Realtime" "HTTP/Protobuf (.pb)"
		
		// App
		operator -> mobileApp "Usa la aplicación móvil" "UI"
		mobileApp -> rtGraphql "Consume API pública" "GraphQL/HTTPS"
		mobileApp -> rtRest "Consume API Pública" "REST/HTTPS"
		mobileSensors -> mobileMqttClient "Envía datos en tiempo real de alta frecuencia" "MQTT"
		mobileMqttClient -> mqttBroker "Envía y recibe datos en tiempo real" "MQTT"
		mqttBroker -> imdbStream "Almacena en caché datos de flujos en tiempo real" "Redis Streams"
		
		// Databús
		imdbStream -> rtStream "Proporciona datos de flujos en tiempo real" "Bytewax"
		rtStream -> imdbHash "Almacena en caché instantáneas de datos" "Redis Hashes"
		imdbHash -> rtQueue "Proporciona datos en caché para procesamiento en segundo plano" "Redis (Pub/Sub)"
		rtQueue -> rtGtfs "Procesa datos GTFS en segundo plano" "Django app"
		rtQueue -> db "Procesa datos GTFS en segundo plano" "Django app"
		rtGtfs -> db "Realiza transacciones con datos GTFS" "SQL"
		rtRest -> db "Accede a datos del servicio y administrativos" "SQL"
		rtGraphql -> db "Accede a datos del servicio y administrativos" "SQL"
		
	}
	
	views {
		styles {
			element "Person" {
				background "#08427b"
				color "#ffffff"
				shape person
			}
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
