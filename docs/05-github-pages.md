# 05 — Deploy en GitHub Pages

Despliegue de este repo (`docentedev/fs2-react-app`, rama `main`) a `https://docentedev.github.io/fs2-react-app/`.

## 5.1. Piezas necesarias (ya configuradas)

1. `vite.config.ts` — `base: '/fs2-react-app/'`:

```ts
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/fs2-react-app/',
  plugins: [react()],
})
```

Sin esto, los assets apuntarían a `/assets/...` y el sitio quedaría en blanco. Regla: `base: '/<nombre-repo>/'`.

2. `src/App.tsx` — `<Router base={...}>` (ver `04-wouter.md`).

3. `public/.nojekyll` — archivo vacío. Desactiva Jekyll para que GitHub sirva `dist/` tal cual. Vite lo copia a `dist/.nojekyll` en el build.

4. `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: false
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      # Fallback SPA: refresh / deep links (/login, /register)
      - run: cp dist/index.html dist/404.html
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

El paso `cp dist/index.html dist/404.html` es el fallback SPA: GitHub Pages no tiene rewrites, así que sin `404.html` un refresh en `/login` daría 404.

## 5.2. Activación (paso manual, una sola vez)

El primer deploy falla con `Failed to create deployment (status: 404)` si Pages no está habilitado. Es normal.

1. Ve a `https://github.com/docentedev/fs2-react-app/settings/pages`.
2. En **Build and deployment > Source** elige **`GitHub Actions`**.
3. Ve a **Actions** → re-ejecuta el workflow (`Re-run failed jobs`).

## 5.3. Publicar cambios

```bash
git add vite.config.ts src/App.tsx .github/workflows/deploy.yml public/.nojekyll
git commit -m "feat: deploy a GitHub Pages"
git push origin main
```

Cada push a `main` redespliega automáticamente.

## 5.4. Errores comunes

| Error | Causa | Fix |
|---|---|---|
| `Failed to create deployment (status: 404)` | Pages no habilitado | Paso 5.2 (Source = GitHub Actions) y re-run. |
| Sitio en blanco, 404 en assets | `base` incorrecto | `base: '/fs2-react-app/'` y rebuild. Verifica en `dist/index.html` que los paths empiecen con `/fs2-react-app/`. |
| Refresh en `/login` da 404 | Falta fallback SPA | Paso `cp dist/index.html dist/404.html` en el workflow. |
| Jekyll borra archivos `_...` | Falta `.nojekyll` | `public/.nojekyll` commiteado (ojo: los dotfiles a veces no se agregan con `git add *`). |
| `npm ci` falla en CI pero no local | `package-lock.json` desactualizado | `npm install` local, commitear lock, push. |

## 5.5. Verificación local antes de pushear

```bash
npm run build
# revisa que dist/index.html use /fs2-react-app/
npm run preview
```
