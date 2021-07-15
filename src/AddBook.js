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
  const [inputStatus, setNewInputStatus] = useState("");
  const plusIcon = <FontAwesomeIcon icon={faPlusCircle} />;
  const cancelIcon = (
    <FontAwesomeIcon className="cancelIcon" icon={faWindowClose} />
  );

  function verification() {
    if (!newTitle.trim()) {
      setNewInputStatus("You forgot to write the title!");
      return false;
    } else if (!newAuthor.trim()) {
      setNewInputStatus("You forgot to write the author!");
      return false;
    } else if (!newPDate.trim()) {
      setNewInputStatus("You forgot to write the published date!");
      return false;
    } else {
      return true;
    }
  }

  /**
   * Adds book from the form to the list BookCollection,
   * only when the button add Book has been pressed.
   */
  function add() {
    //trim removes whitespace from both ends of a string
    if (
      verification() &&
      JSON.parse(localStorage.getItem("bookListStored")) !== null
    ) {
      let tempList = JSON.parse(localStorage.getItem("bookListStored"));
      tempList.push(new Book(newTitle, newAuthor, Number(newPDate)));
      localStorage.setItem("bookListStored", JSON.stringify(tempList));
      alert(
        `your book ${newTitle} written by ${newAuthor}, published in ${newPDate} has been added.`
      );
      return true
    } else {
      return false;
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
        <p className="alert">{inputStatus}</p>
        <NavButton nav={"/"} extraFunction={add}>
          {plusIcon} Book
        </NavButton>
        <NavButton nav={"/"}>{cancelIcon} Cancel </NavButton>
      </div>
    </div>
  );
}

export default AddBook;
