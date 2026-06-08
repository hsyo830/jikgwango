"use client";

import Image from "next/image";

import { LoadingDots } from "@/src/components/common/loading/LoadingDots";
import NoResult from "@/src/components/common/NoResult";
import GameStatusCheckIcon from "@/src/components/icons/GameStatusCheckIcon";
import { useStadiumWeather } from "@/src/hooks/queries/useStadiumWeatherQuery";
import { Stadium } from "@/src/types/stadium";
import { getWeatherTipByRainProbability } from "@/src/utils/getWeatherTipByRainProbability";
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

  if (isLoading) return <LoadingDots message={"날씨 정보를 불러오고 있어요"} />;
  if (isError || !data) return <NoResult message="날씨 정보를 불러오지 못했습니다." />;

  return (
    <section className="flex flex-col gap-3">
      <div className="border-border flex items-start justify-between border-b pb-2 md:px-3 lg:px-5">
        <div className="flex items-center gap-2.5 lg:gap-4">
          <div className="relative h-19 w-19 md:h-17 md:w-17 lg:h-19 lg:w-19">
            <Image src={data.current.icon} alt={data.current.weatherText} fill sizes="40px" />
          </div>
          <div className="flex flex-col">
            <div className="text-3xl font-bold lg:text-4xl">{data.current.temperature}°C</div>
            <div className="text-muted text-base font-semibold">{data.current.weatherText}</div>
          </div>
        </div>
        <ul className="text-muted w-40 space-y-1 text-sm font-semibold md:w-30 lg:w-50">
          <li className="flex justify-between">
            <span>체감</span>
            <span className="font-medium">{data.current.feelsLike}°C</span>
          </li>
          <li className="flex justify-between">
            <span>습도</span>
            <span className="font-medium">{data.current.humidity}%</span>
          </li>
          <li className="flex justify-between">
            <span>바람</span>
            <span className="font-medium">{data.current.windSpeed}m/s</span>
          </li>
          <li className="flex justify-between">
            <span>강수확률</span>
            <span className="font-medium">{data.current.rainProbability}%</span>
          </li>
        </ul>
      </div>

      <div className="flex justify-around">
        {data.hourly.map((item) => (
          <div key={item.time} className="flex flex-col items-center">
            <time className="text-muted text-sm font-bold">{item.time}</time>
            <div className="relative h-5 w-5 md:h-8.5 md:w-8.5 lg:h-10 lg:w-10">
              <Image src={item.icon} alt={item.weatherText} fill sizes="40px" />
            </div>
            <span className="text-base font-bold">{item.temperature}°</span>
          </div>
        ))}
      </div>

      <p className="text-primary flex gap-1.5 font-semibold">
        <GameStatusCheckIcon filled />
        {getWeatherTipByRainProbability(data.current.rainProbability)}
      </p>
    </section>
  );
};

export default StadiumWeather;
