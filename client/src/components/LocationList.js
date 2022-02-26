import React from "react";

import Stack from '@mui/material/Stack'

import '../styles/App.css'

import LocationItem from "./LocationItem";
import DetailedView from "./DetailedView";

const LocationList = ({ locations, setDisplayDetails, displayDetails }) => {
  if (displayDetails !== null) {
    return (
      <DetailedView
        location={locations[displayDetails]}
        setDisplayDetails={setDisplayDetails}
      />
    );
  }

  if (locations?.length === 0) return null;
  if (locations[0] === "none") return <div>no location found</div>;

  return (
    <div className="LocationList">
      <Stack spacing={2}>
      {locations.map((location, index) => {
        return (
          <div key={location.id}>
            <LocationItem
              location={location}
              index={index}
              setDisplayDetails={setDisplayDetails}
            />
          </div>
        );
      })}
      </Stack>
    </div>
  );
};
export default LocationList;
