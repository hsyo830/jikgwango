export const WEATHER_API_BASE_URL = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0";

export const WEATHER_API_ENDPOINTS = {
  ultraShortForecast: `${WEATHER_API_BASE_URL}/getUltraSrtFcst`,
  ultraShortNowcast: `${WEATHER_API_BASE_URL}/getUltraSrtNcst`,
} as const;

export const KBO_API_BASE_URL = "https://www.koreabaseball.com";

export const KBO_API_ENDPOINTS = {
  todayGames: `${KBO_API_BASE_URL}/ws/Schedule.asmx/GetTodayGames`,
  schedulePage: `${KBO_API_BASE_URL}/Schedule/Schedule.aspx`,
} as const;

export const INTERNAL_API_ENDPOINTS = {
  todayGames: "/api/today-games",
} as const;
