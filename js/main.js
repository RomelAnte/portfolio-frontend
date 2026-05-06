/* ============================================================
    DATA — Simulando respuesta de API/backend Django
    En producción: esto vendría de context_processors o API REST
    Astro lo obtendría con fetch() o directamente de props
============================================================ */

// Equivalente a: serializers.py → TechSerializer → /api/technologies/
const TECHNOLOGIES = {
  backend: [
    { name: "Python", icon: "🐍", level: 95, color: "#3776ab" },
    { name: "Django", icon: "🎸", level: 90, color: "#092e20" },
    /*{ name: "DRF", icon: "🔌", level: 85, color: "#a30000" },*/
    { name: "PostgreSQL", icon: "🐘", level: 82, color: "#336791" },
    /*{ name: "Redis", icon: "🔴", level: 75, color: "#dc382d" },
    { name: "Celery", icon: "🌿", level: 70, color: "#37814a" },*/
  ],
  frontend: [
    /*{ name: "Astro", icon: "🚀", level: 88, color: "#ff5d01" },
    { name: "JavaScript", icon: "⚡", level: 87, color: "#f7df1e" },
    { name: "TypeScript", icon: "🔷", level: 80, color: "#3178c6" },
    { name: "React", icon: "⚛️", level: 82, color: "#61dafb" },*/
    { name: "CSS / SCSS", icon: "🎨", level: 88, color: "#cc6699" },
    //{ name: "Tailwind", icon: "🌬️", level: 85, color: "#38bdf8" },
  ],
  devops: [
    //{ name: "Docker", icon: "🐳", level: 78, color: "#2496ed" },
    { name: "Git", icon: "🌿", level: 92, color: "#f05032" },
    /*{ name: "Linux", icon: "🐧", level: 75, color: "#fcc624" },
    { name: "Nginx", icon: "🟩", level: 70, color: "#009900" },*/
  ],
};

// Equivalente a: ProjectSerializer → /api/projects/?featured=true
const FEATURED_PROJECT = {
  id: 1,
  badge: "✦ Proyecto destacado",
  title: "Modulo de Reserva de Laboratorios",
  description:
    `Sistema web desarrollado para la universidad que permite 
    al personal gestionar y reservar laboratorios. Arquitectura 
    robusta con ASP.NET Web Forms y SQL Server, pensada para 
    entornos institucionales.`,
  stack: ["ASP.NET", "SQL Server", "Bootstrap"],
  emoji: "🏛️",
  links: {
    demo: "",
    github: "https://github.com/Xavier747/ReservaLaboratorios.git"
  },
};

// Equivalente a: /api/projects/?featured=false&limit=3
const PROJECTS = [
  {
    id: 2,
    emoji: "📊",
    title: "Observatorio de Aseguramiento de la Calidad",
    description:
      `Actualización del sistema web del departamento de calidad 
      universitaria. En producción en la red institucional.`,
    stack: ["PHP", "MySQL", "Bootstrap"],
    demo: "https://observatorio.utc.edu.ec/",
    github: "",
  },
  {
    id: 3,
    emoji: "🏛️",
    title: "Sitio Web Parroquia San Buenaventura",
    description:
      `Sitio web institucional para la parroquia urbana de 
      Latacunga. Diseño limpio orientado a la comunidad local.`,
    stack: ["WIX"],
    demo: "https://sanbuenaventurapar.wixsite.com/parroquia-urbana-san",
    github: "",
  },
];

// Equivalente a: /api/experience/
const EXPERIENCE = [
  {
    date: "2022 — Presente",
    role: "Fullstack Developer",
    company: "TechStartup S.A.",
    desc: "Arquitecto y desarrollador principal de plataforma SaaS con +3,000 usuarios. Stack: Django + React. Implementé CI/CD y reduje el tiempo de deploy en 60%.",
    tags: ["Django", "React", "Docker", "PostgreSQL"],
  },
  {
    date: "2021 — 2022",
    role: "Backend Developer",
    company: "Agencia Digital XYZ",
    desc: "Desarrollo de APIs REST para 5+ proyectos de clientes. Integración con Stripe, SendGrid y servicios AWS.",
    tags: ["Python", "Django REST", "AWS", "Redis"],
  },
  {
    date: "2020 — 2021",
    role: "Desarrollador Jr.",
    company: "Freelance",
    desc: "Proyectos web a medida para clientes locales. Portafolios, landing pages y sitios institucionales.",
    tags: ["HTML/CSS", "JavaScript", "WordPress"],
  },
];

const EDUCATION = [
  {
    date: "2020 — 2025",
    role: "Ing. en Sistemas de Información",
    company: "Universidad Técnica de Cotopaxi",
    desc: "",
    tags: ["Algoritmos", "BD", "Redes", "Software"],
  },
  {
    date: "2025",
    role: "Desarrollo de Aplicaciones Fullstack",
    company: "DAMISOFT",
    desc: "",
    tags: ["React", "Node.js", "MySQL", "Git"],
  },
  {
    date: "2025",
    role: "Cloud Computing Desde Cero",
    company: "DAMISOFT",
    desc: "",
    tags: ["Google Cloud", "Cloud", "DevOps", "Infraestructura"],
  },
  {
    date: "2024",
    role: "Desarrollo Multiplataforma con Python",
    company: "Ministerio del Trabajo",
    desc: "",
    tags: ["Python", "Multiplataforma"],
  }
];

/* ============================================================
    RENDER FUNCTIONS
============================================================ */

function renderTech(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = data
    .map(
      (t) => `
    <div class="tech-card reveal" style="--accent-color:${t.color}40; --level:${t.level}%">
    <span class="tech-icon">${t.icon}</span>
    <div class="tech-name">${t.name}</div>
    <div class="tech-level-bar">
        <div class="tech-level-fill" style="background:${t.color}"></div>
    </div>
    <div class="tech-level-label">${t.level}%</div>
    </div>
`,
    )
    .join("");
}

function renderFeaturedProject(p) {
  const el = document.getElementById("featured-project");
  if (!el) return;
  el.innerHTML = `
    <div class="project-visual">
    <div class="project-visual-grid"></div>
    <span style="position:relative;z-index:1;font-size:5rem">${p.emoji}</span>
    </div>
    <div class="project-info">
    <span class="project-badge">${p.badge}</span>
    <h3 class="project-title">${p.title}</h3>
    <p class="project-desc">${p.description}</p>
    <div class="project-stack">
        ${p.stack.map((s) => `<span class="stack-tag">${s}</span>`).join("")}
    </div>
    <div class="project-links">
        ${
          p.links.demo
            ? `<a href="${p.links.demo}" class="project-link" target="_blank">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        Demo en vivo
        </a>`
            : ""
        }
        ${
          p.links.github
            ? `<a href="${p.links.github}" class="project-link" target="_blank">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
        Código fuente
        </a>`
            : ""
        }
    </div>
    </div>
`;
}

function renderProjects(projects) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = projects
    .map(
      (p) => `
    <div class="project-card reveal">
    <div class="card-top">
        <span class="project-emoji">${p.emoji}</span>
        <div class="project-card-links">
        ${
          p.github
            ? `<a href="${p.github}" target="_blank" title="GitHub">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
        </a>`
            : ""
        }
        ${
          p.demo
            ? `<a href="${p.demo}" target="_blank" title="Demo">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>`
            : ""
        }
        </div>
    </div>
    <div class="project-card-title">${p.title}</div>
    <div class="project-card-desc">${p.description}</div>
    <div class="project-stack">
        ${p.stack.map((s) => `<span class="stack-tag">${s}</span>`).join("")}
    </div>
    </div>
`,
    )
    .join("");
}

function renderTimeline(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items
    .map(
      (item) => `
    <div class="timeline-item reveal">
    <div class="timeline-date">${item.date}</div>
    <div class="timeline-role">${item.role}</div>
    <div class="timeline-company">${item.company}</div>
    <div class="timeline-desc">${item.desc}</div>
    <div class="timeline-tags">
        ${item.tags.map((t) => `<span class="timeline-tag">${t}</span>`).join("")}
    </div>
    </div>
`,
    )
    .join("");
}

/* ============================================================
    TYPING EFFECT
============================================================ */
const phrases = [
  "Backend specialist.",
  "Django developer.",
  "Problem solver.",
  "Clean code advocate.",
  "Building real systems.",
];

let phraseIndex = 0,
  charIndex = 0,
  isDeleting = false;

function typeEffect() {
  const el = document.getElementById("typing-text");
  if (!el) return;
  const current = phrases[phraseIndex];
  if (!isDeleting) {
    el.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1800);
      return;
    }
  } else {
    el.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 50 : 90);
}

/* ============================================================
    INTERSECTION OBSERVER — Animaciones scroll
============================================================ */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Activar barras de tecnología
          if (entry.target.classList.contains("tech-card")) {
            entry.target.classList.add("visible");
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

/* ============================================================
    LOADER
============================================================ */
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
    typeEffect();
  }, 1600);
});

/* ============================================================
    FORM SUBMIT (Formspree integration)
============================================================ */
function handleFormSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const submitBtn = form.querySelector('.form-submit');
  const originalText = submitBtn.textContent;
  
  // Desactivar botón
  submitBtn.textContent = "Enviando...";
  submitBtn.style.opacity = "0.7";
  submitBtn.style.pointerEvents = "none";
  
  // Enviar formulario
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      submitBtn.textContent = "✓ ¡Mensaje enviado!";
      submitBtn.style.background = "#22c55e";
      form.reset();
      
      // Reset después de 3s
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = "";
        submitBtn.style.opacity = "1";
        submitBtn.style.pointerEvents = "";
      }, 3000);
    } else {
      throw new Error('Error en el envío');
    }
  })
  .catch(error => {
    submitBtn.textContent = "✗ Error al enviar";
    submitBtn.style.background = "#ef4444";
    console.error('Error:', error);
    
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.style.background = "";
      submitBtn.style.opacity = "1";
      submitBtn.style.pointerEvents = "";
    }, 3000);
  });
}

/* ============================================================
    INIT — Renderizar todo al cargar
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderTech(TECHNOLOGIES.backend, "tech-backend");
  renderTech(TECHNOLOGIES.frontend, "tech-frontend");
  renderTech(TECHNOLOGIES.devops, "tech-devops");
  renderFeaturedProject(FEATURED_PROJECT);
  renderProjects(PROJECTS);
  renderTimeline(EXPERIENCE, "timeline-exp");
  renderTimeline(EDUCATION, "timeline-edu");

  // Iniciar observer después de render
  setTimeout(initReveal, 100);

  // Año actual en el footer
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
