import React, { useState } from "react";
import "./SearchField.css";

function SearchField(props) {
  // State of this component Searched and Selected
  // setNewSearch and setNewSelection are functions to change the state of the component
  // useState returns and array
  const [Searched, setNewSearch] = useState("");
  const [Selected, setNewSelection] = useState("title");

  return (
    <div>
      {/*on submit is trigger when clicking on search or pressing enter*/}
      <form
        onSubmit={(e) => {
          //e.preventDefault avoids the page to reload on submit
          e.preventDefault();
          // in here the state of this component is passed to App
          props.submitted(Searched, Selected);
        }}
      >
        {/*on change is trigger when changing selection */}
        <select onChange={(e) => setNewSelection(e.target.value)}>
          <option defaultValue="title">title</option>
          <option value="author">author</option>
          <option value="publishedDate">date</option>
        </select>{" "}
        {/*on change is trigger typing on input*/}
        <input type="text" onChange={(e) => setNewSearch(e.target.value)} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
export default SearchField;
