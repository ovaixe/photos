import PhotoCard from "./PhotoCard";
import ModelBox from "./ModelBox";
import { useState } from "react";

export default function PhotoGrid({
  images,
  handleScroll,
}) {
  const [showModel, setShowModel] = useState(false);
  const [modelImage, setModelImage] = useState("");

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
        <div className="flex items-center justify-center">
          <ModelBox img_url={modelImage} handleModel={closeModel} />
        </div>
      )}
      <div
        className={`flex flex-col items-center justify-center ${
          showModel ? "pointer-events-none opacity-50" : ""
        }`}
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 scroll-smooth h-new overflow-y-scroll" onScroll={handleScroll}>
          {images.map((image, index) => (
            <PhotoCard key={index} image={image} handleModel={handleModel} />
          ))}
        </div>
      </div>
    </div>
  );
}
