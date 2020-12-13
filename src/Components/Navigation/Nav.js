import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { DrawerData } from "../Drawer/Drawer";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./Nav.css";

import Drawer from "../Drawer/Drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(4.5),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Nav() {
  const classes = useStyles();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: "#393e46", width: "100vw" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={showSidebar}
          >
            <Drawer />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            <ul className="Nav-links">
              <span style={{ marginLeft: "3px" }}></span>
              <Link to="/" className="stylish">
                <li>
                  <i className="fa fa-home">&nbsp;Home</i>
                </li>
              </Link>
              <Link to="/about" className="stylish">
                <li>
                  <i className="fa fa-info-circle">&nbsp;About</i>
                </li>
              </Link>
              <Link to="/contact" className="stylish">
                <li>
                  <i className="fa fa-phone">&nbsp;Contact</i>
                </li>
              </Link>
            </ul>
          </Typography>
          <Button color="inherit">
            <span className="Login">
              <i className="fa fa-sign-in">&nbsp;Login</i>
            </span>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
