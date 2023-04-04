import React, { useState } from "react";
import images from "../constants/images";

function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const { length } = images;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="w-full h-96 relative">
      {images.map((image, index) => (
        <img
          key={index}
          className={`${
            index === current ? "block" : "hidden"
          } w-full h-full object-cover shadow-2xl`}
          src={image.url}
          alt=""
          loading="lazy"
        />
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-7xl text-white hover:text-secondary focus:outline-none"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-7xl text-white hover:text-secondary focus:outline-none"
      >
        &#8250;
      </button>
    </div>
  );
}

export default ImageSlider;
