import { LoadingCard } from "@/src/components/common/loading/LoadingCard";

const LoadingMainTodayGame = () => {
  return (
    <>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="h-7 w-20 overflow-hidden rounded-md">
            <LoadingCard />
          </div>
          <div className="h-7 w-16 overflow-hidden rounded-md">
            <LoadingCard />
          </div>
          <div className="h-6 w-10 overflow-hidden rounded-md">
            <LoadingCard />
          </div>
        </div>

        <div className="h-5 w-16 overflow-hidden rounded-md">
          <LoadingCard />
        </div>
      </div>

      <div className="flex w-full gap-2 overflow-hidden md:hidden">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="h-51 w-47 shrink-0 overflow-hidden rounded-xl">
            <LoadingCard />
          </div>
        ))}
      </div>

      <div className="hidden w-full gap-5 overflow-hidden md:flex">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="h-52 flex-1 overflow-hidden rounded-xl">
            <LoadingCard />
          </div>
        ))}
      </div>
    </>
  );
};

export default LoadingMainTodayGame;
