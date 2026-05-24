import Image from "next/image";
import { StaticImageData } from "next/image";

type StadiumFilterBadgeProps = {
  name: string;
  logo: StaticImageData;
};

const StadiumFilterBadge = ({ name, logo }: StadiumFilterBadgeProps) => {
  return (
    <button className="border-border bg-surface hover:bg-surface-2 active:bg-warning-soft active:border-warning inline-flex w-full cursor-pointer rounded-md border px-2 py-1 md:px-3.5 md:py-1">
      <div className="flex items-center gap-2">
        <div className="relative h-7 w-7 md:h-10 md:w-10">
          <Image src={logo} alt={`${name} 로고`} fill sizes="40px" />
        </div>
        <h3 className="text-[11px] font-bold whitespace-nowrap md:text-xs">{name}</h3>
      </div>
    </button>
  );
};

export default StadiumFilterBadge;
