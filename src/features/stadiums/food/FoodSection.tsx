import SectionCard from "@/src/components/common/SectionCard";
import { Stadium } from "@/src/types/stadium";

import SectionHeader from "./SectionHeader";
import StadiumFoodList from "./StadiumFoodList";

type FoodSectionProps = {
  data: Stadium[];
};

const FoodSection = ({ data }: FoodSectionProps) => {
  const stadiumData = data[0];

  return (
    <SectionCard>
      <SectionHeader />
      <StadiumFoodList data={stadiumData} />
    </SectionCard>
  );
};

export default FoodSection;
