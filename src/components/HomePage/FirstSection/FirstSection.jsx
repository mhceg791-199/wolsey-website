import React from "react";
import LearnMore from "../../shared/LearnMore";
import { Link } from "react-router-dom";
import "./firstSection.css";

function FirstSection() {
  return (
    <>
      <div className="  relative h-[80vh]  bg-[url('/home/firstSection.webp')] bg-fixed   bg-cover bg-center">
        <div className="layer lg:px-10 lg:ps-20 px-3 flex flex-col  justify-center">
          <div className="lg:w-[50%] ">
            <p className="mb-2">
              <span className="text-mainBrown custom-text-lg font-semibold">
                ABOUT US
              </span>{" "}
              Founded in 2006, Wolsey Structural Engineering
            </p>
            <p className="text-justify ">
              delivers cutting-edge, sustainable solutions across global sectors, with over 3,000 high-impact projects completed worldwide. Supported by a team of 20+ elite engineers, Wolsey combines unparalleled precision and environmental responsibility to create next-generation structures that not only redefine industry standards but also elevate communities.  </p>
            <LearnMore path="/about" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstSection;
