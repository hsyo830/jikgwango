import SectionCard from "@/src/components/common/SectionCard";

import SectionHeader from "./SectionHeader";
import StadiumInfoSlider from "./StadiumInfoSlider";

const StadiumsInfoSection = async () => {
  return (
    <SectionCard>
      <SectionHeader />
      <StadiumInfoSlider />
    </SectionCard>
  );
};

export default StadiumsInfoSection;
