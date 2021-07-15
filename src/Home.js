import "./Home.css";
import { useState } from "react";
import { InitialBookCollection, sortBookList} from "./Book";
import OutputBook from "./OutputBook";
import SearchField from "./SearchField";
import NavButton from "./NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function Home() {
  // BookCollection is the list of books at any point
  let BookCollection = JSON.parse(localStorage.getItem("bookListStored"));
  if (BookCollection === null) {
    BookCollection = sortBookList(InitialBookCollection);
    localStorage.setItem("bookListStored", JSON.stringify(BookCollection));
  }

  // list to be displayed on the website
  const [BookList, setNewBookList] = useState(BookCollection);
  const [SearchStatus, setNewSearchStatus] = useState("");
  const plusIcon = <FontAwesomeIcon icon={faPlusCircle} />;

  // TODO --- think about sortierung when a book is added,
  // first by author and then by year of publication in
  // descendet order. Maybe also when displayed.

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
        key={book.title}
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
    const SingOrPlural =
      resultSearch.length === 1 ? "entry was" : "entries were";

    resultSearch.length !== 0
      ? setNewSearchStatus(`${resultSearch.length} ${SingOrPlural} found`)
      : setNewSearchStatus(`No entries were found with "${text}"`);
  }
  return (
    <div className="Home">
      <NavButton nav={"/addBook"}>{plusIcon} Book</NavButton>
      <h1> BookFinder </h1>

      <SearchField submitted={search} />
      <p>{SearchStatus}</p>
      {displayBooks(BookList)}
    </div>
  );
}

export default Home;
