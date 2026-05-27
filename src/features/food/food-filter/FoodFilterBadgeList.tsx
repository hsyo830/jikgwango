"use client";

import { FOOD_CATEGORIES, FoodCategoryValue } from "@/src/constants/foodCategories";

import FoodFilterBadge from "./FoodFilterBadge";

type FoodFilterBadgeListProps = {
  selectedFoodCategoryId: FoodCategoryValue;
  onSelectedFoodBoothId: (foodBoothId: FoodCategoryValue) => void;
};

const FoodFilterBadgeList = ({
  selectedFoodCategoryId,
  onSelectedFoodBoothId,
}: FoodFilterBadgeListProps) => {
  return (
    <section>
      <ul className="flex w-full gap-2 overflow-scroll px-1 md:overflow-visible md:px-0">
        {Object.values(FOOD_CATEGORIES).map((category) => (
          <FoodFilterBadge
            key={category.value}
            label={category.label}
            value={category.value}
            selectedFoodCategoryId={selectedFoodCategoryId}
            onSelectedFoodBoothId={onSelectedFoodBoothId}
          />
        ))}
      </ul>
    </section>
  );
};

export default FoodFilterBadgeList;
