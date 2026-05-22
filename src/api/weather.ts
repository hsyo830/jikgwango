import axios from "axios";

import { WEATHER_API_ENDPOINTS } from "../constants/apiEndPoint";
import { StadiumWeatherParams } from "../types/weather";
import { formatWeatherData } from "../utils/weatherFormatter";

const getStadiumWeather = async (params: StadiumWeatherParams) => {
  const { base_date, base_time, nx, ny } = params;

  const response = await axios.get(WEATHER_API_ENDPOINTS.ultraShortForecast, {
    params: {
      serviceKey: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
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

export default getStadiumWeather;
