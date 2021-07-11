import "./NavButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

function NavButton(props) {
  const history = useHistory();
  const addIcon = <FontAwesomeIcon icon={faPlusCircle} />;

  function handleNav(nav, extraFunction = 0) {
    history.push(nav);
    if (extraFunction) {
      extraFunction();
    }
  }
  // history.push("/addBook");
  return (
    <div className="NavButton">
      <button onClick={() => handleNav(props.nav, props.extraFunction)}>{addIcon} Book</button>
    </div>
  );
}

export default NavButton;
