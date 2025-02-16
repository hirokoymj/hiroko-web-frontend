import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useSelector } from "react-redux";

import { defaultTheme } from "./defaultTheme";
import { winterTheme } from "./winterTheme";
import { config } from "config/config";

const { Theme } = config;

export const ThemeProvider = ({ children }) => {
  const themeName = useSelector((state) => state.theme.name);

  return (
    <MuiThemeProvider
      theme={themeName === Theme.default ? defaultTheme : winterTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
