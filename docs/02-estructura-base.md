# 02 — Estructura base del proyecto

Estructura real de `fs2-react-app`:

```
fs2-react-app/
  .github/workflows/deploy.yml  # deploy a GitHub Pages
  docs/                         # esta documentación
  index.html                    # entry HTML (título, favicon, fuentes, /src/main.tsx)
  package.json                  # scripts + dependencias (react, react-dom, wouter)
  vite.config.ts                # config Vite + base '/fs2-react-app/'
  public/
    favicon.svg
    icons.svg
    .nojekyll                   # desactiva Jekyll en GitHub Pages
  src/
    main.tsx                    # entry: monta <App /> en #root
    App.tsx                     # shell: <Router> + <Menu /> + <Switch> de rutas
    App.css                     # vacío (reservado)
    index.css                   # estilos globales (Roboto, reset body)
    components/                 # UI reutilizable (dumb components)
      button/Button.tsx + Button.module.css
      card/Card.tsx + Card.module.css
      input/Input.tsx + Input.module.css
      menu/Menu.tsx + Menu.module.css
    pages/                      # vistas asociadas a rutas (smart components)
      home/Home.tsx             # ruta /
      login/Login.tsx           # ruta /login
      register/Register.tsx     # ruta /register
  dist/                         # build (generado, no se commitea)
```

## Convención

- `components/`: piezas reutilizables sin noción de ruta. Reciben props (`Button`, `Card`, `Input`, `Menu`).
- `pages/`: una carpeta por vista, con el nombre capitalizado igual que el componente (`home/Home.tsx` → `Home`).
- Cada componente visual vive con su CSS Module al lado: `Button.tsx` + `Button.module.css`.
- `App.tsx` es solo composición: layout (`Menu`) + ruteo (`Switch`/`Route`). No lleva lógica de negocio.
- `main.tsx` no se toca salvo para providers globales (tema, store, etc.).

## Cómo iniciar el proyecto (clon fresco)

```bash
git clone <url-del-repo>
cd fs2-react-app
npm install
npm run dev
```

- Dev: `http://localhost:5173`
- Build: `npm run build` → genera `dist/`
- Preview: `npm run preview`
