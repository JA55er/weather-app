import React from "react";

const LocationItem = ({ location, index, setDisplayDetails }) => {
  //clicking on a location sets the display detailed state with the index of which location to display
  return (
    <div onClick={() => setDisplayDetails(index)} className="locationText">
      <div className="locationListName">{location.name}</div>
      <div className="locationListCountry">{location.country}</div>
    </div>
  );
};

export default LocationItem;
