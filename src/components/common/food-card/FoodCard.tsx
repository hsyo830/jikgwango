import Image from "next/image";

import { FOOD_CATEGORIES } from "@/src/constants/foodCategories";
import { cn } from "@/src/lib/utils";
import { FoodBooth } from "@/src/types/foodBooth";
import { getFoodCategory } from "@/src/utils/getFoodCategory";

import LocationIcon from "../../icons/foodBooth/card/LocationIcon";
import MenuIcon from "../../icons/foodBooth/card/MenuIcon";
import FoodCategoryBadge from "./FoodCategoryBadge";

type FoodProps = {
  food: FoodBooth;
  variant?: "main" | "foodPage";
  index?: number;
  priority?: boolean;
};

const FoodCard = ({ food, variant = "main", index, priority }: FoodProps) => {
  const foodCategory = getFoodCategory(food.menuCategory);

  return (
    <div
      className={cn(
        "bg-surface border-border flex overflow-hidden rounded-xl border md:h-85 md:w-75 md:flex-col lg:h-83 lg:w-full lg:items-center",
        variant === "main" && "h-63 w-50 flex-col md:w-75",
        variant === "foodPage" && "h-30 w-full items-center gap-1 md:w-full md:items-start",
      )}
    >
      <div
        className={cn(
          "relative shrink-0 bg-gray-100 md:h-40 md:w-full",
          variant === "main" && "h-30 w-full",
          variant === "foodPage" && "h-full w-35",
        )}
      >
        <Image
          src={food.imageUrl || "/image/food-booth/placeholder-image.webp"}
          alt="음식 부스 이미지"
          fill
          sizes="(max-width: 768px) 140px, 300px"
          className="object-cover"
          priority={priority || index === 0}
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-start gap-0.5 px-2 pt-2 md:w-full md:justify-center md:gap-0 md:px-4 md:pt-0">
        <div className="border-border border-b pb-2">
          <p className="text-primary truncate text-xs font-semibold md:text-sm md:text-[13px] lg:text-[14px]">
            {food.stadiumName}
          </p>
          <div className="flex items-center justify-between gap-1 md:justify-start md:gap-1.5 lg:gap-2.5">
            <h3 className="text-foreground truncate text-base font-bold md:text-base lg:text-[19px]">
              {food.name}
            </h3>
            <FoodCategoryBadge food={food} />
          </div>
        </div>
        <div className="text-muted border-border flex items-center gap-0.5 border-b py-1 text-xs md:gap-1 md:py-2.5 md:text-[12px] lg:text-sm">
          <LocationIcon className="text-muted h-5 w-5 shrink-0 md:h-6 md:w-6" />
          <p className="w-7 shrink-0 font-bold md:w-12 lg:w-14">위치</p>
          <p className="truncate font-medium">{food.location}</p>
        </div>
        <div className="text-muted flex items-center gap-0.5 py-1 text-xs md:gap-1 md:py-2.5 md:text-[12px] lg:pb-0 lg:text-sm">
          <MenuIcon className="text-primary h-5 w-5 shrink-0 md:h-6 md:w-6" />
          <p className="text-primary w-12 font-bold md:w-12 lg:w-14">대표메뉴</p>
          <p className="truncate font-medium">{foodCategory?.label}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
