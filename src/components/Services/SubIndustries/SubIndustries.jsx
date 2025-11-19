import subIndustries from "../../../data/subIndustries";
import Environments from "../../HomePage/Environments/Environments";

function SubIndustries() {
  return (
    <>
      <div className="bg-mainDark">
        {subIndustries.map((environment, index) => (
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

export default SubIndustries;
