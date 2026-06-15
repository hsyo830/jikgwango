import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import PageHero from "@/src/components/common/PageHero";
import ChecklistSection from "@/src/features/main/checklist/ChecklistSection";
import StadiumFoodSection from "@/src/features/main/stadium-food/StadiumFoodSection";
import StadiumInfoSection from "@/src/features/main/stadium-info/StadiumsInfoSection";
import StadiumTodayWeatherSection from "@/src/features/main/stadium-weather/StadiumTodayWeatherSection";
import TodayGameSection from "@/src/features/main/today-game/TodayGameSection";
import { getCachedTodayGames } from "@/src/services/kbo/fetchTodayGamesFromKBO";
import { getTodayGameDate } from "@/src/utils/getTodayGameDate";

export default async function MainPage() {
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
      <PageHero
        title="야구 직관 정보를 한눈에!"
        intro="오늘의 경기, 구장 정보와 맛있는 음식 부스까지 한 번에 확인하세요."
      />
      <div className="mx-2.5 -mt-6 flex flex-col gap-5 md:mx-0 md:-mt-3 md:px-8.25 lg:-mt-4 xl:-mt-15">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <TodayGameSection gameDate={todayGameParams.gameDate} />
          <StadiumFoodSection />
          <StadiumTodayWeatherSection gameDate={todayGameParams.gameDate} />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <StadiumInfoSection />
            <ChecklistSection />
          </div>
        </HydrationBoundary>
      </div>
    </main>
  );
}
