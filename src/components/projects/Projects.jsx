import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My creative Projects</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Web Development <br /> Projects{" "}
            </h3>
          </div>

          <span
            className="services__button"
            onClick={() => {
              toggleTab(1);
            }}
          >
            View More
            <i className="uil uil-arrow-right services__icon services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
            onMouseLeave={() => toggleTab(0)}
          >
            <div className="services__modal-content">
              <i
                onClick={() => {
                  toggleTab(0);
                }}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Web-Dev</h3>
              <p className="services__modal-description">Designs</p>

              <ul className="services__modal-service grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a href="https://lnkd.in/dDAQSN4C">Wanderlust </a>
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a href="https://edge-fashion-web.netlify.app/">.EDGE</a>
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a href="https://shuklapranav007.github.io/Devoic-fantasy-island/">Fantasy Island</a>
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a href="https://shuklapranav007.github.io/Music-Player_Project1/">Music player</a>
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                   <a href="https://shuklapranav007.github.io/Movie_Serach-Spoof_Movies2.0/">Spoof Movies</a>
                  </p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                   <a href="https://www.linkedin.com/posts/pranav-shukla-955340274_frontenddevelopment-webdevelopment-cloneproject-activity-7222652424816123904-lBB4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEL4LVEBrxBUN-ESWKAgRzJYX3eQw_L9aBY">Sushi Website</a>
                  </p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                   <a href="https://www.linkedin.com/posts/pranav-shukla-955340274_webdevelopment-uxui-coding-activity-7198667897005625347-TM-O?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEL4LVEBrxBUN-ESWKAgRzJYX3eQw_L9aBY">Community Hub</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Machine Learning <br /> Projects
            </h3>
          </div>

          <span
            className="services__button"
            onClick={() => {
              toggleTab(2);
            }}
          >
            View More
            <i className="uil uil-arrow-right services__icon services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
            onMouseLeave={() => toggleTab(0)}
          >
            <div className="services__modal-content">
              <i
                onClick={() => {
                  toggleTab(0);
                }}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Projects</h3>
              <p className="services__modal-description">AIML</p>

              <ul className="services__modal-service grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a href="https://lnkd.in/d_nrwF4y">Cricket Score Prediction Model specifically designed for T20 formats</a>
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a href="https://www.linkedin.com/posts/pranav-shukla-955340274_machinelearning-ai-datascience-activity-7197603910956539904-dQ5M?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEL4LVEBrxBUN-ESWKAgRzJYX3eQw_L9aBY">Air Canvas</a>
                  </p>
                </li>

              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Ui/UX
              <br /> Designs
            </h3>
          </div>

          <span
            className="services__button"
            onClick={() => {
              toggleTab(3);
            }}
          >
            View More
            <i className="uil uil-arrow-right services__icon services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
            onMouseLeave={() => toggleTab(0)}
          >
            <div className="services__modal-content">
              <i
                onClick={() => {
                  toggleTab(0);
                }}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Designer</h3>
              <p className="services__modal-description">My way</p>

              <ul className="services__modal-service grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a href="https://www.linkedin.com/posts/pranav-shukla-955340274_uidesign-designinspiration-activity-7209621472397447169-kGE1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEL4LVEBrxBUN-ESWKAgRzJYX3eQw_L9aBY">New school design</a>
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a href="https://www.linkedin.com/posts/pranav-shukla-955340274_uidesign-figma-graphicdesign-activity-7205161991349481473-Axcm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEL4LVEBrxBUN-ESWKAgRzJYX3eQw_L9aBY">Dj Night </a>
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a href="https://lnkd.in/drtFHGb8">Local Coffee Cafe </a>
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a href="https://lnkd.in/dypK8sDR">Weather app</a>
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a href="https://lnkd.in/dRxKS-uR">Food Delivery App</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Block Chain
              <br /> Projects
            </h3>
          </div>

          <span
            className="services__button"
            onClick={() => {
              toggleTab(4);
            }}
          >
            View More
            <i className="uil uil-arrow-right services__icon services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 4
                ? "services__modal active-modal"
                : "services__modal"
            }
            onMouseLeave={() => toggleTab(0)}
          >
            <div className="services__modal-content">
              <i
                onClick={() => {
                  toggleTab(0);
                }}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">PQR</p>

              <ul className="services__modal-service grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    <a href="https://lnkd.in/d4SraYEP">Blockchain-Based Electronic Health</a>
                  </p>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
