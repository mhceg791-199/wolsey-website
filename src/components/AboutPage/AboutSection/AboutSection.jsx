import React from "react";
import TextWithBgImg from "../../shared/TextWithBg-img/TextWithBgImg";
import CustomParagraph from "../../shared/CustomParagraph/CustomParagraph";

function AboutSection() {
  const data = {
    imgFirst: true,
    firstLine: {
      part1: {
        isBold: true,
        color: "text-mainBrown",
        fontSize: "xl",
        text: "ABOUT US",
      },
      part2: {
        isBold: true,
        fontSize: "lg",
        text: "Founded in 2006, Wolsey Structural Engineering",
      },
    },
    normalText: [
      "which became a subsidiary of “Mosaic Holding Corporation” in late 2023, has earned a distinguished reputation for delivering innovative, sustainable, and cost-effective structural solutions that shape the landscape of modern engineering. With over 50 years of expertise and 20+ design engineers, Wolsey’s work spans diverse sectors—including multifamily residential, commercial, institutional, and specialty fabrication projects. Serving over  clients across 10+ countries, with 95% recurring clients, and 3000+ completed projects, Wolsey prioritizes a deep understanding of client needs while advancing standards in structural integrity and environmental responsibility. Our approach is rooted in collaboration and precision, ensuring that each project is tailored to meet specific objectives, seamlessly incorporating resilience and adaptability into our designs.",
      "At the core of Wolsey’s success is a team of skilled professionals who bring together a wealth of technical knowledge and industry insights. Our engineers and specialists combine advanced methodologies with sustainable practices to create designs that are efficient, functional, and future-focused. Driven by a commitment to excellence, Wolsey consistently exceeds client expectations by crafting resilient structures that not only enhance the built environment but also make positive contributions to the communities they serve. Each project reflects our dedication to pushing the boundaries of what’s possible in structural engineering, forging a legacy of impactful, enduring design.",
    ],
    handelWidth: true,
  };
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
        className="flex flex-col justify-center md:ps-11 px-5 py-10"
      >
        <div className="md:w-3/4 p-10 px-5  bg-[#f3f1ecd8]">
          <h1>
            <span className="text-mainBrown font-berlin  custom-text-xl mb-3">
              ABOUT US
            </span >{" "}
            <span className="font-semibold custom-text-lg">Founded in 2006, Wolsey Structural Engineering</span>
          </h1>
          <div className="text-justify mt-5">
            <p className="mb-3">
              which became a subsidiary of “Mosaic Holding Corporation” in late
              2023, has earned a distinguished reputation for delivering
              innovative, sustainable, and cost-effective structural solutions
              that shape the landscape of modern engineering. With over 50 years
              of expertise and 20+ design engineers, Wolsey’s work spans diverse
              sectors—including multifamily residential, commercial,
              institutional, and specialty fabrication projects. Serving over
              clients across 10+ countries, with 95% recurring clients, and
              3000+ completed projects, Wolsey prioritizes a deep understanding
              of client needs while advancing standards in structural integrity
              and environmental responsibility. Our approach is rooted in
              collaboration and precision, ensuring that each project is
              tailored to meet specific objectives, seamlessly incorporating
              resilience and adaptability into our designs.
            </p>
            <p>
              At the core of Wolsey’s success is a team of skilled professionals
              who bring together a wealth of technical knowledge and industry
              insights. Our engineers and specialists combine advanced
              methodologies with sustainable practices to create designs that
              are efficient, functional, and future-focused. Driven by a
              commitment to excellence, Wolsey consistently exceeds client
              expectations by crafting resilient structures that not only
              enhance the built environment but also make positive contributions
              to the communities they serve. Each project reflects our
              dedication to pushing the boundaries of what’s possible in
              structural engineering, forging a legacy of impactful, enduring
              design.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
