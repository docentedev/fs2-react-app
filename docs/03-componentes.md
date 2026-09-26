# 03 — Crear componentes

## 3.1. Convención del proyecto

- Carpeta en minúscula, archivos capitalizados: `components/button/Button.tsx`
- Estilos con CSS Modules al lado: `Button.module.css`
- Props tipadas con `interface` o tipo inline.
- `export default` del componente.

```
src/components/mi-componente/MiComponente.tsx
src/components/mi-componente/MiComponente.module.css
```

## 3.2. Ejemplo simple: `Input`

`src/components/input/Input.tsx`:

```tsx
import styles from "./Input.module.css";

const Input = (props: { label: string; onChange: any }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{props.label}</label>
      <input className={styles.input} onChange={props.onChange} />
    </div>
  );
};

export default Input;
```

Uso:

```tsx
<Input label="Email" onChange={handleChangeEmail} />
```

## 3.3. Ejemplo con variantes: `Button`

`src/components/button/Button.tsx`:

```tsx
import styles from "./Button.module.css";

interface ButtonProps {
  variant: "text" | "contained" | "outlined";
  children: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button data-variant={props.variant} className={styles.button}>
      {props.children}
    </button>
  );
};

export default Button;
```

El CSS usa `data-variant` para las 3 variantes (`Button.module.css`). Uso:

```tsx
<Button variant="contained">Entrar</Button>
<Button variant="text">Olvide mi contraseña</Button>
```

## 3.4. Ejemplo con composición: `Card`

`src/components/card/Card.tsx`:

```tsx
import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  title?: string;
  subtitle?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

const Card = ({ title, subtitle, footer, children }: CardProps) => {
  return (
    <div className={styles.card}>
      {(title || subtitle) && (
        <div className={styles.header}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      )}
      <div className={styles.body}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

export default Card;
```

Uso real en `src/pages/login/Login.tsx`:

```tsx
<Card
  title="Login"
  subtitle="Bievenido otra vez"
  footer={
    <>
      <Button variant="contained">Entrar</Button>
      <Button variant="text">Olvide mi contraseña</Button>
    </>
  }
>
  <Input label="Email" onChange={handleChangeEmail} />
  <Input label="Contraseña" onChange={handleChangeContrasena} />
</Card>
```

## 3.5. Crear una página nueva

1. Crea `src/pages/saludo/Saludo.tsx`:

```tsx
const Saludo = () => {
  return <h1>Hola</h1>;
};

export default Saludo;
```

2. Regístrala en `src/App.tsx` (ver `04-wouter.md`):

```tsx
import Saludo from "./pages/saludo/Saludo";

<Route path="/saludo" component={Saludo} />
```

3. Agrégala al menú (`src/components/menu/Menu.tsx`):

```tsx
<Link href="/saludo">saludo</Link>
```

## 3.6. Checklist

- [ ] Nombre de carpeta en minúscula, componente capitalizado.
- [ ] `Componente.tsx` + `Componente.module.css` juntos.
- [ ] Clases vía `styles.xxx`, nunca strings globales.
- [ ] Props tipadas (evita `any` salvo prototipo rápido).
- [ ] Páginas en `pages/`, UI reutilizable en `components/`.
