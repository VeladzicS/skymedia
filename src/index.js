import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./i18n";
import { BrowserRouter as Router } from "react-router-dom";
import { AppContextProvider } from "./providers/context/index";

ReactDOM.render(
  <AppContextProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </AppContextProvider>,
  document.getElementById("root")
);
