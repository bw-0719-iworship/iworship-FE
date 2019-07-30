import React from "react";
import { Link } from "react-router-dom";

import "../styles/NavBar.scss"

function NavBar() {

  return (
    <div className="nav-bar">
      <div className="title">
        <Link to="/"><h1>iWorship</h1></Link>
      </div>
      <div classnName="link">
        <Link to="/">Home</Link>
      </div>
      <div className="link">
        <Link to="/search">Search</Link>
      </div>
    </div>
  );
};

export default NavBar;
