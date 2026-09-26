# 01 — Nuevo proyecto Vite + React + TypeScript

## 1.1. Requisitos

- Node.js 22+ (`node -v`)
- npm 10+ (`npm -v`)

## 1.2. Crear el proyecto

```bash
npm create vite@latest mi-app -- --template react-ts
cd mi-app
```

Esto genera:

```
mi-app/
  index.html
  package.json
  tsconfig.json / tsconfig.app.json / tsconfig.node.json
  vite.config.ts
  public/
  src/
    main.tsx
    App.tsx / App.css
    index.css
    assets/
```

## 1.3. Instalar dependencias y correr

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

Scripts que trae `package.json` (los mismos de este proyecto):

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "oxlint",
    "preview": "vite preview"
  }
}
```

| Comando | Qué hace |
|---|---|
| `npm install` | Instala lo declarado en `package.json` (crea `node_modules/`). |
| `npm run dev` | Servidor desarrollo con HMR. |
| `npm run build` | Chequeo TypeScript + build producción a `dist/`. |
| `npm run preview` | Sirve `dist/` para verificar el build. |
| `npm run lint` | Linter rápido (`oxlint` en este proyecto). |

> Para reinstalar limpio: borra `node_modules/` y `package-lock.json`, luego `npm install`.

## 1.4. Limpiar el template de Vite

El template trae demo (`App.tsx`, `App.css`, `assets/react.svg`, etc.). Limpieza mínima recomendada, como se hizo en este proyecto:

1. Vaciar `src/App.tsx` — dejar solo el shell (en nuestro caso, `Menu` + rutas).
2. Vaciar o borrar `src/App.css` (aquí está vacío).
3. Simplificar `src/index.css` — solo estilos globales (aquí: fuente Roboto + reset body).
4. Borrar `src/assets/` si no lo usas.
5. Ajustar `index.html` — título, favicon, fuentes.
6. Dejar `src/main.tsx` intacto como entry point:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## 1.5. Instalar dependencias extra

```bash
npm install <paquete>
npm install -D <paquete-dev>   # solo desarrollo (tipos, plugins, linters)
```

Ejemplo (routing de este proyecto):

```bash
npm install wouter
```

Verifica en `package.json` → `dependencies` vs `devDependencies`.
