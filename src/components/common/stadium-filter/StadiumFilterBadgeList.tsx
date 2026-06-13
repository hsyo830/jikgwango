"use client";

import "swiper/css";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperNavButton from "@/src/components/common/SwiperNavButton";
import { KBO_TEAMS } from "@/src/constants/kboTeams";

import StadiumFilterBadge from "./StadiumFilterBadge";

type StadiumFilterBadgeListProps = {
  selectedStadiumId: string;
  onSelectedStadiumId: (stadiumId: string) => void;
};

const StadiumFilterBadgeList = ({
  selectedStadiumId,
  onSelectedStadiumId,
}: StadiumFilterBadgeListProps) => {
  return (
    <div className="w-full overflow-scroll md:overflow-hidden">
      <nav className="hidden w-full md:block md:px-4.5" aria-label="구장 필터">
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
                <StadiumFilterBadge
                  name={team.name}
                  logo={team.logo}
                  stadiumId={team.stadiumId}
                  selectedStadiumId={selectedStadiumId}
                  onSelectedStadiumId={onSelectedStadiumId}
                />
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
      </nav>

      <ul className="flex w-230 gap-1.5 md:hidden" aria-label="구장 필터">
        {Object.values(KBO_TEAMS).map((team) => (
          <li key={team.id}>
            <StadiumFilterBadge
              name={team.name}
              logo={team.logo}
              stadiumId={team.stadiumId}
              selectedStadiumId={selectedStadiumId}
              onSelectedStadiumId={onSelectedStadiumId}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StadiumFilterBadgeList;
