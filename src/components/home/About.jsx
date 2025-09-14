import React from "react";
import "./About.css";
import AboutImg from "../../Assets/assets/profile.jpg";
import CV from "../../Assets/assets/Resume PS.pdf";
import Info from "./Info";

const About = () => {
  return (
    <div className="about">
      <section className="about-section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>
        <div className="about__container container grid">
          <img src={AboutImg} alt="" className="about__img" />
          <div className="about__data">
                <Info/>
                <p className="about__description">Fullstack (MERN) Developer, I create web pages with UI / UX user interface, I have experience and many clients are happy with the projects carried out.</p>

                <a download="" href={CV} className="button button--flex ">Download CV
                    <img src="../../Assets/assets/files.svg" alt="" />
                </a>

          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
