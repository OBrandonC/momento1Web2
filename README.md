# 📚 Creciendo Juntos
### Plataforma de Cursos y Educación Complementaria

---

## 📋 Tabla de Contenidos

1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Misión y Visión](#misión-y-visión)
3. [Objetivos](#objetivos)
4. [Público Objetivo](#público-objetivo)
5. [Estructura de Contenidos](#estructura-de-contenidos)
6. [Funcionalidades Principales](#funcionalidades-principales)
7. [Tecnologías Sugeridas](#tecnologías-sugeridas)
8. [Versiones de Software](#versiones-de-software)
9. [Instalación y Ejecución Local](#instalación-y-ejecución-local)
10. [Roles y Responsabilidades](#roles-y-responsabilidades)
11. [Autores](#autores)
12. [Roadmap del Proyecto](#roadmap-del-proyecto)
13. [Métricas de Éxito](#métricas-de-éxito)
14. [Glosario](#glosario)

---

## 📖 Descripción del Proyecto

**Creciendo Juntos** es una plataforma educativa orientada a ofrecer cursos y contenidos de **educación complementaria**, diseñada para acompañar el proceso de aprendizaje de personas en distintas etapas de su vida.

El proyecto busca brindar herramientas de formación accesibles, inclusivas y de calidad, fomentando el aprendizaje continuo más allá del entorno académico formal.

---

## 🌟 Misión y Visión

### Misión
> Proporcionar experiencias de aprendizaje complementarias que potencien el desarrollo personal, académico y profesional de cada estudiante, en un ambiente colaborativo y accesible.

### Visión
> Ser la plataforma de referencia en educación complementaria de habla hispana, reconocida por la calidad de sus contenidos, la diversidad de sus cursos y el impacto positivo en sus comunidades.

---

## 🎯 Objetivos

### Objetivo General
Desarrollar una plataforma digital que facilite el acceso a educación complementaria de calidad para niños, jóvenes y adultos.

### Objetivos Específicos

- **Diseñar** un catálogo diverso de cursos organizados por nivel y área temática.
- **Implementar** herramientas interactivas que faciliten el aprendizaje autónomo.
- **Crear** una comunidad de aprendizaje activa entre estudiantes e instructores.
- **Garantizar** la accesibilidad de los contenidos para personas con distintas capacidades.
- **Medir** el progreso individual de cada estudiante a través de métricas claras.

---

## 👥 Público Objetivo

| Segmento | Edad | Perfil |
|----------|------|--------|
| Niños | 6 – 12 años | Educación primaria, aprendizaje lúdico |
| Adolescentes | 13 – 17 años | Refuerzo escolar, habilidades blandas |
| Adultos jóvenes | 18 – 30 años | Capacitación profesional, nuevas habilidades |
| Adultos | 31+ años | Actualización laboral, intereses personales |

---

## 🗂️ Estructura de Contenidos

### Categorías de Cursos

```
Creciendo Juntos/
├── 📐 Matemáticas y Ciencias
│   ├── Aritmética básica
│   ├── Álgebra
│   └── Ciencias naturales
├── 📝 Lenguaje y Comunicación
│   ├── Lectoescritura
│   ├── Gramática
│   └── Oratoria
├── 💻 Tecnología e Informática
│   ├── Introducción a la computación
│   ├── Programación básica
│   └── Ofimática
├── 🎨 Arte y Creatividad
│   ├── Dibujo y pintura
│   ├── Música
│   └── Escritura creativa
└── 🌱 Desarrollo Personal
    ├── Habilidades blandas
    ├── Inteligencia emocional
    └── Liderazgo
```

### Tipos de Contenido por Curso

- 🎥 Videos explicativos
- 📄 Material descargable (PDF, guías)
- 🧩 Ejercicios y actividades interactivas
- 📝 Evaluaciones y quizzes
- 💬 Foros de discusión
- 🏆 Certificados de finalización

---

## ⚙️ Funcionalidades Principales

### Para Estudiantes
- [ ] Registro e inicio de sesión
- [ ] Explorar catálogo de cursos
- [ ] Inscripción a cursos gratuitos y de pago
- [ ] Seguimiento de progreso personal
- [ ] Descarga de materiales
- [ ] Participación en foros
- [ ] Obtención de certificados

### Para Instructores
- [ ] Panel de administración de cursos
- [ ] Subida de videos y materiales
- [ ] Creación de evaluaciones
- [ ] Seguimiento de estudiantes inscritos
- [ ] Comunicación directa con estudiantes

### Para Administradores
- [ ] Gestión de usuarios y roles
- [ ] Moderación de contenidos
- [ ] Reportes y estadísticas
- [ ] Configuración de pagos

---

## 🛠️ Tecnologías Sugeridas

### Frontend (Interfaz visual)
- **HTML, CSS, JavaScript** — Base del sitio web
- **React.js** — Componentes interactivos
- **Tailwind CSS** — Estilos modernos y responsivos

### Backend (Lógica del servidor)
- **Node.js + Express** — Servidor y API REST
- **Python + Django** — Alternativa robusta para gestión de contenidos

### Base de Datos
- **PostgreSQL** — Datos relacionales (usuarios, cursos, inscripciones)
- **MongoDB** — Contenido dinámico y multimedia

### Infraestructura
- **AWS / Google Cloud** — Hosting y almacenamiento de videos
- **Firebase** — Autenticación y notificaciones en tiempo real

---

## 📦 Versiones de Software

A continuación se listan las versiones exactas utilizadas en el proyecto, extraídas del `package-lock.json`:

| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| **Node.js** | ^20.19.0 o >=22.12.0 | Entorno de ejecución requerido por Vite y el plugin React |
| **npm** | >=8.0.0 | Gestor de paquetes |
| **React** | 19.2.4 | Librería principal de interfaz de usuario |
| **React DOM** | 19.2.4 | Renderizado de React en el navegador |
| **Vite** | 7.3.1 | Herramienta de desarrollo y bundler |
| **@vitejs/plugin-react-swc** | 4.2.3 | Plugin React con compilador SWC para Vite |
| **ESLint** | 9.39.3 | Linter de código JavaScript/JSX |
| **eslint-plugin-react-hooks** | 7.0.1 | Reglas ESLint para React Hooks |
| **eslint-plugin-react-refresh** | 0.4.26 | Soporte para React Fast Refresh en ESLint |
| **@swc/core** | 1.15.18 | Compilador JavaScript/TypeScript de alto rendimiento |
| **PostCSS** | 8.5.6 | Procesador de CSS |
| **Rollup** | 4.59.0 | Bundler de módulos (usado internamente por Vite) |
| **Git** | v2.40+ | Control de versiones |

> ⚠️ Este proyecto usa **React 19** (versión más reciente). Asegúrate de que Node.js sea **v20.19.0 o superior** antes de instalar.

---

## 🚀 Instalación y Ejecución Local

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local.

### Prerrequisitos

Asegúrate de tener instalado lo siguiente antes de comenzar:

- [Node.js v20.19.0 o superior](https://nodejs.org/) *(requerido por Vite 7)*
- [Git](https://git-scm.com/)

Puedes verificar tus versiones con:

```bash
node -v
npm -v
git --version
```

---

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/creciendo-juntos.git
cd creciendo-juntos
```

---

### 2. Instalar dependencias

```bash
npm install
```

Esto instalará automáticamente todas las dependencias definidas en el `package.json`, incluyendo React 19, Vite 7 y ESLint 9.

---

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

El proyecto estará disponible en: `http://localhost:5173`

---

### 4. Otros comandos disponibles

```bash
# Compilar para producción
npm run build

# Previsualizar el build de producción
npm run preview

# Ejecutar el linter
npm run lint
```

---

### 5. Verificar que todo funciona

Una vez levantado el servidor, abre tu navegador en:

```
http://localhost:5173
```

Si ves la pantalla de inicio de **Creciendo Juntos**, ¡la instalación fue exitosa! 🎉

---

## 👤 Roles y Responsabilidades

| Rol | Responsabilidades |
|-----|------------------|
| **Director del Proyecto** | Planificación, presupuesto, toma de decisiones estratégicas |
| **Desarrollador Frontend** | Diseño e implementación de la interfaz de usuario |
| **Desarrollador Backend** | Lógica del servidor, base de datos, API |
| **Diseñador UX/UI** | Experiencia del usuario, prototipos, guía visual |
| **Coordinador de Contenidos** | Gestión del catálogo, calidad pedagógica |
| **Instructor / Docente** | Creación y actualización de cursos |
| **Soporte** | Atención al estudiante, resolución de problemas |

---

## 🗓️ Roadmap del Proyecto

### Fase 1 — Planificación *(Mes 1–2)*
- [x] Definición del alcance del proyecto
- [x] Levantamiento de requerimientos
- [ ] Diseño de arquitectura tecnológica
- [ ] Prototipado inicial (wireframes)

### Fase 2 — Desarrollo MVP *(Mes 3–5)*
- [ ] Desarrollo del sistema de usuarios
- [ ] Implementación del módulo de cursos
- [ ] Integración del reproductor de video
- [ ] Sistema de evaluaciones básico

### Fase 3 — Lanzamiento Beta *(Mes 6)*
- [ ] Pruebas con usuarios reales
- [ ] Corrección de errores y ajustes
- [ ] Incorporación de primeros instructores

### Fase 4 — Lanzamiento Oficial *(Mes 7–8)*
- [ ] Campaña de marketing y difusión
- [ ] Apertura al público general
- [ ] Monitoreo y soporte post-lanzamiento

### Fase 5 — Crecimiento *(Mes 9+)*
- [ ] Nuevas categorías de cursos
- [ ] App móvil (iOS / Android)
- [ ] Programa de certificaciones oficiales

---

## 📊 Métricas de Éxito

| Métrica | Indicador | Meta (Año 1) |
|---------|-----------|-------------|
| Usuarios registrados | Nº de cuentas activas | 1.000 usuarios |
| Cursos completados | Tasa de finalización | > 60% |
| Satisfacción | Calificación promedio | ≥ 4.5 / 5 |
| Retención | Usuarios que regresan | > 40% mensual |
| Cursos disponibles | Catálogo total | 30 cursos |

---

## 📌 Glosario

| Término | Definición |
|---------|-----------|
| **MVP** | Minimum Viable Product – versión mínima funcional del producto |
| **LMS** | Learning Management System – sistema de gestión del aprendizaje |
| **API** | Interfaz de programación que conecta sistemas entre sí |
| **UX/UI** | Diseño de experiencia e interfaz de usuario |
| **Frontend** | Parte visible del sitio web que interactúa el usuario |
| **Backend** | Lógica interna del sistema que gestiona datos y procesos |
| **Wireframe** | Boceto o esquema visual de una pantalla o interfaz |
| **LTS** | Long Term Support – versión de software con soporte extendido |
| **ENV** | Variables de entorno que configuran el comportamiento del sistema |

---

## 📬 Contacto y Contribuciones

¿Tienes ideas, sugerencias o quieres contribuir al proyecto?

- 📧 Email: `contacto@creciendojuntos.org`
- 🌐 Sitio web: `www.creciendojuntos.org`
- 💬 Comunidad: `discord.gg/creciendojuntos`

---

## Tabla de Autores
| Nombre del Integrante | Usuario de GitHub |
| :--- | :--- |
| Daniel Martínez Echavarría       | [@DanielMartinez260906](https://github.com/DanielMartinez260906) |
| Carolina Martínez Mesa           | [@caromm80](https://github.com/caromm80)                         |
| Britany Alexandra Montoya Tirado | [@Britany-mon](https://github.com/Britany-mon)                   |
| Brandon Ciro Ortiz               | [@OBrandonC](https://github.com/OBrandonC)                       |
| Samuel Hoyos Vanegas             | [@SamuelH1211](https://github.com/SamuelH1211)                   |


*Documentación generada para el proyecto **Creciendo Juntos** — Versión 1.0*  
*Última actualización: Marzo 2026*