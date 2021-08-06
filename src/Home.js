import "./Home.css";
import { useState } from "react";
import { InitialBookCollection, sortBookList } from "./Book";
import OutputBook from "./OutputBook";
import SearchField from "./SearchField";
import NavButton from "./NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function Home() {
  // BookCollection is the list of books at any point
  let bookCollection = JSON.parse(localStorage.getItem("bookListStored"));
  if (bookCollection === null) {
    bookCollection = sortBookList(InitialBookCollection);
    localStorage.setItem("bookListStored", JSON.stringify(bookCollection));
  }

  // bookList - list to be displayed on the website
  const [bookList, setNewBookList] = useState(bookCollection);
  const [searchStatus, setNewSearchStatus] = useState("");
  // number of books displayed on the website
  const [numberDisplayed, setNumberDisplayed] = useState(5);
  const plusIcon = <FontAwesomeIcon icon={faPlusCircle} />;

  /**
   * creates a customized component (OutputBook) for every book in the list,
   * which are render to the app
   * @param {Array} books
   * @returns multiple customized component (OutputBook) for every book in the list
   *
   */
  function displayBooks(books) {
    return books.slice(0, numberDisplayed).map((book) => (
      <OutputBook
        deleted={(msg, updatedList) => {
          setNewSearchStatus(msg);
          setNewBookList(updatedList);
        }}
        key={book.title}
        title={book.title}
        author={book.author}
        date={book.publishedDate}
      />
    ));
  }
  /**
   * search under the specification of the search type
   * change bookList to be display, reports search status
   * (how many entries were found)
   * @param {String} text -- what is being searched
   * @param {String} searchType  -- is either publishedDate, author or title
   */
  function search(text, searchType) {
    // resets the number of item displayed to 7
    // everytime a new entry is searched
    setNumberDisplayed(5);
    const resultSearch = bookCollection.filter((book) =>
      book[searchType].toString().toLowerCase().includes(text.toLowerCase())
    );
    setNewBookList(resultSearch);
    const singOrPlural =
      resultSearch.length === 1 ? "entry was" : "entries were";

    resultSearch.length !== 0
      ? setNewSearchStatus(`${resultSearch.length} ${singOrPlural} found`)
      : setNewSearchStatus(`No entries were found with "${text}"`);
  }
  /**
   * the function renders a button div if there are more
   * with text "Display All" if there is a need for it
   * @returns <button/>
   */
  function loadMoreBtn() {
    if (numberDisplayed < bookList.length) {
      return (
        <button
          style={{ display: "inline-block", float: "right" }}
          onClick={() => {
            setNumberDisplayed(bookList.length);
            displayBooks(bookList);
          }}
        >
          Display All
        </button>
      );
    }
  }

  return (
    <div className="Home">
      <NavButton
        toolTip={"Add a Book"}
        style={{ textAlign: "end" }}
        nav={"/addBook"}
      >
        {plusIcon} Book
      </NavButton>
      <h1> BookFinder </h1>
      <SearchField submitted={search} />
      <p className="message">{searchStatus}</p>
      {displayBooks(bookList)}
      {loadMoreBtn()}
    </div>
  );
}

export default Home;
