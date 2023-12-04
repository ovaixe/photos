import { createContext, useState } from "react";

export const ImagesContext = createContext(null);

export const ImagesProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  return (
    <ImagesContext.Provider value={{ images, setImages }}>
      {children}
    </ImagesContext.Provider>
  );
};
