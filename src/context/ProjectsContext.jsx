import  { createContext, useEffect, useState } from "react";
import projectsData from "./data/ProjectsData";

export const projectContext = createContext(null);
function ProjectsContextProvider({ children }) {
  const [projectsPerPage] = useState(5);
  const [projects, setProjects] = useState(projectsData);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [paginationProjects, setPaginationProjects] = useState(
    filteredProjects.slice(0, projectsPerPage)
  );
  const [industryOptions, setIndustryOptions] = useState();
  const [term, setTerm] = useState({
    name: { text: "" },
    industry: { text: [] },
    status: { text: "" },
  });

  useEffect(() => {
    const uniqueIndustries = projects
      .map((p) => ({ value: p.industry, label: p.industry }))
      .filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.value === item.value)
      );

    setIndustryOptions(uniqueIndustries);
  }, [projects]);
  const projectFilter = (terms) => {

    setFilteredProjects(
      projects
        .filter((p) =>
          p.name.toLowerCase().includes(terms.name.text.toLowerCase())
        )
        .filter(
          (p) =>
            terms.industry.text.length === 0 ||
            terms.industry.text.includes(p.industry)
        )
        .filter(
          (p) =>
            terms.status.text === "" || p.status.includes(terms.status.text)
        )
    );
  };

  return (
    <projectContext.Provider
      value={{
        projects,
        setProjects,
        filteredProjects,
        projectFilter,
        setFilteredProjects,
        projectsPerPage,
        setPaginationProjects,
        paginationProjects,
        term,
        setTerm,
        industryOptions,
      }}
    >
      {children}
    </projectContext.Provider>
  );
}

export default ProjectsContextProvider;
