import PageHero from "@/src/components/common/PageHero";
import DailyChecklistSection from "@/src/features/checklist/daily-checklist/DailyChecklistSection";

import TodaySuggestCheckListSection from "../../../features/checklist/today-checklist/TodaySuggestCheckListSection";

const ChecklistPage = () => {
  return (
    <main>
      <PageHero title="직관 준비물" intro="완벽한 직관을 위한 준비, 빠짐없이 체크하세요!" />
      <div className="mx-2.5 -mt-6 flex flex-col gap-5 md:mx-0 md:-mt-3 md:px-8.25 lg:-mt-4 xl:-mt-15">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-[2fr_1fr]">
          <TodaySuggestCheckListSection />
          <DailyChecklistSection />
        </div>
      </div>
    </main>
  );
};

export default ChecklistPage;
