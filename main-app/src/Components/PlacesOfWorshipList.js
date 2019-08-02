import React, { useState, useEffect } from "react";
import axios from "axios";
import PlaceOfWorshipCard from "./PlaceOfWorshipCard.js";

function PlacesOfWorshipList(props) {
  const [placesOfWorship, setPlacesOfWorship] = useState([]);

  useEffect(() => {
    axios
      .get("https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/All_Places_of_Worship/FeatureServer/0/query?where=1%3D1&outFields=OBJECTID,ID,NAME,TELEPHONE,ADDRESS,ADDRESS2,CITY,STATE,ZIP,ZIPP4,NAICSDESCR,X,Y,SUBTYPE,DENOM,MEMBERS,ATTENDANCE,PROT,CATH&outSR=4326&f=json")
      .then(res => {
        console.log(res.data.features);
        setPlacesOfWorship(res.data.features);
      });
  }, []);

  return (
    <div>
      {placesOfWorship.map(placeOfWorship => {
        return <PlaceOfWorshipCard key={placeOfWorship.attributes.ID} name={placeOfWorship.attributes.NAME} />
      })}
    </div>
  );
};

export default PlacesOfWorshipList;
