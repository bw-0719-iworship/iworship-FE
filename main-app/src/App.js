import React from 'react';
import './styles/index.scss';
import Home from "./components/Home.js";
import Search from "./components/Search.js";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Route exact path="/" component={Home} />
      
      <Route path="/search" component={Search} />

    </div>
  );
}

export default App;
