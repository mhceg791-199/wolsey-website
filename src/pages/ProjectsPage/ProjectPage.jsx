// import React, { useState, useEffect } from "react";
// import ProjectsData from "../../context/data/ProjectsData";
// import { ProjectCard } from "../../components/ProjectsPage/ProjectCard/ProjectCard";
// import SectionHeader from "../../components/shared/SectionHeader/SectionHeader";

// export default function ProjectPage() {
//   const industries = ["All", ...new Set(ProjectsData.map((p) => p.industry))];

//   const [activeIndustry, setActiveIndustry] = useState("All");
//   const [filteredProjects, setFilteredProjects] = useState(ProjectsData);

//   // Filter logic
//   useEffect(() => {
//     if (activeIndustry === "All") {
//       setFilteredProjects(ProjectsData);
//     } else {
//       setFilteredProjects(
//         ProjectsData.filter((p) => p.industry === activeIndustry)
//       );
//     }
//   }, [activeIndustry]);

//   return (
//     <div className="mt-[5.5rem] md:mt-[8rem] lg:px-20 px-8">
//       <h1 className="text-mainDark heading font-bold text-center my-3">
//         <SectionHeader firstWord="Our Projects" />
//       </h1>

//       <hr className="my-3" />

//       {/* Filter Buttons */}
//       <div className="flex flex-wrap justify-center gap-4 mb-8">
//         {industries.map((ind) => (
//           <button
//             key={ind}
//             onClick={() => setActiveIndustry(ind)}
//             className={`px-3 py-2 rounded-full border transition-all duration-300 capitalize
//               ${
//                 activeIndustry === ind
//                   ? "bg-mainDark text-white border-mainDark"
//                   : "border-mainDark/40 hover:bg-mainDark/10"
//               }
//             `}
//           >
//             {ind}
//           </button>
//         ))}
//       </div>

//       <hr className="my-3" />

//       {/* Projects Grid */}
//       <div className="grid md:grid-cols-3 gap-8 my-5">
//         {filteredProjects.map((project, index) => {
//           return (
//             <React.Fragment key={index}>
//               <ProjectCard project={project} />
//             </React.Fragment>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react"; 
import ProjectsData from "../../context/data/ProjectsData";
import { ProjectCard } from "../../components/ProjectsPage/ProjectCard/ProjectCard";
import SectionHeader from "../../components/shared/SectionHeader/SectionHeader";

export default function ProjectPage() {
  const industries = ["All", ...new Set(ProjectsData.map((p) => p.industry))];

  const [activeIndustry, setActiveIndustry] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(ProjectsData);

  useEffect(() => {
    let result = ProjectsData;

    // فلترة بالـ Industry
    if (activeIndustry !== "All") {
      result = result.filter((p) => p.industry === activeIndustry);
    }

    // فلترة بالبحث
    if (searchQuery.trim() !== "") {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProjects(result);
  }, [activeIndustry, searchQuery]);

  return (
    <div className="mt-[5.5rem] md:mt-[8rem] lg:px-20 px-8">
      <h1 className="text-mainDark heading font-bold text-center my-3">
        <SectionHeader firstWord="Our Projects" />
      </h1>

      <hr className="my-3" />

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search projects by name..."
          className="w-full md:w-[90%] px-4 py-2 border border-mainDark/40 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-mainDark transition-al"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {industries.map((ind) => (
          <button
            key={ind}
            onClick={() => setActiveIndustry(ind)}
            className={`px-3 py-2 rounded-full border transition-all duration-300 capitalize
              ${
                activeIndustry === ind
                  ? "bg-mainDark text-white border-mainDark"
                  : "border-mainDark/40 hover:bg-mainDark/10"
              }
            `}
          >
            {ind}
          </button>
        ))}
      </div>

      <hr className="my-3" />

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-8 my-5">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <React.Fragment key={index}>
              <ProjectCard project={project} />
            </React.Fragment>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            No projects found.
          </p>
        )}
      </div>
    </div>
  );
}
