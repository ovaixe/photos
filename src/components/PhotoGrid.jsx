import { useState, useContext } from "react";
import PhotoCard from "./PhotoCard";
import ModelBox from "./ModelBox";
import { ImagesContext } from "./contexts/ImagesContext";
import { ModelBoxContext } from "./contexts/ModelBoxContext";

export default function PhotoGrid({ handleScroll }) {
  const [modelImage, setModelImage] = useState("");
  const imagesContext = useContext(ImagesContext);
  const modelBoxContext = useContext(ModelBoxContext);

  const openModel = (e) => {
    setModelImage(e.target.src);
    modelBoxContext.setShowModel(true);
  };

  const closeModel = () => {
    modelBoxContext.setShowModel(false);
  };

  const handleCloseModel = () => {
    if (modelBoxContext.showModel) modelBoxContext.setShowModel(false);
  };

  return (
    <div className="">
      {modelBoxContext.showModel && (
        <div className="flex items-center justify-center px-10">
          <ModelBox imgUrl={modelImage} handleModel={closeModel} />
        </div>
      )}
      <div
        onClick={handleCloseModel}
        onScroll={handleScroll}
        className={`p-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 scroll-smooth overflow-y-scroll h-grid ${
          modelBoxContext.showModel ? "opacity-50" : ""
        }`}
      >
        {imagesContext.images.map((image, index) => (
          <PhotoCard key={index} image={image} handleModel={openModel} />
        ))}
      </div>
    </div>
  );
}
