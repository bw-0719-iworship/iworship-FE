import React, { useState } from "react";

function Form(props) {
  const [placesOfWorship, setPlacesOfWorship] = useState([]);

  function handleSubmitZip() {
    {/* let zipArray = []
    console.log("placesOfWorship", placesOfWorship);

    return (
      {props.filter(zip => {
        if (zip === `${zip}`) {
          return zipArray.push(zip)
        }
      })
    ); */}
  };


  return(
    <form onSubmit={handleSubmitZip}>
      <label htmlFor="zip">
        Zip
        <input
          type="text"
          name="zip"
          placeholder="00000"
          value={placesOfWorship.name}
        />
      </label>
      <label htmlFor="placeOfWorship">
        Place of Worship
        <input
          type="text"
          name="placeOfWorship"
          placeholder="Name of Place of Worship"
          value={placesOfWorship.id}
        />
      </label>
      <label htmlFor="religion">
        Religion
        <input
          type="dropdown"
          name="religion"
          placeholder="Select from dropdown"
          value={placesOfWorship.id}
        />
      </label>
      <label htmlFor="denomination">
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
