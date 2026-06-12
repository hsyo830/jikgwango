import PageHero from "@/src/components/common/PageHero";
import { getFoodBooth } from "@/src/services/stadium/getFoodBooth";

import FoodBoothClient from "./FoodBoothClient";

const FoodPage = () => {
  const foodBoothData = getFoodBooth();

  return (
    <div>
      <PageHero
        title="구장 내 음식 부스"
        intro="구장 안에서 즐길 수 있는 다양한 음식 부스를 찾아보세요!"
      />
      <FoodBoothClient foodBoothData={foodBoothData} />
    </div>
  );
};

export default FoodPage;
