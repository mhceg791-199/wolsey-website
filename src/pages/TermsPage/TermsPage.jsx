import React, { useEffect } from "react";
import DescriptionAbout from "../../components/shared/DescriptionAbout/DescriptionAbout";
import TitleWithText from "../../components/shared/TitleWithText/TitleWithText";
import terms from "../../data/terms";

function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const paragraphs = [
    "Welcome to Wolsey’s Website, by accessing and using this site, you  agree to the terms and conditions outlined here. If you do not agree  with any part of these terms, please discontinue use of the website.",
  ];
  return (
    <div className="mt-[2.5rem] md:mt-[6.5rem]">
      <DescriptionAbout
        id="TERMS-wolesy"
        firstWord="Terms and"
        secondWord="Conditions"
        paragraphs={paragraphs}
        particleColors={["#e0e0d4", "#e0e0d4"]}
        height="h-[25vh] md:h-[50vh]"
      />
      <div className="md:px-20 px-3 mb-28">
        {terms.map(({ title, paragraph }, index) => (
          <React.Fragment key={index}>
            <TitleWithText title={title} paragraph={paragraph} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default TermsPage;
