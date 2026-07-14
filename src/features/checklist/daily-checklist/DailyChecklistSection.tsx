import SectionCard from "@/src/components/common/SectionCard";

import Checkbox from "../components/Checkbox";
import SectionHeader from "./SectionHeader";

const checklistItems = [
  {
    id: "ticket",
    title: "티켓",
    description: "모바일/종이 티켓",
  },
  {
    id: "id-card",
    title: "신분증",
    description: "본인 확인 필수",
  },
  {
    id: "battery",
    title: "보조배터리",
    description: "사진/응원 준비",
  },
  {
    id: "cheering",
    title: "응원도구",
    description: "응원 열기 UP!",
  },
  {
    id: "payment",
    title: "카드/현금",
    description: "간편 결제 준비",
  },
  {
    id: "water",
    title: "물",
    description: "수분 보충 필수",
  },
];

const DailyChecklistSection = () => {
  return (
    <SectionCard>
      <SectionHeader />
      <ul className="mt-4 grid grid-cols-2 gap-x-5 md:mt-3 md:block">
        {checklistItems.map((item) => (
          <li
            key={item.id}
            className="border-border grid min-w-0 grid-cols-[18px_minmax(0,1fr)] items-center gap-x-2 border-b border-dashed py-3 md:grid-cols-[28px_90px_minmax(0,1fr)] md:gap-x-2 md:py-2.5 md:last:border-b-0"
          >
            <Checkbox id={item.id} />

            <label
              htmlFor={item.id}
              className="text-foreground cursor-pointer truncate text-base font-semibold"
            >
              {item.title}
            </label>

            <span className="text-muted col-start-2 mt-0.5 truncate text-xs font-medium md:col-start-3 md:row-start-1 md:mt-0 md:text-base">
              {item.description}
            </span>
          </li>
        ))}
      </ul>
    </SectionCard>
  );
};

export default DailyChecklistSection;
