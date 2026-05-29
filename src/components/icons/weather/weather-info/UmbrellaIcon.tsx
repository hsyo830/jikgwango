import type { SVGProps } from "react";

const UmbrellaIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 12a8 8 0 0 1 16 0H4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12v6.5a2 2 0 0 0 4 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M12 4V2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
};

export default UmbrellaIcon;
