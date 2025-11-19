// import ServicesBrief from "../../components/Services/servicesBrief/servicesBrief";
// import MainServices from "../../components/Services/mainServices/mainServices";
// import WolseyInNumbers from "../../components/AboutPage/WolseyWithNumbers/WolseyWithNumbers";

// function ServicesPage() {
//   return (
//     <>
//       <div className="mt-14">
//         <ServicesBrief />
//         <MainServices />
//         <WolseyInNumbers />
//       </div>
//     </>
//   );
// }

// export default ServicesPage;
import SubIndustries from "../../components/Services/SubIndustries/SubIndustries";
import HeroSection from "../../components/shared/HeroSection/HeroSection";
import DescriptionAbout from "../../components/shared/DescriptionAbout/DescriptionAbout";

function ServicesPage() {
  const paragraphs = [
    "Wolsey Structural Engineering Ltd. offers reinforced concrete, steel, masonry, aluminum, and timber solutions, providing comprehensive structural design, including model generation in Revit.",
  ];

  return (
    <>
      <div className="mt-14">
        <HeroSection
          title="Services"
          bgImage="/about/about.webp"
          height="h-[60vh] md:h-[80vh]"
        />
        <DescriptionAbout
          id="about-services"
          firstWord="Services"
          secondWord=""
          paragraphs={paragraphs}
          particleColors={["#e0e0d4", "#e0e0d4"]}
          height="h-[30vh] md:h-[40vh]"
        />
        <SubIndustries />
      </div>
    </>
  );
}

export default ServicesPage;
