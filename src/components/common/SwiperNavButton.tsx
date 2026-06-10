type SwiperNavButtonProps = {
  direction: "prev" | "next";
  className?: string;
};

const SwiperNavButton = ({ direction, className = "" }: SwiperNavButtonProps) => {
  const isPrev = direction === "prev";

  return (
    <button
      type="button"
      aria-label={isPrev ? "이전 버튼" : "다음 버튼"}
      className={`${className} group hover:border-brand hover:text-brand active:border-brand active:text-brand active:bg-warning-soft border-muted text-muted bg-surface absolute top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border shadow-md transition-colors`}
    >
      <svg
        viewBox="0 0 24 24"
        className={`h-6 w-6 transition-transform duration-200 ${
          isPrev
            ? "group-hover:-translate-x-1 group-active:-translate-x-1"
            : "group-hover:translate-x-1 group-active:translate-x-1"
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {isPrev ? (
          <>
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </>
        ) : (
          <>
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </>
        )}
      </svg>
    </button>
  );
};

export default SwiperNavButton;
