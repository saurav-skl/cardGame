import React from "react";

const Search = ({ searchChange }) => {
  return (
    <div className="tc ">
      <input
        className="br3 b--blue grow input-text pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Enter robots"
        onChange={searchChange}
      />
    </div>
  );
};
export default Search;
