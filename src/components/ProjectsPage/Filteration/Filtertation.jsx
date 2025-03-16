import React, { useContext, useEffect } from "react";
import { Input } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import SelectIndustry from "./Select/SelectIndustry";
import SelectSubIndustry from "./Select/SelectSubIndustry";
import SelectLocation from "./Select/SelectLocation";
import { projectContext } from "../../../context/ProjectsContext";
import SelectYear from "./Select/SelectYears";

export function Filteration() {
  const {
    projects: originalProjects,
    projectFilter,
    term,

    setTerm,
  } = useContext(projectContext);

  useEffect(() => {
    projectFilter(term);
  }, [term, originalProjects]);
  return (
    <>
      <div className="grid gap-2 grid-cols-6 my-5 m-auto md:w-1/2">
        {/* <div className="lg:col-span-6 sm:col-span-3 col-span-6">
          <div className=" m-auto ">
            <Input
              className=" !border-gray-700  !border !rounded-none bg-white text-gray-900   placeholder:text-gray-700 placeholder:opacity-80  focus:!border-mainBrown focus:!shadow-md focus: focus:!shadow-mainBrown "
              labelProps={{
                className: "hidden",
              }}
              placeholder="Project Name"
              value={term.name.text}
              onChange={(e) => {
                setTerm({
                  ...term,
                  name: { text: e.target.value },
                });
              }}
              label="Project Name"
            />
          </div>
        </div> */}
        <div className="lg:col-span-6 sm:col-span-6 col-span-6">
          <SelectIndustry />
        </div>
        <div className="lg:col-span-6 sm:col-span-6 col-span-6 flex justify-center ">
          <Checkbox
            onChange={(e) => {
              const value = "Completed";
              setTerm({
                ...term,
                status: {
                  text: e.target.checked
                    ? [...term.status.text, value]
                    : term.status.text.filter((status) => status !== value),
                },
              });
            }}
            label="Completed"
            value="Completed"
          />
          <Checkbox
            label="On Going"
            onChange={(e) => {
              const value = "Pending";
              setTerm({
                ...term,
                status: {
                  text: e.target.checked
                    ? [...term.status.text, value]
                    : term.status.text.filter((status) => status !== value),
                },
              });
            }}
          />{" "}
        </div>
      </div>{" "}
    </>
  );
}
