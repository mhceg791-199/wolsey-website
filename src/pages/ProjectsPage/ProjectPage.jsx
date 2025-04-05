import React, { useContext, useEffect } from "react";
import { projectContext } from "../../context/ProjectsContext";
import { Filteration } from "../../components/ProjectsPage/Filteration/Filtertation";
import { ProjectCard } from "../../components/ProjectsPage/ProjectCard/ProjectCard";
import ButtonToUp from "../../components/ProjectsPage/ButtonToUp/ButtonToUp.jsx";

function ProjectPage() {
  const {
    projects: originalProjects,
    projectFilter,
    filteredProjects,
    term,
    setTerm,
  } = useContext(projectContext);

  useEffect(() => {
    setTerm({
      name: { text: "" },
      industry: { text: [] },
      status: { text: "" },
    });
  }, []);
  useEffect(() => {
    projectFilter(term);
  }, [term, originalProjects]);
  return (
    <>
      <div className="md:mt-20 mt-8 lg:px-20 px-8">
        <h1 className="text-mainBrown custom-text-xxl font-berlin text-center">
          Projects
        </h1>
        <hr />
        <Filteration />

        <hr />
        <div className="flex justify-center">
          <div className="space-x-8"></div>
        </div>
        <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-5">
          {filteredProjects.map((project, index) => {
            return (
              <React.Fragment key={index}>
                <div className="col-span-1">
                  <ProjectCard project={project} />
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <ButtonToUp></ButtonToUp>

        {/* <div className="my-5 m-auto">
          <Pagination />
        </div> */}
      </div>
    </>
  );
}

export default ProjectPage;
