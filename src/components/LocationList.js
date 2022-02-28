import React from "react";

import Stack from "@mui/material/Stack";

import "../styles/App.css";

import LocationItem from "./LocationItem";
import Paper from "@mui/material/Paper";

const LocationList = ({ locations, setDisplayDetails }) => {
  //renders nothing if locations state is still loading
  //display text if no locations are found by the search
  if (locations?.length === 0) return null;
  if (locations[0] === "none") return <div>no location found</div>;

  //renders a list of locations found by the search
  return (
    <div className="locationList">
      <Stack spacing={2}>
        {locations.map((location, index) => {
          return (
            <Paper key={location.id}>
              <LocationItem
                location={location}
                index={index}
                setDisplayDetails={setDisplayDetails}
              />
            </Paper>
          );
        })}
      </Stack>
    </div>
  );
};
export default LocationList;
