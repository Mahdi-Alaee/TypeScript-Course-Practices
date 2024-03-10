import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Cart from "./Pages/Cart";
import { BrowserRouter } from "react-router-dom";
import { ContextDataProvider } from "./context/ContextData";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ContextDataProvider>
      <App />
    </ContextDataProvider>
  </BrowserRouter>
);
