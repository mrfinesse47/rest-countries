import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = (props) => {
  return (
    <label className="country-search country-search-dark">
      <input
        type="text"
        value={props.search}
        onChange={(event) => props.setSearch(event.target.value)}
        required
      ></input>
      <div className="placeholder">
        <FontAwesomeIcon
          icon={faSearch}
          className="placeholder-icon"
          size="lg"
        />
        <div className="placeholder-message"> Search For A Country....</div>
      </div>
    </label>
  );
};

export default Search;
