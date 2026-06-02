import SectionCard from "@/src/components/common/SectionCard";
import { getTodayGames } from "@/src/services/kbo/getTodayGames";

import TodayGameSlider from "./components/TodayGameSlider";
import SectionHeader from "./SectionHeader";
import TodayGameClient from "./TodayGameClient";

const TodayGameSection = async () => {
  // const todayGameData = await getTodayGames();

  return (
    <SectionCard className="w-full min-w-0 overflow-hidden">
      <TodayGameClient />
    </SectionCard>
  );
};

export default TodayGameSection;
