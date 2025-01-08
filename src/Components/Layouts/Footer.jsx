import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import { useSelector, useDispatch } from "react-redux";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { setThemeName } from "../../Redux/themeSlice";
import { config } from "Config/config";

const { Theme } = config;

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
  const themeName = useSelector((state) => state.theme.name);
  const dispatch = useDispatch();

  const handleSwitchChange = (event) => {
    const themeName = event.target.checked ? Theme.seasonal : Theme.default;
    dispatch(setThemeName(themeName));
  };

  return (
    <div>
      <footer className={classes.footer}>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} hirokoymj.com All rights reserved.
        </Typography>
        <IconButtonLink
          icon={<GitHubIcon fontSize="large" />}
          to="https://github.com/hirokoymj/hiroko-frontend"
        />
        <IconButtonLink
          icon={<LinkedInIcon fontSize="large" />}
          to="https://www.linkedin.com/in/hirokoyamaji/"
        />
      </footer>

      <FormControlLabel
        control={
          <Switch
            checked={themeName === Theme.seasonal}
            onChange={handleSwitchChange}
            name="themeSwitch"
            size="medium"
            color="primary"
          />
        }
        label="Theme color"
      />
    </div>
  );
};
