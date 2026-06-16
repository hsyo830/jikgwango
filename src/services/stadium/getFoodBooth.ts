import { foodBooths } from "@/src/data/foodBooths";
import { FoodBooth } from "@/src/types/foodBooth";

export const getFoodBooth = async (): Promise<FoodBooth[]> => {
  return foodBooths;
};
