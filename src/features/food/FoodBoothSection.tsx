import { useMemo } from "react";

import NoResult from "@/src/components/common/NoResult";
import SectionCard from "@/src/components/common/SectionCard";
import { FoodCategoryValue } from "@/src/constants/foodCategories";
import { FoodBooth } from "@/src/types/foodBooth";

import FoodBoothGrid from "./booth-list/FoodBoothGrid";
import { getFoodBoothStadiumId } from "./utils/getFoodBoothStadiumId";

type FoodBoothSectionProps = {
  selectedStadiumId: string;
  selectedFoodCategoryId: FoodCategoryValue;
  foodBoothData: FoodBooth[];
};

const FoodBoothSection = ({
  selectedStadiumId,
  selectedFoodCategoryId,
  foodBoothData,
}: FoodBoothSectionProps) => {
  const foodBoothStadiumId = getFoodBoothStadiumId(selectedStadiumId);

  const filteredFoodBoothData = useMemo(() => {
    return foodBoothData.filter((booth) => {
      const isSameStadium = booth.stadiumId === foodBoothStadiumId;
      const isSameCategory =
        selectedFoodCategoryId === "all" || booth.menuCategory === selectedFoodCategoryId;
      return isSameStadium && isSameCategory;
    });
  }, [foodBoothData, foodBoothStadiumId, selectedFoodCategoryId]);

  const hasFoodBooth = filteredFoodBoothData.length > 0;

  return (
    <SectionCard className="flex flex-col gap-5" id="food-booth-section">
      <div className="flex items-end gap-5">
        <h2 className="text-xl font-bold">전체 부스</h2>
        <p className="text-muted text-base font-semibold">
          총 <data value={filteredFoodBoothData.length}>{filteredFoodBoothData.length}</data>개의
          부스
        </p>
      </div>
      {hasFoodBooth ? (
        <FoodBoothGrid
          key={`${selectedStadiumId}-${selectedFoodCategoryId}`}
          filteredFoodBoothData={filteredFoodBoothData}
        />
      ) : (
        <div className="pt-15 pb-35">
          <NoResult message="선택한 조건에 맞는 음식 부스가 없어요." />
        </div>
      )}
    </SectionCard>
  );
};

export default FoodBoothSection;
