import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";



const MapData = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoibWFkaXNvbi1tY2tvd24iLCJhIjoiY2p5cTQ3NGJ5MW1kNDNtczhyd3Njdm1jbyJ9.nBC37rZnhwGXRe9TCfRnKg"
  });



const Map = () => {

    return(
        <MapData   
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}>

            <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}>

            <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>

            </Layer>


        </MapData>
    )
}

export default Map