import React from "react";

function ServicesBrief() {
  return (
    <>
      <>
        <div
          style={{
            backgroundImage: `url("/about/about.webp")`,
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",

            backgroundSize: `100% 100%`,
          }}
          className="flex flex-col justify-center md:ps-11 px-5 py-10"
        >
         <div className="md:w-3/4 p-10 px-5  bg-[#f3f1ecd8]">
            <h1>
              <span className="text-mainBrown font-berlin  custom-text-xl ">
                SERVICES
              </span>{" "}
              
            </h1>
            <div className="text-justify mt-5">
              <span className="font-semibold custom-text-lg mb-3">
                Structural Engineering Solution
              </span>
              <p className="my-3">With 1,000+ landmark projects across four continents, Wolsey epitomizes innovation, precision, and engineering mastery. Our global expertise includes transformative infrastructure, iconic cultural landmarks, cutting-edge healthcare facilities, and high-performance commercial developments.</p>
              <p className="mb-3">
                We orchestrate structural integrity, technical brilliance, and sustainable practices to deliver timeless solutions. Each project exceeds functional demands while optimizing performance, safety, and efficiency, leaving an indelible mark on the built environment. </p>

            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default ServicesBrief;
