import type { SVGProps } from "react";

const TemperatureIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 13.2V5.5a2 2 0 1 1 4 0v7.7a4.5 4.5 0 1 1-4 0Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 15.5V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="12" cy="17" r="1.6" fill="currentColor" />
    </svg>
  );
};

export default TemperatureIcon;
