import SectionCard from "@/src/components/common/SectionCard";
import { FoodCategoryValue } from "@/src/constants/foodCategories";
import { FoodBooth } from "@/src/types/foodBooth";

import FoodBoothGrid from "./booth-list/FoodBoothGrid";

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
  const filteredFoodBoothData = foodBoothData.filter((booth) => {
    const isSameStadium = booth.stadiumId === selectedStadiumId;
    const isSameCategory =
      selectedFoodCategoryId === "all" || booth.menuCategory === selectedFoodCategoryId;

    return isSameStadium && isSameCategory;
  });

  return (
    <SectionCard className="flex flex-col gap-5">
      <div className="flex items-end gap-5">
        <h2 className="text-xl font-bold">전체 부스</h2>
        <p className="text-muted text-base font-semibold">
          총 <span>{filteredFoodBoothData.length}</span>개의 부스
        </p>
      </div>
      <FoodBoothGrid filteredFoodBoothData={filteredFoodBoothData} />
    </SectionCard>
  );
};

export default FoodBoothSection;
