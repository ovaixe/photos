import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LoaderProvider } from "./components/contexts/LoaderContext";
import { ImagesProvider } from "./components/contexts/ImagesContext";
import { ModelBoxProvider } from "./components/contexts/ModelBoxContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoaderProvider>
      <ImagesProvider>
        <ModelBoxProvider>
          <App />
        </ModelBoxProvider>
      </ImagesProvider>
    </LoaderProvider>
  </React.StrictMode>
);
