import { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [contrasena, setContrasena] = useState<string>("");

  const handleChangeEmail = (event: any) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handleChangeContrasena = (event: any) => {
    console.log(event.target.value);
    setContrasena(event.target.value);
  };
  return (
    <>
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
        <strong>{email}</strong>
        <strong>{contrasena}</strong>
      </Card>
    </>
  );
};

export default Login;
