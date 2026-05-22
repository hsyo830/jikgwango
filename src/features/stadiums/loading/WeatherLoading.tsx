export const WeatherLoading = () => {
  return (
    <div className="flex h-50 w-full flex-col items-center justify-center">
      <>
        <div className="flex flex-row gap-2">
          <div className="bg-warning h-3 w-3 animate-bounce rounded-full"></div>
          <div className="bg-warning h-3 w-3 animate-bounce rounded-full [animation-delay:-.3s]"></div>
          <div className="bg-warning h-3 w-3 animate-bounce rounded-full [animation-delay:-.5s]"></div>
        </div>
        <div className="text-warning p-2.5">
          <div>
            <span className="mr-2">날씨 정보를 불러오고 있어요</span>
            <span className="animate-[ping_1.5s_0.5s_ease-in-out_infinite]">.</span>
            <span className="animate-[ping_1.5s_0.7s_ease-in-out_infinite]">.</span>
            <span className="animate-[ping_1.5s_0.9s_ease-in-out_infinite]">.</span>
          </div>
        </div>
      </>
    </div>
  );
};
