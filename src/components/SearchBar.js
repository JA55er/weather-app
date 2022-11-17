import React, { useState } from "react";


import getLocation from "../api/searchLocation";
import logAction from "../services/logAction";

import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";

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
    setLocations(['loading'])
    setDisplayDetails(null);
    await logAction({
      action: "search location",
      data: searchText,
    });
    setLocations(await getLocation(searchText));
  };

  //makes an error message ir searchTestError is truthy
  const errorMessage = searchTextError ? <p className="errorMessage">Only letters and spaces allowed</p> : null

  return (
    <div className="searchBar">
      <form className="searchForm" onSubmit={(e) => onSearchSubmit(e)}>
          <Paper
            style={{ display: "flex", alignItems: "center", width: 300 }}  className="searchForm" onSubmit={(e) => onSearchSubmit(e)}
          >
            <InputBase
              placeholder="Enter location here"
              type="search"
              onChange={(e) => onSearchInputChange(e)}
              value={searchText}
              inputProps={{
                maxLength: 30,
                spellCheck: "false",
                style: { fontSize: 25 },
              }}
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
      </form>
      {errorMessage}
    </div>
  );
};

export default SearchBar;
