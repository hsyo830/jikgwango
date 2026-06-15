"use client";

import "swiper/css";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import NoResult from "@/src/components/common/NoResult";
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
  const NoGameToday = gamesData.length === 0;

  if (NoGameToday) {
    return (
      <div className="md:mb-5 lg:mb-10">
        <NoResult message="오늘 예정된 경기가 없어 날씨 정보를 제공하지 않습니다." />
      </div>
    );
  }

  return (
    <div>
      <div className="mx-2 hidden md:block">
        <div className="relative min-w-0">
          <Swiper
            aria-label="오늘 경기 구장 날씨 목록"
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
              pauseOnMouseEnter: true,
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
      <ul className="flex gap-2 overflow-scroll md:hidden">
        {stadiumData.map((stadium) => (
          <li key={stadium.id} className="w-60 shrink-0">
            <StadiumWeatherCard stadiumData={stadium} gamesData={gamesData} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StadiumTodayWeatherSlider;
