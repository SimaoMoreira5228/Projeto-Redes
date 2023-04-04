import React from "react";
import ImageSlider from "../components/ImageSlider";
import Navbar from "../components/Navbar";

function Galeria() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-lg">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
}

export default Galeria;
