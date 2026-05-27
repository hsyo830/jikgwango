"use client";

import StadiumFilterBadgeList from "@/src/components/common/stadium-filter/StadiumFilterBadgeList";
import FoodFilterBadgeList from "@/src/features/food/food-filter/FoodFilterBadgeList";
import FoodBoothSection from "@/src/features/food/FoodBoothSection";
import { useFoodBoothFilter } from "@/src/features/food/hooks/useFoodBoothFilter";
import { FoodBooth } from "@/src/types/foodBooth";

type FoodBoothClientProps = {
  foodBoothData: FoodBooth[];
};

const FoodBoothClient = ({ foodBoothData }: FoodBoothClientProps) => {
  const { selectedStadiumId, selectedFoodCategoryId, handleSelectStadium, handleSelectFoodBooth } =
    useFoodBoothFilter({ foodBoothData });

  return (
    <div className="mx-2.5 -mt-6 flex flex-col gap-5 md:mx-0 md:-mt-3 md:px-8.25 lg:-mt-10 xl:-mt-15">
      <StadiumFilterBadgeList
        selectedStadiumId={selectedStadiumId}
        onSelectedStadiumId={handleSelectStadium}
      />
      <FoodFilterBadgeList
        selectedFoodCategoryId={selectedFoodCategoryId}
        onSelectedFoodBoothId={handleSelectFoodBooth}
      />
      <FoodBoothSection
        selectedStadiumId={selectedStadiumId}
        selectedFoodCategoryId={selectedFoodCategoryId}
        foodBoothData={foodBoothData}
      />
    </div>
  );
};

export default FoodBoothClient;
