"use client";

import { LoadingDots } from "@/src/components/common/loading/LoadingDots";
import NoResult from "@/src/components/common/NoResult";
import SectionCard from "@/src/components/common/SectionCard";
import { useTodayGame } from "@/src/hooks/queries/useTodayGameQuery";
import { getTodayGameDate } from "@/src/utils/getTodayGameDate";

import GameScheduleItem from "./GameScheduleItem";

const GameScheduleList = () => {
  const { data, isLoading, isError } = useTodayGame({
    gameDate: getTodayGameDate(),
    leId: "1",
    srId: "0,1,3,4,5,7",
    headerCk: "0",
  });

  const games = data?.gameList ?? [];

  if (isLoading) return <LoadingDots message="경기 정보를 불러오고 있어요" />;
  if (isError) return <NoResult message="경기 정보를 불러오지 못했습니다." />;

  return (
    <SectionCard>
      <div className="divide-border divide-y">
        {games.map((game) => (
          <GameScheduleItem key={game.gameId} gameData={game} />
        ))}
      </div>
    </SectionCard>
  );
};

export default GameScheduleList;
