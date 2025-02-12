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
              delivers innovative, sustainable solutions across diverse sectors,
              with over 3,000 projects completed worldwide. Backed by 20+
              skilled engineers, Wolsey combines precision and environmental
              responsibility to create resilient, future-focused structures that
              set new industry standards and enrich communities.
            </p>
            <LearnMore path="/about" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstSection;
