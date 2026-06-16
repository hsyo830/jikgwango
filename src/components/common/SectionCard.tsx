type SectionCardProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const SectionCard = ({ children, className = "", id }: SectionCardProps) => {
  return (
    <section
      id={id}
      className={`border-border bg-surface rounded-xl border p-3 md:p-4 ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionCard;
