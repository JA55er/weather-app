import React, { useState } from "react";

import TextField from "@mui/material/TextField";

import getLocation from "../api/searchLocation";
import logAction from "../services/logAction";

const SearchBar = ({ setLocations, setDisplayDetails }) => {
  //searchText - for controlling the form input
  //searchTextError - state that decides if error message should be displayed
  const [searchText, setSearchText] = useState("");
  const [searchTextError, setSearchTextError] = useState(false);

  //sets the state for input control
  //checks if input contains characters besides letters and spaces
  const onSearchInputChange = (e) => {
    setSearchText(e.target.value);
    if (/^(?! )[A-Za-z\s]+$/.test(e.target.value) || !e.target.value) {
      setSearchTextError(false);
    } else {
      setSearchTextError(true);
    }
  };

  //on form submit removes detailed view for a single location
  //sends search action log to backend server
  //sets the state with found locations
  const onSearchSubmit = async (e) => {
    e.preventDefault();

    setDisplayDetails(null);
    logAction({
      action: "search location",
      data: searchText,
    });
    setLocations(await getLocation(searchText));
  };

  return (
    <div className="SearchBar">
      <form className="searchForm" onSubmit={(e) => onSearchSubmit(e)}>
        <TextField
          style={{ width: 300, height: 100 }}
          placeholder="Enter location here"
          type="search"
          onChange={(e) => onSearchInputChange(e)}
          variant="standard"
          value={searchText}
          error={searchTextError}
          helperText={searchTextError ? "Only letters and spaces allowed" : ""}
          inputProps={{
            maxLength: 30,
            spellCheck: "false",
            style: { fontSize: 30 },
          }}
        />
      </form>
    </div>
  );
};

export default SearchBar;
