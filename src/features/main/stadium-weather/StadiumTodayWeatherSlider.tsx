"use client";

import "swiper/css";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperNavButton from "@/src/components/common/SwiperNavButton";
import { Stadium } from "@/src/types/stadium";
import { KboGame } from "@/src/types/todayGames";

import StadiumWeatherCard from "./components/StadiumWeatherCard";

type StadiumTodayWeatherSliderProps = {
  todayStadiumWeather: Stadium[];
  gamesData: KboGame[];
};

const StadiumTodayWeatherSlider = ({
  todayStadiumWeather: stadiumData,
  gamesData,
}: StadiumTodayWeatherSliderProps) => {
  return (
    <section>
      <div className="mx-2 hidden md:block">
        <div className="relative min-w-0">
          <Swiper
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: ".stadium-weather-swiper-prev",
              nextEl: ".stadium-weather-swiper-next",
            }}
            spaceBetween={15}
            slidesPerView={4}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={stadiumData.length > 3}
          >
            {stadiumData.map((stadium) => (
              <SwiperSlide key={stadium.id}>
                <StadiumWeatherCard stadiumData={stadium} gamesData={gamesData} />
              </SwiperSlide>
            ))}
          </Swiper>

          <SwiperNavButton
            direction="prev"
            className="stadium-weather-swiper-prev left-0 -translate-x-1/2"
          />
          <SwiperNavButton
            direction="next"
            className="stadium-weather-swiper-next right-0 translate-x-1/2"
          />
        </div>
      </div>
      <div className="flex gap-2 overflow-scroll md:hidden">
        {stadiumData.map((stadium) => (
          <div key={stadium.id} className="w-60 shrink-0">
            <StadiumWeatherCard stadiumData={stadium} gamesData={gamesData} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default StadiumTodayWeatherSlider;
