import React from "react";
import "./OutputBook.css";

// element that will display a book data
function OutputBook (props) {
  return (
    <div className="OutputDiv">
      <p>
        <span className="Title">{props.title}</span>, {props.author},{" "}
        {props.date}
      </p>
    </div>
  );
};
export default OutputBook;
