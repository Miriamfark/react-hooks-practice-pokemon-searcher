import React from "react";

function Search({ handleSearch, searchValue }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
        onChange={handleSearch}
        className="prompt" 
        value={searchValue}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
