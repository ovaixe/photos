import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import PhotoGrid from "./components/PhotoGrid";
import Loader from "./components/Loader";
import { getImages, getMore } from "./utils/getData";

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
    <div>
      <Header setImages={setImages} setLoader={setLoader} />
      {loader ? (
        <Loader />
      ) : (
        <PhotoGrid images={images} handleScroll={handleScroll} />
      )}
    </div>
  );
}

export default App;
