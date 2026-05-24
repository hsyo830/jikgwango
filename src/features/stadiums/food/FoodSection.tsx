import SectionCard from "@/src/components/common/SectionCard";
import { Stadium } from "@/src/types/stadium";

import SectionHeader from "./SectionHeader";
import StadiumFoodList from "./StadiumFoodList";

type FoodSectionProps = {
  data: Stadium;
};

const FoodSection = ({ data }: FoodSectionProps) => {
  return (
    <SectionCard>
      <SectionHeader />
      <StadiumFoodList data={data} />
    </SectionCard>
  );
};

export default FoodSection;
