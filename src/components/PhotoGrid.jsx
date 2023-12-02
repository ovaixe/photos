import PhotoCard from "./PhotoCard";
import ModelBox from "./ModelBox";
import { useState, useContext } from "react";
import { ImagesContext } from "./contexts/ImagesContext";

export default function PhotoGrid({ handleScroll }) {
  const [showModel, setShowModel] = useState(false);
  const [modelImage, setModelImage] = useState("");
  const imagesContext = useContext(ImagesContext);

  const handleModel = (e) => {
    setModelImage(e.target.src);
    setShowModel(true);
  };

  const closeModel = () => {
    setShowModel(false);
  };

  return (
    <div>
      {showModel && (
        <div className="flex items-center justify-center px-10">
          <ModelBox imgUrl={modelImage} handleModel={closeModel} />
        </div>
      )}
      <div
        className={`flex ${showModel ? "pointer-events-none opacity-50" : ""}`}
      >
        <div
          className="w-full p-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 scroll-smooth h-new overflow-y-scroll"
          onScroll={handleScroll}
        >
          {imagesContext.images.map((image, index) => (
            <PhotoCard key={index} image={image} handleModel={handleModel} />
          ))}
        </div>
      </div>
    </div>
  );
}
