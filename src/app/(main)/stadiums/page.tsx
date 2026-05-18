import PageHero from "@/src/components/common/PageHero";
import SectionCard from "@/src/components/common/SectionCard";
import StadiumInfoCard from "@/src/features/stadiums/stadiumInfoSection";
import { getStadiums } from "@/src/services/stadium/getStadiums";

const StadiumsPage = async () => {
  const stadiumData = await getStadiums();

  return (
    <div>
      <PageHero
        title="구장 정보"
        intro="전국 야구장의 주요 정보와 편의시설, 교통, 주변 정보를 확인해보세요!"
      />
      <div className="mx-2.5 -mt-6 flex flex-col gap-5 md:mx-0 md:-mt-3 md:px-8.25 lg:-mt-10 xl:-mt-15">
        <SectionCard>
          <StadiumInfoCard data={stadiumData} />
        </SectionCard>
      </div>
    </div>
  );
};

export default StadiumsPage;
