import FirstSection from "../../components/HomePage/FirstSection/FirstSection";
import { WolseyNumbers } from "../../data/WolseyNumbers";
import WolseyWithNumbers from "../../components/AboutPage/WolseyWithNumbers/WolseyWithNumbers";
import OverviewSection from "../../components/HomePage/OverviewSection/OverviewSection";
import environments from "../../data/environments";
import Environments from "../../components/HomePage/Environments/Environments";
import OurBeliefs from "../../components/HomePage/OurBeliefs/OurBeliefs";

function HomePage() {
  return (
    <>
      <FirstSection />
      <OverviewSection />
      <WolseyWithNumbers
        title="Wolsey Structural Engineering in Numbers"
        items={WolseyNumbers}
        columns="sm:grid-cols-6"
      />

      <div className="bg-mainDark">
        <OurBeliefs />
        {environments.map((environment, index) => (
          <div
            key={index}
            ref={environment.sectionName}
            className="border-b border-white/10"
          >
            <Environments environment={environment} />
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
