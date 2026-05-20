// 구장 날씨와 관련된 모든 키를 여기서 관리합니다.
export const stadiumWeatherKeys = {
  all: ["stadiumWeather"] as const,

  current: (stadiumId: string) => {
    return [...stadiumWeatherKeys.all, "current", stadiumId] as const;
  },

  hourly: (stadiumId: string) => {
    return [...stadiumWeatherKeys.all, "hourly", stadiumId] as const;
  },

  detail: (stadiumId: string) => {
    return [...stadiumWeatherKeys.all, "detail", stadiumId] as const;
  },
};
