import React, { useState } from "react";

function SearchField(props) {
  // useState ({userSearch: ""}) is an array, the real state is in the 0 index,
  // the second position in the array SetNewSearch is a function that can set the new state
  const [Searched, setNewSearch] = useState({
    userSearch: "",
    selection: "title",
  });

  function inputChanged(event) {
    setNewSearch({
      userSearch: event.target.value,
      selection: Searched.selection,
    });
  }
  function selectionChanged(event) {
    setNewSearch({
      userSearch: Searched.userSearch,
      selection: event.target.value,
    });
  }

  return (
    <div>
      <form>
        <select onChange={selectionChanged}>
          <option defaultValue="title">title</option>
          <option value="author">author</option>
          <option value="date">date</option>
        </select>
        <input type="text" onChange={inputChanged}></input>
        <input type="submit" value="Search"></input>
      </form>
      <p>{Searched.userSearch}</p>
      <p>{Searched.selection}</p>
    </div>
  );
}
export default SearchField;
