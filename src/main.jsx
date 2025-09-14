import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ItemList from "./ItemList";
import ParentComponent from "./ParentComponent";
import UserComponent from "./UserComponent";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ItemList /> */}
    {/* <ParentComponent /> */}
    <UserComponent />
  </StrictMode>
);
