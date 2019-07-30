import React from 'react';
import Home from "./components/Home.js";
import Search from "./components/Search.js";
import NavBar from "./components/NavBar.js";
import { Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavBar />

      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
    </div>
  );
}

export default App;
