import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import React from "react";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
