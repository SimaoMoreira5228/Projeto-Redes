import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/HomePageHero";

function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Home;
