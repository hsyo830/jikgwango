type TeamsIconProps = {
  size?: number | string;
  color?: string;
  className?: string;
};

const TeamsIcon = ({ size = 48, color = "currentColor", className = "" }: TeamsIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="256" cy="256" r="210" stroke={color} strokeWidth="24" opacity="0.35" />

      <circle cx="256" cy="188" r="52" fill={color} opacity="0.45" />
      <circle cx="162" cy="218" r="38" fill={color} opacity="0.35" />
      <circle cx="350" cy="218" r="38" fill={color} opacity="0.35" />

      <path
        d="M142 322c0-48 38-86 86-86h56c48 0 86 38 86 86v24H142v-24Z"
        fill={color}
        opacity="0.45"
      />

      <path
        d="M82 338c0-44 36-80 80-80h16c-28 22-46 56-46 94v10H82v-24Z"
        fill={color}
        opacity="0.3"
      />

      <path
        d="M380 352c0-38-18-72-46-94h16c44 0 80 36 80 80v24h-50v-10Z"
        fill={color}
        opacity="0.3"
      />
    </svg>
  );
};

export default TeamsIcon;
