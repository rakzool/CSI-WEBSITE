import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import Classes from "./Dialogs.module.css";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography
        style={{
          fontSize: "3rem",
          fontFamily: "Rajdhani",
        }}
      >
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Dialogs({
  open,
  syllabus,
  name,
  desp,
  image,
  alt,
  handleClickOpen,
  Heads,
}) {
  return (
    <div>
      <Dialog
        onClose={handleClickOpen}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClickOpen}
          style={{
            color: "white",
            backgroundColor: " #393e46",
          }}
        >
          {name}
        </DialogTitle>
        <DialogContent dividers>
          <Typography
            gutterBottom
            style={{ fontSize: "2rem", padding: "1rem" }}
          >
            <span className={Classes.center}>
              <img src={image} alt={alt} height="60%" width="60%" />
            </span>
            <div className={Classes.sigDescription}>{desp}</div>
          </Typography>
          <Typography
            gutterBottom
            style={{
              fontSize: "2rem",
              listStyle: "none",
              textAlign: "start",
              padding: "1rem",
            }}
          >
            <span className={Classes.syllabus}>Syllabus of SIG</span>
            <br />
            <br />
            <span>
              {syllabus.map((item, index) => {
                return (
                  <li key={index} className={Classes.syllabusList}>
                    <span>{index + 1 + ".  "}</span>
                    <span className={Classes.major}>{item}</span>
                  </li>
                );
              })}
            </span>
          </Typography>
          <Typography gutterBottom>
            <div className={Classes.sigHeads}>
              <span className={Classes.syllabus}>Present Sig Heads</span>
              <div className={Classes.HeadsInside}>
                {Heads.map((item, index) => {
                  return (
                    <div className={Classes.headAvatar}>
                      <img
                        src="https://p.kindpng.com/picc/s/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
                        alt="avatar"
                        height="100rem"
                        width="100rem"
                        style={{
                          borderRadius: "50%",
                          flex: "1",
                          marginTop: "1rem",
                        }}
                      />
                      <li key={index} className={Classes.dos}>
                        {item}
                      </li>
                      <br />
                    </div>
                  );
                })}
              </div>
            </div>
          </Typography>
        </DialogContent>
        <DialogActions
          style={{
            color: "white",
            backgroundColor: "#393e46",
          }}
        >
          <Button
            autoFocus
            onClick={handleClickOpen}
            color="primary"
            style={{
              fontSize: "1.5rem",
              color: "white",
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
