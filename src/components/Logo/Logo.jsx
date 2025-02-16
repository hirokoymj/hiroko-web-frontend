import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  logo: {
    textDecoration: "none !important",
  },
  boldFont: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontWeight: 700,
    fontSize: "1.5rem",
    color: theme.palette.primary.contrastText,
  },
  lightFont: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontWeight: 400,
    fontSize: "1.5rem",
    color: theme.palette.primary.contrastText,
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <Link
      component={RouterLink}
      to={{ pathname: "/", state: { title: "7 days Forecast" } }}
      className={classes.logo}>
      <Typography variant="h6" component="h1">
        <span className={classes.boldFont}>hiroko</span>
        <span className={classes.lightFont}>ymj.com</span>
      </Typography>
    </Link>
  );
};
