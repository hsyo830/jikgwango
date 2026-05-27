import { getStadiums } from "@/src/services/stadium/getStadiums";

import StadiumInfoCard from "./components/StadiumInfoCard";
import SectionHeader from "./SectionHeader";

const StadiumsInfoSection = async () => {
  const stadiumInfoData = await getStadiums();

  return (
    <div>
      <SectionHeader />
      <StadiumInfoCard stadium={stadiumInfoData} />
    </div>
  );
};

export default StadiumsInfoSection;
