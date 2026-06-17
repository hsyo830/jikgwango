import Image from "next/image";

import MainLogo from "@/public/jikgwango-logo.png";
import OpenTypeImage from "@/public/license/img_opentype09.png";
import CcbyImage from "@/public/license/license-ccby.png";

import Logo from "../common/Logo";

const Footer = () => {
  return (
    <footer>
      <div className="bg-surface-2 border-border mt-15 flex flex-col justify-between gap-3 border-t p-5 md:flex-row md:items-center md:gap-5 md:p-10">
        <div>
          <div className="flex gap-1">
            <div className="relative h-7 w-7 md:h-10 md:w-10">
              <Image
                src={MainLogo}
                alt="메인로고"
                fill
                sizes="(min-width: 768px) 40px, 28px"
                className="object-contain"
              />
            </div>
            <Logo mobileHeader />
          </div>
          <p className="text-muted text-sm font-semibold md:text-base">
            전국 야구장 정보와 먹거리, 교통, 날씨 정보를 한곳에 모았습니다.
          </p>
          <a
            href="https://github.com/hsyo830/jikgwango"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="직관GO GitHub 저장소 바로가기 (새 탭에서 열림)"
            className="text-muted hover:text-primary mt-3 inline-flex items-center gap-1 text-sm font-semibold"
          >
            GitHub 바로가기
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="border-border bg-background flex w-full flex-col gap-2 rounded-lg border px-3.5 py-3.5 md:w-125 md:flex-row md:items-center md:justify-center md:gap-5">
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold md:text-base">데이터 출처</h3>
            <p className="text-muted mb-1 text-xs">KBO · 기상청 단기예보 조회서비스(OpenAPI)</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="relative h-7 w-17.5 md:h-10 md:w-25">
              <Image
                src={CcbyImage}
                alt="제3자 권리 포함 : 저작권 표시"
                fill
                sizes="(min-width: 768px) 100px, 70px"
                className="object-contain"
              />
            </div>
            <div className="relative h-7 w-17.5 md:h-10 md:w-25">
              <Image
                src={OpenTypeImage}
                alt="공공저작물 : 출처표시 (제 1유형)"
                fill
                sizes="(min-width: 768px) 100px, 70px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-sidebar-surface text-inverse flex items-center justify-between px-5 py-5 text-xs md:px-10 md:text-sm">
        ⓒ 2026 JikgwanGo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
