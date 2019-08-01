import React, { useState, useEffect } from "react";
import axios from "axios";

function Form(props) {
  const [placesOfWorship, setPlacesOfWorship] = useState([]);

  useEffect(() => {
    axios
      .get("https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/All_Places_of_Worship/FeatureServer/0/query?where=1%3D1&outFields=OBJECTID,ID,NAME,TELEPHONE,ADDRESS,ADDRESS2,CITY,STATE,ZIP,ZIPP4,NAICSDESCR,X,Y,SUBTYPE,DENOM,MEMBERS,ATTENDANCE,PROT,CATH&outSR=4326&f=json")
      .then(res => {
        console.log(res.data.features);
        setPlacesOfWorship(res.data.features);
      });
  }, []);

  function handleSubmitZip() {

  }

  return(
    <form onSubmit={handleSubmitZip}>
      <label for="zip">
        Zip
        <input
          type="text"
          name="zip"
          placeholder="00000"
          value={placesOfWorship.name}
        />
      </label>
      <label for="placeOfWorship">
        Place of Worship
        <input
          type="text"
          name="placeOfWorship"
          placeholder="Name of Place of Worship"
          value={placesOfWorship.id}
        />
      </label>
      <label for="religion">
        Religion
        <input
          type="dropdown"
          name="religion"
          placeholder="Select from dropdown"
          value={placesOfWorship.id}
        />
      </label>
      <label for="denomination">
        Denomination
        <input
          type="dropdown"
          name="denomination"
          placeholder="Select from dropdown"
          value={placesOfWorship.id}
        />
      </label>
      <button type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;
