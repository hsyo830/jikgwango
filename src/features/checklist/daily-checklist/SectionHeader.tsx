import ChecklistInline from "@/src/components/icons/checklistInline";

const SectionHeader = () => {
  return (
    <header className="mb-1.5 flex flex-col justify-between gap-1 lg:flex-row lg:items-center lg:gap-0">
      <div className="flex items-center justify-start gap-1.5">
        <h2 className="text-foreground text-lg font-bold md:text-xl">기본 필수 준비물</h2>
        <ChecklistInline size={25} className="text-disabled" />
      </div>
      <div className="text-warning bg-warning-soft rounded-sm px-2 py-1 text-sm font-semibold">
        탭해서 체크하세요 ✓
      </div>
    </header>
  );
};

export default SectionHeader;
