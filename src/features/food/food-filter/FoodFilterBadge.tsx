import { FoodCategoryLabel, FoodCategoryValue } from "@/src/constants/foodCategories";

type FoodFilterBadgeProps = {
  label: FoodCategoryLabel;
  value: FoodCategoryValue;
  selectedFoodCategoryId: FoodCategoryValue;
  onSelectedFoodBoothId: (foodBoothId: FoodCategoryValue) => void;
};

const FoodFilterBadge = ({
  label,
  value,
  selectedFoodCategoryId,
  onSelectedFoodBoothId,
}: FoodFilterBadgeProps) => {
  return (
    <li>
      <button
        className={`hover:bg-surface-2 hover:border-border inline-flex cursor-pointer rounded-md border px-2 py-1 text-xs font-semibold whitespace-nowrap md:px-3.5 md:py-1 md:text-sm ${selectedFoodCategoryId === value ? "bg-warning-soft border-warning" : "border-border bg-surface"}`}
        onClick={() => onSelectedFoodBoothId(value)}
      >
        {label}
      </button>
    </li>
  );
};

export default FoodFilterBadge;
