"use client";

import LoadingGameScheduleList from "@/src/components/common/loading/LoadingGameScheduleList";
import NoResult from "@/src/components/common/NoResult";
import SectionCard from "@/src/components/common/SectionCard";
import { useTodayGame } from "@/src/hooks/queries/useTodayGameQuery";

import GameScheduleItem from "./GameScheduleItem";

type GameScheduleListProps = {
  gameDate: string;
};

const GameScheduleList = ({ gameDate }: GameScheduleListProps) => {
  const { data, isLoading, isError } = useTodayGame({
    gameDate,
    leId: "1",
    srId: "0,1,3,4,5,7",
    headerCk: "0",
  });

  const games = data?.gameList ?? [];

  if (isLoading) return <LoadingGameScheduleList />;
  if (isError) return <NoResult message="경기 정보를 불러오지 못했습니다." />;

  const NoGameToday = games.length === 0;

  if (NoGameToday) {
    return (
      <SectionCard className="pt-20 pb-25 md:pt-25 md:pb-30">
        <NoResult message="오늘 예정된 경기가 없습니다." />
      </SectionCard>
    );
  }

  return (
    <SectionCard>
      <ul className="divide-border divide-y">
        {games.map((game) => (
          <GameScheduleItem key={game.gameId} gameData={game} />
        ))}
      </ul>
    </SectionCard>
  );
};

export default GameScheduleList;
