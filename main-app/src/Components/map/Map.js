// import React from 'react';
// import PlaceTwoTone from "@material-ui/icons/PlaceTwoTone"
// import ReactMapGL, { Marker } from "react-map-gl";

import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import PlaceTwoTone from "@material-ui/icons/PlaceTwoTone";

// import { CardsContext } from '../context/CardsContext'
// import { useContext } from 'react';

// const coords= [{lat: 40.560001, long: -74.290001}]


  // const MapData = ReactMapboxGl({
  //   accessToken: "pk.eyJ1IjoibWFkaXNvbi1tY2tvd24iLCJhIjoiY2p5cTQ3NGJ5MW1kNDNtczhyd3Njdm1jbyJ9.nBC37rZnhwGXRe9TCfRnKg",
  // });

//coordinates={[church.latitude, church.longitude]}

// const Map = () => {

//   const state = useContext(CardsContext)

//   console.log(state)

{/* <img src={require ('../../assets/drawing.svg')} alt='heart for churches' /> */}



// const Map = () => {

//   let viewport = {
//     width: 400,
//     height: 400,
//     latitude: 37.7577,
//     longitude: -122.4376,
//     zoom: 8
//   }

//     const state = useContext(CardsContext)
//     console.log(state)

//     function renderingMap(){
      
//       {state.map(e => {

//         return(
//            <Marker key={e.id} latitude={e.latitude} longitude={e.longitude} >
//             <PlaceTwoTone/>
//            </Marker>

//         )
//      })}
//     }


//     return(
//       <div>
//           <ReactMapGL
//           width={700}
//           height={450}
//           latitude={37.78}
//           longitude={-122.45}
//           zoom={11}
//           mapboxApiAccessToken={"pk.eyJ1IjoibWFkaXNvbi1tY2tvd24iLCJhIjoiY2p5cTQ3NGJ5MW1kNDNtczhyd3Njdm1jbyJ9.nBC37rZnhwGXRe9TCfRnKg"}
//           mapStyle={'mapbox://styles/mapbox/basic-v9'}
//        >

//             {state.map((item, index)=> (
//                <Marker key={index}  latitude={item.latitude} longitude={item.longitude} >
//                <PlaceTwoTone/>
//               </Marker>
//             ))}
//           </ReactMapGL>
//       </div>
//     )
// }

// export default Map







export default function Map({churches}) {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: 700,
    height: 550,
    zoom:8
  });

  return (
    <ReactMapGL {...viewport}
      mapboxApiAccessToken={"pk.eyJ1IjoibWFkaXNvbi1tY2tvd24iLCJhIjoiY2p5cTQ3NGJ5MW1kNDNtczhyd3Njdm1jbyJ9.nBC37rZnhwGXRe9TCfRnKg"}
      onViewportChange={viewport => setViewport(viewport)}>
        {churches.map((item, index) => (
         <Marker latitude={Number(item.latitude)}
                 longitude={Number(item.longitude)} 
                 offsetLeft={-20} 
                 offsetTop={-10}>
          {/* <div style ={{fontSize: "30px"}}>You are here</div> */}
          <PlaceTwoTone/>
                    </Marker>
                        ))}
     
    </ReactMapGL>
  );
}