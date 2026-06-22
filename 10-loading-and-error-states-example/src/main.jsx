import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DogImage } from "./components/DogImage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DogImage />
  </StrictMode>,
);
