import React, { useState } from "react";
import Card from '@material-ui/core/Card';

function PlaceOfWorshipCard(props) {
  const [placeOfWorship, setPlaceOfWorship] = useState({});

  return (
    <Card>
      <h2>{props.name}</h2>
      <p>{props.address}</p>
      <p>{props.city}, {props.state} {props.zip}</p>
      <p>{props.telephone}</p>
      <p>{props.denom}, {props.subtype}</p>
      <p>Catholic: {props.cath}</p>
      <p>Attendance: {props.attendance}</p>
    </Card>
  )
};

export default PlaceOfWorshipCard;
