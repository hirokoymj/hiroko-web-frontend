import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import { useDispatch } from "react-redux";
import { setTheme } from "../../Redux/themeSlice";

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
  const dispatch = useDispatch();
  const [themeChecked, setThemeChecked] = useState(true);

  // const [themeSwitch, setThemeSwitch] = React.useState({
  //   checkedA: true,
  // });

  // const handleChange = (event) => {
  //   console.log("handleChange");
  //   console.log(event.target.checked);
  //   setThemeSwitch({
  //     checkedA: event.target.checked,
  //   });
  // };

  const handleSwitchChange = (event) => {
    setThemeChecked(event.target.checked);
    const themeName = event.target.checked ? "common" : "seasonal";
    dispatch(setTheme(themeName));
  };

  return (
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

      <Switch
        checked={themeChecked}
        onChange={handleSwitchChange}
        name="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </footer>
  );
};
