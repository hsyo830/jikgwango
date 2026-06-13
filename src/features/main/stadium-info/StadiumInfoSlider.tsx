"use client";

import "swiper/css";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperNavButton from "@/src/components/common/SwiperNavButton";
import { stadiums } from "@/src/data/stadiums";

import StadiumInfoCard from "./components/StadiumInfoCard";

const StadiumInfoSlider = () => {
  return (
    <div>
      <div className="mx-2 hidden md:block">
        <div className="relative min-w-0">
          <Swiper
            className="w-full"
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: ".stadium-swiper-prev",
              nextEl: ".stadium-swiper-next",
            }}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={10}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={stadiums.length > 4}
          >
            {stadiums.map((stadium) => (
              <SwiperSlide key={stadium.id}>
                <StadiumInfoCard stadium={stadium} />
              </SwiperSlide>
            ))}
          </Swiper>

          <SwiperNavButton
            direction="prev"
            className="stadium-swiper-prev left-0 -translate-x-1/2"
          />
          <SwiperNavButton
            direction="next"
            className="stadium-swiper-next right-0 translate-x-1/2"
          />
        </div>
      </div>
      <ul className="flex gap-2 overflow-scroll md:hidden">
        {stadiums.map((stadium) => (
          <li key={stadium.id} className="shrink-0">
            <StadiumInfoCard stadium={stadium} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StadiumInfoSlider;
