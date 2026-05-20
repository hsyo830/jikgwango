"use client";

import "swiper/css";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperNavButton from "@/src/components/common/SwiperNavButton";
import { foodBooths } from "@/src/data/foodBooths";
import { Stadium } from "@/src/types/stadium";

import FoodCard from "../../main/stadium-food/components/FoodCard";

type StadiumFoodListProps = {
  data: Stadium;
};

const StadiumFoodList = ({ data }: StadiumFoodListProps) => {
  const foodBoothList = foodBooths.filter((booth) => booth.stadiumId === data.id);

  return (
    <div className="w-full overflow-scroll md:overflow-hidden">
      <section className="hidden w-full md:block md:px-4.5">
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: ".food-swiper-prev",
              nextEl: ".food-swiper-next",
            }}
            spaceBetween={15}
            slidesPerView={4}
            breakpoints={{
              768: {
                slidesPerView: 2.2,
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
            loop
          >
            {foodBoothList.slice(0, 10).map((food) => (
              <SwiperSlide key={food.id}>
                <FoodCard food={food} />
              </SwiperSlide>
            ))}
          </Swiper>

          <SwiperNavButton direction="prev" className="food-swiper-prev left-0 -translate-x-1/2" />
          <SwiperNavButton direction="next" className="food-swiper-next right-0 translate-x-1/2" />
        </div>
      </section>

      <section className="flex w-230 gap-3 md:hidden">
        {foodBoothList.slice(0, 7).map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </section>
    </div>
  );
};

export default StadiumFoodList;
