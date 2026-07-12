interface ChecklistInlineProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const ChecklistInline = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 1.8,
  className,
}: ChecklistInlineProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 클립보드 몸체 */}
      <path
        d="M7 5H5.5C4.67 5 4 5.67 4 6.5V20C4 20.83 4.67 21.5 5.5 21.5H18.5C19.33 21.5 20 20.83 20 20V6.5C20 5.67 19.33 5 18.5 5H17"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 상단 클립 */}
      <path
        d="M9 5V4.5C9 3.67 9.67 3 10.5 3H10.75C11.03 2.42 11.62 2 12.3 2C12.98 2 13.57 2.42 13.85 3H14.5C15.33 3 16 3.67 16 4.5V5C16 5.55 15.55 6 15 6H10C9.45 6 9 5.55 9 5Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 첫 번째 체크 */}
      <path
        d="M7 10L8.5 11.5L11 9"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 첫 번째 선 */}
      <path d="M13 10.5H17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />

      {/* 두 번째 체크 */}
      <path
        d="M7 14L8.5 15.5L11 13"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 두 번째 선 */}
      <path d="M13 14.5H17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />

      {/* 세 번째 체크 */}
      <path
        d="M7 18L8.5 19.5L11 17"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 세 번째 선 */}
      <path d="M13 18.5H17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
};

export default ChecklistInline;
