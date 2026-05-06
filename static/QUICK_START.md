# Quick Start Static

Guia corta para mantener `static/` ordenado y sin carpetas placeholder.

## Checklist

- Verifica el CV en `static/docs/CV-Romel-Ante-Backend-Developer.pdf`.
- Confirma que `index.html` siga apuntando a esa ruta.
- Crea carpetas nuevas solo cuando tengan archivos reales.
- Revisa `.gitignore` antes de intentar versionar PDFs o multimedia.

## Estructura actual

```text
static/
|- README.md
|- QUICK_START.md
`- docs/
   |- CV-Romel-Ante-Backend-Developer.pdf
   `- README.md
```

## Regla principal

- Una carpeta que solo tenga `README.md` no se mantiene en Git.
- Si aun no existe contenido real, documenta la idea en `static/README.md`.
- `static/images/` y `static/media/` se crean solo cuando haya assets reales.

## Casos comunes

- Reemplazar CV actual: conserva el nombre o actualiza el enlace en `index.html`.
- Agregar documentos nuevos: usa nombres descriptivos y revisa si `.gitignore` los esta excluyendo.
- Agregar imagenes o videos: crea la carpeta en ese momento, no antes.
