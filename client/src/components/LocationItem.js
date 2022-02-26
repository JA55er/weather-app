import React from "react";

const LocationItem = ({ location, index, setDisplayDetails }) => {
  return (
      <div onClick={() => setDisplayDetails(index)} className="locationText" style={{ height: "100px", width: 300, display: 'flex' }}>
        {location.name} 
        <br/>
        {location.country}
      </div>
  );
};

export default LocationItem;
