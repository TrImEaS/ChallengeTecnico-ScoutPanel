# ScoutPanel - Challenge Técnico

Plataforma Fullstack diseñada para scouts profesionales de fútbol. Permite la búsqueda avanzada de jugadores, análisis detallado de estadísticas y comparativa side-by-side con visualizaciones dinámicas.

## 🚀 Inicio Rápido (Docker)

Para que la aplicación funcione correctamente, asegúrate de tener instalados **Docker** y **Docker Compose**.

### 1. Requisitos Previos

Asegúrate de que los siguientes puertos estén libres en tu sistema local:

- **3000**: Backend API
- **5432**: Base de Datos (PostgreSQL)
- **5173**: Frontend SPA

### 2. Despliegue

Desde la raíz del proyecto, ejecuta el siguiente comando:

```bash
docker-compose up --build
```

### 3. Acceso Local

Una vez finalizado el proceso de construcción e inicio, abre tu navegador en: 👉 http://localhost:5173

## 4. 🌐 Demo en Vivo

El proyecto se encuentra desplegado en producción y accesible en:
👉 **[https://trimeas.duckdns.org/](https://trimeas.duckdns.org/)**

---

## 🛠️ Stack Tecnológico & Arquitectura 🛠️

### 🛠️ Backend

- **NestJS, Prisma ORM, PostgreSQL, Jest (Testing).**
  Para el backend se optó por NestJS debido a su arquitectura modular y escalable, Prisma ORM por su facilidad de uso y ventajas sobre la auto-generación de tipos de TypeScript, y PostgreSQL como motor de base de datos relacional.

### 🎨 Frontend

- **React Router v7 (SPA Mode), Tailwind CSS, Zustand (State Management).**
  Para el frontend se optó por usar React Router v7 por su flexibilidad y facilidad de uso, Tailwind CSS para el estilizado y Zustand para el manejo del estado global optimizando el rendimiento en SPA.

### 🚀 Despliegue

- **Docker & Docker Compose**.

### 🔐 Type Safety & Data Integrity

- **TypeScript**
  Tanto en el backend como en el frontend se optó por usar TypeScript para asegurar la integridad del código y el tipado fuerte entre el cliente y el servidor, además de las ventajas que ofrece en cuanto a mantenibilidad y escalabilidad.

## 🤖 Uso de Inteligencia Artificial

Durante el desarrollo, utilicé herramientas de IA como asistentes de programación, manteniendo siempre la dirección arquitectónica:

- **Scaffolding Guiado:** Generación de estructuras base y boilerplate a partir de esqueletos y contexto estricto proporcionado por mí.
- **Productividad:** Creación de datos semilla (seeders) complejos, mocks de prueba y generación de la estructura inicial de los unit tests, los cuales luego pulí y adapté.
- **Optimización de Recursos:** Uso combinado de LLMs integrados y externos para gestionar el límite de tokens de manera eficiente.
- **Code Review:** Utilización como "segundo par de ojos" para detectar redundancias o sugerir micro-refactorizaciones en tiempo de desarrollo.

---

## 📊 Características Principales

### Búsqueda y Filtrado

Localiza jugadores utilizando múltiples criterios de búsqueda: Nombre, posición de juego, nacionalidad, edad mínima y máxima. Además cuenta con paginación para manejar grandes cantidades de datos.

### Comparativa de Jugadores

Analiza el rendimiento de múltiples jugadores simultáneamente:

- **Selección Múltiple**: Elige hasta 3 jugadores para comparar.
- **Visualización Gráfica**: Representación visual de estadísticas con radar chart.

### Interfaz Moderna

- **Sidebar Persistente**: Navegación rápida y acceso constante a todas las secciones.
- **Barra de Comparación Flotante**: Gestión inteligente de la selección de jugadores sin interrumpir el flujo de navegación.
- **Loading States**: Indicadores visuales de carga para mejorar la experiencia de usuario.

### 🎨 Features Bonus Implementadas

- **Deploy Live**: Aplicación accesible online en VPS propio.
- **Performance**: Implementación de paginación desde el backend.
- **UX**: Transiciones, estados de carga (Loading Overlays) y empty states.
- **Responsive/Mobile**: Diseño adaptable a múltiples pantallas.
- **Shortlist personal**: Para la comparativa se optó por guardar los jugadores seleccionados en un estado global (Zustand) para poder verlos en diferentes rutas y poder eliminarlos o agregarlos, sin necesidad de volver a buscarlos. Además de mantener el estado de la búsqueda en query params para que el usuario pueda compartir su búsqueda con sus colegas.

---

### Decisiones de Arquitectura

- **YAGNI (You Aren't Gonna Need It) & Seguridad**: Se mantuvo el esquema relacional exigido (Player, Team, Season, PlayerStats), pero se eliminaron los endpoints REST de mutación de esas entidades y módulos generados automáticamente por el CLI que no eran necesarios.
- **SPA Architecture**: Se optó por un modelo Single Page Application optimizado para dashboards internos, priorizando la velocidad de interacción tras la carga inicial, al tratarse de una herramienta analítica que no requiere indexación (SEO). En un escenario B2C de cara al público, se evaluaría una arquitectura SSR para optimizar el First Contentful Paint y el posicionamiento orgánico.
- **Clean Architecture & Type Safety**:
  - **Modularidad**: Lógica de negocio separada en servicios (backend) y componentes desacoplados (frontend).
- **UX & Performance**:
  - **Hydrate Fallback**: Implementación de una shell de carga inmediata para mejorar el LCP.
  - **Loading Overlays**: Feedback visual constante durante las transiciones de rutas y peticiones asíncronas.
  - **UX principal**: Se intentó adaptar lo más posible a las imágenes compartidas de referencia para satisfacer los requerimientos de UI y UX. Para ello, se implementó la paleta de colores (Background: #0F0F0F, Textos: #F2F2F2, Color primario: #00E094, Colores secundarios: #0C65D4 y #7533FC) y la tipografía Nunito Sans solicitadas en las guidelines visuales.

### 📝 Notas Técnicas

- **Seeding**: El contenedor de base de datos se autoprovisiona con datos de prueba realistas mediante Prisma Seed al iniciar por primera vez.
- **Smoke Testing Integrado**: Se ha configurado el orquestador (Docker Compose) para ejecutar la suite de tests unitarios tanto en el backend (Jest) como en el frontend (Vitest) durante la fase de despliegue. Si alguna prueba falla, los contenedores no se iniciarán, garantizando que el entorno de producción sea siempre íntegro y estable.

## 🔮 Próximos Pasos y Oportunidades de Mejora

Al priorizar un MVP funcional en un tiempo límite, ciertas optimizaciones arquitectónicas quedan como roadmap futuro:

- **Atomicidad en Frontend:** Desestructurar componentes complejos (como los dashboards de estadísticas o el control de contexto en `player-stats`) en subcomponentes más pequeños para maximizar la reutilización y facilitar el testing aislado.
- **UX / UI Loaders:** Reemplazar el `LoadingOverlay` global actual por un sistema de _Skeleton Screens_ dedicado por componente, mejorando la percepción de carga y evitando reflows en la UI.
- **Autenticación Moderna:** Implementar un sistema de sesión con JWT e integración de Google OAuth para facilitar el acceso de los usuarios.
- **Diversidad de Visualizaciones:** Integrar opciones adicionales al radar chart actual, como gráficos de barras y tablas comparativas, ofreciendo a los usuarios múltiples perspectivas para el análisis de datos.
- **Filtro por Temporadas (Seasons):** Añadir la capacidad de seleccionar y comparar estadísticas basadas en temporadas específicas e individuales para cada jugador seleccionado.
- **Testing E2E:** Sumar suites de pruebas de integración y End-to-End para automatizar el testeo de los flujos críticos de la aplicación.
- **Optimización de Renderizado:** Implementar estratégicamente `useMemo` y `useCallback` en los componentes con gráficos pesados para evitar re-renders innecesarios durante el filtrado dinámico.
- **CI/CD Pipeline:** Integrar GitHub Actions para que el testing, build y despliegue en el VPS se ejecuten automáticamente con cada push a la rama principal.

© 2026 ScoutPanel - Desarrollado para Challenge Técnico por Rojas Thomas.
