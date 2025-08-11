import React from "react";
import TextWithImg from "../../shared/TextWithImg/TextWithImg";
import CustomParagraph from "../../shared/CustomParagraph/CustomParagraph.jsx";

function Mission() {
  const data = {
    header: { text: "MISSION", fontSize: "xl" },
    imgFirst: false,
    bgColor: "secondGray",
    img: "/about/mission.webp",

    normalText: [
      "Wolsey Structural Engineering is committed to delivering world-class structural designs providing  innovative, sustainable, and precise designs. Our client-focused approach ensures cost-effective solutions that exceed expectations while prioritizing safety, quality, and environmental responsibility.",
    ],
  };
  return (
    <>
      {/* <TextWithImg data={data} /> */}
      <div className="grid md:grid-cols-5 grid-cols-1">

        <div className=" col-span-2">
          <img className="  object-cover " src={data.img} alt="" />
        </div>
        <div
          className={`md:col-span-3 col-span-1  flex flex-col justify-center md:px-11 px-1  bg-${data.bgColor}`}
        >
          <div className="p-5">

            <h2
              className={`text-mainBrown font-berlin custom-text-${data.header.fontSize} mb-3`}
            >
              {data.header.text}
            </h2>
            Wolsey Structural Engineering champions world-class structural design through groundbreaking innovation, sustainability, and exacting precision. Our client-first philosophy delivers optimized solutions that surpass expectations while exceeding safety, quality, and environmental benchmarks.
          </div>
          {/* <CustomParagraph data={data} /> */}
        </div>
      </div>

    </>
  );
}

export default Mission;
