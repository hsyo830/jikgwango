import Link from "next/link";

const SectionHeader = () => {
  return (
    <section className="mb-1.5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <h2 className="text-foreground text-lg font-bold md:text-xl">구장 안내</h2>
      </div>
      <Link
        href={"/stadiums"}
        className="text-primary hover:text-primary-hover text-xs font-semibold md:text-sm"
      >
        전체 보기 &gt;
      </Link>
    </section>
  );
};

export default SectionHeader;
