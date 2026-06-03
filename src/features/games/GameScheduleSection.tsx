import SectionCard from "@/src/components/common/SectionCard";

import GameScheduleList from "./GameScheduleList";

const GameScheduleSection = () => {
  return (
    <SectionCard>
      <h2 className="pb-3.5 text-xl font-bold">오늘의 경기 목록</h2>
      <GameScheduleList />
    </SectionCard>
  );
};

export default GameScheduleSection;
