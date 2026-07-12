import Image from "next/image";

import { StadiumWeatherResponse } from "@/src/types/weather";

type TodayWeatherCardProps = {
  data: StadiumWeatherResponse;
};

const TodayWeatherCard = ({ data }: TodayWeatherCardProps) => {
  return (
    <div>
      <h3 className="text-foreground text-base font-bold md:text-lg">오늘 날씨</h3>
      <div className="mt-3 mb-5 flex items-center justify-between md:mt-9.5 md:mb-0 md:flex-col md:justify-center md:gap-3">
        <div className="flex items-center gap-2.5 lg:gap-3">
          <div className="relative h-19 w-19 md:h-15 md:w-15 lg:h-18 lg:w-18">
            <Image src={data.current.icon} alt={data.current.weatherText} fill sizes="76px" />
          </div>
          <div className="flex flex-col">
            <div className="text-3xl font-bold md:text-2xl lg:text-4xl">
              {data.current.temperature}°C
            </div>
            <div className="text-muted text-base font-semibold">{data.current.weatherText}</div>
          </div>
        </div>
        <ul className="flex w-29 flex-col gap-2 text-sm font-semibold md:w-30 md:flex-row lg:w-44">
          <li className="border-border bg-surface flex w-full justify-between rounded-lg border p-2 md:flex-col lg:flex-row">
            <span className="text-muted">체감</span>
            <span className="font-semibold">{data.current.feelsLike}°C</span>
          </li>
          <li className="border-border bg-surface flex w-full justify-between rounded-lg border p-2 md:flex-col lg:flex-row">
            <span className="text-muted">습도</span>
            <span className="font-semibold">{data.current.humidity}%</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TodayWeatherCard;
