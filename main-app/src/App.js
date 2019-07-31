import React from 'react';
import './styles/index.scss';

import Home from "./components/Home.js";
import Search from "./components/Search.js";
import Login from './components/Login/Login'

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
