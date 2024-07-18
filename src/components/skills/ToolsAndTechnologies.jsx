import React from "react";

const ToolsAndTechnologies = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Tools & Technologies</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Fluent</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Postman</h3>
              <span className="skills__level">Fluent</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">GITHUB</h3>
              <span className="skills__level">Fluent</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Android Studio</h3>
              <span className="skills__level">Familiar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsAndTechnologies;
