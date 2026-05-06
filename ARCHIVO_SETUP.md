# Setup de Archivos Estaticos

Guia de referencia para mantener la carpeta `static/` alineada con la politica del repo.

## Objetivo

- Versionar solo carpetas con contenido real.
- Evitar placeholders que existan solo por un `README.md`.
- Mantener documentacion corta y centralizada.

## Estructura actual

```text
portfolio-frontend/
|- index.html
|- static/
|  |- README.md
|  |- QUICK_START.md
|  `- docs/
|     |- CV-Romel-Ante-Backend-Developer.pdf
|     `- README.md
`- .gitignore
```

## Regla de versionado

- Git no sube carpetas vacias.
- Una carpeta cuyo unico archivo sea `README.md` no debe mantenerse en el repo.
- La explicacion de carpetas futuras vive en `static/README.md`, no en `README` placeholder dentro de cada subcarpeta.

## Como trabajar con assets

### CV y documentos

- El CV actual esta en `static/docs/CV-Romel-Ante-Backend-Developer.pdf`.
- Si cambias el archivo, revisa el enlace en `index.html`.
- Si agregas mas PDFs, recuerda que `.gitignore` los excluye por defecto dentro de `static/docs/`.

### Imagenes

- Crea `static/images/` solo cuando ya tengas screenshots, fotos o iconos listos.
- Usa nombres descriptivos en kebab-case.
- No crees la carpeta solo para dejar un `README.md`.

### Video o multimedia

- Crea `static/media/` solo cuando existan videos o animaciones reales.
- Evita subir archivos pesados si no es necesario; usa hosting externo cuando aplique.

## Recomendaciones

- Mantener nombres estables para no romper rutas.
- Evitar archivos temporales, exportaciones intermedias y duplicados.
- Si una carpeta aun no tiene contenido final, describela en `static/README.md` y creala despues.
