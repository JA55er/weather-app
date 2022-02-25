import React, { useState } from "react";

import LocationList from "./components/LocationList";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [locations, setLocations] = useState([]);
  const [displayDetails, setDisplayDetails] = useState(null)

  // const getLocationResults = (locations) => {
  //     setLocations(locations);
  // }

  return (
    <div>
      <SearchBar setLocations={setLocations} setDisplayDetails={setDisplayDetails}/>
      <LocationList locations={locations} setDisplayDetails={setDisplayDetails} displayDetails={displayDetails}/>
    </div>
  );
};

export default App;
