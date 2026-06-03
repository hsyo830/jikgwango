import type { ComponentType, SVGProps } from "react";

import GameStatusCancelIcon from "@/src/components/icons/GameStatusCancelIcon";
import GameStatusCheckIcon from "@/src/components/icons/GameStatusCheckIcon";
import GameStatusDelayIcon from "@/src/components/icons/GameStatusDelayIcon";
import { GAME_STATUS_META, type GameStatus, type GameStatusIcon } from "@/src/constants/gameStatus";
import { cn } from "@/src/lib/utils";

type GameStatusBadgeVariant = "filled" | "inline";

interface GameStatusBadgeProps {
  status: GameStatus;
  variant?: GameStatusBadgeVariant;
}

type StatusIconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  title?: string;
};

const STATUS_ICON_MAP: Record<GameStatusIcon, ComponentType<StatusIconProps>> = {
  check: GameStatusCheckIcon,
  delay: GameStatusDelayIcon,
  cancel: GameStatusCancelIcon,
};

const GameStatusBadge = ({ status, variant = "filled" }: GameStatusBadgeProps) => {
  const gameStatus = GAME_STATUS_META[status];
  const Icon = STATUS_ICON_MAP[gameStatus.icon];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-semibold md:text-sm",
        gameStatus.textClass,
        variant === "filled" && [
          "rounded-md px-2 py-1 md:rounded-lg md:px-3 md:py-1.5",
          gameStatus.bgClass,
        ],
        variant === "inline" && "p-0 lg:text-base",
      )}
    >
      {variant === "inline" && <Icon size={16} className={gameStatus.iconClass} />}

      {variant === "filled" ? gameStatus.label : gameStatus.listLabel}
    </div>
  );
};

export default GameStatusBadge;
