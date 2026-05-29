import SectionCard from "@/src/components/common/SectionCard";
import { foodBooths } from "@/src/data/foodBooths";

import FoodCard from "../../../components/common/food-card/FoodCard";
import SectionHeader from "./SectionHeader";

const StadiumFoodSection = () => {
  return (
    <SectionCard className="w-full">
      <SectionHeader />
      <div className="flex gap-2 lg:hidden lg:gap-5">
        <FoodCard food={foodBooths[0]} />
        <FoodCard food={foodBooths[70]} />
        <FoodCard food={foodBooths[100]} />
      </div>
      <div className="hidden gap-2 lg:flex lg:gap-5">
        <FoodCard food={foodBooths[0]} />
        <FoodCard food={foodBooths[70]} />
        <FoodCard food={foodBooths[100]} />
        <FoodCard food={foodBooths[330]} />
      </div>
    </SectionCard>
  );
};

export default StadiumFoodSection;
