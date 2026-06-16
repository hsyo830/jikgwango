import SectionCard from "@/src/components/common/SectionCard";

import GameNoticeBadge from "./components/GameNoticeBadge";
import GameScheduleList from "./GameScheduleList";

type GameScheduleSectionProps = {
  gameDate: string;
};

const GameScheduleSection = ({ gameDate }: GameScheduleSectionProps) => {
  return (
    <SectionCard>
      <h2 className="pb-3.5 text-xl font-bold">오늘의 경기 목록</h2>
      <GameScheduleList gameDate={gameDate} />
      <GameNoticeBadge />
    </SectionCard>
  );
};

export default GameScheduleSection;
