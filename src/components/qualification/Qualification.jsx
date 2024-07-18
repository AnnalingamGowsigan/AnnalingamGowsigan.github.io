import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="Qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap  qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt  qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  BSc. (Hons) Computer Engineering
                </h3>
                <span className="qualification__subtitle">
                  Faculty of Engineering, University of Peradeniya
                  <br />
                  Kandy, Sri Lanka
                </span>
                <span className="qualification__details">
                  GPA: 3.8/4.0
                  {/* | 1st Class with Honors */}
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2019 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  G.C.E. A/L (Physical Science)
                </h3>
                <span className="qualification__subtitle">
                  Meesalai Veerasingam C.C, Jaffna, Sri Lanka
                </span>
                <span className="qualification__details">
                  Physics(A), Combined Maths(B), Chemistry(A)
                  <br />
                  Z-Score: 1.8421 | Country Rank: 919
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2016 - 2018
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">G.C.E. O/L</h3>
                <span className="qualification__subtitle">
                  Meesalai Veerasingam C.C, Jaffna, Sri Lanka
                </span>
                <span className="qualification__details">8As, 1B</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2006 - 2015
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {" "}
                  Software Engineering Intern
                </h3>
                <span className="qualification__subtitle">
                  WSO2 - Sri Lanka
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Casual Instructor</h3>
                <span className="qualification__subtitle">
                  Department of Computer Engineering
                  <br /> University of Peradeniya
                </span>
                <span className="qualification__details">
                  Software Construction,
                  <br />
                  Introduction to Programming and Networking
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  03.2023- 07.2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Member of the Web Consultation Team
                </h3>
                <span className="qualification__subtitle">
                  University of Peradeniya
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  10.2022- Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
