import React from "react";
import { Route, Link } from "react-router-dom";

function NavBar() {

  return (
    <div className="header">
      <div>
        <h1>iWorship</h1>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/search">Search</Link>
      </div>
    </div>
  );
};

export default NavBar;
