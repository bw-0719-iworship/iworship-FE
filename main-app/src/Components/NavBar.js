import React from "react";
import { Route, Link } from "react-router-dom";

import "../styles/NavBar.scss"

function NavBar() {

  return (
    <div className="nav-bar">
      <div>
        <h1>iWorship</h1>
      </div>
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/search">Search</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
