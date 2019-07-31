// import React from 'react';

// import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";

// import { CardsContext } from '../context/CardsContext'
// import { useContext } from 'react';

// const coords= [{lat: 40.560001, long: -74.290001}]


//   const MapData = ReactMapboxGl({
//     accessToken: "pk.eyJ1IjoibWFkaXNvbi1tY2tvd24iLCJhIjoiY2p5cTQ3NGJ5MW1kNDNtczhyd3Njdm1jbyJ9.nBC37rZnhwGXRe9TCfRnKg",
//   });

// //coordinates={[church.latitude, church.longitude]}

// const Map = () => {

//   const state = useContext(CardsContext)

//   console.log(state)



// import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
//
//
//
// const MapData = ReactMapboxGl({
//     accessToken: "pk.eyJ1IjoibWFkaXNvbi1tY2tvd24iLCJhIjoiY2p5cTQ3NGJ5MW1kNDNtczhyd3Njdm1jbyJ9.nBC37rZnhwGXRe9TCfRnKg"
//   });
//
//
//
// const Map = () => {
//

//     return(
//         <MapData
//         style="mapbox://styles/mapbox/streets-v9"
//         containerStyle={{
//           height: "60vh",

//           width: "60vw"         
//         }}  
//         center={[-77.0364, 38.8951]}>


//           width: "60vw"
//
//
//         }}  center={[-77.0364, 38.8951]}>
//

//             <Layer
//             type="symbol"
//             id="marker"
//             layout={{ "icon-image": "marker-15" }}
//             >

//                {coords.map(church => (
//                  <Marker key={church.id} coordinates={[church.lat, church.long]} >

                 
//                      <img src={require ('../../assets/drawing.svg')} alt='heart for churches' /> 
                 
                 
//                  </Marker>
//                ))}

//             {/* {/* <Feature coordinates={[38.2700, 89.8603]}/> */}

//             </Layer> */}


//         </MapData>
//     )
// }

// export default Map


























// import React, { useState } from 'react'
// import ReactMapGL, { Marker } from 'react-map-gl'

// import { CardsContext } from '../context/CardsContext'
// import { useContext } from 'react';



// export default function Map() {
//   const [viewport, setViewport] = useState({
//     latitude: 45.4211,
//     longitude: -75.6903,
//     width: '60vw',
//     height: '60vh'
//   });

//   const state = useContext(CardsContext)

//   return(
//     <div>

//       <ReactMapGL 
//       {...viewport} 
//       mapboxApiAccessToken={"pk.eyJ1IjoibWFkaXNvbi1tY2tvd24iLCJhIjoiY2p5cTQ3NGJ5MW1kNDNtczhyd3Njdm1jbyJ9.nBC37rZnhwGXRe9TCfRnKg"}
//       onViewportChange={viewport => {
//         setViewport(viewport);
//       }}
//       >

//         {state.map(churches => (

//           console.log(churches.longitude),

//           <Marker key={churches.id} coordinates={[churches.latitude, churches.longitude]}>
//             <div>HELLO THERE</div>
//           </Marker>
//         ))}

//       </ReactMapGL>


//     </div>
//   )


// }











































































// import React, { useState, useEffect, useContext } from "react";
// import ReactMapGL, { NavigationControl, Marker, Popup } from "react-map-gl";
// import { withStyles } from "@material-ui/core/styles";
// import differenceInMinutes from "date-fns/difference_in_minutes";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import DeleteIcon from "@material-ui/icons/DeleteTwoTone";
// import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
// import { Subscription } from "react-apollo";

// import { useClient } from "../client";
// import { GET_PINS_QUERY } from "../graphql/queries";
// import { DELETE_PIN_MUTATION } from "../graphql/mutations";
// import {
//   PIN_ADDED_SUBSCRIPTION,
//   PIN_UPDATED_SUBSCRIPTION,
//   PIN_DELETED_SUBSCRIPTION
// } from "../graphql/subscriptions";
// import PinIcon from "./PinIcon";
// import Blog from "./Blog";
// import Context from "../context";

// const INITIAL_VIEWPORT = {
//   latitude: 37.7577,
//   longitude: -122.4376,
//   zoom: 13
// };

// const Map = ({ classes }) => {
//   const client = useClient();
//   const mobileSize = useMediaQuery("(max-width: 650px)");
//   const { state, dispatch } = useContext(Context);
//   useEffect(() => {
//     getPins();
//   }, []);
//   const [viewport, setViewport] = useState(INITIAL_VIEWPORT);
//   const [userPosition, setUserPosition] = useState(null);
//   useEffect(() => {
//     getUserPosition();
//   }, []);
//   const [popup, setPopup] = useState(null);
//   // remove popup if pin itself is deleted by the author of the pin
//   useEffect(() => {
//     const pinExists =
//       popup && state.pins.findIndex(pin => pin._id === popup._id) > -1;
//     if (!pinExists) {
//       setPopup(null);
//     }
//   }, [state.pins.length]);

//   const getUserPosition = () => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(position => {
//         const { latitude, longitude } = position.coords;
//         setViewport({ ...viewport, latitude, longitude });
//         setUserPosition({ latitude, longitude });
//       });
//     }
//   };

//   const getPins = async () => {
//     const { getPins } = await client.request(GET_PINS_QUERY);
//     dispatch({ type: "GET_PINS", payload: getPins });
//   };

//   const handleMapClick = ({ lngLat, leftButton }) => {
//     if (!leftButton) return;
//     if (!state.draft) {
//       dispatch({ type: "CREATE_DRAFT" });
//     }
//     const [longitude, latitude] = lngLat;
//     dispatch({
//       type: "UPDATE_DRAFT_LOCATION",
//       payload: { longitude, latitude }
//     });
//   };

//   const highlightNewPin = pin => {
//     const isNewPin =
//       differenceInMinutes(Date.now(), Number(pin.createdAt)) <= 30;
//     return isNewPin ? "limegreen" : "darkblue";
//   };

//   const handleSelectPin = pin => {
//     setPopup(pin);
//     dispatch({ type: "SET_PIN", payload: pin });
//   };

//   const isAuthUser = () => state.currentUser._id === popup.author._id;

//   const handleDeletePin = async pin => {
//     const variables = { pinId: pin._id };
//     await client.request(DELETE_PIN_MUTATION, variables);
//     setPopup(null);
//   };

//   return (
//     <div className={mobileSize ? classes.rootMobile : classes.root}>
//       <ReactMapGL
//         width="100vw"
//         height="calc(100vh - 64px)"
//         mapStyle="mapbox://styles/mapbox/streets-v9"
//         mapboxApiAccessToken="pk.eyJ1IjoicmVlZGJhcmdlcmNvZGVzIiwiYSI6ImNqczVodXgzczAwM3E0M3MydzI0OHN0ZzEifQ.0qj4u8RW-Rj6An3WFLXKqA"
//         scrollZoom={!mobileSize}
//         onViewportChange={newViewport => setViewport(newViewport)}
//         onClick={handleMapClick}
//         {...viewport}
//       >
//         {/* Navigation Control */}
//         <div className={classes.navigationControl}>
//           <NavigationControl
//             onViewportChange={newViewport => setViewport(newViewport)}
//           />
//         </div>

//         {/* Pin for User's Current Position */}
//         {userPosition && (
//           <Marker
//             latitude={userPosition.latitude}
//             longitude={userPosition.longitude}
//             offsetLeft={-19}
//             offsetTop={-37}
//           >
//             <PinIcon size={40} color="red" />
//           </Marker>
//         )}

//         {/* Draft Pin */}
//         {state.draft && (
//           <Marker
//             latitude={state.draft.latitude}
//             longitude={state.draft.longitude}
//             offsetLeft={-19}
//             offsetTop={-37}
//           >
//             <PinIcon size={40} color="hotpink" />
//           </Marker>
//         )}

//         {/* Created Pins */}
//         {state.pins.map(pin => (
//           <Marker
//             key={pin._id}
//             latitude={pin.latitude}
//             longitude={pin.longitude}
//             offsetLeft={-19}
//             offsetTop={-37}
//           >
//             <PinIcon
//               onClick={() => handleSelectPin(pin)}
//               size={40}
//               color={highlightNewPin(pin)}
//             />
//           </Marker>
//         ))}

//         {/* Popup Dialog for Created Pins */}
//         {popup && (
//           <Popup
//             anchor="top"
//             latitude={popup.latitude}
//             longitude={popup.longitude}
//             closeOnClick={false}
//             onClose={() => setPopup(null)}
//           >
//             <img
//               className={classes.popupImage}
//               src={popup.image}
//               alt={popup.title}
//             />
//             <div className={classes.popupTab}>
//               <Typography>
//                 {popup.latitude.toFixed(6)}, {popup.longitude.toFixed(6)}
//               </Typography>
//               {isAuthUser() && (
//                 <Button onClick={() => handleDeletePin(popup)}>
//                   <DeleteIcon className={classes.deleteIcon} />
//                 </Button>
//               )}
//             </div>
//           </Popup>
//         )}
//       </ReactMapGL>

//       {/* Subscriptions for Creating / Updating / Deleting Pins */}
//       <Subscription
//         subscription={PIN_ADDED_SUBSCRIPTION}
//         onSubscriptionData={({ subscriptionData }) => {
//           const { pinAdded } = subscriptionData.data;
//           console.log({ pinAdded });
//           dispatch({ type: "CREATE_PIN", payload: pinAdded });
//         }}
//       />
//       <Subscription
//         subscription={PIN_UPDATED_SUBSCRIPTION}
//         onSubscriptionData={({ subscriptionData }) => {
//           const { pinUpdated } = subscriptionData.data;
//           console.log({ pinUpdated });
//           dispatch({ type: "CREATE_COMMENT", payload: pinUpdated });
//         }}
//       />
//       <Subscription
//         subscription={PIN_DELETED_SUBSCRIPTION}
//         onSubscriptionData={({ subscriptionData }) => {
//           const { pinDeleted } = subscriptionData.data;
//           console.log({ pinDeleted });
//           dispatch({ type: "DELETE_PIN", payload: pinDeleted });
//         }}
//       />

//       {/* Blog Area to add Pin Content */}
//       <Blog />
//     </div>
//   );
// };

// const styles = {
//   root: {
//     display: "flex"
//   },
//   rootMobile: {
//     display: "flex",
//     flexDirection: "column-reverse"
//   },
//   navigationControl: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     margin: "1em"
//   },
//   deleteIcon: {
//     color: "red"
//   },
//   popupImage: {
//     padding: "0.4em",
//     height: 200,
//     width: 200,
//     objectFit: "cover"
//   },
//   popupTab: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "column"
//   }
// };

// export default withStyles(styles)(Map);

//                {/* Marker display loop */}
//
//             <Feature coordinates={[38.2700, 89.8603]}/>
//
//             </Layer>
//
//
//         </MapData>
//     )
// }
//
// export default Map

