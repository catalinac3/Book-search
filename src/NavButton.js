import "./NavButton.css";
import { useHistory } from "react-router-dom";
import { Tooltip } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";

// Styles to be overwrited on the Tooltip
const useStyles = makeStyles({
  tooltipPlacementBottom: {
    bottom: "15px",
  },
});

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

  const classes = useStyles();
  return (
    <div className="NavButton" style={props.style}>
      <Tooltip
        classes={{ tooltipPlacementBottom: classes.tooltipPlacementBottom }}
        title={props.toolTip}
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        placement="bottom"
        arrow
      >
        <button onClick={() => handleNav(props.nav, props.extraFunction)}>
          {props.children}
        </button>
      </Tooltip>
    </div>
  );
}

export default NavButton;
