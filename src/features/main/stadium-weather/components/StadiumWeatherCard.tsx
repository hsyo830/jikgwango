import Image from "next/image";

import { LoadingDots } from "@/src/components/common/loading/LoadingDots";
import NoResult from "@/src/components/common/NoResult";
import SectionCard from "@/src/components/common/SectionCard";
import TemperatureIcon from "@/src/components/icons/weather/weather-info/TemperatureIcon";
import UmbrellaIcon from "@/src/components/icons/weather/weather-info/UmbrellaIcon";
import WindIcon from "@/src/components/icons/weather/weather-info/WindIcon";
import { KBO_TEAMS } from "@/src/constants/kboTeams";
import { useStadiumWeather } from "@/src/hooks/queries/useStadiumWeatherQuery";
import { Stadium } from "@/src/types/stadium";
import { KboGame } from "@/src/types/todayGames";
import { getWeatherBaseDateTime } from "@/src/utils/weatherTime";

type StadiumWeatherCardProps = {
  stadiumData: Stadium;
  gamesData: KboGame[];
};
const StadiumWeatherCard = ({ stadiumData, gamesData }: StadiumWeatherCardProps) => {
  const gameData = gamesData.find((game) => game.stadiumFullName === stadiumData.name);

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

  const homeTeamLogo = gameData ? KBO_TEAMS[gameData.homeCode] : undefined;

  return (
    <SectionCard>
      <li className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h3 className="font-bold md:text-lg">{stadiumData.name}</h3>
            <p className="text-primary text-sm font-semibold md:text-base">
              오늘 {gameData?.gameTime.slice(0, 5)} 경기
            </p>
          </div>
          <div className="relative h-9 w-9 md:h-11 md:w-11">
            <Image
              src={homeTeamLogo?.logo}
              alt={stadiumData.name}
              fill
              sizes="(min-width: 768px) 44px, 36px"
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col md:gap-4">
          <div className="border-border flex justify-center gap-10 border-b pb-4">
            <div className="relative h-13 w-13 md:h-15 md:w-15">
              <Image src={data.current.icon} alt={data.current.weatherText} fill sizes="40px" />
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-bold md:text-4xl">{data.current.temperature}°C</p>
              <p className="text-muted pl-0.5 text-xs font-bold md:text-sm">
                {data.current.weatherText}
              </p>
            </div>
          </div>
          <div className="mt-3 w-full md:mt-0">
            <dl className="divide-border flex w-full divide-x">
              <div className="flex flex-1 items-center justify-center text-xs md:gap-1 md:text-sm">
                <TemperatureIcon className="size-5 md:size-7" />
                <div>
                  <dt className="font-semibold">체감</dt>
                  <dd className="text-muted font-semibold">{data.current.feelsLike}°C</dd>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center text-xs md:gap-1 md:text-sm">
                <UmbrellaIcon className="size-5 md:size-7" />
                <div>
                  <dt className="font-semibold whitespace-nowrap">강수확률</dt>
                  <dd className="text-muted font-semibold">{data.current.rainProbability}%</dd>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center gap-0.5 text-xs md:gap-1 md:text-sm">
                <WindIcon className="size-4 md:size-6" />
                <div>
                  <dt className="font-semibold">바람</dt>
                  <dd className="text-muted font-semibold">{data.current.windSpeed}m/s</dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </li>
    </SectionCard>
  );
};

export default StadiumWeatherCard;
