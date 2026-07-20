import { StadiumWeatherResponse } from "@/src/types/weather";

export interface RecommendItem {
  name: string;
  itemImage: string;
  score: (data: StadiumWeatherResponse) => number;
}
