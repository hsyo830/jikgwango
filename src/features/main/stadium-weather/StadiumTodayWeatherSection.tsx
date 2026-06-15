import SectionCard from "@/src/components/common/SectionCard";

import SectionHeader from "./SectionHeader";
import StadiumWeatherClient from "./StadiumWeatherClient";

type StadiumTodayWeatherSectionProps = {
  gameDate: string;
};

const StadiumTodayWeatherSection = ({ gameDate }: StadiumTodayWeatherSectionProps) => {
  return (
    <SectionCard>
      <SectionHeader />
      <StadiumWeatherClient gameDate={gameDate} />
    </SectionCard>
  );
};

export default StadiumTodayWeatherSection;
