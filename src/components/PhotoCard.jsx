import { useState } from "react";
import ImagePlaceHolder from "./ImagePlaceHolder";

export default function PhotoCard({ image, handleModel }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleLoadImage = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className={`flex items-center justify-center`}>
      {!isImageLoaded && <ImagePlaceHolder />}
      <button
        onClick={handleModel}
        className={`${
          isImageLoaded ? "" : "hidden"
        } flex items-center justify-center`}
      >
        <img
          src={image}
          alt="img"
          onLoad={handleLoadImage}
          className="w-auto h-auto rounded-lg object-cover"
        ></img>
      </button>
    </div>
  );
}
