// import React, { useState, useEffect } from "react";
// import axios from 'axios'
// import '../index.scss'



// import Cards from './grid/Cards'

// import Cards from '../grid/Cards'

// import Map from './map/Map'
// import Profile from "./Profile/Profile";
// import NavBar from './NavBar/NavBar';

// import { CardsContext } from './context/CardsContext'



// // New data with lat and long 
// // https://api.myjson.com/bins/1apvk1

// New data with lat and long
// https://api.myjson.com/bins/1apvk1

// // older data just basic n/e/g
// // https://api.myjson.com/bins/7gt6p



// function Home() {


//   const [churches, setChurches] = useState([])


//   useEffect( () => {
//       axios.get('https://api.myjson.com/bins/1apvk1')
//       .then(res => {
//           console.log(res)
//           setChurches(res.data)
//       })
//   }, [])



//   return (
//     <div className="home">

//       <div className='homeComp'>
//         <Profile />
//       </div>

//       <div className='homeComp'>

//         <CardsContext.Provider value={churches} className='cardsHomeContainer'>

//           <NavBar />

//           <Map />

//           <Cards />

//         </CardsContext.Provider>
//       </div>
//     </div>
//   );
// };

// export default Home;











import React, { useState, useEffect } from "react";
import axios from 'axios'
import Cards from '../grid/Cards'
import Map from './map/Map'
import Profile from "./Profile/Profile";
import NavBar from './NavBar/NavBar';


function Home() {

const [churches, setChurches] = useState([])

const getCards = () => {
  axios.get('https://api.myjson.com/bins/1apvk1')
  .then(res => {
      console.log(res)
     setChurches(res.data)
  })

}
 
  useEffect( () => {
      getCards()
  }, [])


  return (
    <div className="home">

      <div className='homeComp'>
        <Profile />
      </div>

      <div className='homeComp'>
      

          <NavBar />

           <Map churches={churches}/> 

          <Cards  churches={churches} />

      </div>
    </div>
  );
};

export default Home;
