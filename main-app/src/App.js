import React from 'react';
import './styles/index.scss';

import Home from "./components/Home";
import Search from "./components/Search.js";
import Login from './components/Login/Login';

import { Route, Link, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">

      {/* <div>
        <Link path='/' to="/home">Login</Link>
      </div> */}

      <Route exact path='/' component={Login} />

      <Route exact path="/home" component={Home} />

      <Route exact path="/search" component={Search} />

      {/* <Route exact path="/search"
        render={props => {
          const token = localStorage.getItem("token");

          if (!token) {
            return <Redirect to="/" />;
          }
          return <Profile {...props} />;
        }}
      /> */}

    </div>
  );
  
}

export default App;
