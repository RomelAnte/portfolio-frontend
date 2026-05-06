# Portafolio Frontend

Sitio estatico del portafolio profesional de Romel Ante.

## Estructura actual

```text
portfolio-frontend/
|- index.html
|- css/
|  `- style.css
|- js/
|  `- main.js
|- static/
|  |- README.md
|  |- QUICK_START.md
|  `- docs/
|     |- CV-Romel-Ante-Backend-Developer.pdf
|     `- README.md
`- .gitignore
```

## Regla para versionar carpetas

- Solo se suben carpetas que tengan contenido real.
- Una carpeta cuyo unico archivo sea `README.md` no se considera contenido util.
- La documentacion de carpetas futuras se centraliza en `static/README.md` para no mantener placeholders en Git.
- Git no versiona carpetas vacias, asi que `static/images/` o `static/media/` se crean solo cuando ya tengan archivos reales.

## Archivos estaticos

- El CV que usa el boton de descarga esta en `static/docs/CV-Romel-Ante-Backend-Developer.pdf`.
- `static/docs/` permanece versionada porque ya contiene un archivo real ademas de su `README.md`.
- Si luego agregas imagenes, videos o mas documentos, crea la carpeta correspondiente solo cuando vayas a guardar archivos reales dentro.

## Uso rapido

1. Abre `index.html` en el navegador o sirvelo localmente.
2. Si cambias el nombre o la ruta del CV, actualiza el enlace en `index.html`.
3. Revisa `static/README.md` antes de crear nuevas carpetas dentro de `static/`.

## Notas sobre .gitignore

- `.gitignore` ignora los `README.md` anidados dentro de `static/`, salvo los que si forman parte de la documentacion consolidada.
- Tambien mantiene fuera del repo archivos privados o pesados como PDFs adicionales y multimedia grande.

## Contacto

- Email: [romel20092002ante@gmail.com](mailto:romel20092002ante@gmail.com)
- LinkedIn: [linkedin.com/in/romel-ante](https://linkedin.com/in/romel-ante)
- GitHub: [github.com/RomelAnte](https://github.com/RomelAnte)
