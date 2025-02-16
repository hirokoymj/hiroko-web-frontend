import React from "react";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "#fff",
    border: "1px solid #fff",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    fontWeight: 600,
  },
}));

export const RouterButton = ({ to, title, text }) => {
  const classes = useStyles();

  return (
    <Link
      component={RouterLink}
      to={{
        pathname: to,
        state: { title },
      }}>
      <Button variant="outlined" className={classes.button}>
        {text}
      </Button>
    </Link>
  );
};
