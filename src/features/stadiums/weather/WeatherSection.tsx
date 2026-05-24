import SectionCard from "@/src/components/common/SectionCard";
import { Stadium } from "@/src/types/stadium";

import SectionHeader from "./SectionHeader";
import StadiumWeather from "./StadiumWeather";

type WeatherSectionProps = {
  data: Stadium;
};

const WeatherSection = ({ data }: WeatherSectionProps) => {
  return (
    <SectionCard>
      <SectionHeader stadiumData={data} />
      <StadiumWeather stadiumData={data} />
    </SectionCard>
  );
};

export default WeatherSection;
