import type { SVGProps } from "react";

const WindIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 8h11.5a2.5 2.5 0 1 0-2.5-2.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M3 16h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
};

export default WindIcon;
