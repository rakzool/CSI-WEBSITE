import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import "./Drawer.css";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function Drawer() {
  const links = [
    {
      title: "Home",
      Path: "/",
      cName: "route-link",
    },
    {
      title: "Contact",
      Path: "/contact",
      cName: "route-link",
    },
    {
      title: "About",
      Path: "/about",
      cName: "route-link",
    },
    {
      title: "Our Team",
      Path: "/team",
      cName: "route-link",
    },
    {
      title: "Events",
      Path: "/events",
      cName: "route-link",
    },
    {
      title: "Alumnies",
      Path: "/Alumnies",
      cName: "route-link",
    },
  ];

  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="main-menu">
          <i className="fa fa-bars"></i>
          <span className="menu-text">&nbsp;&nbsp;MENU</span>
          <button onClick={toggleDrawer("left", true)} className="close-btn">
            <i className="fa fa-times"></i>
          </button>
        </div>
        <Divider style={{ height: "0.5rem", color: "black" }} />

        <div className="drawer-nav-container">
          <ul className="link-container">
            {links.map((items, index) => (
              <Link to={items.Path} className="stylrem" key={index}>
                <li className={items.cName}>
                  <div className="link-style">
                    <div className="texts">
                      <span>{items.title}</span>
                    </div>
                  </div>
                </li>
                <Divider style={{ marginTop: "5px", marginBottom: "5px" }} />
              </Link>
            ))}
          </ul>
        </div>
      </List>
    </div>
  );

  return (
    <div>
      {
        <React.Fragment>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("left", true)}
          >
            <span className="bars">
              <i className="fa fa-bars"></i>
            </span>
          </IconButton>

          <SwipeableDrawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </React.Fragment>
      }
    </div>
  );
}
