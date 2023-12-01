import { createContext } from "react";

export const ImagesContext = createContext(null);

export const ImagesProvider = ({ children, value }) => {
  return (
    <ImagesContext.Provider value={value}>{children}</ImagesContext.Provider>
  );
};
