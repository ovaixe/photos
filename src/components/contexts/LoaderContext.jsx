import { createContext, useState } from "react";

export const LoaderContext = createContext(null);

export const LoaderProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);
  return (
    <LoaderContext.Provider value={{ loader, setLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};
