import { Suspense } from "react";

import LoadingFoodBooth from "@/src/components/common/loading/LoadingFoodBooth";
import PageHero from "@/src/components/common/PageHero";
import { getFoodBooth } from "@/src/services/stadium/getFoodBooth";

import FoodBoothClient from "./FoodBoothClient";

const FoodPage = async () => {
  const foodBoothData = await getFoodBooth();

  return (
    <main>
      <PageHero
        title="구장 내 음식 부스"
        intro="구장 안에서 즐길 수 있는 다양한 음식 부스를 찾아보세요!"
      />
      <Suspense fallback={<LoadingFoodBooth />}>
        <FoodBoothClient foodBoothData={foodBoothData} />
      </Suspense>
    </main>
  );
};

export default FoodPage;
