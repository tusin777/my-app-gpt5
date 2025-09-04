import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import Cleanup from "./Cleanup.jsx";
import WindowSize from "./WindowSize.jsx";
// import DataFetcher from "./DataFetcher.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <DataFetcher /> */}
    {/* <App /> */}
    {/* <Cleanup /> */}
    <WindowSize />
  </StrictMode>
);
