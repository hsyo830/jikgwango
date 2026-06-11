import { LoadingCard } from "@/src/components/common/loading/LoadingCard";
import SectionCard from "@/src/components/common/SectionCard";

const LoadingGameScheduleItem = () => {
  return (
    <article className="flex flex-col gap-2 px-2 py-4 md:grid md:grid-cols-[140px_minmax(0,1fr)_135px] md:items-center md:py-5 lg:grid-cols-[170px_minmax(0,1fr)_190px] xl:grid-cols-[220px_minmax(0,1fr)_240px]">
      <div className="border-border flex min-w-0 flex-row items-center gap-2 md:flex-col md:items-start md:gap-1.5 md:border-r md:pr-4">
        <div className="h-6 w-11 overflow-hidden rounded-md md:w-13 lg:w-15">
          <LoadingCard />
        </div>
        <div className="h-5 w-24 overflow-hidden rounded-md md:w-28">
          <LoadingCard />
        </div>
      </div>

      <div className="flex items-center md:contents">
        <div className="border-border flex min-w-0 flex-1 justify-center border-r md:px-4 lg:px-6">
          <div className="grid w-full max-w-md grid-cols-[1fr_auto_1fr] items-center gap-x-2 md:gap-x-5 xl:gap-x-10">
            <div className="flex min-w-0 flex-col items-center gap-1 md:flex-row md:justify-end md:gap-2">
              <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full md:order-2 md:h-13 md:w-13">
                <LoadingCard />
              </div>
              <div className="h-4 w-12 overflow-hidden rounded-md md:order-1 md:h-5 md:w-16">
                <LoadingCard />
              </div>
            </div>

            <div className="h-7 w-8 shrink-0 overflow-hidden rounded-lg">
              <LoadingCard />
            </div>

            <div className="flex min-w-0 flex-col items-center gap-1 md:flex-row md:justify-start md:gap-2">
              <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full md:h-13 md:w-13">
                <LoadingCard />
              </div>
              <div className="h-4 w-12 overflow-hidden rounded-md md:h-5 md:w-16">
                <LoadingCard />
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-20 min-w-0 flex-col items-center justify-center gap-1.5 pl-3 md:w-auto md:flex-row md:gap-3 md:pr-4 md:pl-8 lg:gap-5">
          <div className="h-6 w-14 overflow-hidden rounded-md md:h-8 md:w-18">
            <LoadingCard />
          </div>
          <div className="h-6 w-14 overflow-hidden rounded-md md:w-16">
            <LoadingCard />
          </div>
        </div>
      </div>
    </article>
  );
};

const LoadingGameScheduleList = () => {
  return (
    <SectionCard>
      <div className="divide-border divide-y">
        {Array.from({ length: 5 }).map((_, index) => (
          <LoadingGameScheduleItem key={index} />
        ))}
      </div>
    </SectionCard>
  );
};

export default LoadingGameScheduleList;
