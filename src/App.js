import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/navbar.component";
import PinsList from "./components/pins-list.component";
import EditPin from "./components/edit-pin.component";
import CreatePin from "./components/create-pin.component";
import CreateEmployee from "./components/create-employee.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={PinsList} />
        <Route path="/edit/:id" exact component={EditPin} />
        <Route path="/create" exact component={CreatePin} />
        <Route path="/employee" exact component={CreateEmployee} />
      </div>
    </Router>
  );
}

export default App;
