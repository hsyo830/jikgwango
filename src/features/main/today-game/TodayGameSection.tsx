import SectionCard from "@/src/components/common/SectionCard";
import { getTodayGames } from "@/src/services/kbo/getTodayGames";

import TodayGameSlider from "./components/TodayGameSlider";
import SectionHeader from "./SectionHeader";

const TodayGameSection = async () => {
  const todayGameData = await getTodayGames();

  return (
    <SectionCard className="w-full min-w-0 overflow-hidden">
      <SectionHeader games={todayGameData.gameList} />
      <TodayGameSlider games={todayGameData.gameList} />
    </SectionCard>
  );
};

export default TodayGameSection;
