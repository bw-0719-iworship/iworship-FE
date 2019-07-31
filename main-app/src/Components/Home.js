import React from "react";

import Cards from './grid/Cards';

import Profile from "./Profile/Profile";
import NavBar from './NavBar/NavBar';




function Home() {

  return (
    <div className="home">

      <div className='homeComp'>
        <Profile />
      </div>

      <div className='homeComp'>
        <NavBar />



        <Cards />

      </div>
    </div>
  );
};

export default Home;
