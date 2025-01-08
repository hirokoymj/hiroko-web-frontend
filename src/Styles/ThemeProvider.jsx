import React, { useEffect, useState } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useSelector } from "react-redux";

import { commonTheme } from "./commonTheme";
import { xmasTheme } from "./xmasTheme";

export const ThemeProvider = ({ children }) => {
  const [theme, setCurrentTheme] = useState(commonTheme);
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  useEffect(() => {
    currentTheme === "seasonal"
      ? setCurrentTheme(xmasTheme)
      : setCurrentTheme(commonTheme);
  }, [currentTheme]);

  console.log(`currentTheme: ${currentTheme}`);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
