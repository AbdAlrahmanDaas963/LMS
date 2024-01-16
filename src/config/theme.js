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
    // blue: {
    //   main: "#3939AA",
    // },
    blue: {
      main: "#1976D2",
    },
    // yellow: {
    //   main: "#FFCF00",
    // },
    yellow: {
      main: "#FFD832",
    },
    white: {
      main: "#EAE9EA",
    },
  },
});

export default theme;
