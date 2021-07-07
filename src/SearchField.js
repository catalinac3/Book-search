import React, { useState } from "react";

function SearchField(props) {
  // useState ({userSearch: ""}) is an array, the real state (Searched) is in the 0 index,
  // the second position in the array (SetNewSearch) is a function that can set the new state
  const [Searched, setNewSearch] = useState({ userSearch: "" });
  const [Selected, setNewSelection] = useState({ selection: "title" });

  // function submitted() {
  //   alert("The form was submitted");
  // }
  console.log(props);
  return (
    <div>
      {/* */}
      <form
        onSubmit={(e) => {
          //e.preventDefault avoids the page to reload on submit
          e.preventDefault();
          props.submitted(Searched.userSearch, Selected.selection);
        }}
      >
        <select
          onChange={(e) => setNewSelection({ selection: e.target.value })}
        >
          <option defaultValue="title">title</option>
          <option value="author">author</option>
          <option value="date">date</option>
        </select>
        <input
          type="text"
          onChange={(e) => setNewSearch({ userSearch: e.target.value })}
        ></input>
        <input type="submit" value="Search"></input>
      </form>
      <p>
        {Searched.userSearch} {Selected.selection}
      </p>
    </div>
  );
}
export default SearchField;
