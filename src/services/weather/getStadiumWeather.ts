import axios from "axios";

import { INTERNAL_API_ENDPOINTS } from "@/src/constants/apiEndPoint";
import { StadiumWeatherParams } from "@/src/types/weather";

const getStadiumWeather = async (params: StadiumWeatherParams) => {
  const response = await axios.get(INTERNAL_API_ENDPOINTS.stadiumWeather, { params });

  return response.data;
};

export default getStadiumWeather;
