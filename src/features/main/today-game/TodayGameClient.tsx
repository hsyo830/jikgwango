"use client";

import { LoadingDots } from "@/src/components/common/loading/LoadingDots";
import LoadingMainTodayGame from "@/src/components/common/loading/LoadingMainTodayGame";
import NoResult from "@/src/components/common/NoResult";
import { useTodayGame } from "@/src/hooks/queries/useTodayGameQuery";
import { getTodayGameDate } from "@/src/utils/getTodayGameDate";

import TodayGameSlider from "./components/TodayGameSlider";
import SectionHeader from "./SectionHeader";

const TodayGameClient = () => {
  const { data, isLoading, isError } = useTodayGame({
    gameDate: getTodayGameDate(),
    leId: "1",
    srId: "0,1,3,4,5,7",
    headerCk: "0",
  });

  const games = data?.gameList ?? [];

  if (isLoading) return <LoadingMainTodayGame />;
  if (isError) return <NoResult message="경기 정보를 불러오지 못했습니다." />;

  return (
    <>
      <SectionHeader games={games} />
      <TodayGameSlider games={games} />
    </>
  );
};

export default TodayGameClient;
