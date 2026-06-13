import { Stadium } from "@/src/types/stadium";

type SectionHeaderProps = {
  stadiumData: Stadium;
};

const SectionHeader = ({ stadiumData }: SectionHeaderProps) => {
  return (
    <header className="mb-3 flex items-center justify-between">
      <h2 className="text-foreground text-lg font-bold md:text-xl">{`${stadiumData.name} 오늘 날씨`}</h2>
    </header>
  );
};

export default SectionHeader;
