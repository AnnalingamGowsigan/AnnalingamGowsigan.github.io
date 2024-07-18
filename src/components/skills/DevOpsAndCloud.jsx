import React from "react";

const DevOpsAndCloud = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">DevOps & Cloud</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Docker</h3>
              <span className="skills__level">Fluent</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Docker Compose</h3>
              <span className="skills__level">Fluent</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Linux</h3>
              <span className="skills__level">Fluent</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Kubernetes</h3>
              <span className="skills__level">Familiar</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Amazon EC2</h3>
              <span className="skills__level">Familiar</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">AWS IoT Core</h3>
              <span className="skills__level">Fluent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevOpsAndCloud;
