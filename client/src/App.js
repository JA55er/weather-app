import React, { useState } from "react";

import "./styles/App.css";

import LocationList from "./components/LocationList";
import SearchBar from "./components/SearchBar";
import { Container } from "@mui/material";

const App = () => {
  const [locations, setLocations] = useState([]);
  const [displayDetails, setDisplayDetails] = useState(null);

  console.log(displayDetails)
  let returnButton
  if (displayDetails !== null) {
    returnButton = (
      <div onClick={() => setDisplayDetails(null)} className="return">
        &lt;&lt; RETURN
      </div>
    )
  } else {
    returnButton = null
  }

  return (
    <div className="background">
      <Container>
        <div className="App">
          <SearchBar
            setLocations={setLocations}
            setDisplayDetails={setDisplayDetails}
          />
          {returnButton}
          <LocationList
            locations={locations}
            setDisplayDetails={setDisplayDetails}
            displayDetails={displayDetails}
          />
        </div>
      </Container>
    </div>
  );
};

export default App;
