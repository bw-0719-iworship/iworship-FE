import React, { useState } from "react";

function PlaceOfWorshipCard(props) {
  const [placeOfWorship, setPlaceOfWorship] = useState({});

  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  )
};

export default PlaceOfWorshipCard;
