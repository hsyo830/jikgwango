import SectionCard from "@/src/components/common/SectionCard";
import { Stadium } from "@/src/types/stadium";

import SectionHeader from "./SectionHeader";
import StadiumFoodList from "./StadiumFoodList";

type FoodSectionProps = {
  data: Stadium;
  selectedStadiumId: string;
};

const FoodSection = ({ data, selectedStadiumId }: FoodSectionProps) => {
  return (
    <SectionCard>
      <SectionHeader selectedStadiumId={selectedStadiumId} />
      <StadiumFoodList data={data} />
    </SectionCard>
  );
};

export default FoodSection;
