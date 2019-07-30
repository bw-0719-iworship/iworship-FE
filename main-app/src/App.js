import React from 'react';
import NavBar from "./Components/NavBar.js";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      hello, dis iz meh app

      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
    </div>
  );
}

export default App;
