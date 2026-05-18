import type { SVGProps } from "react";

type ParkingIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

const ParkingIcon = ({ size = 17, className, ...props }: ParkingIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="2" />

      <path
        d="M10 17V7H13C14.7 7 16 8.3 16 10C16 11.7 14.7 13 13 13H10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ParkingIcon;
