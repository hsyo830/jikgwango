import { LoadingCard } from "@/src/components/common/loading/LoadingCard";

const Skeleton = ({ className }: { className: string }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <LoadingCard />
    </div>
  );
};

const LoadingTodayWeatherCard = () => {
  return (
    <div>
      {/* 오늘 날씨 제목 */}
      <Skeleton className="h-6 w-18 rounded-md md:h-7 md:w-20" />

      <div className="mt-3 mb-0.5 flex items-center justify-between md:mt-9.5 md:mb-0 md:flex-col md:justify-center md:gap-3">
        {/* 날씨 아이콘 및 온도 */}
        <div className="flex items-center gap-2.5 lg:gap-3">
          <Skeleton className="h-19 w-19 shrink-0 rounded-full md:h-15 md:w-15 lg:h-18 lg:w-18" />

          <div className="flex flex-col gap-2">
            <Skeleton className="h-9 w-20 rounded-md md:h-8 md:w-18 lg:h-10 lg:w-24" />
            <Skeleton className="h-5 w-16 rounded-md" />
          </div>
        </div>

        {/* 체감 온도 및 습도 */}
        <ul className="flex w-29 flex-col gap-2 md:w-30 md:flex-row lg:w-44">
          {Array.from({ length: 2 }).map((_, index) => (
            <li
              key={index}
              className="border-border bg-surface flex w-full justify-between rounded-lg border p-2 md:flex-col md:gap-1 lg:flex-row"
            >
              <Skeleton className="h-5 w-8 rounded-md" />
              <Skeleton className="h-5 w-10 rounded-md" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const LoadingTodayWeatherChecklist = () => {
  return (
    <div>
      {/* 오늘 추천 준비물 제목 */}
      <Skeleton className="h-6 w-30 rounded-md md:h-7 md:w-34" />

      {/* 설명 */}
      <Skeleton className="mt-1 h-6 w-64 max-w-full rounded-md" />

      {/* 준비물 뱃지 */}
      <div className="flex justify-between gap-1 py-5 md:gap-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="border-border bg-surface flex w-full min-w-0 flex-col items-center rounded-xl border p-3 md:gap-1 md:px-1 md:py-2 xl:min-w-23"
          >
            <Skeleton className="h-15 w-18.75 max-w-full rounded-lg md:h-18.75" />
            <Skeleton className="mt-1 h-5 w-9 rounded-md" />
          </div>
        ))}
      </div>

      {/* TIP 영역 */}
      <div className="bg-surface-2 divide-disabled flex items-center divide-x rounded-xl p-2 lg:p-0">
        <div className="flex shrink-0 items-center gap-1 pr-3">
          <Skeleton className="h-5 w-6.25 rounded-md" />
          <Skeleton className="h-6 w-7 rounded-md" />
        </div>

        <div className="min-w-0 flex-1 space-y-1.5 pl-3">
          <Skeleton className="h-5 w-full rounded-md" />
          <Skeleton className="h-5 w-3/5 rounded-md" />
        </div>
      </div>
    </div>
  );
};

const LoadingWeatherChecklistCard = () => {
  return (
    <div
      className="divide-border grid grid-cols-1 gap-5.5 divide-y md:grid-cols-[1fr_2fr] md:gap-0 md:divide-x md:divide-y-0"
      role="status"
      aria-label="날씨와 추천 준비물 정보를 불러오는 중"
    >
      <div className="pb-5.5 md:pr-6 md:pb-0">
        <LoadingTodayWeatherCard />
      </div>

      <div className="md:pl-6">
        <LoadingTodayWeatherChecklist />
      </div>

      <span className="sr-only">날씨와 추천 준비물 정보를 불러오는 중입니다.</span>
    </div>
  );
};

export default LoadingWeatherChecklistCard;
