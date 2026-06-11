import { LoadingCard } from "@/src/components/common/loading/LoadingCard";
import SectionCard from "@/src/components/common/SectionCard";

const LoadingMainWeather = () => {
  return (
    <section className="w-full">
      {/* 태블릿 ~ 데스크톱 */}
      <div className="mx-2 hidden md:block">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <SectionCard
              key={index}
              className={index === 3 ? "hidden xl:block" : index === 2 ? "hidden lg:block" : ""}
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="h-6 w-28 overflow-hidden rounded-md">
                      <LoadingCard />
                    </div>
                    <div className="h-5 w-24 overflow-hidden rounded-md">
                      <LoadingCard />
                    </div>
                  </div>

                  <div className="h-11 w-11 overflow-hidden rounded-full">
                    <LoadingCard />
                  </div>
                </div>

                <div className="border-border flex justify-center gap-10 border-b pb-4">
                  <div className="h-15 w-15 overflow-hidden rounded-full">
                    <LoadingCard />
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="h-9 w-20 overflow-hidden rounded-md">
                      <LoadingCard />
                    </div>
                    <div className="h-5 w-16 overflow-hidden rounded-md">
                      <LoadingCard />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 3 }).map((_, itemIndex) => (
                    <div key={itemIndex} className="h-12 overflow-hidden rounded-lg">
                      <LoadingCard />
                    </div>
                  ))}
                </div>
              </div>
            </SectionCard>
          ))}
        </div>
      </div>

      {/* 모바일 */}
      <div className="flex gap-2 overflow-hidden md:hidden">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="w-60 shrink-0">
            <SectionCard>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="h-5 w-28 overflow-hidden rounded-md">
                      <LoadingCard />
                    </div>
                    <div className="h-5 w-24 overflow-hidden rounded-md">
                      <LoadingCard />
                    </div>
                  </div>

                  <div className="h-9 w-9 overflow-hidden rounded-full">
                    <LoadingCard />
                  </div>
                </div>

                <div className="border-border flex justify-center gap-10 border-b pb-4">
                  <div className="h-13 w-13 overflow-hidden rounded-full">
                    <LoadingCard />
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="h-8 w-18 overflow-hidden rounded-md">
                      <LoadingCard />
                    </div>
                    <div className="h-4 w-14 overflow-hidden rounded-md">
                      <LoadingCard />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 3 }).map((_, itemIndex) => (
                    <div key={itemIndex} className="h-11 overflow-hidden rounded-lg">
                      <LoadingCard />
                    </div>
                  ))}
                </div>
              </div>
            </SectionCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoadingMainWeather;
