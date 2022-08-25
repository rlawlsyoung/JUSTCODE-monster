import React from "react";
import "./SearchBox.scss";

function SearchBox(props) {
  return (
    <input
      className="search"
      type="search"
      placeholder="Search..."
      onKeyDown={props.handleChange}
    />
  );
}

export default SearchBox;
