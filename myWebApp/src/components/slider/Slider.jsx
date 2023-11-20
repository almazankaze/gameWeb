import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../product-card/ProductCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./slider.scss";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Slider = ({ slides, resSlides, data }) => {
  if (data?.length === 0)
    return <div className="text-center">Nothing to display</div>;
  return (
    <Swiper
      spaceBetween={20}
      breakpoints={{
        1200: {
          slidesPerView: slides,
        },
        850: {
          slidesPerView: resSlides,
        },
        530: {
          slidesPerView: 2,
        },
      }}
      loop
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {data.map((card) => (
        <SwiperSlide key={card._id}>
          <ProductCard product={card} />
        </SwiperSlide>
      ))}

      <div className="slider-btn swiper-button-next"></div>
      <div className="slider-btn swiper-button-prev"></div>
    </Swiper>
  );
};

export default Slider;
