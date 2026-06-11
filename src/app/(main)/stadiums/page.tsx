import { Suspense } from "react";

import { LoadingStadiumPage } from "@/src/components/common/loading/LoadingStadiumPage";
import PageHero from "@/src/components/common/PageHero";
import { getStadiums } from "@/src/services/stadium/getStadiums";

import StadiumsClient from "./StadiumsClient";

const StadiumsPage = async ({ searchParams }: { searchParams: Promise<{ stadium?: string }> }) => {
  const stadiumData = await getStadiums();
  const { stadium } = await searchParams;
  const stadiumId = stadium ?? stadiumData[0].id ?? "";

  return (
    <div>
      <PageHero
        title="구장 정보"
        intro="전국 야구장의 주요 정보와 편의시설, 교통, 주변 정보를 확인해보세요!"
      />
      <Suspense fallback={<LoadingStadiumPage />}>
        <StadiumsClient stadiumData={stadiumData} initialStadiumId={stadiumId} />
      </Suspense>
    </div>
  );
};

export default StadiumsPage;
