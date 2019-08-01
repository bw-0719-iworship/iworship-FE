import React, { useState, useEffect } from "react";

function PlaceOfWorship(props) {
  const [placeOfWorship, setPlaceOfWorship] = useState({});

  return (
    <div>
      <h2>{props.NAME}</h2>
    </div>
  )
}
