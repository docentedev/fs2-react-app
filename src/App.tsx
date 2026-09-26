import { Route, Router, Switch } from "wouter";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Menu from "./components/menu/Menu";

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
