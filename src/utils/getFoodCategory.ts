import { FOOD_CATEGORIES } from "../constants/foodCategories";
import { FoodMenuCategory } from "../types/foodBooth";

export const getFoodCategory = (menuCategory: FoodMenuCategory) => {
  return FOOD_CATEGORIES.find((category) => menuCategory === category.value);
};
