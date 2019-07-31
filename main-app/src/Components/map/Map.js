import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";



const MapData = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoibWFkaXNvbi1tY2tvd24iLCJhIjoiY2p5cTQ3NGJ5MW1kNDNtczhyd3Njdm1jbyJ9.nBC37rZnhwGXRe9TCfRnKg",
  });



const Map = () => {

    return(
        <MapData   
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "60vh",
          width: "60vw"         
        }}  
        center={[-77.0364, 38.8951]
        
        }>

            <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}
            >
               {/* Marker display loop */}

            <Feature coordinates={[38.2700, 89.8603]}/>

            </Layer>


        </MapData>
    )
}

export default Map