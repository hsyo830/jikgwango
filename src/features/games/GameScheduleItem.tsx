import Image from "next/image";

import GameStatusBadge from "@/src/components/common/GameStatusBadge";
import { KBO_TEAMS } from "@/src/constants/kboTeams";
import { KBO_WEATHER } from "@/src/constants/kboWeather";
import { KboGame } from "@/src/types/todayGames";

type GameScheduleItemProps = {
  gameData: KboGame;
};

const GameScheduleItem = ({ gameData: todayGame }: GameScheduleItemProps) => {
  return (
    <div className="flex items-center justify-between py-5">
      <div className="flex flex-col">
        <div className="font-bold">{todayGame.gameTime.slice(0, 5)}</div>
        <div className="text-muted font-semibold">{todayGame.stadiumFullName}</div>
      </div>
      <div className="flex min-w-150 items-center justify-center gap-10">
        <div className="flex items-center gap-2">
          <div className="relative h-9 w-9 md:h-13 md:w-13">
            <Image
              src={KBO_TEAMS[todayGame.awayCode].logo}
              alt={todayGame.awayName}
              fill
              sizes="(min-width: 768px) 44px, 36px"
              className="object-contain"
            />
          </div>
          <div className="font-bold">{todayGame.awayName}</div>
        </div>
        <div className="text-muted font-bold">VS</div>
        <div className="flex items-center gap-2">
          <div className="relative h-9 w-9 md:h-13 md:w-13">
            <Image
              src={KBO_TEAMS[todayGame.homeCode].logo}
              alt={todayGame.homeName}
              fill
              sizes="(min-width: 768px) 44px, 36px"
              className="object-contain"
            />
          </div>
          <div className="font-bold">{todayGame.homeName}</div>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="relative h-6.5 w-6.5 md:h-8.5 md:w-8.5">
            <Image
              src={KBO_WEATHER[todayGame.gameIcon].icon}
              alt={todayGame.gameIconName}
              fill
              sizes="(max-width: 768px) 40px, 84px"
              className="object-contain"
            />
          </div>
          <div className="font-semibold">24°C</div>
        </div>
        <div>
          {todayGame.cancelSc === 0 ? (
            <GameStatusBadge status="NORMAL" variant="inline" />
          ) : (
            <GameStatusBadge status="RAIN_CANCEL" variant="inline" />
          )}
        </div>
      </div>
    </div>
  );
};

export default GameScheduleItem;
