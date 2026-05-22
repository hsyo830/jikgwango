"use client";

import { useStadiumWeather } from "@/src/hooks/queries/useStadiumWeatherQuery";
import { Stadium } from "@/src/types/stadium";
import { getWeatherBaseDateTime } from "@/src/utils/weatherTime";

type StadiumWeatherProps = {
  stadiumData: Stadium;
};

const StadiumWeather = ({ stadiumData }: StadiumWeatherProps) => {
  const { base_date, base_time } = getWeatherBaseDateTime();

  const { data, isLoading, isError } = useStadiumWeather({
    stadiumId: stadiumData.id,
    base_date,
    base_time,
    nx: stadiumData.weatherGrid!.nx,
    ny: stadiumData.weatherGrid!.ny,
  });

  if (isLoading) return <div>날씨 불러오는 중...</div>;
  if (isError || !data) return <div>날씨 정보를 불러오지 못했어요.</div>;

  return (
    <section>
      <div>{data.current.temperature}°C</div>
      <div>{data.current.weatherText}</div>

      <div>체감 {data.current.feelsLike}°C</div>
      <div>습도 {data.current.humidity}%</div>
      <div>바람 {data.current.windSpeed}m/s</div>
      <div>강수확률 {data.current.rainProbability}%</div>

      {data.hourly.map((item) => (
        <div key={item.time}>
          {item.time} {item.temperature}° {item.weatherText}
        </div>
      ))}

      <p>{data.message}</p>
    </section>
  );
};

export default StadiumWeather;
