import { useQuery } from "@tanstack/react-query";

import getStadiumWeather from "@/src/services/weather/weather";
import { StadiumWeatherParams } from "@/src/types/weather";

export const useStadiumWeather = (params: StadiumWeatherParams) => {
  const { stadiumId, base_date, base_time, nx, ny } = params;
  return useQuery({
    queryKey: ["stadiumWeather", stadiumId, base_date, base_time, nx, ny],
    queryFn: () => {
      return getStadiumWeather(params);
    },
  });
};
