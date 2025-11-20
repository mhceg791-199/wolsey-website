import SubIndustries from "../../components/Services/SubIndustries/SubIndustries";
import HeroSection from "../../components/shared/HeroSection/HeroSection";
import DescriptionAbout from "../../components/shared/DescriptionAbout/DescriptionAbout";

function ServicesPage() {
  const paragraphs = [
    "Wolsey Structural Engineering Ltd. delivers full structural design in reinforced concrete, steel, masonry, aluminum, and timber, supported by coordinated 3D BIM models in Revit."
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
