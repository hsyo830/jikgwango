"use client";

import { useRouter, useSearchParams } from "next/navigation";

import StadiumFilterBadgeList from "@/src/components/common/stadium-filter/StadiumFilterBadgeList";
import FoodSection from "@/src/features/stadiums/food/FoodSection";
import MapSection from "@/src/features/stadiums/map/MapSection";
import StadiumInfoCard from "@/src/features/stadiums/stadiumInfoSection";
import WeatherSection from "@/src/features/stadiums/weather/WeatherSection";
import { Stadium } from "@/src/types/stadium";

type StadiumsClientProps = {
  stadiumData: Stadium[];
};

const StadiumsClient = ({ stadiumData }: StadiumsClientProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const stadiumIdFromUrl = searchParams.get("stadium");

  const selectedStadiumId = stadiumIdFromUrl ?? stadiumData[0].id ?? "";

  const data = stadiumData.find((item) => item.id === selectedStadiumId);

  if (!data) return null;

  const handleSelectStadium = (stadiumId: string) => {
    router.push(`/stadiums?stadium=${stadiumId}`);
  };

  return (
    <div className="mx-2.5 -mt-6 flex flex-col gap-5 md:mx-0 md:-mt-3 md:px-8.25 lg:-mt-10 xl:-mt-15">
      <StadiumFilterBadgeList
        selectedStadiumId={selectedStadiumId}
        onSelectedStadiumId={handleSelectStadium}
      />
      <StadiumInfoCard data={data} />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <WeatherSection data={data} />
        <MapSection data={data} />
      </div>
      <FoodSection data={data} selectedStadiumId={selectedStadiumId} />
    </div>
  );
};

export default StadiumsClient;
