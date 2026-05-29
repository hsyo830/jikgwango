import PageHero from "@/src/components/common/PageHero";
import SectionCard from "@/src/components/common/SectionCard";
import ChecklistSection from "@/src/features/main/checklist/ChecklistSection";
import StadiumFoodSection from "@/src/features/main/stadium-food/StadiumFoodSection";
import StadiumInfoSection from "@/src/features/main/stadium-info/StadiumsInfoSection";
import StadiumTodayWeatherSection from "@/src/features/main/stadium-weather/StadiumTodayWeatherSection";
import TodayGameSection from "@/src/features/main/today-game/TodayGameSection";

export default function MainPage() {
  return (
    <div>
      <PageHero
        title="야구 직관 정보를 한눈에!"
        intro="오늘의 경기, 구장 정보와 맛있는 음식 부스까지 한 번에 확인하세요."
      />
      <div className="mx-2.5 -mt-6 flex flex-col gap-5 md:mx-0 md:-mt-3 md:px-8.25 lg:-mt-10 xl:-mt-15">
        <SectionCard>
          <TodayGameSection />
        </SectionCard>
        <SectionCard>
          <StadiumFoodSection />
        </SectionCard>
        <StadiumTodayWeatherSection />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <SectionCard>
            <StadiumInfoSection />
          </SectionCard>
          <SectionCard>
            <ChecklistSection />
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
