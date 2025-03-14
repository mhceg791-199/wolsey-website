import React from "react";
import SubIndustryCard from "./subIndustryCard/subIndustryCard";

function SubIndustries() {
  const data = [
    {
      imgFirst: true,
      bgColor: "secondGray",
      img: "/subIndustries/1.webp",
      firstLine: {
        part1: {
          isBold: true,
          color: "text-mainBrown",
          text: "MULTIFAMILY RESIDENTIAL",
          fontSize: "xl",
        },
      },
      normalText: [
        "Wolsey designs and engineers durable, high-quality structures for multifamily residential buildings. Our solutions prioritize safety, efficiency, and compliance with industry standards, ensuring long-term stability while fostering sustainable community growth.",
      ],
      link: "/projects",
    },
    {
      imgFirst: false,
      bgColor: "white",
      img: "/subIndustries/2.webp",
      firstLine: {
        part1: {
          isBold: true,
          color: "text-mainBrown",
          text: "RETAIL COMMERCIAL",
          fontSize: "xl",
        },
      },
      normalText: [
        "We create strong, adaptable structural designs for retail spaces, ensuring durability, functionality, and efficiency. Our expertise supports the unique demands of retail operations, optimizing layouts for usability, customer flow, and long-term performance.",
      ],
      link: "/projects",
    },
    {
      imgFirst: true,
      bgColor: "mainGray",
      img: "/subIndustries/3.webp",
      firstLine: {
        part1: {
          isBold: true,
          color: "text-mainBrown",
          text: "OFFICE WAREHOUSE",
          fontSize: "xl",
        },
      },
      normalText: [
        "Our office warehouse solutions focus on structural integrity, load-bearing efficiency, and adaptability. We engineer durable, high-performance facilities that accommodate diverse business needs while maximizing space utilization and operational efficiency.",
      ],
      link: "/projects",
    },
    {
      imgFirst: false,
      bgColor: "white",
      img: "/subIndustries/4.webp",
      firstLine: {
        part1: {
          isBold: true,
          color: "text-mainBrown",
          text: "DEALERSHIPS",
          fontSize: "xl",
        },
      },
      normalText: [
        "Wolsey specializes in designing dealership structures that enhance showroom functionality and customer experience. Our engineering solutions ensure durability, stability, and optimal space planning for vehicle display, storage, and high-traffic use.",
      ],
      link: "/projects",
    },
    {
      imgFirst: true,
      bgColor: "mainGray",
      img: "/subIndustries/5.webp",
      firstLine: {
        part1: {
          isBold: true,
          color: "text-mainBrown",
          text: "SPECIALITY FABRICATION",
          fontSize: "xl",
        },
      },
      normalText: [
        "We provide custom structural engineering solutions for unique fabrication needs, including specialized beams, supports, and frames. Our precision-driven approach ensures seamless integration, compliance with industry standards, and long-term structural reliability.",
      ],
      link: "/projects",
    },
    {
      imgFirst: false,
      bgColor: "white",
      img: "/subIndustries/6.webp",
      firstLine: {
        part1: {
          isBold: true,
          color: "text-mainBrown",
          text: "MUNICIPAL INSTITUTION",
          fontSize: "xl",
        },
      },
      normalText: [
        "Our municipal engineering expertise focuses on designing and reinforcing public buildings that serve communities for generations. We prioritize safety, sustainability, and structural resilience to create lasting spaces for civic engagement and essential services.",
      ],
      link: "/projects",
    },
    {
      imgFirst: true,
      bgColor: "mainGray",
      img: "/subIndustries/7.webp",
      firstLine: {
        part1: {
          isBold: true,
          color: "text-mainBrown",
          text: "LANDSCAPE ELEMENTS",
          fontSize: "xl",
        },
      },
      normalText: [
        "Wolsey engineers outdoor structural elements such as retaining walls, terraces, walkways, and stairways. Our solutions enhance both aesthetics and functionality while ensuring stability, longevity, and harmony with the natural environment.",
      ],
      link: "/projects",
    },
    {
      imgFirst: false,
      bgColor: "white",
      img: "/subIndustries/8.webp",
      firstLine: {
        part1: {
          isBold: true,
          color: "text-mainBrown",
          text: "MODULAR STRUCTURES",
          fontSize: "xl",
        },
      },
      normalText: [
        "Our modular engineering solutions provide prefabricated, high-strength building components designed for quick assembly and long-term durability. These flexible structures adapt to various applications while maintaining exceptional load-bearing capacity and resilience.",
      ],
      link: "/projects",
    },
    {
      imgFirst: true,
      bgColor: "mainGray",
      img: "/subIndustries/9.webp",
      firstLine: {
        part1: {
          isBold: true,
          color: "text-mainBrown",
          text: "SINGLE FAMILY RESIDENTIAL",
          fontSize: "xl",
        },
      },
      normalText: [
        "We engineer safe, durable, and efficient structural solutions for single-family homes. From foundations to framing, our expertise ensures long-lasting stability, compliance with building codes, and a secure living environment.",
      ],
      link: "/projects",
    },
  ];
  return (
    <>
      <div className="mb-10">
        {data.map((data, index) => (
          <React.Fragment key={index}>
            <SubIndustryCard data={data} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default SubIndustries;
