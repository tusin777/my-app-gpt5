import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import AccessibilityComponents from "./components/AccessibilityComponents";
import Form from "./components/Form";
import AccessibleForms from "./components/AccessibleForms";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <AccessibilityComponents /> */}

    {/* <Form /> */}
    <AccessibleForms />
  </StrictMode>
);
