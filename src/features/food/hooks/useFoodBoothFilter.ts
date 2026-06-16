import { useRouter, useSearchParams } from "next/navigation";

import { FOOD_CATEGORIES, FoodCategoryValue } from "@/src/constants/foodCategories";
import { FoodBooth } from "@/src/types/foodBooth";

type useFoodBoothFilterProps = {
  foodBoothData: FoodBooth[];
};

type updateFoodUrlProps = {
  stadiumId?: string;
  foodBoothId?: FoodCategoryValue;
};

export const useFoodBoothFilter = ({ foodBoothData }: useFoodBoothFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const stadiumIdFromUrl = searchParams.get("stadium");
  const foodBoothIdFromUrl = searchParams.get("foodbooth") as FoodCategoryValue | null;

  const defaultStadiumId = foodBoothData[0].stadiumId;
  const defaultFoodBoothId = FOOD_CATEGORIES[0].value;

  const selectedStadiumId = stadiumIdFromUrl ?? defaultStadiumId;
  const selectedFoodCategoryId = foodBoothIdFromUrl ?? defaultFoodBoothId;

  const updateFoodUrl = ({
    stadiumId = selectedStadiumId,
    foodBoothId = selectedFoodCategoryId,
  }: updateFoodUrlProps) => {
    const params = new URLSearchParams();

    params.set("stadium", stadiumId);
    params.set("foodbooth", foodBoothId);

    router.replace(`/food?${params.toString()}`);
  };

  const handleSelectStadium = (stadiumId: string) => {
    updateFoodUrl({ stadiumId, foodBoothId: "all" });
  };

  const handleSelectFoodBooth = (foodBoothId: FoodCategoryValue) => {
    updateFoodUrl({ foodBoothId });
  };

  return { selectedStadiumId, selectedFoodCategoryId, handleSelectStadium, handleSelectFoodBooth };
};
