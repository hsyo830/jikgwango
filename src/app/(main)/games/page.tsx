import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import PageHero from "@/src/components/common/PageHero";
import GameScheduleSection from "@/src/features/games/GameScheduleSection";
import { getCachedTodayGames } from "@/src/services/kbo/fetchTodayGamesFromKBO";
import { getTodayGameDate } from "@/src/utils/getTodayGameDate";

const TodayPage = async () => {
  // const gameDate = getTodayGameDate();

  const todayGameParams = {
    gameDate: getTodayGameDate(),
    leId: "1",
    srId: "0,1,3,4,5,7",
    headerCk: "0",
  };

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["todayGames", todayGameParams],
    queryFn: () => getCachedTodayGames(todayGameParams),
  });

  return (
    <main>
      <PageHero title="오늘 경기" intro="오늘 열리는 경기를 한눈에 확인하세요." />
      <div className="mx-2.5 -mt-6 flex flex-col gap-5 md:mx-0 md:-mt-3 md:px-8.25 lg:-mt-4 xl:-mt-15">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <GameScheduleSection gameDate={todayGameParams.gameDate} />
        </HydrationBoundary>
      </div>
    </main>
  );
};

export default TodayPage;
