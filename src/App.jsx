import React, { useEffect, useState, useContext } from "react";
import Header from "./components/Header";
import PhotoGrid from "./components/PhotoGrid";
import Loader from "./components/Loader";
import Error from "./components/Error";
import { getImages, getMore } from "./utils/getData";
import { ImagesContext } from "./components/contexts/ImagesContext";
import { LoaderContext } from "./components/contexts/LoaderContext";
import { ModelBoxProvider } from "./components/contexts/ModelBoxContext";

function App() {
  const imagesContext = useContext(ImagesContext);
  const loaderContext = useContext(LoaderContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    getImages()
      .then((data) => {
        imagesContext.setImages(data);
        loaderContext.setLoader(false);
      })
      .catch((err) => {
        console.log("ERROR: ", err.message);
        setError("There is some problem while fetching images.");
        loaderContext.setLoader(false);
      });
  }, []);

  const handleLoadMore = () => {
    getMore()
      .then((data) => {
        imagesContext.setImages((prev) => [...prev, ...data]);
      })
      .catch((err) => {
        console.log("ERROR: ", err.message);
      });
  };

  const handleScroll = (e) => {
    const { offsetHeight, scrollTop, scrollHeight } = e.target;
    if (offsetHeight + scrollTop >= scrollHeight) {
      handleLoadMore();
    }
  };

  return (
    <div className="pb-5">
      <ModelBoxProvider>
        <Header />
        {loaderContext.loader ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : (
          <PhotoGrid handleScroll={handleScroll} />
        )}
      </ModelBoxProvider>
    </div>
  );
}

export default App;
