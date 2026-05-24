"use client";

import "swiper/css";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperNavButton from "@/src/components/common/SwiperNavButton";
import { KBO_TEAMS } from "@/src/constants/kboTeams";

import StadiumFilterBadge from "./StadiumFilterBadge";

const StadiumFilterBadgeList = () => {
  return (
    <div className="w-full overflow-scroll md:overflow-hidden">
      <section className="hidden w-full md:block md:px-4.5">
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".stadium-swiper-prev",
              nextEl: ".stadium-swiper-next",
            }}
            spaceBetween={10}
            slidesPerView={8}
            breakpoints={{
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 7,
              },
            }}
            loop={Object.values(KBO_TEAMS).length > 4}
          >
            {Object.values(KBO_TEAMS).map((team) => (
              <SwiperSlide key={team.id}>
                <StadiumFilterBadge name={team.name} logo={team.logo} />
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
      </section>

      <section className="flex w-230 gap-1.5 md:hidden">
        {Object.values(KBO_TEAMS).map((team) => (
          <StadiumFilterBadge key={team.id} name={team.name} logo={team.logo} />
        ))}
      </section>
    </div>
  );
};

export default StadiumFilterBadgeList;
