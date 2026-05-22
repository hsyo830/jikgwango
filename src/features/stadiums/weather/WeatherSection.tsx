import { Stadium } from "@/src/types/stadium";

import SectionHeader from "./SectionHeader";
import StadiumWeather from "./StadiumWeather";

type WeatherSectionProps = {
  data: Stadium[];
};

const WeatherSection = ({ data }: WeatherSectionProps) => {
  const stadiumData = data[0];

  return (
    <>
      <SectionHeader stadiumData={stadiumData} />
      <StadiumWeather stadiumData={stadiumData} />
    </>
  );
};

export default WeatherSection;
