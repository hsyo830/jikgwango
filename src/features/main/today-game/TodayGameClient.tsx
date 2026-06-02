"use client";

import { useTodayGame } from "@/src/hooks/queries/useTodayGameQuery";

import TodayGameSlider from "./components/TodayGameSlider";
import SectionHeader from "./SectionHeader";

const TodayGameClient = () => {
  const { data, isLoading, isError } = useTodayGame({
    gameDate: "20260603",
    leId: "1",
    srId: "0,1,3,4,5,7",
    headerCk: "0",
  });

  const games = data?.gameList ?? [];

  if (isLoading) return <div>경기 정보를 불러오는 중...</div>;
  if (isError) return <div>경기 정보를 불러오지 못했어요.</div>;

  return (
    <>
      <SectionHeader games={games} />
      <TodayGameSlider games={games} />
    </>
  );
};

export default TodayGameClient;
