import React from "react";

const OutputBook = (props) => {
    return (
      <div className = "Output">
        <p> {props.title}, {props.author}, {props.date} </p>
      </div>
    );
  };
  export default OutputBook;