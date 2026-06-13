import Link from "next/link";

const SectionHeader = () => {
  return (
    <header className="mb-1.5 flex items-center justify-between">
      <h2 className="text-foreground text-lg font-bold md:text-xl">구장 안내</h2>
      <Link
        href={"/stadiums"}
        className="text-primary hover:text-primary-hover text-xs font-semibold md:text-sm"
      >
        전체 보기 &gt;
      </Link>
    </header>
  );
};

export default SectionHeader;
