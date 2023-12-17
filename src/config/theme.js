import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "'DroidKufi', sans-serif",
  },
  palette: {
    dimblack: {
      main: "#0C0910",
    },
    black: {
      main: "#0C0C12",
    },
    blue: {
      main: "#3939AA",
    },
    yellow: {
      main: "#FFCF00",
    },
    white: {
      main: "#EAE9EA",
    },
  },
});

export default theme;
