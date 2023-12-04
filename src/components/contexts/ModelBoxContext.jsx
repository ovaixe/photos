import { createContext, useState } from "react";

export const ModelBoxContext = createContext(null);

export const ModelBoxProvider = ({ children }) => {
  const [showModel, setShowModel] = useState(false);
  return (
    <ModelBoxContext.Provider value={{ showModel, setShowModel }}>
      {children}
    </ModelBoxContext.Provider>
  );
};
