import React from "react";
import TextWithImg from "../../shared/TextWithImg/TextWithImg";

function Vision() {
  const data = {
    header: { text: "VISION", fontSize: "xl" },
    imgFirst: true,
    bgColor: "mainGray",
    img: "/about/vision.webp",
    firstLine: {
      part1: {
        isBold: true,
        text: "",
        fontSize: "lg",
      },
    },
    normalText: [
      "To be a vanguard in structural engineering, shaping the future of the built environment through pioneering sustainable and aesthetically compelling and constructible solutions that redefine modern construction.",
    ],
  };
  return (
    <>
      <div className="grid md:grid-cols-5 grid-cols-1">

        <div
          className={`md:col-span-3 col-span-1  flex flex-col justify-center md:px-11 px-1  bg-${data.bgColor}`}
        >
          <div className="p-5">

            <h2
              className={`text-mainBrown font-berlin custom-text-${data.header.fontSize} mb-3`}
            >
              {data.header.text}
            </h2>
            <p className={` my-2`}>Wolsey Structural Engineering is committed to delivering world-class structural designs providing  innovative, sustainable, and precise designs. Our client-focused approach ensures cost-effective solutions that exceed expectations while prioritizing safety, quality, and environmental responsibility.</p>
          </div>
          {/* <CustomParagraph data={data} /> */}
        </div>

        <div className=" col-span-2">
          <img className="  object-cover " src={data.img} alt="" />
        </div>
      </div>
    </>
  );
}

export default Vision;
