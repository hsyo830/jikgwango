import StadiumWeatherCard from "./components/StadiumWeatherCard";

const StadiumWeatherSlider = () => {
  return (
    <section className="w-full">
      <ul className="3xl:grid-cols-4 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <StadiumWeatherCard />
        <StadiumWeatherCard />
        <StadiumWeatherCard />
        <StadiumWeatherCard />
      </ul>
    </section>
  );
};

export default StadiumWeatherSlider;
