import { useState, useEffect } from "react";
import ProjectsData from "../../context/data/ProjectsData";
import { ProjectCard } from "../../components/ProjectsPage/ProjectCard/ProjectCard";
import SectionHeader from "../../components/shared/SectionHeader/SectionHeader";

export default function ProjectPage() {
  const industries = ["All", ...new Set(ProjectsData.map((p) => p.industry))];

  const [activeIndustry, setActiveIndustry] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9); 

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
    setVisibleCount(9); 
  }, [activeIndustry, searchQuery]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="mt-[5.5rem] md:mt-[8rem] lg:px-20 px-8">
      <h1 className="text-mainDark heading font-bold text-center my-3">
        <SectionHeader firstWord="Our Projects" />
      </h1>

      <hr className="my-3" />

      {/* Search */}
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

      {/* Filters */}
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

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 my-5">
        {filteredProjects.length > 0 ? (
          filteredProjects
            .slice(0, visibleCount) // ✅ هنا السحر
            .map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            No projects found.
          </p>
        )}
      </div>

      {/* Show More Projects Button */}
      {visibleCount < filteredProjects.length && (
        <div className="flex justify-center my-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 bg-mainDark text-white rounded-lg hover:opacity-90 transition"
          >
            Show More Projects
          </button>
        </div>
      )}
    </div>
  );
}