import "./AddBook.css";
import { useState } from "react";
import NavButton from "./NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { Book, sortBookList } from "./Book";

const addBtnStyle = {
  display: "inline-block",
  float: "right",
};
const cancelBtnStyle = {
  display: "inline-block",
  float: "left",
};

function AddBook() {
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newPDate, setNewPDate] = useState("");
  const [inputStatus, setNewInputStatus] = useState("");
  const plusIcon = <FontAwesomeIcon icon={faPlusCircle} />;
  const cancelIcon = (
    <FontAwesomeIcon className="cancelIcon" icon={faWindowClose} />
  );

  /**
   * Verifies that all inputs Field were filled before
   * making a book addition
   * @returns Boolean
   */
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
   * Adds book (provided in the form) to the list BookCollection,
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
      sortBookList(tempList);
      localStorage.setItem("bookListStored", JSON.stringify(tempList));
      return true;
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
        <div className="buttonsContainer">
          <NavButton style={cancelBtnStyle} nav={"/"}>
            {cancelIcon} Cancel{" "}
          </NavButton>
          <NavButton style={addBtnStyle} nav={"/"} extraFunction={add}>
            {plusIcon} Book
          </NavButton>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
