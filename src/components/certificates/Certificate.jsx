import React from "react";
import "./Certificate.css";
import {Data} from "./Data.jsx"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';

const Certificate = () => {
  return (
    <section className="test container section" id="certificates">
      <h2 className="section__title">My Certificate</h2>
      <span className="section__subtitle">Internships & Courses</span>


      <Swiper className="test__container "
        loop = {true}
        grabCursor = {true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
         
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description, pdf }) => {
  return (
    <SwiperSlide className="test__card" key={id}>
      <img src={image} alt={title} className="test__img" />
      <h3 className="test__name">{title}</h3>
      <p className="test__desc">{description}</p>
      {pdf && (
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="view__btn"
        >
          View Certificate
        </a>
      )}
    </SwiperSlide>
            );
        })}
      </Swiper>
    </section>
  );
};

export default Certificate;
