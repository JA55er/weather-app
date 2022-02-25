import React from 'react';

const LocationItem = ({location, index, setDisplayDetails}) => {
  return <div onClick={() => setDisplayDetails(index)}>{location.name} {location.country}</div>
};

export default LocationItem;