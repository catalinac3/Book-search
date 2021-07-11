import "./AddBook.css";
import { useState } from "react";
function AddBook() {
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newPDate, setNewPDate] = useState("");

  return (
    <div className="AddBook">
      <h1>Add a New Book</h1>
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
    </div>
  );
}

export default AddBook;
