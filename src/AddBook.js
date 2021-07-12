import "./AddBook.css";
import { useState } from "react";
import NavButton from "./NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { BookCollection } from "./Book";
import { Book } from "./Book";

function AddBook() {
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newPDate, setNewPDate] = useState("");
  const plusIcon = <FontAwesomeIcon icon={faPlusCircle} />;
  const cancelIcon = (
    <FontAwesomeIcon className="cancelIcon" icon={faWindowClose} />
  );

  function add() {
    BookCollection.push(new Book(newTitle, newAuthor, newPDate))
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
