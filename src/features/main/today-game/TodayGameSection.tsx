import SectionCard from "@/src/components/common/SectionCard";

import TodayGameClient from "./TodayGameClient";

const TodayGameSection = async () => {
  return (
    <SectionCard className="w-full min-w-0 overflow-hidden">
      <TodayGameClient />
    </SectionCard>
  );
};

export default TodayGameSection;
