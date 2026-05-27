import SectionCard from "@/src/components/common/SectionCard";

const FoodBoothSection = () => {
  return (
    <SectionCard>
      <div className="flex items-end gap-5">
        <h2 className="text-xl font-bold">전체 부스</h2>
        <p className="text-muted text-base font-semibold">
          총 <span>30</span>개의 부스
        </p>
      </div>
    </SectionCard>
  );
};

export default FoodBoothSection;
