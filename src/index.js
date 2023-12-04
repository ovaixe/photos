import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LoaderProvider } from "./components/contexts/LoaderContext";
import { ImagesProvider } from "./components/contexts/ImagesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoaderProvider>
      <ImagesProvider>
        <App />
      </ImagesProvider>
    </LoaderProvider>
  </React.StrictMode>
);
