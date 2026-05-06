# static/

Directorio de archivos estaticos versionados del proyecto.

## Estado actual

```text
static/
|- README.md
|- QUICK_START.md
`- docs/
   |- CV-Romel-Ante-Backend-Developer.pdf
   `- README.md
```

## Regla de carpetas

- No se mantiene en Git una carpeta cuyo unico archivo sea `README.md`.
- Si una carpeta futura todavia no tiene assets reales, documentala aqui en vez de crearla como placeholder.
- Crea `images/`, `media/` u otra subcarpeta solo cuando ya tengas archivos reales para guardar.

## Carpetas futuras

- `static/images/`: screenshots, fotos o iconos optimizados.
- `static/media/`: videos o animaciones cuando realmente existan en el proyecto.
- `static/docs/`: documentos versionados que si deban vivir dentro del repo.

## Convenciones basicas

- Usa nombres descriptivos y en kebab-case.
- Evita subir archivos temporales, exportaciones intermedias o placeholders.
- Si un archivo es privado o muy pesado, dejalo fuera del repo y usa un enlace externo cuando aplique.
