import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./DashBoard";
import Registration from "./Registration";
import Login from "./Login";

const App = () => {
  return (
    <Router>
      <Route path="/" exact render={(props) => <Home />} />
      <Route path="/dashboard" render={() => <Dashboard />} />
      <Route path="/registration" render={() => <Registration />} />
      <Route path="/login" render={() => <Login />} />
    </Router>
  );
};

export default App;
