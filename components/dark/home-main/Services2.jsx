'use client';


import React from 'react';
import data from '@/data/services.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';

// Import Swiper styles
import 'swiper/swiper.min.css';

// Install Swiper modules
SwiperCore.use([Navigation]);

function Services2() {
  const swiperOptions = {
    speed: 600,
    loop: true,
    slidesPerView: 'auto', // Display as many slides as possible within the container width
    spaceBetween: 20,
    centeredSlides: true,
    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      // when window width is >= 1000px
      1000: {
        slidesPerView: 3,
        centeredSlides: true,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  return (
    <section className="services section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Notre spécialité</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 d-rotate wow">
              <span className="rotate-text">
                Nos <span className="fw-400">Services.</span>
              </span>
            </h2>
          </div>
        </div>
        <div className="serv-swiper">
          <Swiper
            {...swiperOptions}
            className="mySwiper"
          >
            {data.map((item, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="item-box radius-15">
                  <div className="icon mb-40 opacity-5">
                    <img src={item.img} alt="" />
                  </div>
                  <h5 className="mb-15">{item.title}</h5>
                  <h5 className="mb-15" style={{ color: '#00adb5' }}>{item.price}</h5>
                  <p>{item.desc}</p>
                  <a href={item.link} className="rmore mt-30">
                    <span className="sub-title">Read More</span>
                    <img
                      src="/dark/assets/imgs/arrow-right.png"
                      alt=""
                      className="icon-img-20 ml-5"
                    />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Services2;
