import React from "react";
import TextWithImg from "../../shared/TextWithImg/TextWithImg";

function Management() {
  const data = {
    header: { text: "MANAGEMENT TEAM", fontSize: "xl" },
    imgFirst: true,
    img: "/home/p2.webp",
    firstLine: {
      part1: {
        isBold: true,
        text: "Wolsey",
        fontSize: "lg",
      },
      part2: {
        isBold: false,
        text: "LEED AP, P.Eng., established Wolsey Structural Engineering Ltd. in 2006 after a decorated career collaborating with preeminent engineers on globally renowned projects. In mid-2023, Wolsey became a proud subsidiary of Mosaic Holding Corporation, marking a strategic milestone in our global expansion.",
      },
    },
    normalText: [
      "",
    ],
    learnMore: { path: "/founder" },
  };
  return (
    <>
      <TextWithImg data={data} />
    </>
  );
}

export default Management;
