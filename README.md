# fs2-react-app

App base con **Vite + React + TypeScript** para el ramo FS2. Incluye ruteo con **wouter**, componentes reutilizables con CSS Modules y deploy automático a **GitHub Pages**.

- Demo: https://docentedev.github.io/fs2-react-app/
- Rutas: `/` (Home) · `/login` · `/register`

## Requisitos

- Node.js 22+ · npm 10+

## Inicio rápido

```bash
npm install
npm run dev      # http://localhost:5173
```

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor desarrollo con HMR |
| `npm run build` | Chequeo TS (`tsc -b`) + build a `dist/` |
| `npm run preview` | Previsualiza el build |
| `npm run lint` | Linter (`oxlint`) |

## Estructura

```
src/
  main.tsx          # entry: monta <App />
  App.tsx           # <Router> + <Menu /> + rutas
  index.css / App.css
  components/       # UI reutilizable: button, card, input, menu
  pages/            # vistas: home, login, register
public/             # favicon, icons, .nojekyll
.github/workflows/  # deploy a Pages
docs/               # guías del proyecto
```

- `components/`: piezas sin noción de ruta, con CSS Module al lado (`Button.tsx` + `Button.module.css`).
- `pages/`: una carpeta por vista (`home/Home.tsx` → ruta `/`).
- `App.tsx` solo compone layout + rutas.

## Documentación

En [`docs/`](./docs/README.md):

1. Nuevo proyecto Vite + React + TS (crear, limpiar, dependencias)
2. Estructura base
3. Crear componentes
4. Wouter (instalación y `base`)
5. Deploy en GitHub Pages (workflow + errores comunes)

## Deploy

Cada push a `main` redespliega vía `.github/workflows/deploy.yml` (requiere **Settings > Pages > Source: GitHub Actions** una sola vez). Detalle en [`docs/05-github-pages.md`](./docs/05-github-pages.md).
