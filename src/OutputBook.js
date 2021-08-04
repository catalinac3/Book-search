import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import "./OutputBook.css";



// element that will display a book data
function OutputBook(props) {
  /**
   * This function deletes a book from the list, 
   * when the delete icon is pressed
   * and re-render the page, also informs the user with a 
   * message about the deletion.
   * @param {String} elemTitle 
   */
  function deleteBook(elemTitle) {
    console.log(elemTitle);
    let tempList = JSON.parse(localStorage.getItem("bookListStored"));
    // The find() method returns the value of the first element in the
    // provided array that satisfies the provided testing function.
    const found = tempList.find((element) => element.title === elemTitle);
    tempList.splice(tempList.indexOf(found), 1);
    localStorage.setItem("bookListStored", JSON.stringify(tempList));
    props.deleted(`The book "${found.title}" has been erased`, tempList);
  }

  return (
    <div className="OutputDiv">
      <div className="bookDisplay">
        <p>
          <span className="Title">{props.title}</span>, {props.author},{" "}
          {props.date}
        </p>
      </div>
      <div className="deleteBtn">
        <IconButton
          size="small"
          onClick={() => deleteBook(props.title)}
        >
          <DeleteIcon fontSize="small"/>
        </IconButton>
      </div>
    </div>
  );
}
export default OutputBook;
