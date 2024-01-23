import React from "react";
import ReactDOM from "react-dom/client";

import { inject } from "@vercel/analytics";

import { Provider } from "react-redux";
import store from "./store/store.js";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./config/theme.js";

import App from "./App.jsx";
import "./index.css";

inject();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
