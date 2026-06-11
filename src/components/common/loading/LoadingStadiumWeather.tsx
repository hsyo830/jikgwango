import { LoadingCard } from "@/src/components/common/loading/LoadingCard";

const LoadingStadiumWeather = () => {
  return (
    <section className="flex flex-col gap-3">
      <div className="border-border flex items-start justify-between border-b pb-2 md:px-3 lg:px-5">
        <div className="flex items-center gap-2.5 lg:gap-4">
          <div className="h-19 w-19 overflow-hidden rounded-full md:h-17 md:w-17 lg:h-19 lg:w-19">
            <LoadingCard />
          </div>

          <div className="flex flex-col gap-2">
            <div className="h-9 w-20 overflow-hidden rounded-md lg:h-10 lg:w-24">
              <LoadingCard />
            </div>
            <div className="h-5 w-16 overflow-hidden rounded-md">
              <LoadingCard />
            </div>
          </div>
        </div>

        <ul className="w-40 space-y-1 md:w-30 lg:w-50">
          {Array.from({ length: 4 }).map((_, index) => (
            <li key={index} className="flex justify-between gap-4">
              <div className="h-5 w-10 overflow-hidden rounded-md">
                <LoadingCard />
              </div>
              <div className="h-5 w-12 overflow-hidden rounded-md">
                <LoadingCard />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-around">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <div className="h-4 w-9 overflow-hidden rounded-md">
              <LoadingCard />
            </div>
            <div className="h-5 w-5 overflow-hidden rounded-full md:h-8.5 md:w-8.5 lg:h-10 lg:w-10">
              <LoadingCard />
            </div>
            <div className="h-5 w-8 overflow-hidden rounded-md">
              <LoadingCard />
            </div>
          </div>
        ))}
      </div>

      <div className="h-6 w-full overflow-hidden rounded-md">
        <LoadingCard />
      </div>
    </section>
  );
};

export default LoadingStadiumWeather;
