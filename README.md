# Portfolio definitivo — Rubén Sancho Azcárraga

Sitio estático (HTML/CSS/JS puro) bilingüe (ES/EN), con dos áreas — Administración e IA & Automatización — y descarga de CV.

## Estructura de archivos

```
index.html
styles.css
script.js
translations.js       ← textos en inglés
images/ruben-sancho.jpg
cv/Ruben_Sancho_Azcarraga_CV_ES.pdf
cv/Ruben_Sancho_Azcarraga_CV_EN.pdf
```

El botón de descarga de CV cambia automáticamente de archivo según el idioma seleccionado (ES/EN) en la web.

## Pendiente antes de darlo por definitivo

1. **Vídeo de FitAI Planner**: la tarjeta de "Vídeo demostrativo" tiene un aviso de "Vídeo próximamente". En cuanto lo subas a YouTube o Loom, sustituye en `index.html` el bloque:
   ```html
   <div class="video-placeholder" data-i18n="ia.p2_pending">Vídeo próximamente</div>
   ```
   por un iframe de inserción, por ejemplo:
   ```html
   <iframe width="100%" height="220" src="https://www.youtube.com/embed/TU_ID" title="Vídeo FitAI Planner" frameborder="0" allowfullscreen></iframe>
   ```

## Cómo añadir un nuevo proyecto

- En la sección de Administración: duplica el bloque `<article class="project-card project-card-admin">` dentro de `#administracion`.
- En la sección de IA: duplica un `<article class="project-card project-card-ia">` dentro de `.project-grid` en `#ia`.
- Si el texto debe traducirse, añade una nueva clave en `translations.js` (bloque `en`) y referénciala con `data-i18n="tu.clave"` en el HTML.

## Cómo subir cambios (recordatorio)

1. Edita el/los archivo(s) en GitHub (icono del lápiz) o local
2. Commit changes → directamente a `main`
3. Vercel despliega solo en 10-30 segundos

## Dominio

Pendiente de conectar `rubensanchoazcarraga.com` desde Project Settings → Domains en Vercel, una vez comprado.
