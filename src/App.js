import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="navigation">
        <Link to="/">Register</Link>
        <Link to="/login">Login</Link>
      </div>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
