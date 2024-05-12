import React from "react";

function SearchBar( {search}) {
    return (
      <form>
        <input
          type="text"
          placeholder="Search for Name"
          value={search}
          // onChange={e => setSearch(e.target.value)}
        />

      </form>
    )
  };

export default SearchBar
