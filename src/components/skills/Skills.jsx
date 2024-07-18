import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Database from "./Database";
import ToolsAndTechnologies from "./ToolsAndTechnologies";
import HardwareOrientedProgramming from "./HardwareOrientedProgramming";
import DevOpsAndCloud from "./DevOpsAndCloud";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Database />
        <ToolsAndTechnologies />
        <DevOpsAndCloud />
        <HardwareOrientedProgramming />
      </div>
    </section>
  );
};

export default Skills;
