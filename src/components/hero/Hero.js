import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import './Hero.css';

// Import SVG images
import prevIcon from './caret-back-outline.svg';
import nextIcon from './caret-forward-outline.svg';
const Hero = ({ projects }) => {
  return (
    <div className="container">
      <h1 className="heading">Project Gallery</h1>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="swiper_container"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.projectId}>
            <a href={`/project/${project.projectId}`} target="_blank" rel="noopener noreferrer">
              <img src={project.imageLink} alt={project.projectTitle} />
            </a>
            <div className="project-title">
              <h4>{project.projectTitle}</h4>
            </div>
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev">
            
          </div>
          <div className="swiper-button-next">
      
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Hero;