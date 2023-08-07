import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay,Navigation, Pagination } from "swiper/modules";
 
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

 


const Banner = () => {
    return (
      <section className=''>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          navigation={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://i.ibb.co/fxqd3XS/png-20230802-004918-0000.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/vqGNKFQ/png-20230802-005345-0000.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/qYFC8wJ/png-20230801-234216-0000.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/MNPTr5P/png-20230802-011409-0000.png" />
          </SwiperSlide>
        </Swiper>
      </section>
    );
};

export default Banner;