import SectionCard from "@/src/components/common/SectionCard";
import { getStadiums } from "@/src/services/stadium/getStadiums";

import SectionHeader from "./SectionHeader";
import StadiumInfoSlider from "./StadiumInfoSlider";

const StadiumsInfoSection = async () => {
  // const stadiumInfoData = await getStadiums();

  return (
    <SectionCard>
      <SectionHeader />
      <StadiumInfoSlider />
    </SectionCard>
  );
};

export default StadiumsInfoSection;
