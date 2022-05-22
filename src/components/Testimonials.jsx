import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper';
import TestimonialsData from './partials/TestimonialsData';

export const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>

        <div
          className="blur t-blur1"
          style={{ background: 'var(--purple)' }}
        ></div>
        <div className="blur t-blur2" style={{ background: 'skyblue' }}></div>
      </div>

      <Swiper
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="portfolio-slider"
      >
        {TestimonialsData.map(({ img, review, id }) => {
          return (
            <SwiperSlide key={id}>
              <div className="card">
                <img src={img} alt="" />
                <span>{review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
