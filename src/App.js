import "./App.css";
import { Book, BookCollection } from "./Book";
import OutputBook from "./OutputBook";
import SearchField from "./SearchField";

function App() {
  // displays all books available in the storage on the page
  const BookList = BookCollection.map((book) => (
    <OutputBook title={book.title} author={book.author} date={book.publishedDate}/>
  ));

  return (
    <div className="App">
      <h1> BookFinder </h1>
      <SearchField/>
      {BookList}
    </div>
  );
}

export default App;
