import Image from "next/image";
import Link from "next/link";

import Button from "@/src/components/common/Button";
import LinkArrowIcon from "@/src/components/icons/stadiumInfo/LinkArrowIcon";
import LocationIcon from "@/src/components/icons/stadiumInfo/LocationIcon";
import ParkingIcon from "@/src/components/icons/stadiumInfo/ParkingIcon";
import SubwayIcon from "@/src/components/icons/stadiumInfo/SubwayIcon";
import { Stadium } from "@/src/types/stadium";

type StadiumInfoCardProps = {
  data: Stadium[];
};

const StadiumInfoCard = ({ data }: StadiumInfoCardProps) => {
  const stadiumData = data[0];

  return (
    <section className="flex flex-col items-center gap-4 md:flex-row md:gap-7 lg:gap-10">
      <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-xl md:h-70 md:w-75 lg:h-70 lg:w-100 xl:h-75 xl:w-150">
        <Image
          src={"/image/food-booth/placeholder-image.webp"}
          alt="구장 이미지"
          fill
          sizes="(max-width: 768px) 140px, 300px"
          className="object-cover"
        />
      </div>
      <div className="flex w-full flex-col gap-4 px-1.5 md:gap-3 md:px-0">
        <div className="flex w-full items-center justify-between">
          <div className="text-xl font-bold md:text-2xl">{stadiumData.name}</div>
          <div>
            <Image
              src={stadiumData.logoUrl1}
              alt={stadiumData.name}
              width={96}
              height={96}
              className="h-auto w-12 md:w-15"
            />
            {stadiumData.logoUrl2 ? (
              <Image
                src={stadiumData.logoUrl2}
                alt={stadiumData.name}
                width={96}
                height={96}
                className="h-auto w-10 md:w-20"
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="border-border flex flex-col gap-2 border-b pb-3">
          <div className="text-muted flex items-start gap-6 text-sm md:gap-7 md:text-base">
            <div className="flex shrink-0 items-center gap-2">
              <LocationIcon size={17} />
              <span className="font-semibold">주소</span>
            </div>
            <div>{stadiumData.address}</div>
          </div>
          <div className="text-muted flex items-start gap-6 text-sm md:gap-7 md:text-base">
            <div className="flex shrink-0 items-center gap-2">
              <SubwayIcon size={17} />
              <span className="font-semibold">교통</span>
            </div>
            <div>{stadiumData.transport.subway}</div>
          </div>
          <div className="text-muted flex items-start gap-6 text-sm md:gap-7 md:text-base">
            <div className="flex shrink-0 items-center gap-2">
              <ParkingIcon size={17} />
              <span className="font-semibold">주차</span>
            </div>
            <div>
              <div>{`${stadiumData.parking.available ? "주차 가능" : "주차 불가"}(${stadiumData.parking.paid ? "유료" : "무료"}) / ${stadiumData.parking.capacity !== null ? `약 ${stadiumData.parking.capacity}대 / ` : `${stadiumData.parking.note}`} `}</div>
              <div>{`${stadiumData.parking.capacity ? `${stadiumData.parking.note}` : ""}`}</div>
            </div>
          </div>
        </div>
        <div className="divide-border flex w-full divide-x text-sm md:text-base">
          <div className="flex flex-1 flex-col items-center gap-0.5 md:gap-1.5">
            <div className="text-muted font-semibold">개장 연도</div>
            <div className="font-semibold">{stadiumData.openedYear}년</div>
          </div>
          <div className="flex flex-1 flex-col items-center gap-0.5 md:gap-1.5">
            <div className="text-muted font-semibold">수용 인원</div>
            <div className="font-semibold">{stadiumData.capacity}명</div>
          </div>
          <div className="flex flex-1 flex-col items-center gap-0.5 md:gap-1.5">
            <div className="text-muted font-semibold">실내/실외</div>
            <div className="font-semibold">
              {`${stadiumData.type === "outdoor" ? "실외 구장" : "돔(실내) 구장"}`}
            </div>
          </div>
        </div>
        <div className="flex w-full gap-3">
          <Link
            href={`https://map.kakao.com/?q=${encodeURIComponent("부산사직종합운동장 사직야구장")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 truncate"
          >
            <Button className="w-full">길찾기 &gt;</Button>
          </Link>
          <Link
            href={stadiumData.officialUrl}
            className="flex-2 truncate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full items-center" variant="inline">
              <span className="text-muted">공식 홈페이지</span>
              <LinkArrowIcon size={15} className="text-muted" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StadiumInfoCard;
