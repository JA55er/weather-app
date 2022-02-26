import React, { useState } from "react";

import TextField from '@mui/material/TextField';

import getLocation from "../api/searchLocation";
import logAction from "../services/logAction";

const SearchBar = ({ setLocations, setDisplayDetails }) => {
  const [searchText, setSearchText] = useState("");

  const onSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const onSearchSubmit = async (e) => {
    e.preventDefault();

    setDisplayDetails(null);
    logAction({
      action: "search location",
      data: searchText,
    });
    setLocations(await getLocation(searchText));
    console.log(/^(?! )[A-Za-z\s]+$/.test(searchText));
  };

  return (
    <form onSubmit={(e) => onSearchSubmit(e)}>
      <TextField
        onChange={(e) => onSearchInputChange(e)}
        variant="standard"
        value={searchText}
        inputProps={{ maxLength: 30, spellCheck: 'false' }}
      />
    </form>
  );
};

export default SearchBar;
