"use client";

import Script from "next/script";

type KakaoMapScriptProps = {
  onLoad: () => void;
};

const KakaoMapScript = ({ onLoad }: KakaoMapScriptProps) => {
  return (
    <Script
      src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}&autoload=false&libraries=services`}
      strategy="afterInteractive"
      onLoad={onLoad}
    />
  );
};

export default KakaoMapScript;
