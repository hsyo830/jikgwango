import PageHero from "@/src/components/common/PageHero";
import GameScheduleSection from "@/src/features/games/GameScheduleSection";
import { getTodayGameDate } from "@/src/utils/getTodayGameDate";

const TodayPage = () => {
  const gameDate = getTodayGameDate();

  return (
    <main>
      <PageHero title="오늘 경기" intro="오늘 열리는 경기를 한눈에 확인하세요." />
      <div className="mx-2.5 -mt-6 flex flex-col gap-5 md:mx-0 md:-mt-3 md:px-8.25 lg:-mt-4 xl:-mt-15">
        <GameScheduleSection gameDate={gameDate} />
      </div>
    </main>
  );
};

export default TodayPage;
