/* ============================================================
    DATA — Simulando respuesta de API/backend Django
    En producción: esto vendría de context_processors o API REST
    Astro lo obtendría con fetch() o directamente de props
============================================================ */

// Equivalente a: serializers.py → TechSerializer → /api/technologies/
const TECHNOLOGIES = {
  backend: [
    {
      name: "Python",
      icon: '<i class="fab fa-python"></i>',
      level: 75,
      color: "#3776ab",
    },
    {
      name: "Django",
      icon: '<i class="fas fa-server"></i>',
      level: 75,
      color: "#092e20",
    },
    {
      name: "PHP",
      icon: '<i class="fab fa-php"></i>',
      level: 70,
      color: "#777bb4",
    },
    {
      name: "CodeIgniter",
      icon: '<i class="fas fa-fire"></i>',
      level: 78,
      color: "#ef4223",
    },
    {
      name: "ASP.NET",
      icon: '<i class="fab fa-microsoft"></i>',
      level: 65,
      color: "#0078d7",
    },
    {
      name: "Node.js",
      icon: '<i class="fab fa-node-js"></i>',
      level: 45,
      color: "#68a063",
    },
  ],
  frontend: [
    {
      name: "React",
      icon: '<i class="fab fa-react"></i>',
      level: 40,
      color: "#61dafb",
    },
    {
      name: "JavaScript",
      icon: '<i class="fab fa-js-square"></i>',
      level: 65,
      color: "#f0db4f",
    },
    {
      name: "HTML5",
      icon: '<i class="fab fa-html5"></i>',
      level: 80,
      color: "#e34c26",
    },
    {
      name: "CSS3",
      icon: '<i class="fab fa-css3-alt"></i>',
      level: 80,
      color: "#cc6699",
    },
    {
      name: "Bootstrap",
      icon: '<i class="fab fa-bootstrap"></i>',
      level: 78,
      color: "#563d7c",
    },
  ],
  devops: [
    {
      name: "Git",
      icon: '<i class="fab fa-git-alt"></i>',
      level: 92,
      color: "#f05032",
    },
    {
      name: "GitHub",
      icon: '<i class="fab fa-github"></i>',
      level: 90,
      color: "#333",
    },
    {
      name: "GitLab",
      icon: '<i class="fab fa-gitlab"></i>',
      level: 85,
      color: "#fc6d26",
    },
    {
      name: "VS Code",
      icon: '<i class="fas fa-code"></i>',
      level: 80,
      color: "#007acc",
    },
    {
      name: "VS 2019",
      icon: '<i class="fas fa-code"></i>',
      level: 70,
      color: "#5c2d91",
    },
    {
      name: "Postman",
      icon: '<i class="fas fa-envelope"></i>',
      level: 70,
      color: "#ff6c37",
    },
    {
      name: "PostgreSQL",
      icon: '<i class="fas fa-database"></i>',
      level: 60,
      color: "#336791",
    },
    {
      name: "SQL Server",
      icon: '<i class="fas fa-server"></i>',
      level: 65,
      color: "#cc2927",
    },
    {
      name: "MySQL",
      icon: '<i class="fas fa-database"></i>',
      level: 60,
      color: "#4479a1",
    },
  ],
};

// Equivalente a: ProjectSerializer → /api/projects/?featured=true
const FEATURED_PROJECT = {
  id: 1,
  badge: '<i class="fas fa-star"></i> Proyecto destacado',
  title: "Modulo de Reserva de Laboratorios",
  description: `Sistema web desarrollado para la universidad que permite 
    al personal gestionar y reservar laboratorios. Arquitectura 
    robusta con ASP.NET Web Forms y SQL Server, pensada para 
    entornos institucionales.`,
  stack: ["ASP.NET", "SQL Server", "Bootstrap"],
  emoji: '<i class="fas fa-building"></i>',
  links: {
    demo: "",
    github: "https://github.com/Xavier747/ReservaLaboratorios.git",
  },
};

// Equivalente a: /api/projects/?featured=false&limit=3
const PROJECTS = [
  {
    id: 2,
    emoji: '<i class="fas fa-chart-bar"></i>',
    title: "Observatorio de Aseguramiento de la Calidad",
    description: `Actualización del sistema web del departamento de calidad 
      universitaria. En producción en la red institucional.`,
    stack: ["PHP", "MySQL", "Bootstrap"],
    demo: "https://observatorio.utc.edu.ec/",
    github: "",
  },
  {
    id: 3,
    emoji: '<i class="fas fa-building"></i>',
    title: "Sitio Web Parroquia San Buenaventura",
    description: `Sitio web institucional para la parroquia urbana de 
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
  },
];

/* ============================================================
    VISITOR COUNTER
    Usa GoatCounter para un contador discreto en el footer.
    1. Crea tu sitio en https://www.goatcounter.com/
    2. Activa "Allow adding visitor counts on your website"
    3. Reemplaza endpoint con tu URL real, por ejemplo:
       https://TU-CODIGO.goatcounter.com/count
============================================================ */

const VISITOR_COUNTER_CONFIG = {
  endpoint: "",
  periodStart: "month",
};

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

function normalizeGoatCounterBase(endpoint) {
  return endpoint.replace(/\/count\/?$/, "");
}

function setCounterValue(id, value) {
  const target = document.getElementById(id);
  if (target) {
    target.textContent = value;
  }
}

function loadGoatCounter(endpoint) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-goatcounter]');
    if (existing) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://gc.zgo.at/count.js";
    script.dataset.goatcounter = endpoint;
    script.dataset.goatcounterSettings = JSON.stringify({
      allow_local: true,
    });
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

async function fetchVisitorCount(baseUrl, start) {
  const query = start ? `?start=${encodeURIComponent(start)}` : "";
  const response = await fetch(`${baseUrl}/counter/TOTAL.json${query}`);

  if (!response.ok) {
    throw new Error(`No se pudo leer contador: ${response.status}`);
  }

  const data = await response.json();
  return data.count || "0";
}

async function updateVisitorCounter(baseUrl) {
  const [monthCount, totalCount] = await Promise.all([
    fetchVisitorCount(baseUrl, VISITOR_COUNTER_CONFIG.periodStart),
    fetchVisitorCount(baseUrl, ""),
  ]);

  setCounterValue("visitor-count-month", monthCount);
  setCounterValue("visitor-count-total", totalCount);
}

async function initVisitorCounter() {
  const counter = document.getElementById("visitor-counter");
  const endpoint = VISITOR_COUNTER_CONFIG.endpoint.trim();

  if (!counter || !endpoint) return;

  const baseUrl = normalizeGoatCounterBase(endpoint);

  try {
    await loadGoatCounter(endpoint);
    counter.hidden = false;

    await updateVisitorCounter(baseUrl);

    // Refresca una vez mas por si GoatCounter tarda unos segundos en procesar
    // la visita actual.
    setTimeout(() => {
      updateVisitorCounter(baseUrl).catch(() => {});
    }, 12000);
  } catch (error) {
    console.warn("Visitor counter no disponible:", error);
    counter.hidden = true;
  }
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
  const submitBtn = form.querySelector(".form-submit");
  const originalText = submitBtn.textContent;

  // Desactivar botón
  submitBtn.textContent = "Enviando...";
  submitBtn.style.opacity = "0.7";
  submitBtn.style.pointerEvents = "none";

  // Enviar formulario
  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
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
        throw new Error("Error en el envío");
      }
    })
    .catch((error) => {
      submitBtn.textContent = "✗ Error al enviar";
      submitBtn.style.background = "#ef4444";
      console.error("Error:", error);

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
  initVisitorCounter();

  // Iniciar observer después de render
  setTimeout(initReveal, 100);

  // Año actual en el footer
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
