import SectionCard from "@/src/components/common/SectionCard";

import TodayGameClient from "./TodayGameClient";

type TodayGameSectionProps = {
  gameDate: string;
};

const TodayGameSection = ({ gameDate }: TodayGameSectionProps) => {
  return (
    <SectionCard className="w-full min-w-0 overflow-hidden">
      <TodayGameClient gameDate={gameDate} />
    </SectionCard>
  );
};

export default TodayGameSection;
