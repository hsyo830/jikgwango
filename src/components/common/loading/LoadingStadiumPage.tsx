import { LoadingCard } from "@/src/components/common/loading/LoadingCard";
import SectionCard from "@/src/components/common/SectionCard";

export const LoadingStadiumPage = () => {
  return (
    <div className="mx-2.5 -mt-6 flex flex-col gap-5 md:mx-0 md:-mt-3 md:px-8.25 lg:-mt-4 xl:-mt-15">
      {/* StadiumFilterBadgeList */}
      <div className="flex gap-2 overflow-hidden">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="h-12 w-28 shrink-0 overflow-hidden rounded-full">
            <LoadingCard />
          </div>
        ))}
      </div>

      {/* StadiumInfoCard */}
      <SectionCard className="flex flex-col items-center gap-4 md:flex-row md:gap-7 lg:gap-10">
        <div className="h-35 w-full shrink-0 overflow-hidden rounded-xl md:h-70 md:w-75 lg:w-100 xl:h-75 xl:w-150">
          <LoadingCard />
        </div>

        <div className="flex w-full flex-col gap-4">
          <div className="flex justify-between">
            <div className="h-8 w-40 overflow-hidden rounded-lg">
              <LoadingCard />
            </div>

            <div className="flex gap-2">
              <div className="h-12 w-12 overflow-hidden rounded-full">
                <LoadingCard />
              </div>

              <div className="h-12 w-12 overflow-hidden rounded-full">
                <LoadingCard />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="h-5 w-full overflow-hidden rounded-lg">
                <LoadingCard />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="h-16 overflow-hidden rounded-xl">
                <LoadingCard />
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <div className="h-11 flex-1 overflow-hidden rounded-xl">
              <LoadingCard />
            </div>

            <div className="h-11 flex-2 overflow-hidden rounded-xl">
              <LoadingCard />
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Weather + Map */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <SectionCard>
          <div className="mb-4 h-7 w-36 overflow-hidden rounded-lg">
            <LoadingCard />
          </div>

          <div className="h-70 overflow-hidden rounded-xl">
            <LoadingCard />
          </div>
        </SectionCard>

        <SectionCard>
          <div className="mb-4 h-7 w-28 overflow-hidden rounded-lg">
            <LoadingCard />
          </div>

          <div className="h-45 overflow-hidden rounded-xl md:h-60">
            <LoadingCard />
          </div>
        </SectionCard>
      </div>

      {/* FoodSection */}
      <SectionCard>
        <div className="mb-4 h-7 w-32 overflow-hidden rounded-lg">
          <LoadingCard />
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-32 overflow-hidden rounded-xl">
              <LoadingCard />
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
};
