import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    top: 0,
    height: "calc(100% - 20px)",
    maxHeight: "calc(100% - 20px)",
    right: 0,
    width: "400px",
    overflowY: "hidden",
    position: "fixed",
    margin: "9px",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      width: "auto",
    },
  },
  titleRoot: {
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
    textAlign: "center",
    marginBottom: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  actionButton: {
    width: "50%",
    backgroundColor: theme.palette.primary.dark,
  },
  cancelBtn: {
    width: "50%",
  },
  actionsRoot: {
    borderTop: `1px solid ${theme.palette.grey[400]}`,
    padding: theme.spacing(2, 3),
  },
}));

export const SimpleDrawer = ({ open, title, onClose, children }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose} classes={{ paper: classes.paper }}>
      <DialogTitle classes={{ root: classes.titleRoot }}>
        <Typography variant="h6">{title}</Typography>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
