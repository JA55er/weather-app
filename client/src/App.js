import React, { useState } from "react";

import "./styles/App.css";

import LocationList from "./components/LocationList";
import SearchBar from "./components/SearchBar";
import Container from "@mui/material/Container";
import DetailedView from "./components/DetailedView";
import { Paper } from "@mui/material";

const App = () => {
  //locations - contains locations found by search
  //displayDetails - controls whether to show a detailed weather for a selected location or a list of locations
  //display details gets set to null when performing a new search in SearchBar component or 
  //to an index of locations (in the Locationitem component) to know which location's detailed weather to display
  const [locations, setLocations] = useState([]);
  const [displayDetails, setDisplayDetails] = useState(null);

  //checks if a detailed view for a location is being displayed. If so renders a return button to go back to location list
  let returnButton;
  if (displayDetails !== null) {
    returnButton = (
      <Paper onClick={() => setDisplayDetails(null)} className="return">
        &lt;&lt; RETURN
      </Paper>
    );
  } else {
    returnButton = null;
  }

  //renders detailed view for a location if displayDetails is set
  if (displayDetails !== null) {
    return (
      <div className="background">
        <Container>
          <div className="App">
            <SearchBar
              setLocations={setLocations}
              setDisplayDetails={setDisplayDetails}
            />
            {returnButton}
            <DetailedView
              location={locations[displayDetails]}
              setDisplayDetails={setDisplayDetails}
            />
          </div>
        </Container>
      </div>
    );
  }

  //renders a list of found locations if displayDetails is not set
  if (!displayDetails) {
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
  }
};

export default App;
