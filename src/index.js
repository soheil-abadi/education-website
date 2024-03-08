import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
