# 04 — Wouter: instalación y configuración

Wouter es el router usado en este proyecto (~2 KB, API tipo `Route`/`Switch`/`Link`).

## 4.1. Instalación

```bash
npm install wouter
```

Queda en `package.json`:

```json
"dependencies": {
  "react": "^19.2.8",
  "react-dom": "^19.2.8",
  "wouter": "^3.11.0"
}
```

## 4.2. Configuración en `App.tsx`

`src/App.tsx` actual:

```tsx
import { Route, Router, Switch } from "wouter";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Menu from "./components/menu/Menu";

// "/fs2-react-app" en build (Pages), "" en dev
const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

const App = () => (
  <Router base={base}>
    <Menu />
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route>404: No such page!</Route>
    </Switch>
  </Router>
);

export default App;
```

Puntos clave:

- `<Router base={base}>` hace que `/login` resuelva a `/fs2-react-app/login` en producción sin cambiar los `Link`.
- `<Switch>` renderiza la primera ruta que calza; la última `<Route>` sin `path` es el 404.
- `import.meta.env.BASE_URL` viene de `base` en `vite.config.ts` (`/` en dev, `/fs2-react-app/` en build).

## 4.3. Links (`Menu.tsx`)

`src/components/menu/Menu.tsx`:

```tsx
import { Link } from "wouter";

<Link href="/">home</Link>
<Link href="/login">login</Link>
<Link href="/register">register</Link>
```

Usa siempre rutas absolutas (`/login`, no `login`). El `base` del `Router` las prefija solo.

## 4.4. Agregar una ruta nueva

1. Crea la página en `src/pages/...`.
2. Importa y agrega el `<Route>` **antes** del 404.
3. Agrega el `<Link>` en el menú.

## 4.5. Alternativa hash (solo si quieres evitar el truco 404.html)

Wouter soporta hash routing, pero este proyecto usa routing por path + `404.html` como fallback (ver `05-github-pages.md`). No mezcles ambos.
