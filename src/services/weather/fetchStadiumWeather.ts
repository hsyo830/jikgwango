import axios from "axios";
import { unstable_cache } from "next/cache";

import { WEATHER_API_ENDPOINTS } from "@/src/constants/apiEndPoint";
import { StadiumWeatherParams } from "@/src/types/weather";
import { formatWeatherData } from "@/src/utils/weatherFormatter";

const fetchStadiumWeatherFromKMA = async (params: StadiumWeatherParams) => {
  const { base_date, base_time, nx, ny } = params;

  const response = await axios.get(WEATHER_API_ENDPOINTS.ultraShortForecast, {
    params: {
      serviceKey: process.env.WEATHER_API_KEY,
      pageNo: 1,
      numOfRows: 1000,
      dataType: "JSON",
      base_date,
      base_time,
      nx,
      ny,
    },
  });

  const items = response.data.response.body.items.item;

  return formatWeatherData(items);
};

export const getCachedStadiumWeather = async (params: StadiumWeatherParams) => {
  const { stadiumId, base_date, base_time, nx, ny } = params;

  const cached = unstable_cache(
    fetchStadiumWeatherFromKMA,
    ["stadium-weather", stadiumId, base_date, base_time, String(nx), String(ny)],
    { revalidate: 1800 },
  );

  return cached(params);
};
