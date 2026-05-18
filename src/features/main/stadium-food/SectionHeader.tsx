import Link from "next/link";

const SectionHeader = () => {
  return (
    <section className="mb-3 flex items-center justify-between">
      <h2 className="text-foreground text-lg font-bold md:text-xl">
        전체 구장 음식 부스 리스트 미리보기
      </h2>
      <Link
        href={"/food"}
        className="text-primary hover:text-primary-hover text-xs font-semibold md:text-sm"
      >
        전체 보기 &gt;
      </Link>
    </section>
  );
};

export default SectionHeader;
