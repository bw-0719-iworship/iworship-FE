import React from 'react';
import './styles/index.scss';

import Home from "./Components/Home";
import Search from "./Components/Search.js";
import Login from './Components/Login/Login';

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Route exact path='/' component={Login} />

      <Route exact path="/home" component={Home} />

      <Route exact path="/search" component={Search} />

    </div>
  );
}

export default App;
