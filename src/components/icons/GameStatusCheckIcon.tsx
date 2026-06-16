import type { SVGProps } from "react";

interface GameStatusCheckIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  title?: string;
  filled?: boolean;
}

const GameStatusCheckIcon = ({
  size = 20,
  color = "currentColor",
  strokeWidth = 2.5,
  title,
  className,
  filled,
  ...props
}: GameStatusCheckIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      color={color}
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {title && <title>{title}</title>}

      <circle
        cx="12"
        cy="12"
        r="9"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />

      <path
        d="M8 12.3L10.6 14.9L16.2 9.3"
        stroke={filled ? "white" : "currentColor"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GameStatusCheckIcon;
