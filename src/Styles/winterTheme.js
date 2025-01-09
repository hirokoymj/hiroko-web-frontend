import { createTheme } from "@material-ui/core/styles";

export const winterTheme = createTheme({
  palette: {
    primary: {
      light: "#357a38",
      main: "#4caf50",
      dark: "#6fbf73",
      contrastText: "#fff",
    },
    secondary: {
      light: "#f6685e",
      main: "#f44336",
      dark: "#aa2e25",
      contrastText: "#fff",
    },
    text: {
      primary: "#000",
    },
    background: {
      default: "#f2f3f3",
    },
    accent: {
      main: "#b7deb8",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif", "Titillium Web"].join(","),
  },
});
