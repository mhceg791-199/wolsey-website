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
          className="flex flex-col justify-center md:ps-11 ps-5 py-10"
        >
          <div className="w-3/4 p-10 px-5  bg-[#f3f1ec9b]">
            <h1>
              <span className="text-mainBrown font-berlin  custom-text-xl mb-3">
                SERVICES
              </span>{" "}
              <span className="font-semibold custom-text-lg">
                Structural Engineering Solution
              </span>
            </h1>
            <div className="text-justify mt-5">
              <p className="mb-3">
                With a legacy of over 1,000 projects across four continents,
                Wolsey's portfolio reflects an unwavering dedication to
                innovation, precision, and engineering excellence. Our expertise
                spans diverse sectors, including large-scale infrastructure,
                iconic cultural landmarks, advanced healthcare facilities,
                industrial complexes, and modern residential and commercial
                developments.
              </p>
              <p className="mb-3">
                At Wolsey, we seamlessly integrate structural integrity,
                technical ingenuity, and sustainable engineering practices to
                deliver solutions that stand the test of time. Every project is
                designed to meet functional demands while optimizing
                performance, safety, and efficiency, ensuring a lasting impact
                on the built environment.
              </p>
              <p className="mb-3">
                This proven track record underscores not only our technical
                expertise but also our collaborative approach and commitment to
                enhancing communities through thoughtful, cutting-edge
                structural engineering solutions.
              </p>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default ServicesBrief;
