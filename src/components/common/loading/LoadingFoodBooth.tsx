import { LoadingCard } from "./LoadingCard";

const LoadingFoodBooth = () => {
  return (
    <div className="mx-2.5 -mt-6 flex flex-col gap-5 md:mx-0 md:-mt-3 md:px-8.25 lg:-mt-4 xl:-mt-15">
      <div className="flex gap-1.5 overflow-hidden md:px-4.5">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="h-9 w-24 shrink-0 md:h-12 md:w-32">
            <LoadingCard />
          </div>
        ))}
      </div>

      <div className="flex gap-2 overflow-hidden px-1 md:px-0">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-8 w-16 shrink-0 md:h-9 md:w-20">
            <LoadingCard />
          </div>
        ))}
      </div>

      <div className="bg-surface border-border flex flex-col gap-5 rounded-xl border p-5">
        <div className="flex items-end gap-5">
          <div className="h-7 w-24">
            <LoadingCard />
          </div>
          <div className="h-5 w-20">
            <LoadingCard />
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:mb-5 lg:grid-cols-3 xl:gap-5">
          {Array.from({ length: 6 }).map((_, index) => (
            <li key={index} className="h-30 min-w-0 md:h-85 lg:h-83">
              <LoadingCard />
            </li>
          ))}
        </ul>

        <div className="mx-auto flex gap-2 py-10">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="h-9 w-9">
              <LoadingCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingFoodBooth;
