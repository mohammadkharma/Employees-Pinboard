import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="nav nav-dark bg-dark nav-expand-ls">
        <Link to="/" className="navbar-brand">
          Pinboard
        </Link>
        <div className="collpase navbar-collpase">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Create Pin Log
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Create Pin Log
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/employee" className="nav-link">
                Create Employee
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
