"use client";
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Cars from "./carslides";
import { Context } from "@/app/context";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  A11y,
} from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PopularCars = () => {
  // Access the productCars data from the Context
  const { productCars } = useContext(Context);

  // Function to render SwiperSlides for each car
  const renderCarSlides = () =>
    productCars?.map((data) => (
      <SwiperSlide key={data.id}>
        <Cars data={data} />
      </SwiperSlide>
    ));

  // Render the PopularCars component
  return (
    <Container id="popular-cars" className="my-5 pt-3">
      <h2 className="fw-bold color-heading text-center">Popular Cars</h2>
      <Swiper
        className="pb-5 px-sm-5"
        spaceBetween={20}
        modules={[Navigation, Pagination, EffectFade, Autoplay, A11y]}
        navigation
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },

          1140: {
            slidesPerView: 4,
          },
        }}
        pagination={{ clickable: true }}
      >
        {renderCarSlides()}
      </Swiper>
    </Container>
  );
};

export default PopularCars;
