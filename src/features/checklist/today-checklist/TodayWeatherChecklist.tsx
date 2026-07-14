import Image from "next/image";

const TodayWeatherChecklist = () => {
  return (
    <div>
      <h3 className="text-foreground text-base font-bold md:text-lg">오늘 추천 준비물</h3>
      <p className="text-muted text-base font-semibold">
        현재 날씨와 구장 환경을 고려한 추천이에요!
      </p>
      <div className="flex justify-between py-5 md:gap-2">
        {/* 준비물 뱃지 */}
        <div className="border-border bg-surface flex w-full flex-col items-center rounded-xl border p-3 md:gap-1 md:px-1 md:py-2 xl:min-w-23">
          <div className="relative h-19 w-19">
            <Image src="/image/checklist/raincoat.png" alt="우비" fill sizes="76px" />
          </div>
          <p className="text-sm font-medium">우비</p>
        </div>
        <div className="border-border bg-surface flex w-full flex-col items-center rounded-xl border p-3 md:gap-1 md:px-1 md:py-2 xl:min-w-23">
          <div className="relative h-19 w-19">
            <Image src="/image/checklist/raincoat.png" alt="우비" fill sizes="76px" />
          </div>
          <p className="text-sm font-medium">우비</p>
        </div>
        <div className="border-border bg-surface flex w-full flex-col items-center rounded-xl border p-3 md:gap-1 md:px-1 md:py-2 xl:min-w-23">
          <div className="relative h-19 w-19">
            <Image src="/image/checklist/raincoat.png" alt="우비" fill sizes="76px" />
          </div>
          <p className="text-sm font-medium">우비</p>
        </div>
        <div className="border-border bg-surface flex w-full flex-col items-center rounded-xl border p-3 md:gap-1 md:px-1 md:py-2 xl:min-w-23">
          <div className="relative h-19 w-19">
            <Image src="/image/checklist/raincoat.png" alt="우비" fill sizes="76px" />
          </div>
          <p className="text-sm font-medium">우비</p>
        </div>
      </div>
      {/* --------------- */}

      <div className="bg-surface-2 divide-disabled flex items-center divide-x rounded-xl p-3">
        <div className="flex shrink-0 items-center gap-1 pr-3">
          <div className="relative h-5.5 w-5.5">
            <Image src="/image/checklist/bulb.png" alt="전구 아이콘" fill sizes="22px" />
          </div>
          <p className="font-bold">TIP</p>
        </div>
        <div className="min-w-0 pl-3 text-sm font-medium">
          오늘은 자외선이 강해요! 모자와 선크림으로 피부를 보호하세요.
        </div>
      </div>
    </div>
  );
};

export default TodayWeatherChecklist;
