import type { SVGProps } from "react";

type SubwayIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

const SubwayIcon = ({ size = 17, className, ...props }: SubwayIconProps) => {
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
      <path d="M7 16L5 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      <path d="M17 16L19 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      <rect x="5" y="3" width="14" height="13" rx="3" stroke="currentColor" strokeWidth="2" />

      <path d="M8 7H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      <path d="M8 11H8.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

      <path d="M16 11H16.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
};

export default SubwayIcon;
