import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper';
import Sidebar from '../images/sidebar.png';
import Ecommerce from '../images/ecommerce.png';
import HOC from '../images/hoc.png';
import MusicApp from '../images/musicapp.png';
import { themeContext } from '../Context';

export const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="Portfolio">
      <span style={{ color: darkMode ? 'white' : '' }}>Recent projects</span>
      <span>Portfolio</span>

      {/* Slider */}

      <Swiper
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
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
      </Swiper>
    </div>
  );
};
