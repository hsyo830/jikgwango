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
    <article className="flex flex-col gap-2 px-2 py-4 md:grid md:grid-cols-[140px_minmax(0,1fr)_135px] md:items-center md:py-5 lg:grid-cols-[170px_minmax(0,1fr)_190px] xl:grid-cols-[220px_minmax(0,1fr)_240px]">
      <div className="border-border flex min-w-0 flex-row items-center gap-2 text-sm md:flex-col md:items-start md:gap-1.5 md:border-r md:pr-4 lg:text-base">
        <div className="bg-primary-soft w-11 rounded-md text-center font-bold md:w-13 lg:w-15">
          {todayGame.gameTime.slice(0, 5)}
        </div>
        <div className="text-muted truncate font-semibold">{todayGame.stadiumFullName}</div>
      </div>

      <div className="flex items-center md:contents">
        <div className="border-border flex min-w-0 flex-1 justify-center border-r md:px-4 lg:px-6">
          <div className="grid w-full max-w-md grid-cols-[1fr_auto_1fr] items-center gap-x-2 md:gap-x-5 xl:gap-x-10">
            <div className="flex min-w-0 flex-col items-center gap-1 md:flex-row md:justify-end md:gap-2">
              <div className="relative h-10 w-10 shrink-0 md:order-2 md:h-13 md:w-13">
                <Image
                  src={KBO_TEAMS[todayGame.awayCode].logo}
                  alt={todayGame.awayName}
                  fill
                  sizes="(min-width: 768px) 52px, 40px"
                  className="object-contain"
                />
              </div>
              <div className="min-w-0 md:order-1">
                <div className="truncate text-center text-xs font-bold md:text-right md:text-base">
                  {todayGame.awayName}
                </div>
              </div>
            </div>

            <div className="text-muted bg-surface-2 shrink-0 rounded-lg px-1.5 py-0.5 text-sm font-bold">
              VS
            </div>

            <div className="flex min-w-0 flex-col items-center gap-1 md:flex-row md:justify-start md:gap-2">
              <div className="relative h-10 w-10 shrink-0 md:h-13 md:w-13">
                <Image
                  src={KBO_TEAMS[todayGame.homeCode].logo}
                  alt={todayGame.homeName}
                  fill
                  sizes="(min-width: 768px) 52px, 40px"
                  className="object-contain"
                />
              </div>
              <div className="min-w-0">
                <div className="truncate text-center text-xs font-bold md:text-left md:text-base">
                  {todayGame.homeName}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-20 min-w-0 flex-col items-center justify-center gap-1.5 pl-3 md:w-auto md:flex-row md:gap-3 md:pr-4 md:pl-8 lg:gap-5">
          <div className="flex shrink-0 items-center gap-1.5">
            <div className="relative h-5 w-5 shrink-0 md:h-7 md:w-7 lg:h-8.5 lg:w-8.5">
              <Image
                src={KBO_WEATHER[todayGame.gameIcon].icon}
                alt={todayGame.gameIconName}
                fill
                sizes="(max-width: 768px) 20px, 34px"
                className="object-contain"
              />
            </div>
            <span className="text-xs font-semibold md:text-sm lg:text-base">24°C</span>
          </div>
          <div className="shrink-0">
            {todayGame.cancelSc === 0 ? (
              <GameStatusBadge status="NORMAL" variant="inline" />
            ) : (
              <GameStatusBadge status="RAIN_CANCEL" variant="inline" />
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default GameScheduleItem;
