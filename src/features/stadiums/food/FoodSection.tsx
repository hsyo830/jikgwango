import { Stadium } from "@/src/types/stadium";

import SectionHeader from "./SectionHeader";
import StadiumFoodList from "./StadiumFoodList";

type FoodSectionProps = {
  data: Stadium[];
};

const FoodSection = ({ data }: FoodSectionProps) => {
  const stadiumData = data[0];

  return (
    <>
      <SectionHeader />
      <StadiumFoodList data={stadiumData} />
    </>
  );
};

export default FoodSection;
