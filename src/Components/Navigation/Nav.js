import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

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
    <div>
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{ background: "#393e46", width: "100vw" }}
        >
          <Toolbar>
            <Drawer onClick={showSidebar} />

            <Typography variant="h6" className={classes.title}>
              <Link to="/" className="stylish">
                <div className="Nav-csi">
                  <img
                    src="/assets/csi-cropped.png"
                    width="30rem"
                    height="30rem"
                    alt="CSi Logo"
                  ></img>

                  <h5 className="Nav-csi-text">CSI IPEC</h5>
                </div>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div className="navbar-filler"></div>
    </div>
  );
}
