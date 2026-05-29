import SectionCard from "@/src/components/common/SectionCard";

import SectionHeader from "./SectionHeader";
import StadiumWeatherSlider from "./StadiumWeatherSlider";

const StadiumTodayWeatherSection = () => {
  return (
    <SectionCard>
      <SectionHeader />
      <StadiumWeatherSlider />
    </SectionCard>
  );
};

export default StadiumTodayWeatherSection;
