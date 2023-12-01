import { createContext } from "react";

export const LoaderContext = createContext(null);

export const LoaderProvider = ({ children, value }) => {
  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
};
