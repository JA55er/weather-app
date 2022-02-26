import React, { useState } from "react";

import './styles/App.css';

import LocationList from "./components/LocationList";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [locations, setLocations] = useState([]);
  const [displayDetails, setDisplayDetails] = useState(null)

  return (
    <div className="App">
      <SearchBar setLocations={setLocations} setDisplayDetails={setDisplayDetails}/>
      <LocationList locations={locations} setDisplayDetails={setDisplayDetails} displayDetails={displayDetails}/>
    </div>
  );
};

export default App;
