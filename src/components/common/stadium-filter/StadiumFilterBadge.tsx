import Image from "next/image";
import { StaticImageData } from "next/image";

type StadiumFilterBadgeProps = {
  stadiumId: string;
  name: string;
  logo: StaticImageData;
  selectedStadiumId: string;
  onSelectedStadiumId: (stadiumId: string) => void;
};

const StadiumFilterBadge = ({
  stadiumId,
  name,
  logo,
  selectedStadiumId,
  onSelectedStadiumId,
}: StadiumFilterBadgeProps) => {
  return (
    <button
      className={`hover:bg-surface-2 hover:border-border inline-flex w-full cursor-pointer rounded-md border px-2 py-1 md:px-3.5 md:py-1 ${selectedStadiumId === stadiumId ? "bg-warning-soft border-warning" : "border-border bg-surface"}`}
      onClick={() => onSelectedStadiumId(stadiumId)}
    >
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
