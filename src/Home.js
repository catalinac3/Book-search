import "./Home.css";
import { useState, useEffect } from "react";
import { InitialBookCollection, sortBookList } from "./Book";
import OutputBook from "./OutputBook";
import SearchField from "./SearchField";
import NavButton from "./NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function Home() {
  // List of books being displayed when opening the web page.
  // Either there is a list in local storage, or InitialBookCollection
  let bookCollection = JSON.parse(localStorage.getItem("bookListStored"));
  if (bookCollection == null) {
    bookCollection = sortBookList(InitialBookCollection);
    //local storage can only store strings
    localStorage.setItem("bookListStored", JSON.stringify(bookCollection));
  }

  // STATES ---
  // bookList - list to be displayed on the website at any moment
  const [bookList, setNewBookList] = useState(bookCollection);
  // keeps track of the search, by collecting a tupple of
  // (search string, selected search category)
  const [searched, setNewSearched] = useState(["", ""]);
  // message displayed
  const [searchStatus, setNewSearchStatus] = useState("");
  // number of books displayed on the website
  const [numberDisplayed, setNumberDisplayed] = useState(5);

  //icon
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
          // if search[0] is defined and not an empty string
          if (searched[0]) {
            filterList(searched[0], searched[1], updatedList, msg);
          } else {
            setNewBookList(updatedList);
            setNewSearchStatus(msg);
          }
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
    //--------------------------
    setNewSearched([text, searchType]);
    filterList(text, searchType, bookCollection);
    //---------------------------------
  }

  /**
   * It filters list book, depending on the text of the search
   * changes list to be display by the page, and message to 
   * keep the user informed. 
   * @param {String} text 
   * @param {String} searchType 
   * @param {Array} tempBookList 
   * @param {String} extramsg default empty String
   */
  function filterList(text, searchType, tempBookList, extramsg="") {
    const resultSearch = tempBookList.filter((book) =>
      book[searchType]
        .toString()
        .toLowerCase()
        .trim()
        .includes(text.toLowerCase())
    );
    setNewBookList(resultSearch);
    const singOrPlural =
      resultSearch.length === 1 ? "entry was" : "entries were";

    resultSearch.length !== 0
      ? setNewSearchStatus(`${resultSearch.length} ${singOrPlural} found. ${extramsg}`)
      : setNewSearchStatus(`No entries were found with "${text}". ${extramsg}`);
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

  // useEffect let you perform a side effect after every rendering
  // second parameter [] only runs on mount
  useEffect(() => {
    // Check if there is a message left in the storage
    // from the addition of a book
    const msgAdd = localStorage.getItem("msg");
    if (msgAdd) {
      localStorage.removeItem("msg");
      setNewSearchStatus(msgAdd);
    }
    // clean up - for the use effect
    return () => {
      localStorage.removeItem("msg");
    };
  }, []);

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
