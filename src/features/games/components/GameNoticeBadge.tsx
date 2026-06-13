import MegaphoneFilledIcon from "@/src/components/icons/MegaphoneIcon";

const GameNoticeBadge = () => {
  return (
    <aside className="bg-warning-soft mt-5 flex flex-col gap-2 rounded-xl px-5 py-3 md:flex-row md:items-center md:justify-between md:gap-5 md:px-10 lg:py-5">
      <div className="flex shrink-0 items-center gap-2">
        <MegaphoneFilledIcon aria-hidden="true" size={28} color="var(--color-warning)" />
        <span className="text-sm font-bold md:text-base">알림</span>
      </div>
      <p className="text-xs md:text-sm">
        우천 시 경기 취소 및 변경될 수 있습니다. 방문 전 구단 공식 채널을 확인해주세요.
      </p>
      <a
        href="https://www.koreabaseball.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-warning hover:text-warning-hover shrink-0 cursor-pointer text-sm font-semibold md:text-base"
      >
        KBO 공식 사이트 바로가기 &gt;
      </a>
    </aside>
  );
};

export default GameNoticeBadge;
