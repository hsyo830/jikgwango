import { LoadingCard } from "@/src/components/common/loading/LoadingCard";
import SectionCard from "@/src/components/common/SectionCard";

const LoadingStadiumWeatherCard = () => {
  return (
    <SectionCard>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="h-5 w-28 overflow-hidden rounded-md md:h-6">
              <LoadingCard />
            </div>
            <div className="h-4 w-24 overflow-hidden rounded-md md:h-5">
              <LoadingCard />
            </div>
          </div>
          <div className="h-9 w-9 overflow-hidden rounded-full md:h-11 md:w-11">
            <LoadingCard />
          </div>
        </div>

        <div className="flex flex-col md:gap-4">
          <div className="border-border flex justify-center gap-10 border-b pb-4">
            <div className="h-13 w-13 overflow-hidden rounded-full md:h-15 md:w-15">
              <LoadingCard />
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-8 w-18 overflow-hidden rounded-md md:h-9 md:w-20">
                <LoadingCard />
              </div>
              <div className="h-4 w-14 overflow-hidden rounded-md md:h-5 md:w-16">
                <LoadingCard />
              </div>
            </div>
          </div>

          <div className="mt-3 md:mt-0">
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="h-11 overflow-hidden rounded-lg md:h-12">
                  <LoadingCard />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
};

export default LoadingStadiumWeatherCard;
