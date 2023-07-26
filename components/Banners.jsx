"use client";
import React, { useState, useEffect } from "react";
import Slides from "./slides";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  A11y,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banners = () => {
  const [slidesID, setSlidesID] = useState();

  const api = "https://64c036e40d8e251fd11201bc.mockapi.io/api/v1/";

  useEffect(() => {
    (async function () {
      try {
        const res = await axios.get(`${api}slides`);
        setSlidesID(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const slides =
    slidesID &&
    slidesID.map((slide) => {
      return (
        <SwiperSlide key={slide.id}>
          <Slides slidesID={slide.imageID} />
        </SwiperSlide>
      );
    });

  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        modules={[Navigation, Pagination, EffectFade, Autoplay, A11y]}
        navigation
        pagination={{ clickable: true }}
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default Banners;
