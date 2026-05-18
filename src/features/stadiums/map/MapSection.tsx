import { Stadium } from "@/src/types/stadium";

import SectionHeader from "./SectionHeader";
import StadiumMap from "./StadiumMap";

type MapSectionProps = {
  data: Stadium[];
};

const MapSection = ({ data }: MapSectionProps) => {
  const stadiumData = data[0];

  return (
    <>
      <SectionHeader stadiumData={stadiumData} />
      <StadiumMap />
    </>
  );
};

export default MapSection;
