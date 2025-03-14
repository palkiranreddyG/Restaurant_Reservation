import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>Flavors that flirt, spices that tease, and food that keeps you coming back for more!</p>
            </div>
            <p className="mid">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eum atque est illo dolore odit nam molestias itaque! Distinctio voluptatum nisi nobis, at voluptatem vitae, eligendi consequatur magnam corporis earum hic dolorem, vel eius sequi excepturi autem sunt neque tempore. Libero eaque molestias iure voluptates aperiam, ipsa veritatis enim ut!
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.jpg" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
