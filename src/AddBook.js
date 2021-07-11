import "./AddBook.css";
import { useState } from "react";
import NavButton from "./NavButton";

function AddBook() {
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newPDate, setNewPDate] = useState("");

function add() {
  alert("I'm the add function");
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
        <NavButton nav={"/"} extraFunction={add} />
      </div>
    </div>
  );
}

export default AddBook;
