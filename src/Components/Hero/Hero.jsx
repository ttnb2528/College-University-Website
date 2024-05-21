import React from "react";
import dark_arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="px-[10%] w-full min-h-[100vh] hero bg-cover bg-center text-white flex items-center justify-center">
      <div className="hero-text text-center max-w-[800px]">
        <h1 className="text-6xl font-semibold">
          We Ensure better education for a better world
        </h1>
        <p className="max-w-[700px] m-[10px_auto_20px] leading-snug">
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experience needed to excel in the dynamic field
          of education
        </p>
        <button className="btn">Explore more <img src={dark_arrow} alt="" className="w-5 ml-3" /></button>
      </div>
    </div>
  );
};

export default Hero;
