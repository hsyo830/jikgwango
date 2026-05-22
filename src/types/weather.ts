export type StadiumWeatherParams = {
  stadiumId: string;
  base_date: string;
  base_time: string;
  nx?: number;
  ny?: number;
};

export type WeatherApiParams = {
  serviceKey: string;
  pageNo: number;
  numOfRows: number;
  dataType: "JSON";
  base_date: string;
  base_time: string;
  nx: number;
  ny: number;
};

export type StadiumWeatherViewData = {
  current: {
    temperature: number;
    weatherText: string;
    feelsLike: number;
    humidity: number;
    windSpeed: number;
    rainProbability: number;
  };
  hourly: {
    time: string;
    temperature: number;
    weatherText: string;
    sky: string;
    pty: string;
  }[];
  message: string;
};
