import Link from "next/link";

import { checklistItems } from "@/src/constants/checklistItems";

import Button from "../../../components/common/Button";
import ChecklistBadge from "./components/ChecklistBadge";
import RecommendedChecklist from "./components/RecommendedChecklist";
import SectionHeader from "./SectionHeader";

const ChecklistSection = () => {
  return (
    <div>
      <SectionHeader />
      <section className="flex flex-col justify-center gap-3">
        <div className="text-muted text-sm">
          <div>직관 준비물 다 챙기셨나요?</div>
          <div>체크하고 빠뜨린 것 없이 즐거운 직관을 준비하세요!</div>
        </div>
        <div className="flex flex-col gap-3 lg:flex-row">
          <RecommendedChecklist />
          <div className="flex min-w-0 flex-col justify-between lg:flex-1">
            <ul className="grid w-full grid-cols-2 gap-2">
              {checklistItems.map((item) => (
                <li key={item.id} className="min-w-0">
                  <ChecklistBadge item={item} />
                </li>
              ))}
            </ul>
            <Link href={"/checklist"}>
              <Button className="mt-2.5 mb-1 w-full py-3">지금 바로 체크하러 가기 &gt;</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChecklistSection;
