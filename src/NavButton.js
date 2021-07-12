import "./NavButton.css";

import { useHistory } from "react-router-dom";

function NavButton(props) {
  const history = useHistory();

  function handleNav(nav, extraFunction) {
    history.push(nav);
    if (extraFunction) {
      extraFunction();
    }
  }

  return (
    <div className="NavButton">
      <button onClick={() => handleNav(props.nav, props.extraFunction)}>
        {props.children}
      </button>
    </div>
  );
}

export default NavButton;
