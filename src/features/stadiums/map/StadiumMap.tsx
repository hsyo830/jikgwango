"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import mapImage from "@/public/image/map-marker/sajik-stadium-map.png";
import { Stadium } from "@/src/types/stadium";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

type StadiumMapProps = {
  stadiumData: Stadium;
};

const StadiumMap = ({ stadiumData }: StadiumMapProps) => {
  // const mapRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (!window.kakao || !mapRef.current) {
  //     console.log("카카오 SDK 또는 mapRef 없음");
  //     return;
  //   }

  //   const lat = Number(stadiumData.map?.lat);
  //   const lng = Number(stadiumData.map?.lng);

  //   console.log("위도 경도:", lat, lng);

  //   if (Number.isNaN(lat) || Number.isNaN(lng)) return;

  //   window.kakao.maps.load(() => {
  //     console.log("지도 생성 시작");

  //     const position = new window.kakao.maps.LatLng(lat, lng);

  //     const map = new window.kakao.maps.Map(mapRef.current, {
  //       center: position,
  //       level: 3,
  //     });

  //     const imageSrc = "/image/map-marker/map-marker.png";
  //     const imageSize = new window.kakao.maps.Size(52, 64);
  //     const imageOption = {
  //       offset: new window.kakao.maps.Point(26, 64),
  //     };

  //     const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

  //     new window.kakao.maps.Marker({
  //       map,
  //       position,
  //       image: markerImage,
  //     });
  //   });
  // }, [stadiumData]);

  // ref={mapRef}

  return (
    <div className="relative h-45 w-full overflow-hidden rounded-xl md:h-60">
      <Image src={mapImage} alt="야구장 지도" fill />
    </div>
  );
};

export default StadiumMap;
