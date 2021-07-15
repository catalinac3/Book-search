import "./NavButton.css";

import { useHistory } from "react-router-dom";

function NavButton(props) {
  const history = useHistory();

  function handleNav(nav, extraFunction) {
    if (extraFunction) {
      if (!extraFunction()) {
        return;
      }
    }
    history.push(nav);
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
