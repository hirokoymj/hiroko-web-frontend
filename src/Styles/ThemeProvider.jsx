import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { commonTheme } from "./commonTheme";

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={commonTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
