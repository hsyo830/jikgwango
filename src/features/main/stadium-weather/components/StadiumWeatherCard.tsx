import Image from "next/image";

import LotteLogo from "@/public/image/team-logo/lotte-logo.svg";
import SectionCard from "@/src/components/common/SectionCard";
import SunnyIcon from "@/src/components/icons/weather/sunny.png";
import TemperatureIcon from "@/src/components/icons/weather/weather-info/TemperatureIcon";
import UmbrellaIcon from "@/src/components/icons/weather/weather-info/UmbrellaIcon";
import WindIcon from "@/src/components/icons/weather/weather-info/WindIcon";

const StadiumWeatherCard = () => {
  return (
    <SectionCard>
      <li className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h3 className="font-bold md:text-lg">사직야구장</h3>
            <p className="text-primary text-sm font-semibold md:text-base">오늘 18:30 경기</p>
          </div>
          <div className="relative h-9 w-9 md:h-11 md:w-11">
            <Image src={LotteLogo} alt="롯데 로고" fill />
          </div>
        </div>
        <div className="flex md:flex-col md:gap-4">
          <div className="border-border flex justify-center gap-2 border-r pr-2 md:gap-10 md:border-r-0 md:border-b md:pr-0 md:pb-4">
            <div className="relative h-10 w-10 md:h-15 md:w-15">
              <Image src={SunnyIcon} alt="햇빛" fill />
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold md:text-4xl">21℃</p>
              <p className="text-muted pl-0.5 text-xs font-bold md:text-sm">맑음</p>
            </div>
          </div>
          <div className="w-full">
            <div className="divide-border flex w-full divide-x">
              <div className="flex flex-1 items-center justify-center text-xs md:gap-1 md:text-sm">
                <TemperatureIcon className="size-5 md:size-7" />
                <div>
                  <p className="font-semibold">체감</p>
                  <p className="text-muted font-semibold">22℃</p>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center text-xs md:gap-1 md:text-sm">
                <UmbrellaIcon className="size-5 md:size-7" />
                <div>
                  <p className="font-semibold whitespace-nowrap">강수확률</p>
                  <p className="text-muted font-semibold">20%</p>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center gap-0.5 text-xs md:gap-1 md:text-sm">
                <WindIcon className="size-4 md:size-6" />
                <div>
                  <p className="font-semibold">바람</p>
                  <p className="text-muted font-semibold">1m/s</p>
                </div>
              </div>
            </div>
            <div className="bg-primary-soft mx-2 mt-1 h-10 w-full rounded-md md:mx-0 md:mt-3" />
          </div>
        </div>
      </li>
    </SectionCard>
  );
};

export default StadiumWeatherCard;
