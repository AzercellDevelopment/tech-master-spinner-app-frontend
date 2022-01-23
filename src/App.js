import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DashboardPageComponent from "./components/Dashboard";
import LoginComponent from "./components/Dashboard/Login";
import HeaderComponent from "./components/Header";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Switch>
          <Route path="/" exact component={DashboardPageComponent} />
          <Route path="/login" exact component={LoginComponent} />
          <Route>404 not found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
