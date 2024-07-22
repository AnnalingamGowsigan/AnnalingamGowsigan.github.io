import React, { useEffect } from "react";
import { useState } from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.includes(item.name);
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: projectsNav[index].name });
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((navItem, index) => {
          return (
            <span
              onClick={(e) => handleClick(e, index)}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
            >
              {navItem.name}
            </span>
          );
        })}
      </div>
      <div className="work__container container grid">
        {projects.map((project) => {
          return <WorkItems item={project} key={project.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
