"use client";

import { useRouter, useSearchParams } from "next/navigation";

import StadiumFilterBadgeList from "@/src/components/common/stadium-filter/StadiumFilterBadgeList";
import { FoodBooth } from "@/src/types/foodBooth";

type FoodBoothClientProps = {
  foodBoothData: FoodBooth[];
};

const FoodBoothClient = ({ foodBoothData }: FoodBoothClientProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const stadiumIdFromUrl = searchParams.get("stadium");

  const selectedStadiumId = stadiumIdFromUrl ?? foodBoothData[0].id ?? "";

  const data = foodBoothData.find((item) => item.id === selectedStadiumId);

  if (!data) return null;

  const handleSelectStadium = (stadiumId: string) => {
    router.push(`/food?foodbooth=${stadiumId}`);
  };

  return (
    <div className="mx-2.5 -mt-6 flex flex-col gap-5 md:mx-0 md:-mt-3 md:px-8.25 lg:-mt-10 xl:-mt-15">
      <StadiumFilterBadgeList
        selectedStadiumId={selectedStadiumId}
        onSelectedStadiumId={handleSelectStadium}
      />
    </div>
  );
};

export default FoodBoothClient;
