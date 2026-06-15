import axios from "axios";

import { INTERNAL_API_ENDPOINTS } from "@/src/constants/apiEndPoint";
import { StadiumWeatherParams, StadiumWeatherResponse } from "@/src/types/weather";

const getStadiumWeather = async (params: StadiumWeatherParams): Promise<StadiumWeatherResponse> => {
  const response = await axios.get(INTERNAL_API_ENDPOINTS.stadiumWeather, { params });

  return response.data;
};

export default getStadiumWeather;
