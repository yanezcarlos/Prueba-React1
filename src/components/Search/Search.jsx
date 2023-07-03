import React from "react";

const Search = (props) => {
  return (
    <div>
      <input
        className="input"
        type="text"
        placeholder="Buscar..."
        onChange={props.onChange}
        value={props.search}
      />
    </div>
  );
};

export default Search;
