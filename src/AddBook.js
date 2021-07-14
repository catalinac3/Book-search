import "./AddBook.css";
import { useState } from "react";
import NavButton from "./NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { Book } from "./Book";

function AddBook() {
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newPDate, setNewPDate] = useState("");
  const plusIcon = <FontAwesomeIcon icon={faPlusCircle} />;
  const cancelIcon = (
    <FontAwesomeIcon className="cancelIcon" icon={faWindowClose} />
  );

  /**
   * Adds book from the form to the list BookCollection,
   * only when the button add Book has been pressed.
   */
  function add() {
    if (JSON.parse(localStorage.getItem("bookListStored")) !== null) {
      let tempList = JSON.parse(localStorage.getItem("bookListStored"));
      tempList.push(new Book(newTitle, newAuthor, Number(newPDate)));
      localStorage.setItem("bookListStored", JSON.stringify(tempList));
      alert(
        `your book ${newTitle} written by ${newAuthor}, published in ${newPDate} has been added.`
      );
    } else {
      alert("addition didn't work");
    }
  }

  return (
    <div className="AddBook">
      <h1>Add a New Book</h1>
      <div className="container">
        <form>
          <div className="inputForm">
            <label className="label">Title: </label>
            <input
              className="userInput"
              type="text"
              name="title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div className="inputForm">
            <label className="label">Author: </label>
            <input
              className="userInput"
              type="text"
              name="author"
              value={newAuthor}
              onChange={(e) => setNewAuthor(e.target.value)}
            />
          </div>
          <div className="inputForm">
            <label className="label">Published date:</label>
            <input
              className="userInput"
              type="text"
              name="publishedDate"
              value={newPDate}
              onChange={(e) => setNewPDate(e.target.value)}
            />
          </div>
        </form>
        <NavButton nav={"/"} extraFunction={add}>
          {plusIcon} Book
        </NavButton>
        <NavButton nav={"/"}>{cancelIcon} Cancel </NavButton>
      </div>
    </div>
  );
}

export default AddBook;
