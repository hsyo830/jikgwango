import SectionCard from "@/src/components/common/SectionCard";

import SectionHeader from "./SectionHeader";
import StadiumWeatherClient from "./StadiumWeatherClient";

const StadiumTodayWeatherSection = () => {
  return (
    <SectionCard>
      <SectionHeader />
      <StadiumWeatherClient />
    </SectionCard>
  );
};

export default StadiumTodayWeatherSection;
