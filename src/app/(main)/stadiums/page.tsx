import PageHero from "@/src/components/common/PageHero";
import SectionCard from "@/src/components/common/SectionCard";
import StadiumFilterBadgeList from "@/src/components/common/stadium-filter/StadiumFilterBadgeList";
import FoodSection from "@/src/features/stadiums/food/FoodSection";
import MapSection from "@/src/features/stadiums/map/MapSection";
import StadiumInfoCard from "@/src/features/stadiums/stadiumInfoSection";
import WeatherSection from "@/src/features/stadiums/weather/WeatherSection";
import { getStadiums } from "@/src/services/stadium/getStadiums";

import StadiumsClient from "./StadiumsClient";

const StadiumsPage = async () => {
  const stadiumData = await getStadiums();

  return (
    <div>
      <PageHero
        title="구장 정보"
        intro="전국 야구장의 주요 정보와 편의시설, 교통, 주변 정보를 확인해보세요!"
      />
      <StadiumsClient stadiumData={stadiumData} />
    </div>
  );
};

export default StadiumsPage;
