import { useHistory } from "react-router-dom";
import "./NavButton.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

function NavButton() {
  const history = useHistory();
  const addIcon =<FontAwesomeIcon icon={faPlusCircle}/>

  function handleClick() {
    history.push("/addBook");
  }
 
  return (
    <div className="NavButton">
      <button onClick={handleClick}>{addIcon} Add Book</button>
    </div>
  );
}

export default NavButton;
