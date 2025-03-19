import React from "react";
import LearnMore from "../LearnMore";

function CustomParagraph({ data }) {
  const { header, learnMore, normalText, firstLine, handelWidth, bgColor } =
    data;
  if (firstLine) {
    var { part1, part2 } = firstLine;
  }

  console.log('====================================');
  console.log(bgColor);
  console.log('====================================');
  return (
    <>
      <div className={`${bgColor && bgColor}  text-justify  p-5`}>
        {header && (
          <h2
            className={`text-mainBrown font-berlin custom-text-${header.fontSize} mb-3`}
          >
            {header.text}
          </h2>
        )}
        <p>
          <span
            className={`custom-text-${part1?.fontSize} ${
              part1?.color == "text-mainBrown" ? "text-mainBrown" : ""
            }  ${part1?.isBold && "font-semibold"} pe-1`}
          >
            {part1?.text}
          </span>
          {part2 && (
            <span
              className={` custom-text-${part2.fontSize} ${
                part2.color == "text-mainBrown" ? "text-mainBrown" : ""
              }  ${part2.isBold && "font-semibold"}`}
            >
              {part2.text}
            </span>
          )}
        </p>
        {normalText.map((text, index) => (
          <React.Fragment key={index}>
            <p className={`${handelWidth && "md:w-1/2 w-full"} my-2`}>{text}</p>
          </React.Fragment>
        ))}

        {learnMore && <LearnMore path={learnMore.path} />}
      </div>
    </>
  );
}

export default CustomParagraph;
