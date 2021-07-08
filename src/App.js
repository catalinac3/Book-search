import "./App.css";
import { useState } from "react";
import { Book, BookCollection } from "./Book";
import OutputBook from "./OutputBook";
import SearchField from "./SearchField";

function App() {
  // the state is the list to be displayed on the web
  const [bookList, setNewBookList] = useState(BookCollection);
  
  // TODO --- message if no book is found on the database.
  // TODO --- maybe sort list before displaying it.

  /**
   * creates a customized component (OutputBook) for every book in the list,
   * which are render to the app
   * @param {Array} books
   * @returns multiple customized component (OutputBook) for every book in the list
   *
   */
  function displayBooks(books) {
    return books.map((book) => (
      <OutputBook
        title={book.title}
        author={book.author}
        date={book.publishedDate}
      />
    ));
  }
  /**
   * search under the specification of the search type
   * change bookList state accordingly
   * @param {String} text -- what is being searched
   * @param {String} searchType  -- is either publishedDate, author or title
   */
  function search(text, searchType) {
    const resultSearch = BookCollection.filter((book) =>
      book[searchType].toString().toLowerCase().includes(text.toLowerCase())
    );

    setNewBookList(resultSearch);
  }

  return (
    <div className="App">
      <h1> BookFinder </h1>
      <SearchField submitted={search} />
      {displayBooks(bookList)}
    </div>
  );
}

export default App;
