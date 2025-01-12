import React from "react";
import Switch from "@material-ui/core/Switch";
import { useSelector, useDispatch } from "react-redux";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";

import { setThemeName } from "../../Redux/themeSlice";
import { config } from "Config/config";

const { Theme } = config;

const useStyles = makeStyles((theme) => ({
  switch: {
    paddingLeft: theme.spacing(4),
    flex: 1,
  },
}));

export const ThemeSwitch = () => {
  const classes = useStyles();
  const themeName = useSelector((state) => state.theme.name);
  const dispatch = useDispatch();

  const handleSwitchChange = (event) => {
    const themeName = event.target.checked ? Theme.seasonal : Theme.default;
    dispatch(setThemeName(themeName));
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={themeName === Theme.seasonal}
          onChange={handleSwitchChange}
          name="themeSwitch"
          size="medium"
          color="secondary"
        />
      }
      label="Theme"
      className={classes.switch}
    />
  );
};
