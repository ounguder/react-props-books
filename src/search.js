import React from "react";

const Search = (props) => {
  return (
    <div className="searchdiv">
      <label htmlFor="search"></label>
      <input
        className="search"
        id="search"
        placeholder="Search a Book"
        type="text"
        onChange={props.onSearch}
      />
    </div>
  );
};

export default Search;
