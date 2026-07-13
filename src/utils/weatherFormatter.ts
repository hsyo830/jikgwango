import { PTY_ICON, SKY_ICON } from "../constants/weatherIconList";

const SKY_LABEL: Record<string, string> = {
  "1": "맑음",
  "3": "구름많음",
  "4": "흐림",
};

const PTY_LABEL: Record<string, string> = {
  "0": "없음",
  "1": "비",
  "2": "비/눈",
  "3": "눈",
  "4": "소나기",
  "5": "빗방울",
  "6": "빗방울/눈날림",
  "7": "눈날림",
};

type WeatherItem = {
  fcstTime: string;
  category: string;
  fcstValue: string;
};

const calcFeelsLike = (temp: number, humidity: number) => {
  return Math.round(temp - (100 - humidity) / 5);
};

export const formatWeatherData = (items: WeatherItem[]) => {
  const groupedByTime = items.reduce(
    (acc, item) => {
      const time = item.fcstTime;

      if (!acc[time]) acc[time] = {};

      acc[time][item.category] = item.fcstValue;

      return acc;
    },
    {} as Record<string, Record<string, string>>,
  );

  const hourly = Object.entries(groupedByTime)
    .slice(0, 7)
    .map(([time, value]) => {
      const pty = value.PTY;
      const sky = value.SKY;

      return {
        time: `${Number(time.slice(0, 2))}시`,
        temperature: Number(value.T1H),
        weatherText: pty !== "0" ? PTY_LABEL[pty] : SKY_LABEL[sky],
        icon: pty !== "0" ? PTY_ICON[pty] : SKY_ICON[sky],
        sky,
        pty,
      };
    });

  const first = hourly[0];
  const currentData = Object.values(groupedByTime)[0];
  const humidity = Number(currentData?.REH);
  const temperature = first?.temperature;

  return {
    current: {
      temperature,
      weatherText: first?.weatherText,
      feelsLike: calcFeelsLike(temperature, humidity),
      humidity,
      windSpeed: Number(currentData?.WSD),
      rainAmount: currentData?.RN1 === "강수없음" ? 0 : parseFloat(currentData?.RN1),
      pty: currentData?.PTY ?? "0",
      icon: first.icon,
    },
    hourly,
  };
};
