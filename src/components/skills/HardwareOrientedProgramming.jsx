import React from "react";

const HardwareOrientedProgramming = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Hardware Oriented Programming</h3>

      <div className="skills__box">
        {/* here add language */}
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">C</h3>
              <span className="skills__level">Fluent</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">ARM Assembly</h3>
              <span className="skills__level">Familiar</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Verilog HDL</h3>
              <span className="skills__level">Familiar</span>
            </div>
          </div>
        </div>

        {/* here add framework and libraries */}
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Arduino</h3>
              <span className="skills__level">Fluent</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">NodeMCU</h3>
              <span className="skills__level">Fluent</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Fritzing</h3> {/* PCB Designing */}
              <span className="skills__level">Familiar</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Proteus</h3> {/* PCB Designing */}
              <span className="skills__level">Familiar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardwareOrientedProgramming;
