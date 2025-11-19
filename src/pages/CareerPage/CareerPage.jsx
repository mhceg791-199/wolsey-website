import ReadyToJoin from "../../components/CareerPage/ReadyToJoin/ReadyToJoin";
import DomeGallery from "../../components/CareerPage/DomeGallery/DomeGallery";
import DescriptionAbout from "../../components/shared/DescriptionAbout/DescriptionAbout";
import OurValues from "../../components/AboutPage/values/values";

function CareerPage() {
  const paragraphs = [
    "Joining Wolsey means becoming part of an elite network of professionals committed to advancing the industry with a shared vision and expertise. We empower our teams by providing the resources, insights, and support needed to excel across impactful, high-profile projects in global markets. With Wolsey, your contributions are valued as essential to our innovative, solutions-driven approach."
  ];

  const paragraphs2 = [
    "Whether you’re a seasoned engineer, strategic business leader, Wolsey offers a wide range of fulfilling career paths designed for those dedicated to impactful work in a dynamic environment. As our portfolio of expertise grows, each team and division contributes unique industry insights and formidable capabilities, strengthening our impact across diverse fields."
  ]
  return (
    <>
      <div style={{ width: "99vw", height: "80vh" }}>
        <DomeGallery />
      </div>
      <DescriptionAbout
          id="career-wolesy"
          firstWord="Inspire, Innovate,"
          secondWord="Achieve"
          paragraphs={paragraphs}
          paragraphs2={paragraphs2}
          particleColors={["#e0e0d4", "#e0e0d4"]}
          height="h-[50vh] md:h-[45vh]"
        />
      <OurValues />
      <ReadyToJoin />
    </>
  );
}

export default CareerPage;
