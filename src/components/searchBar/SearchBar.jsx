import React from "react";
import "./SearchBar.css";

const SearchBar = ({ handleSearchWord }) => {
  return (
    <div>
      <input className="searchBar"
        type="text"
        placeholder="Search here"
        onChange={(e) => handleSearchWord(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
