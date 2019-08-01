import React from 'react';

import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";

import { CardsContext } from '../context/CardsContext'
import { useContext } from 'react';

// const coords= [{lat: 40.560001, long: -74.290001}]


  // const MapData = ReactMapboxGl({
  //   accessToken: "pk.eyJ1IjoibWFkaXNvbi1tY2tvd24iLCJhIjoiY2p5cTQ3NGJ5MW1kNDNtczhyd3Njdm1jbyJ9.nBC37rZnhwGXRe9TCfRnKg",
  // });

//coordinates={[church.latitude, church.longitude]}

// const Map = () => {

//   const state = useContext(CardsContext)

//   console.log(state)

{/* <img src={require ('../../assets/drawing.svg')} alt='heart for churches' /> */}


const MapData = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoibWFkaXNvbi1tY2tvd24iLCJhIjoiY2p5cTQ3NGJ5MW1kNDNtczhyd3Njdm1jbyJ9.nBC37rZnhwGXRe9TCfRnKg"
  });



const Map = () => {



    const state = useContext(CardsContext)
    console.log(state)

    // function newState(){
    //   {state.map(e => {
    //     return {
    //       lat: e.latitude,
    //       long: e.longitude
    //     }
    //   })}
    // }


    function renderingMap(){
      
      {state.map(e => {

        console.log(e)
        return(
           <Marker key={e.id} latitude={e.latitude} longitude={e.longitude} >
             <div>HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEllo</div>
           </Marker>

        )
     })}
    }


    return(
      <div>
          <MapData
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "60vh",
            width: "60vw"         
          }}  
          center={[-77.0364, 38.8951]}>

              {/* <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}
              > */} */}

                {renderingMap()}

              {/* </Layer> */}
          </MapData>
      </div>
    )
}

export default Map


























// import React, { useState } from 'react'
// import ReactMapGL, { Marker } from 'react-map-gl'

// import { CardsContext } from '../context/CardsContext'
// import { useContext } from 'react';



// export default function Map() {
//   const [viewport, setViewport] = useState({
//     latitude: 45.4211,
//     longitude: -75.6903,
//     width: '60vw',
//     height: '60vh'
//   });

//   const state = useContext(CardsContext)

//   return(
//     <div>

//       <ReactMapGL 
//       {...viewport} 
//       mapboxApiAccessToken={"pk.eyJ1IjoibWFkaXNvbi1tY2tvd24iLCJhIjoiY2p5cTQ3NGJ5MW1kNDNtczhyd3Njdm1jbyJ9.nBC37rZnhwGXRe9TCfRnKg"}
//       onViewportChange={viewport => {
//         setViewport(viewport);
//       }}
//       >

//         {state.map(churches => (

//           console.log(churches.longitude),

//           <Marker key={churches.id} coordinates={[churches.latitude, churches.longitude]}>
//             <div>HELLO THERE</div>
//           </Marker>
//         ))}

//       </ReactMapGL>


//     </div>
//   )


// }





// var map = new mapboxgl.Map({
//   container: 'map', // HTML container id
//   style: 'mapbox://styles/mapbox/streets-v9', // style URL
//   center: [-21.9270884, 64.1436456], // starting position as [lng, lat]
//   zoom: 13
// });

// var popup = new mapboxgl.Popup()
// .setHTML('<h3>Reykjavik Roasters</h3><p>A good coffee shop</p>');

// var marker = new mapboxgl.Marker()
// .setLngLat([-21.9270884, 64.1436456])
// .addTo(map);