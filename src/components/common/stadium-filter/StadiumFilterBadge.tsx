import Image from "next/image";
import { StaticImageData } from "next/image";

type StadiumFilterBadgeProps = {
  name: string;
  logo: StaticImageData;
};

const StadiumFilterBadge = ({ name, logo }: StadiumFilterBadgeProps) => {
  return (
    <button className="border-border bg-surface hover:bg-surface-2 active:bg-warning-soft active:border-warning inline-flex cursor-pointer rounded-md border px-3.5 py-1">
      <div className="flex items-center gap-2">
        <div className="relative h-10 w-10">
          <Image src={logo} alt={`${name} 로고`} fill />
        </div>

        <h3 className="text-xs font-bold whitespace-nowrap">{name}</h3>
      </div>
    </button>
  );
};

export default StadiumFilterBadge;
