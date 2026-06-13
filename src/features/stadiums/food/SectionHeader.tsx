import Link from "next/link";

type SectionHeaderProps = {
  selectedStadiumId: string;
};

const SectionHeader = ({ selectedStadiumId }: SectionHeaderProps) => {
  return (
    <header className="mb-3 flex items-center justify-between">
      <h2 className="text-foreground text-lg font-bold md:text-xl">구장 내 음식 부스</h2>
      <Link
        href={`/food?stadium=${selectedStadiumId}`}
        className="text-primary hover:text-primary-hover text-xs font-semibold md:text-sm"
      >
        전체 보기 &gt;
      </Link>
    </header>
  );
};

export default SectionHeader;
