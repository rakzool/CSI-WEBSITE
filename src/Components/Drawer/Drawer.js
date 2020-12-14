import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import "./Drawer.css";

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
      icon: "fa fa-home",
    },
    {
      title: "Contact",
      Path: "/contact",
      cName: "route-link",
      icon: "fa fa-phone",
    },
    {
      title: "About",
      Path: "/about",
      cName: "route-link",
      icon: "fa fa-info-circle",
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
          <i className="fa fa-bars">&nbsp;&nbsp;MENU</i>
          <button onClick={toggleDrawer("left", true)} className="close-btn">
            <i className="fa fa-times"></i>
          </button>
        </div>
        <Divider style={{ height: "0.5rem", color: "black" }} />

        <div className="drawer-nav-container">
          <ul className="link-container">
            {links.map((items, index) => (
              <Link to={items.Path} className="stylrem">
                <li key={index} className={items.cName}>
                  <span className="link-style">
                    <i className={items.icon}>&nbsp;{items.title}</i>
                  </span>
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
          <span className="bars" onClick={toggleDrawer("left", true)}>
            <i className="fa fa-bars"></i>
          </span>

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
