import SectionCard from "@/src/components/common/SectionCard";
import { foodBooths } from "@/src/data/foodBooths";

import FoodCard from "../../../components/common/food-card/FoodCard";
import SectionHeader from "./SectionHeader";

const StadiumFoodSection = () => {
  return (
    <SectionCard className="w-full">
      <SectionHeader />
      <div className="w-full overflow-x-auto">
        <div className="flex w-200 gap-2 md:w-275 lg:w-full lg:gap-5">
          <FoodCard food={foodBooths[0]} priority />
          <FoodCard food={foodBooths[65]} />
          <FoodCard food={foodBooths[94]} />
          <FoodCard food={foodBooths[195]} />
        </div>
      </div>
    </SectionCard>
  );
};

export default StadiumFoodSection;
