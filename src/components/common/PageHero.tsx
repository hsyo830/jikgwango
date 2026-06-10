type PageHeroProps = {
  title: string;
  intro: string;
};

const PageHero = ({ title, intro }: PageHeroProps) => {
  return (
    <section className="aspect-1920/650 w-full overflow-hidden bg-(image:--hero-bg) bg-cover bg-bottom px-5 py-30 md:aspect-1920/500 md:px-9.75 md:py-25">
      <div className="text-xl font-bold md:text-4xl lg:text-5xl">{title}</div>
      <div className="w-65 text-sm font-medium md:mt-2 md:w-full md:text-lg md:font-semibold md:[text-shadow:0_1px_1px_rgba(255,255,255,0.95),0_0_10px_rgba(168,207,247,0.95),0_0_22px_rgba(168,207,247,0.9)] lg:mt-3 lg:text-xl">
        {intro}
      </div>
    </section>
  );
};

export default PageHero;
