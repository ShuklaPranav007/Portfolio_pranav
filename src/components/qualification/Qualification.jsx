import React, { useState } from "react";
import "./qual.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qual section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal Journey</span>

      <div className="qual__container container">
        {/* Tabs */}
        <div className="qual__tabs">
          <div
            className={
              toggleState === 1
                ? "qual__button qual__active button--flex"
                : "qual__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qual__icon"></i> Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qual__button qual__active button--flex"
                : "qual__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qual__icon"></i> Experience
          </div>
        </div>

        {/* Sections */}
        <div className="qual__section">
          {/* Education */}
          <div
            className={
              toggleState === 1
                ? "qual__content qual__content-active"
                : "qual__content"
            }
          >
            <div className="qual__data">
              <div>
                <h3 className="qual__title">
                  <b>B.Tech</b> CSE(AIML)
                </h3>
                <span className="qual__subtitle">
                  School Of Information Technology, RGPV Bhopal{" "}
                </span>
                <div className="qual__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022-present
                </div>
              </div>
              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
            </div>

            <div className="qual__data">
              <div></div>
              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
              <div>
                <h3 className="qual__title">Higher Education</h3>
                <span className="qual__subtitle">
                  Noble Children Academy, Jabalpur
                </span>
                <div className="qual__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021
                </div>
              </div>
            </div>

            <div className="qual__data">
              <div>
                <h3 className="qual__title">Secondary Education</h3>
                <span className="qual__subtitle">
                  St. Aloysius Sr. Sec School, Jabalpur
                </span>
                <div className="qual__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019
                </div>
              </div>
              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div
            className={
              toggleState === 2
                ? "qual__content qual__content-active"
                : "qual__content"
            }
          >
            <div className="qual__data">
              <div>
                <h3 className="qual__title"> Fibonacci (Geeks for Geeks)</h3>
                <span className="qual__subtitle">
                  Core Team
                </span>
                <div className="qual__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024-25
                </div>
              </div>
              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
            </div>

            <div className="qual__data">
              <div></div>
              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
              <div>
                <h3 className="qual__title">Devoic</h3>
                <span className="qual__subtitle">Web Development Team</span>
                <div className="qual__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024-25
                </div>
              </div>
            </div>

            <div className="qual__data">
              <div>
                <h3 className="qual__title">Praambh</h3>
                <span className="qual__subtitle">Event Core Team</span>
                <div className="qual__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023-25
                </div>
              </div>
              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
            </div>

            <div className="qual__data">
              <div></div>
              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
              <div>
                <h3 className="qual__title">GDSC (Google Developer Student Clubs)</h3>
                <span className="qual__subtitle">Event Core Team</span>
                <div className="qual__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023-24
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
