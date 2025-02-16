import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    marginBottom: theme.spacing(2),
  },
}));

export const Title = ({ text }) => {
  const classes = useStyles();
  return (
    <Typography
      component="h2"
      variant="h5"
      color="black"
      className={classes.sectionTitle}
      noWrap>
      {text}
    </Typography>
  );
};

Title.propTypes = {
  children: PropTypes.node,
};
