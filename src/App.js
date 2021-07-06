import "./App.css";
import { Book, BookCollection } from "./Book";
import OutputBook from "./OutputBook";

function App() {
  const BookList = BookCollection.map((book) => (
    <OutputBook title={book.title} author={book.author} date={book.publishedDate}/>
  ));

  return (
    <div className="App">
      <h1> Book search </h1>
      <h2> List of books </h2>
      {BookList}
    </div>
  );
}

export default App;
