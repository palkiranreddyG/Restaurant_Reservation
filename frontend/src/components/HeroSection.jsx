import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Hunger</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="./hero3.jpg" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Meets</h1>
                <h1 className="title dishes_title">Dishes</h1>
                <img src="./threelines.svg" alt="threelines" />
              </div>
              
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="hero4.jpg" alt="hero" />
          </div>
          <h1 className="title dishes_title">Mastery</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
