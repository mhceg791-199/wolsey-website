import React from "react";
import TextWithImg from "../../shared/TextWithImg/TextWithImg";
import aboutImg from '../../../assets/about/about.webp';

function values() {
  const values = [
    {
      title: "Engineering Excellence",
      description:
        "Mastering innovative, precise, and high-performance solutions. ",
    },
    {
      title: "Client-Centric Focus",
      description:
        "Forging trusted partnerships through bespoke, results-driven outcomes. ",
    },
    {
      title: "Integrity & Professionalism",
      description:
        "Exemplifying ethical standards and transparency. ",
    },
    {
      title: "Sustainability",
      description:
        "Advancing environmental stewardship for generational resilience. ",
    },
    {
      title: "Multidisciplinary Expertise ",
      description: "Delivering versatile, industry-defining solutions. ",
    },
    {
      title: "Commitment to Quality ",
      description:
        "Guaranteeing durability, efficiency, and architectural refinement. ",
    },
    {
      title: "Visionary Innovation ",
      description:
        "Leading next-generation engineering through breakthrough technologies. ",
    },
  ];
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${aboutImg})`,
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",

          backgroundSize: `100% 100%`,
        }}
        className="flex flex-col justify-center md:px-11 px-5 py-10"
      >
        <div className="md:w-3/4 p-10 px-5  bg-[#f3f1ecd8]">
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
