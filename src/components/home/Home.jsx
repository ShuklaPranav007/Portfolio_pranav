import React from "react";
import Social from "./Social"
import "./Home.css";
import Data from "./Data";


const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          {/* Social icons */}
          <Social/>

          {/* Profile image */}
          <div className="home__img"></div>

          {/* Data (intro text) */}
          <Data />
        </div>


      </div>
    </section>
  );
};

export default Home;
