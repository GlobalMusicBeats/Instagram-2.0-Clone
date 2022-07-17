import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reducer, { initialState } from "./components/reducer";
import { StateProvider } from "./components/StateProvider";
import ReactDOM from "react-dom/client";

//const container = document.getElementById("root");
const root = ReactDOM.createRoot(document.getElementById("root"));
//const root = createRoot(container);

root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
