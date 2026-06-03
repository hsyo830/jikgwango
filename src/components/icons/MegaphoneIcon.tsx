import type { SVGProps } from "react";

type MegaphoneFilledIconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
  color?: string;
};

const MegaphoneFilledIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}: MegaphoneFilledIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        fill={color}
        d="M19 4.25c0-.82-.95-1.27-1.58-.76L11.7 8H6.5A3.5 3.5 0 0 0 3 11.5v1A3.5 3.5 0 0 0 6.5 16H7l1.15 3.45A2.25 2.25 0 0 0 10.29 21h1.03c.93 0 1.57-.93 1.24-1.8L11.35 16h.35l5.72 4.51c.63.51 1.58.06 1.58-.76V4.25Z"
      />
      <path
        fill={color}
        d="M21 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z"
      />
    </svg>
  );
};

export default MegaphoneFilledIcon;
