import SectionCard from "@/src/components/common/SectionCard";
import { Stadium } from "@/src/types/stadium";

import SectionHeader from "./SectionHeader";
import StadiumMap from "./StadiumMap";

type MapSectionProps = {
  data: Stadium;
};

const MapSection = ({ data }: MapSectionProps) => {
  return (
    <SectionCard>
      <SectionHeader stadiumData={data} />
      <StadiumMap stadiumData={data} />
    </SectionCard>
  );
};

export default MapSection;
