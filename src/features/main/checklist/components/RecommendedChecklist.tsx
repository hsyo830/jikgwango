"use client";

import { useEffect, useState } from "react";

import GameStatusCheckIcon from "@/src/components/icons/GameStatusCheckIcon";

const RecommendedChecklist = () => {
  const progress = 70;

  return (
    <div className="bg-surface-2 flex w-full flex-col gap-4 rounded-sm p-3 lg:w-[50%]">
      <div>
        <h3 className="pb-0.5 text-sm font-medium md:text-base">오늘 추천 준비물</h3>
        <div className="text-muted flex gap-1 text-xs md:text-[13px]">
          <GameStatusCheckIcon filled className="text-primary" />
          <span>야간 경기라 얇은 외투를 챙겨주세요.</span>
        </div>
        <div className="text-muted flex gap-1 text-xs md:text-[13px]">
          <GameStatusCheckIcon filled className="text-primary" />
          <span>우천 가능성 20%로 우비를 추천해요.</span>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-medium">준비 완료</h3>
          <div className="text-sm">
            <span className="text-primary">4</span>
            <span>/6 &gt;</span>
          </div>
        </div>
        <div className="bg-border-strong h-2 w-full overflow-hidden rounded-full">
          <div
            className="bg-primary h-full animate-[fillProgress_700ms_ease-out_forwards] rounded-full"
            style={
              {
                "--progress": `${progress}%`,
              } as React.CSSProperties
            }
          />
        </div>
      </div>
    </div>
  );
};

export default RecommendedChecklist;
