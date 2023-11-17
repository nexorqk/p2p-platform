import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { HashRouter } from "react-router-dom";

import App from "./App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <CssBaseline />
      <App />
    </HashRouter>
  </React.StrictMode>
);
