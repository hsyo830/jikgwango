import { FoodCategoryValue } from "../constants/foodCategories";

export type FoodMenuCategory = Exclude<FoodCategoryValue, "all">;

export type FoodBooth = {
  id: string;
  stadiumId: string;
  stadiumName: string;
  locationCategory: string;
  location: string;
  name: string;
  menuCategory: FoodMenuCategory;
  imageUrl?: string;
};
