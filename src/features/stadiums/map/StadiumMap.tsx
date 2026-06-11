"use client";

import { useEffect, useRef, useState } from "react";

import { LoadingCard } from "@/src/components/common/loading/LoadingCard";
import { Stadium } from "@/src/types/stadium";

import KakaoMapScript from "./KakaoMapScript";

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
  const mapRef = useRef<HTMLDivElement>(null);
  const [isKakaoLoaded, setIsKakaoLoaded] = useState(false);

  useEffect(() => {
    if (window.kakao) {
      setTimeout(() => setIsKakaoLoaded(true), 0);
    }
  }, []);

  useEffect(() => {
    if (!isKakaoLoaded || !window.kakao || !mapRef.current) return;

    const lat = Number(stadiumData.map?.lat);
    const lng = Number(stadiumData.map?.lng);

    if (Number.isNaN(lat) || Number.isNaN(lng)) return;

    window.kakao.maps.load(() => {
      const position = new window.kakao.maps.LatLng(lat, lng);

      const map = new window.kakao.maps.Map(mapRef.current, {
        center: position,
        level: 3,
      });

      const imageSrc = "/image/map-marker/map-marker.png";
      const imageSize = new window.kakao.maps.Size(47, 50);
      const imageOption = {
        offset: new window.kakao.maps.Point(23, 64),
      };

      const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

      new window.kakao.maps.Marker({
        map,
        position,
        image: markerImage,
      });
    });
  }, [isKakaoLoaded, stadiumData]);

  return (
    <>
      <KakaoMapScript onLoad={() => setIsKakaoLoaded(true)} />

      <div className="bg-surface-2 relative h-45 w-full overflow-hidden rounded-xl md:h-60">
        {!isKakaoLoaded && (
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            <LoadingCard />
          </div>
        )}
        <div ref={mapRef} className="h-full w-full" />
      </div>
    </>
  );
};

export default StadiumMap;
