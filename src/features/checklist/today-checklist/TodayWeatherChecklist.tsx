import Image from "next/image";

import { StadiumWeatherResponse } from "@/src/types/weather";

import { recommendItems } from "../recommendation/items";

type TodayWeatherChecklistProps = {
  data: StadiumWeatherResponse;
};

const TodayWeatherChecklist = ({ data }: TodayWeatherChecklistProps) => {
  return (
    <section aria-labelledby="today-checklist-heading">
      <h3 id="today-checklist-heading" className="text-foreground text-base font-bold md:text-lg">
        오늘 추천 준비물
      </h3>
      <p className="text-muted text-base font-semibold">
        현재 날씨와 구장 환경을 고려한 추천이에요!
      </p>

      <div className="flex justify-between gap-1.5 py-5 md:gap-2">
        {recommendItems
          .map((item) => ({ ...item, calculatedScore: item.score(data) }))
          .sort((a, b) => b.calculatedScore - a.calculatedScore)
          .slice(0, 4)
          .map((item) => (
            <div
              key={item.name}
              className="border-border bg-surface flex w-full flex-col items-center rounded-xl border py-2.5 md:gap-1 md:px-1 md:py-2 xl:min-w-23"
            >
              <div className="relative h-15 w-15 md:h-19 md:w-19">
                <Image src={item.itemImage} alt={item.name} fill sizes="76px" />
              </div>
              <p className="flex h-10 w-13 items-center justify-center text-center text-sm font-medium lg:w-full">
                {item.name}
              </p>
            </div>
          ))}
      </div>

      <div className="bg-surface-2 divide-disabled flex items-center divide-x rounded-xl p-3">
        <div className="flex shrink-0 items-center gap-1 pr-3">
          <div className="relative h-5.5 w-5.5">
            <Image src="/image/checklist/bulb.png" alt="전구 아이콘" fill sizes="22px" />
          </div>
          <p className="font-bold">TIP</p>
        </div>
        <div className="min-w-0 pl-3 text-sm font-medium">
          {data.current.pty === "0"
            ? "오늘은 자외선이 강해요! 모자와 선크림으로 피부를 보호하세요."
            : "오늘은 비 소식이 있어요! 우산을 꼭 챙기세요."}
        </div>
      </div>
    </section>
  );
};

export default TodayWeatherChecklist;
