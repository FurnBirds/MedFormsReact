import React from "react";

function SearchBar( {searchProfile}) {
    return (
      <form>
        <input
          type="text"
          placeholder="Search for Name"
          //value={search}
          onChange={e => searchProfile(e.target.value)}
        />

      </form>
    )
  };

export default SearchBar
