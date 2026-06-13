"use client";

import "swiper/css";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import NoResult from "@/src/components/common/NoResult";
import { KboGame } from "@/src/types/todayGames";

import GameCard from "./GameCard";

type TodayGameSliderProps = {
  games: KboGame[];
};

const TodayGameSlider = ({ games }: TodayGameSliderProps) => {
  const NoGameToday = games.length === 0;

  const SLIDES_PER_VIEW = 3;

  return (
    <>
      {/* 모바일 */}
      <ul className="flex w-full gap-2 overflow-x-auto md:hidden">
        {games.map((game) => (
          <li key={game.gameId} className="w-47 shrink-0 md:w-70">
            <GameCard game={game} />
          </li>
        ))}
      </ul>

      {/* 태블릿~ */}
      <div className="hidden w-full min-w-0 overflow-hidden md:block">
        <Swiper
          aria-label="오늘의 KBO 경기 목록"
          className="w-full"
          modules={[Autoplay]}
          slidesPerView={SLIDES_PER_VIEW}
          spaceBetween={20}
          loop={games.length >= SLIDES_PER_VIEW}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {games.map((game) => (
            <SwiperSlide key={game.gameId} className="min-w-0">
              <GameCard game={game} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {NoGameToday && (
        <div className="md:mb-5 lg:mb-10">
          <NoResult message="오늘 예정된 경기가 없습니다." />
        </div>
      )}
    </>
  );
};

export default TodayGameSlider;
