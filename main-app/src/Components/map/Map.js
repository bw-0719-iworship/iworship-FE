import React from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";

import { CardsContext } from '../context/CardsContext'
import { useContext } from 'react';



  const MapData = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoibWFkaXNvbi1tY2tvd24iLCJhIjoiY2p5cTQ3NGJ5MW1kNDNtczhyd3Njdm1jbyJ9.nBC37rZnhwGXRe9TCfRnKg",
  });



const Map = () => {

  const state = useContext(CardsContext)


    return(
        <MapData
        // mapboxApiAccessToken={"pk.eyJ1IjoibWFkaXNvbi1tY2tvd24iLCJhIjoiY2p5cTQ3NGJ5MW1kNDNtczhyd3Njdm1jbyJ9.nBC37rZnhwGXRe9TCfRnKg"}
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "60vh",
          width: "60vw"         
        }}  
        center={[-77.0364, 38.8951]}>

            <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}
            >
               {state.map(church => (
                 <Marker key={church.id} coordinates={[state.latitude, state.longitude]} >

                 <button className='marker-btn'>
                    <img src='../../assets/drawing.svg' alt='heart for churches' />
                 </button>
                 
                 </Marker>
               ))}

            {/* <Feature coordinates={[38.2700, 89.8603]}/> */}

            </Layer>


        </MapData>
    )
}

export default Map