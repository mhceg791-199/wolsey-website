import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../../components/shared/HeroSection/HeroSection";
import DescriptionAbout from "../../components/shared/DescriptionAbout/DescriptionAbout";
import MissionAndVisions from "../../components/AboutPage/MissionAndVisions/MissionAndVisions";
import OurValues from "../../components/AboutPage/values/values";

function AboutPage() {
  const paragraphs = [
    "Founded in 2006, Wolsey Structural Engineering began as a passionate local practice. From day one, we committed to delivering world-class structural designs, built on the belief that engineering is both a science and a story —a delicate balance of strength, design, and imagination. We quickly grew, specializing in robust solutions using reinforced concrete, steel, masonry, aluminum, and timber, completing over 3,000 projects.",
  ];

  const paragraphs2 = [
    "The year 2023 marked a defining chapter. Wolsey became a proud subsidiary of Mosaic Holding Corporation —a major, diverse umbrella whose core mission is bringing powerful pieces together to create something truly big. Being under the Mosaic banner means Wolsey is now part of a powerful ecosystem with sister companies spanning Architecture, Engineering, Maritime, Real Estate, and Energy, granting us a global network and unparalleled resources.",
  ];

  const paragraphs3 = [
    "This partnership fueled our evolution and global reach. We expanded significantly, particularly across the United States, and are looking forward to further expansions in regions like the Middle East. Our wood sector expertise has also excelled, enhancing our ability to provide sustainable and aesthetically compelling solutions. Today, our team brings together 50+ years of collective expertise, and our commitment to client satisfaction is proven by a remarkable 95% recurring client rate. At Wolsey, we don't just build structures; we establish stability and cultivate success for all our partners.",
  ];

  const aboutRef = useRef();
  const missionRef = useRef();
  const visionRef = useRef();
  const location = useLocation();
  const scrollToSection = (ref) => {
    if (ref.current) {
      const offsetTop = ref.current.offsetTop;
      window.scrollTo({
        top: offsetTop - 100,
      });
    }
  };
  useEffect(() => {
    if (location.state?.scrollTo === "about") {
      scrollToSection(aboutRef);
    }
    if (location.state?.scrollTo === "mission") {
      scrollToSection(missionRef);
    }
    if (location.state?.scrollTo === "vision") {
      scrollToSection(visionRef);
    }
  }, [location]);
  return (
    <>
      <div className="md:mt-18 mt-10">
        <div ref={aboutRef}>
          <HeroSection
            title="About US"
            bgImage="/about/about.webp"
            height="h-[60vh] md:h-[80vh]"
          />
        </div>
        <DescriptionAbout
          id="about-wolesy"
          firstWord="Our "
          secondWord="Story"
          paragraphs={paragraphs}
          paragraphs2={paragraphs2}
          paragraphs3={paragraphs3}
          particleColors={["#e0e0d4", "#e0e0d4"]}
          height="h-[95vh] md:h-[65vh]"
        />

        <MissionAndVisions />
        <OurValues />
      </div>
    </>
  );
}

export default AboutPage;
