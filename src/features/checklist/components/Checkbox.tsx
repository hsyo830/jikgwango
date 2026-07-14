type CheckboxProps = {
  id: string;
  defaultChecked?: boolean;
};

const Checkbox = ({ id, defaultChecked = false }: CheckboxProps) => {
  return (
    <label
      htmlFor={id}
      className="relative flex size-4 shrink-0 cursor-pointer items-center justify-center"
    >
      <input id={id} type="checkbox" defaultChecked={defaultChecked} className="peer sr-only" />

      <span className="border-primary-soft pointer-events-none absolute -inset-0.5 animate-pulse rounded-md border-2 opacity-100 transition-opacity duration-200 peer-checked:opacity-0" />

      <span className="border-border peer-checked:border-primary peer-checked:bg-primary peer-focus-visible:ring-primary/30 absolute inset-0 rounded-sm border bg-white transition-colors duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-offset-1" />

      <svg
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="pointer-events-none relative z-10 size-3 scale-75 opacity-0 transition-all duration-200 peer-checked:scale-100 peer-checked:opacity-100"
      >
        <path
          d="M3.5 8.2 6.5 11 12.5 4.8"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </label>
  );
};

export default Checkbox;
