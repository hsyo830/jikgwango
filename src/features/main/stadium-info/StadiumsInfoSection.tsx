import { getStadiums } from "@/src/services/stadium/getStadiums";

import SectionHeader from "./SectionHeader";
import StadiumInfoSlider from "./StadiumInfoSlider";

const StadiumsInfoSection = async () => {
  const stadiumInfoData = await getStadiums();

  return (
    <div>
      <SectionHeader />
      <StadiumInfoSlider />
    </div>
  );
};

export default StadiumsInfoSection;
