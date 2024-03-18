import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";
import resumePdf from "Documents/resume.pdf";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2),
    bottom: 0,
    width: "100%",
    color: "#939AA8",
    textAlign: "center",
  },
  icon: {
    color: "#939AA8",
    "&:hover": {
      color: theme.palette.secondary.dark,
      backgroundColor: theme.palette.accent.main,
    },
  },
}));

const IconButtonLink = ({ icon, to }) => {
  const classes = useStyles();

  return (
    <Link href={to} color="inherit" target="_blank" rel="noreferrer">
      <IconButton className={classes.icon}>{icon}</IconButton>
    </Link>
  );
};

export const PageFooter = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} hirokoymj.com All rights reserved.
      </Typography>
      <IconButtonLink
        icon={<GitHubIcon fontSize="large" />}
        to="https://github.com/hirokoymj/hiroko-frontend"
      />
      <div>
        <a href={resumePdf} target="_blank">
          Resume
        </a>
      </div>
    </footer>
  );
};
