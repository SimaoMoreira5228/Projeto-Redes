import React from "react";
import ImageSlider from "../components/ImageSlider";

function Galeria() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-lg">
        <ImageSlider />
      </div>
    </div>
  );
}

export default Galeria;
