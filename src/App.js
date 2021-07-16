import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import AddBook from "./AddBook";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/addBook" exact component={() => <AddBook />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
