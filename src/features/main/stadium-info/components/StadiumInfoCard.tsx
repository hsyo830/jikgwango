import Image from "next/image";
import Link from "next/link";

import LocationIcon from "@/src/components/icons/stadiumInfo/LocationIcon";
import SubwayIcon from "@/src/components/icons/stadiumInfo/SubwayIcon";
import { Stadium } from "@/src/types/stadium";

import Button from "../../../../components/common/Button";
import SectionCard from "../../../../components/common/SectionCard";

type StadiumInfoCardProps = {
  stadium: Stadium[];
};

const StadiumInfoCard = ({ stadium }: StadiumInfoCardProps) => {
  const stadiumInfo = stadium[0];
  return (
    <section className="flex w-full items-center gap-2 p-1">
      <SectionCard className="flex h-39 w-full min-w-0 gap-2 md:h-95 md:flex-col md:gap-5 lg:h-55 lg:flex-row lg:gap-2 xl:gap-3">
        <div className="relative h-full w-28 shrink-0 rounded-lg bg-blue-500 md:h-40 md:w-full lg:h-full lg:w-36 xl:w-40">
          <Image
            src={"/image/food-booth/placeholder-image.webp"}
            alt="구장 이미지"
            fill
            sizes="(max-width: 768px) 140px, 300px"
            className="object-cover"
          />
        </div>
        <div className="flex w-full flex-col justify-between gap-2">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1.5 md:gap-3 lg:gap-2">
              <p className="text-foreground text-[15px] font-semibold md:text-2xl lg:text-xl">
                {stadiumInfo.name}
              </p>
              <p className="text-disabled text-sm md:text-lg lg:text-base">|</p>
              <div className="flex gap-2">
                <div className="relative h-10 w-10 md:h-13 md:w-13 lg:h-10 lg:w-10 xl:h-12 xl:w-12">
                  <Image src={stadiumInfo.logoUrl1} alt="팀 로고" fill />
                </div>
                {stadiumInfo.logoUrl2 && (
                  <div className="relative h-auto w-10 md:w-13 lg:w-10 xl:w-12">
                    <Image src={stadiumInfo.logoUrl2} alt="팀 로고" fill />
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1 md:gap-1.5">
              <div className="text-muted flex items-center gap-1 text-[11px] font-medium md:text-base lg:text-[13px]">
                <LocationIcon size={17} className="text-warning" />
                {stadiumInfo.address}
              </div>
              <div className="text-muted flex items-center gap-1 text-[11px] font-medium md:gap-2 md:text-base lg:gap-1 lg:text-[13px]">
                <SubwayIcon size={17} className="text-warning" />
                {stadiumInfo.transport.subway}
              </div>
            </div>
          </div>
          <div className="flex w-full gap-1 md:gap-2">
            <Link
              href={stadiumInfo.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-2 truncate"
            >
              <Button className="w-full">구장 정보 더 보기 &gt;</Button>
            </Link>
            <Button className="flex-1 xl:px-3.5" variant="inline">
              길찾기 &gt;
            </Button>
          </div>
        </div>
      </SectionCard>
    </section>
  );
};

export default StadiumInfoCard;
