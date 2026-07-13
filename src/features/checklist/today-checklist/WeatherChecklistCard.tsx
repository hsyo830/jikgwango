import LoadingStadiumWeather from "@/src/components/common/loading/LoadingStadiumWeather";
import NoResult from "@/src/components/common/NoResult";
import { useStadiumWeather } from "@/src/hooks/queries/useStadiumWeatherQuery";
import { getWeatherBaseDateTime } from "@/src/utils/weatherTime";

import TodayWeatherCard from "./TodayWeatherCard";
import TodayWeatherChecklist from "./TodayWeatherChecklist";

type WeatherChecklistCardProps = {
  stadiumId: string;
  nx: number;
  ny: number;
};

const WeatherChecklistCard = ({ stadiumId, nx, ny }: WeatherChecklistCardProps) => {
  const { base_date, base_time } = getWeatherBaseDateTime();

  const { data, isLoading, isError } = useStadiumWeather({
    stadiumId,
    base_date,
    base_time,
    nx,
    ny,
  });

  if (isLoading) return <LoadingStadiumWeather />;
  if (isError || !data)
    return <NoResult message="날씨 정보와 준비물 정보를 불러오지 못했습니다." />;

  return (
    <div className="divide-border grid grid-cols-1 gap-5.5 divide-y md:grid-cols-[1fr_2fr] md:gap-0 md:divide-x md:divide-y-0">
      <div className="md:pr-6">
        <TodayWeatherCard data={data} />
      </div>
      <div className="md:pl-6">
        <TodayWeatherChecklist />
      </div>
    </div>
  );
};

export default WeatherChecklistCard;
