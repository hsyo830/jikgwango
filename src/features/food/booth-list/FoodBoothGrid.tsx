import { FoodBooth } from "@/src/types/foodBooth";

import FoodCard from "../../../components/common/food-card/FoodCard";

type FoodBoothGridProps = {
  filteredFoodBoothData: FoodBooth[];
};

const FoodBoothGrid = ({ filteredFoodBoothData }: FoodBoothGridProps) => {
  return (
    <section className="w-full">
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:gap-5 2xl:grid-cols-4">
        {filteredFoodBoothData.map((booth) => (
          <li key={booth.id} className="min-w-0">
            <FoodCard food={booth} variant="foodPage" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FoodBoothGrid;
