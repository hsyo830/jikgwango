"use client";

import { stadiums } from "@/src/data/stadiums";
import { useTodayGame } from "@/src/hooks/queries/useTodayGameQuery";
import { getTodayGameDate } from "@/src/utils/getTodayGameDate";

import StadiumTodayWeatherSlider from "./StadiumTodayWeatherSlider";

const StadiumWeatherSlider = () => {
  const { data, isLoading, isError } = useTodayGame({
    gameDate: getTodayGameDate(),
    leId: "1",
    srId: "0,1,3,4,5,7",
    headerCk: "0",
  });

  const games = data?.gameList ?? [];

  const todayStadium = games.map((game) => game.stadiumFullName);

  const todayStadiumWeather = stadiums.filter((stadium) => todayStadium.includes(stadium.name));

  return (
    <section className="w-full">
      {<StadiumTodayWeatherSlider todayStadiumWeather={todayStadiumWeather} gamesData={games} />}
    </section>
  );
};

export default StadiumWeatherSlider;
