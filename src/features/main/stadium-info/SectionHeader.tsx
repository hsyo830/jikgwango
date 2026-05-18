const SectionHeader = () => {
  return (
    <section className="mb-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <h2 className="text-foreground text-lg font-bold md:text-xl">구장 안내</h2>
        <span>|</span>
        <span>
          <span className="text-primary">1</span>/10
        </span>
      </div>
    </section>
  );
};

export default SectionHeader;
