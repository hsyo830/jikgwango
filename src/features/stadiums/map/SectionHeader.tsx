import { Stadium } from "@/src/types/stadium";

type SectionHeaderProps = {
  stadiumData: Stadium;
};

const SectionHeader = ({ stadiumData }: SectionHeaderProps) => {
  return (
    <section className="mb-3 flex items-center justify-between">
      <h2 className="text-foreground text-lg font-bold md:text-xl">{`${stadiumData.name} 지도`}</h2>
    </section>
  );
};

export default SectionHeader;
