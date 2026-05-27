import Image from "next/image";

import { cn } from "@/src/lib/utils";

import GameStatusCheckIcon from "../../../../components/icons/GameStatusCheckIcon";

type ChecklistItem = {
  id: string;
  label: string;
  image: string;
  checked: boolean;
};

type ChecklistBadgeProps = {
  item: ChecklistItem;
};

const ChecklistBadge = ({ item }: ChecklistBadgeProps) => {
  return (
    <div
      className={cn(
        "flex h-8 w-full items-center justify-between gap-1 rounded-full border px-2 text-xs font-semibold transition-all duration-300 ease-out md:h-9 md:px-3 md:text-[13px] lg:px-3.5 lg:text-xs",
        item.checked
          ? "bg-primary-soft border-primary scale-[1.02]"
          : "border-border bg-surface scale-100",
      )}
    >
      <div className="flex items-center gap-1 md:gap-2 lg:gap-1">
        <div className="relative h-3.5 w-3.5 md:h-5 md:w-5">
          <Image src={item.image} alt={item.label} fill className="object-contain" sizes="20px" />
        </div>
        <div className="truncate">{item.label}</div>
      </div>
      {item.checked ? (
        <GameStatusCheckIcon filled className="text-primary animate-[checkPop_250ms_ease-out]" />
      ) : (
        <div className="border-border bg-surface h-4 w-4 rounded-full border" />
      )}
    </div>
  );
};

export default ChecklistBadge;
