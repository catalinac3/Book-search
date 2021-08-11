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
  const [inputwarning, setNewInputWarning] = useState("");
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
      setNewInputWarning("You forgot to write the title!");
      return false;
    } else if (!newAuthor.trim()) {
      setNewInputWarning("You forgot to write the author!");
      return false;
    } else if (!newPDate.trim()) {
      setNewInputWarning("You forgot to write the published date!");
      return false;
    } else {
      return true;
    }
  }
  /**
   * checks if the title to be added already exists on the
   * book list
   * @param {Array} bookList
   * @returns Boolean
   */
  function isNewTitle(bookList) {
    if (
      bookList.find(
        (element) =>
          element.title.toLowerCase().trim() === newTitle.toLowerCase().trim()
      )
    ) {
      setNewInputWarning("This title already exists!");
      return false;
    } else {
      return true;
    }
  }
  /**
   * Checks if the year is valid, if is a date before today
   * if is a number, and if it has 4 digits
   * @returns Boolean
   */
  function isYear() {
    const yearToday = new Date().getFullYear();
    const yearFromUser = new Date(Number(newPDate.trim()), 0).getFullYear();

    if (
      isNaN(yearFromUser) ||
      !(newPDate.trim().length === 4) ||
      yearFromUser > yearToday
    ) {
      setNewInputWarning("The year of publication is not valid!");
      return false;
    } else {
      return true;
    }
  }

  /**
   * Adds book (provided in the form) to the list BookCollection,
   * only when the button add Book has been pressed.
   * @returns Boolean
   */
  function add() {
    //trim removes whitespace from both ends of a string
    if (
      verification() &&
      JSON.parse(localStorage.getItem("bookListStored")) !== null
    ) {
      let tempList = JSON.parse(localStorage.getItem("bookListStored"));
      if (isNewTitle(tempList) && isYear()) {
        tempList.push(new Book(newTitle, newAuthor, Number(newPDate)));
        sortBookList(tempList);
        localStorage.setItem("bookListStored", JSON.stringify(tempList));
        //to set message that a book has been added
        const message = `the book "${newTitle}" has been added`
        localStorage.setItem("msg", message);
        return true;
      }
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
            <label className="label">Published Year:</label>
            <input
              className="userInput"
              type="text"
              name="publishedDate"
              value={newPDate}
              onChange={(e) => setNewPDate(e.target.value)}
            />
          </div>
        </form>
        <p className="alert">{inputwarning}</p>
        <div className="buttonsContainer">
          <NavButton
            toolTip={"Return to Main Page"}
            style={cancelBtnStyle}
            nav={"/"}
          >
            {cancelIcon} Cancel{" "}
          </NavButton>
          <NavButton
            toolTip={"Confirm Book Addition"}
            style={addBtnStyle}
            nav={"/"}
            extraFunction={add}
          >
            {plusIcon} Book
          </NavButton>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
