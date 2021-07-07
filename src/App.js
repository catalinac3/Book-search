import "./App.css";
import { Book, BookCollection } from "./Book";
import OutputBook from "./OutputBook";
import SearchField from "./SearchField";

function App() {
  // displays all books available in the storage on the page
  const BookList = BookCollection.map((book) => (
    <OutputBook title={book.title} author={book.author} date={book.publishedDate}/>
  ));

function search (x,y) {
  alert("The form was submitted")
  console.log(x,y);
}

  return (
    <div className="App">
      <h1> BookFinder </h1>
      <SearchField submitted={search}/>
      {BookList}
    </div>
  );
}

export default App;
