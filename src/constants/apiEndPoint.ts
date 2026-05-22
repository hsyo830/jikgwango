export const WEATHER_API_BASE_URL = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0";

export const WEATHER_API_ENDPOINTS = {
  ultraShortForecast: `${WEATHER_API_BASE_URL}/getUltraSrtFcst`,
  ultraShortNowcast: `${WEATHER_API_BASE_URL}/getUltraSrtNcst`,
} as const;
