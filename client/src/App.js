import React, { useState } from "react";

import "./styles/App.css";

import LocationList from "./components/LocationList";
import SearchBar from "./components/SearchBar";
import Container from "@mui/material/Container";
import DetailedView from "./components/DetailedView";
import Paper from "@mui/material/Paper";

const App = () => {
  //locations - contains locations found by search
  //displayDetails - controls whether to show a detailed weather for a selected location or a list of locations
  //display details gets set to null when performing a new search in SearchBar component or
  //to an index of locations (in the Locationitem component) to know which location's detailed weather to display
  const [locations, setLocations] = useState([]);
  const [displayDetails, setDisplayDetails] = useState(null);

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
            <Paper onClick={() => setDisplayDetails(null)} className="return">
              <p>&lt;&lt; RETURN</p>
            </Paper>
            <DetailedView
              location={locations[displayDetails]}
              setDisplayDetails={setDisplayDetails}
            />
          </div>
        </Container>
      </div>
    );
  }

  // renders a list of found locations if displayDetails is not set
  if (!displayDetails) {
    return (
      <div className="background">
        <Container>
          <div className="App">
            <SearchBar
              setLocations={setLocations}
              setDisplayDetails={setDisplayDetails}
            />
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
