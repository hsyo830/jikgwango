import Image from "next/image";

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
    <section>
      <div className="relative h-30 w-30">
        <Image
          src={"/image/food-booth/placeholder-image.webp"}
          alt="음식 부스 이미지"
          fill
          sizes="(max-width: 768px) 140px, 300px"
          className="object-cover"
        />
      </div>
      <div className="flex justify-between">
        <div>{stadiumData.name}</div>
        <div>
          <Image
            src={stadiumData.logoUrl1}
            alt={stadiumData.name}
            width={96}
            height={96}
            className="h-auto w-10 md:w-20"
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
    </section>
  );
};

export default StadiumInfoCard;
