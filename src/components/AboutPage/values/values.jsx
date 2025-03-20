import React from "react";
import TextWithImg from "../../shared/TextWithImg/TextWithImg";

function values() {
  const values = [
    {
      title: "Engineering Excellence",
      description:
        "Delivering innovative, precise, and high-performance structural solutions.",
    },
    {
      title: "Client-Centric Focus",
      description:
        "Building strong partnerships through tailored, impactful outcomes.",
    },
    {
      title: "Integrity and Professionalism",
      description:
        "Upholding ethical standards and ensuring transparency in all engagements.",
    },
    {
      title: "Sustainability",
      description:
        "Prioritizing environmentally responsible designs for lasting impact.",
    },
    {
      title: "Multidisciplinary Expertise",
      description: "Offering versatile solutions across diverse industries.",
    },
    {
      title: "Commitment to Quality",
      description:
        "Crafting durable, efficient, and visually refined structures.",
    },
    {
      title: "Visionary Innovation",
      description:
        "Redefining the structural landscape through cutting-edge methodologies.",
    },
  ];
  return (
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
              VALUES{" "}
            </span>{" "}
          </h1>
          <div className="text-justify mt-5">
            {values.map(({ title, description }, index) => (
              <React.Fragment key={index}>
                <p className="font-semibold custom-text-lg mb-1">{title}</p>
                <p className="mb-3">{description}</p>
              </React.Fragment>
            ))}
      
          </div>
        </div>
      </div>
    </>
  );
}

export default values;
