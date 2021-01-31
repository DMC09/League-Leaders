import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CategoryProvider } from "./context/categoryContext";

ReactDOM.render(
  <React.StrictMode>
    <CategoryProvider>
      <>
        <App />
      </>
    </CategoryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
