"use client";

import LoadingMainWeather from "@/src/components/common/loading/LoadingMainWeather";
import { stadiums } from "@/src/data/stadiums";
import { useTodayGame } from "@/src/hooks/queries/useTodayGameQuery";
import { getTodayGameDate } from "@/src/utils/getTodayGameDate";

import StadiumTodayWeatherSlider from "./StadiumTodayWeatherSlider";

const StadiumWeatherClient = () => {
  const { data, isLoading, isError } = useTodayGame({
    gameDate: getTodayGameDate(),
    leId: "1",
    srId: "0,1,3,4,5,7",
    headerCk: "0",
  });

  const games = data?.gameList ?? [];

  const todayStadium = games.map((game) => game.stadiumFullName);

  const todayStadiumWeather = stadiums.filter((stadium) => todayStadium.includes(stadium.name));

  const uniqueTodayStadiumWeather = todayStadiumWeather.filter(
    (stadium, index, array) =>
      index === array.findIndex((item) => item.stadiumId === stadium.stadiumId),
  );

  if (isLoading) return <LoadingMainWeather />;
  if (isError) return null;

  return (
    <section className="w-full">
      {
        <StadiumTodayWeatherSlider
          todayStadiumWeather={uniqueTodayStadiumWeather}
          gamesData={games}
        />
      }
    </section>
  );
};

export default StadiumWeatherClient;
