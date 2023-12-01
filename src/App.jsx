import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import PhotoGrid from "./components/PhotoGrid";
import Loader from "./components/Loader";
import { getImages, getMore } from "./utils/getData";
import { ImagesProvider } from "./components/contexts/ImagesContext";
import { LoaderProvider } from "./components/contexts/LoaderContext";

function App() {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getImages(setImages, setLoader);
  }, []);

  const handleLoadMore = () => {
    getMore(setImages);
  };

  const handleScroll = (e) => {
    const { offsetHeight, scrollTop, scrollHeight } = e.target;
    if (offsetHeight + scrollTop >= scrollHeight) {
      handleLoadMore();
    }
  };

  return (
    <div className="bg-gray-200 pb-5">
      <ImagesProvider value={{ images, setImages }}>
        <LoaderProvider value={{loader, setLoader}}>
          <Header setLoader={setLoader} />
          {loader ? <Loader /> : <PhotoGrid handleScroll={handleScroll} />}
        </LoaderProvider>
      </ImagesProvider>
    </div>
  );
}

export default App;
