import Link from "next/link";

import { KboGame } from "@/src/types/todayGames";

type SectionHeaderProps = {
  games: KboGame[];
};

const SectionHeader = ({ games }: SectionHeaderProps) => {
  const gameListCount = games.length;

  return (
    <div className="mb-3 flex items-center justify-between">
      <div className="flex items-center gap-2 md:gap-3">
        <h2 className="text-foreground text-lg font-bold md:text-xl">오늘 경기</h2>
        <div className="bg-primary-soft text-primary rounded-md px-2 py-1 text-xs font-bold md:text-sm">
          LIVE
        </div>
        <div className="text-muted text-sm font-medium md:text-base">{gameListCount}경기</div>
      </div>
      <Link
        href={"/games"}
        className="text-primary hover:text-primary-hover text-xs font-semibold md:text-sm"
      >
        전체 보기 &gt;
      </Link>
    </div>
  );
};

export default SectionHeader;
