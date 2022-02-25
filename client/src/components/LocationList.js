import React from "react";

import LocationItem from "./LocationItem";
import DetailedView from "./DetailedView";

const LocationList = ({ locations, setDisplayDetails, displayDetails }) => {

  if (displayDetails !== null) {
    return <DetailedView location={locations[displayDetails]} setDisplayDetails={setDisplayDetails}/>
  };
  
  if (locations?.length === 0) return null;

  return (
    <div>
      {locations.map((location, index) => {
        return (
          <div key={location.id}>
            <LocationItem location={location} index={index} setDisplayDetails={setDisplayDetails}/>
          </div>
        );
      })}
    </div>
  );
};

export default LocationList;
