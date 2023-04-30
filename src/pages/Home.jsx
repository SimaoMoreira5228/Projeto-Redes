import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/HomePageHero";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;
