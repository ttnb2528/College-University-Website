import React from "react";
import dark_arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="contain w-full min-h-[100vh] hero bg-cover bg-center text-white flex items-center justify-center">
      <div className="hero-text text-center max-w-[800px]">
        <h1 className="text-3xl max-w-[400px] m-auto md:text-6xl md:max-w-none font-semibold">
          We Ensure better education for a better world
        </h1>
        <p className="max-w-[700px] m-[15px_auto_30px] sm:m-[10px_auto_20px] leading-snug">
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experience needed to excel in the dynamic field
          of education
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" className="w-5 ml-3" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
