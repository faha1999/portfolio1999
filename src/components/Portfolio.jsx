import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Sidebar from '../images/sidebar.png';
import Ecommerce from '../images/ecommerce.png';
import HOC from '../images/hoc.png';
import MusicApp from '../images/musicapp.png';

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <span>Recent projects</span>
      <span>Portfolio</span>

      {/* Slider */}

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="Sidebar" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Ecommerce} alt="Sidebar" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={HOC} alt="Sidebar" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={MusicApp} alt="Sidebar" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Sidebar} alt="Sidebar" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
