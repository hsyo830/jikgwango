import { FoodBooth } from "@/src/types/foodBooth";
import { getFoodCategory } from "@/src/utils/getFoodCategory";

type FoodProps = {
  food: FoodBooth;
};

const FoodCategoryBadge = ({ food }: FoodProps) => {
  const foodCategory = getFoodCategory(food.menuCategory);

  const Icon = foodCategory?.icon;

  return (
    <div className="bg-warning-soft text-warning flex h-5 items-center justify-start gap-0.5 rounded-sm px-0.5 text-center text-xs font-bold md:min-w-12 lg:h-6 lg:min-w-14 lg:px-1 lg:text-sm">
      {Icon && <Icon className="text-warning h-5 w-5 lg:h-5 lg:w-5" />}
      <span className="hidden md:block">{foodCategory?.label}</span>
    </div>
  );
};

export default FoodCategoryBadge;
