export type FoodMenuCategory =
  | "치킨"
  | "버거"
  | "피자"
  | "한식"
  | "분식"
  | "간식"
  | "카페"
  | "주류"
  | "편의점"
  | "식당";

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
