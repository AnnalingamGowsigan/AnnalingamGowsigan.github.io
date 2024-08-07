import React from "react";

const Database = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend</h3>

      <div className="skills__box">
        {/* here add language */}
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Fluent</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Fluent</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Fluent</span>
            </div>
          </div>
        </div>
        {/* here add framework and libraries */}
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Bootstrp</h3>
              <span className="skills__level">Familiar</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Fluent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Database;
