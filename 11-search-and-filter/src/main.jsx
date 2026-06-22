import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GitHub } from "./components/GitHub.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GitHub />
  </StrictMode>,
);
