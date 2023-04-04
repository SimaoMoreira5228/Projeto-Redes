import React from "react";
import HeroImg from "../assets/clubes10.jpg";

function Hero() {
  return (
    <div>
      <img
        src={HeroImg}
        alt="Imagem"
        className="h-screen w-full object-cover"
      />
    </div>
  );
}

export default Hero;
