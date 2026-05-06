# Romel Ante — Portafolio Professional

> Backend Developer | Fullstack Specialist | Systems Architect

Sitio web profesional que presenta el portafolio, experiencia técnica y proyectos destacados de **Romel Ante**, desarrollador especializado en backend con Django y .NET, con capacidad fullstack para ejecutar proyectos end-to-end.

---

## 🎯 Descripción

Este proyecto es un **portafolio personal de alta performance** construido con tecnologías modernas, diseñado para presentar de manera profesional:

- **Stack tecnológico** en backend, frontend y DevOps
- **Proyectos destacados** con descripción, stack utilizado y enlaces
- **Experiencia laboral** e historial educativo
- **Canal de contacto directo** mediante formulario integrado
- **Interfaz responsiva** y optimizada para todos los dispositivos

El sitio enfatiza la calidad del código, la arquitectura limpia y la experiencia del usuario.

---

## 🚀 Características

### ✨ Frontend

- **HTML5 Semántico** con estructura limpia y accesible
- **CSS3 Moderno** con variables CSS y diseño responsivo
- **JavaScript Vanilla** sin dependencias innecesarias
- **Font Awesome 6.7** para iconografía profesional
- **Google Fonts** integradas (Syne, DM Mono, DM Sans)

### 🎨 Diseño

- **Animaciones fluidas** de scroll y reveal
- **Efecto typing** en el tagline del hero
- **Barra de progreso** de carga personalizada
- **Navegación hamburguesa** responsive
- **Grid backgrounds** decorativos
- **Tema oscuro** optimizado para lectura

### 📱 Responsividad

- Mobile-first approach
- Breakpoints optimizados
- Interfaz táctil amigable
- Performance optimizado

### 💬 Contacto

- **Formulario funcional** integrado con Formspree
- **Enlaces directos** a redes sociales (GitHub, LinkedIn)
- **Mailto integrado** para correo directo

---

## 📋 Stack Técnico

### Frontend

```
HTML5 | CSS3 | JavaScript ES6+
Font Awesome 6.7 | Google Fonts
```

### Herramientas

```
Git | VS Code | Postman
```

### Compatible con

```
Astro (en futuro) | Django Backend | REST APIs
```

---

## 📁 Estructura del Proyecto

```
portfolio-frontend/
├── index.html                 # Página principal
├── css/
│   └── style.css             # Estilos globales
├── js/
│   └── main.js               # Lógica y animaciones
├── README.md                 # Este archivo
├── .git/                     # Control de versiones
└── ...
```

### Secciones del Sitio

| Sección         | Contenido                                |
| --------------- | ---------------------------------------- |
| **Navbar**      | Logo, navegación interna, CTA            |
| **Hero**        | Presentación principal con typing effect |
| **Sobre Mí**    | Bio profesional y descripción            |
| **Stack**       | Tecnologías categorizadas con niveles    |
| **Proyectos**   | Galería de proyectos destacados          |
| **Experiencia** | Timeline de experiencia laboral          |
| **Contacto**    | Formulario y canales de comunicación     |
| **Footer**      | Links sociales y créditos                |

---

## 🔧 Instalación y Uso

### Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexión a Internet (para CDNs)

### Pasos

1. **Clonar el repositorio**

```bash
git clone https://github.com/RomelAnte/portfolio-frontend.git
cd portfolio-frontend
```

2. **Abrir en navegador**

```bash
# Opción 1: Doble clic en index.html
# Opción 2: Usar Live Server en VS Code
# Opción 3: Servir localmente
python -m http.server 8000
# Luego abrir http://localhost:8000
```

3. **Configurar formulario de contacto**
   - Crear cuenta en [formspree.io](https://formspree.io)
   - Obtener el ID del formulario
   - Reemplazar en `index.html` línea ~330:
   ```html
   <form action="https://formspree.io/f/TU_ID_AQUI" method="POST"></form>
   ```

---

## 📚 Secciones Principales

### Hero Section

Presentación impactante con:

- Animación de carga personalizada
- Efecto de escritura en el tagline
- Call-to-action dual (Proyectos / Contacto)

### Stack Tecnológico

Organizado en 3 categorías:

- **Backend**: Python, Django, PHP, CodeIgniter, ASP.NET, Node.js
- **Frontend**: React, JavaScript, HTML5, CSS3, Bootstrap
- **DevOps**: Git, GitHub, GitLab, VS Code, Postman, Bases de datos

### Proyectos Destacados

- Módulo de Reserva de Laboratorios (ASP.NET + SQL Server)
- Observatorio de Aseguramiento de Calidad (PHP + MySQL)
- Sitio Web Parroquia San Buenaventura (WIX)

### Formulario de Contacto

- Validación de campos requeridos
- Integración con Formspree
- Feedback visual en envío
- Estados de error/éxito

---

## 🎬 Funcionalidades JavaScript

### `handleFormSubmit(event)`

Gestiona el envío del formulario contacto:

```javascript
- Valida campos
- Envía datos vía Formspree
- Muestra feedback visual
- Resetea formulario
```

### Scroll Reveals

- Elementos se animan al entrar en viewport
- Efecto fade-in suave

### Typing Effect

- Efecto de escritura en tiempo real
- Palabras clave rotativas

---

## 🎨 Personalización

### Colores

Editar en `css/style.css`:

```css
:root {
  --accent-1: #00d9ff; /* Primario */
  --accent-2: #ff006e; /* Secundario */
  --bg-dark: #0a0a0a; /* Fondo */
  /* ... más variables */
}
```

### Contenido

Editar en `js/main.js`:

```javascript
const TECHNOLOGIES = {
  /* ... */
};
const FEATURED_PROJECT = {
  /* ... */
};
const PROJECTS = [
  /* ... */
];
const EXPERIENCE = [
  /* ... */
];
```

### Tipografía

Modificar en `index.html` (línea ~8):

```html
<link href="https://fonts.googleapis.com/css2?family=..." />
```

---

## 📊 Performance

- ⚡ **Carga rápida**: Recursos optimizados
- 📦 **Sin dependencias npm**: JavaScript vanilla
- 🎯 **Core Web Vitals**: Optimizado
- 🔍 **SEO ready**: HTML semántico

---

## 🌐 Despliegue

### Opciones Recomendadas

#### **Netlify** (Recomendado)

```bash
# Conexión directa con GitHub
1. Ir a netlify.com
2. Conectar repositorio
3. Deploy automático
```

#### **Vercel**

```bash
# Alternativa moderna
vercel deploy
```

#### **GitHub Pages**

```bash
# Gratuito con dominio github.io
1. Settings → Pages
2. Source: main branch
3. Publicado en https://username.github.io/portfolio-frontend
```

#### **Hosting Tradicional**

```bash
# Via FTP o terminal
scp -r * user@host:/public_html/
```

---

## 📝 Notas de Integración

### Django Backend

Cuando esté disponible el backend Django:

- Reemplazar `TECHNOLOGIES` con fetch de API
- Integrar sistema de comentarios
- Autenticación para admin panel

### Astro

Migración futura a Astro:

- Mejor performance con SSG
- Componentes reutilizables
- Server-side rendering opcional

---

## 🐛 Troubleshooting

| Problema            | Solución                       |
| ------------------- | ------------------------------ |
| Formulario no envía | Verificar ID Formspree en HTML |
| Iconos no cargan    | Verificar CDN Font Awesome     |
| Estilos rotos       | Limpiar caché (Ctrl+Shift+R)   |
| Animaciones lentas  | Disminuir efectos en CSS       |

---

## 📞 Contacto

- **Email**: [romel20092002ante@gmail.com](mailto:romel20092002ante@gmail.com)
- **LinkedIn**: [linkedin.com/in/romel-ante](https://linkedin.com/in/romel-ante)
- **GitHub**: [github.com/RomelAnte](https://github.com/RomelAnte)

---

## 📄 Licencia

Este proyecto está disponible bajo licencia **MIT**. Siéntete libre de usarlo como referencia o inspiración para tu propio portafolio.

---

## 🙏 Agradecimientos

- **Google Fonts** por tipografía de calidad
- **Font Awesome** por iconos profesionales
- **Formspree** por servicio de formularios
- **Comunidad Open Source** por herramientas y inspiración

---

**Última actualización**: Mayo 2026  
**Versión**: 1.0.0  
**Status**: ✅ En producción
