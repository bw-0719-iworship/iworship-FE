import React from "react";
import PlacesOfWorshipList from "./PlacesOfWorshipList"
import Form from "./Form/Form";

function Search() {

  return (
    <div className="search">
      <h1>Search</h1>
      <Form />
      <PlacesOfWorshipList />
    </div>
  );
};

export default Search;
