import ChecklistInline from "@/src/components/icons/checklistInline";

const SectionHeader = () => {
  return (
    <header className="mb-1.5 flex items-center justify-start gap-1.5">
      <h2 className="text-foreground text-lg font-bold md:text-xl">기본 필수 준비물</h2>
      <ChecklistInline size={25} className="text-disabled" />
    </header>
  );
};

export default SectionHeader;
