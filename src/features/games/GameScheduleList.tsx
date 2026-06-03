import SectionCard from "@/src/components/common/SectionCard";
import { todayGames } from "@/src/mocks/kbo/todayGames";

import GameScheduleItem from "./GameScheduleItem";

const GameScheduleList = () => {
  return (
    <SectionCard>
      <div className="divide-border divide-y">
        {todayGames.gameList.map((game) => (
          <GameScheduleItem key={game.gameId} gameData={game} />
        ))}
      </div>
    </SectionCard>
  );
};

export default GameScheduleList;
