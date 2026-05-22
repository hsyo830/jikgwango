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
  "5": "빗방울",
  "6": "빗방울/눈날림",
  "7": "눈날림",
};

type WeatherItem = {
  fcstTime: string;
  category: string;
  fcstValue: string;
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
        sky,
        pty,
      };
    });

  const first = hourly[0];

  return {
    current: {
      temperature: first?.temperature,
      weatherText: first?.weatherText,
      feelsLike: first?.temperature + 1,
      humidity: Number(Object.values(groupedByTime)[0]?.REH),
      windSpeed: Number(Object.values(groupedByTime)[0]?.WSD),
      rainProbability: 20,
    },
    hourly,
    message: "우산을 챙기면 좋아요! 가벼운 바람이 불어요.",
  };
};
