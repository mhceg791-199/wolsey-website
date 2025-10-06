import React from "react";
import "./solutionPoster.css";
function SolutionsPoster() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("/portfolio/poster.webp")`,
        }}
        className="poster  mt-10 "
      >
        <div className="flex flex-col justify-start items-center p-5 md:h-full text-white">
          <h1 className="custom-text-xxl  md:mt-20 mt-30">
            Structural Engineering Solutions
          </h1>
        </div>
      </div>
    </>
  );
}

export default SolutionsPoster;
