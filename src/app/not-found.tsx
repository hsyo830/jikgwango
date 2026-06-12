import Link from "next/link";

const NotFound = () => {
  return (
    <div className="relative flex min-h-[75vh] flex-col items-center justify-center overflow-hidden px-6 py-16">
      {/* ── 배경: 야구 다이아몬드 워터마크 ── */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 440 440"
          fill="none"
          className="h-[min(480px,90vw)] w-[min(480px,90vw)] opacity-[0.055]"
          style={{ color: "var(--color-primary)" }}
        >
          <polygon points="220,24 416,220 220,416 24,220" stroke="currentColor" strokeWidth="2" />
          <polygon points="220,70 370,220 220,370 70,220" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="220" cy="220" r="8" fill="currentColor" />
          <line x1="220" y1="24" x2="220" y2="416" stroke="currentColor" strokeWidth="0.8" />
          <line x1="24" y1="220" x2="416" y2="220" stroke="currentColor" strokeWidth="0.8" />
          {/* 베이스 */}
          <rect
            x="207"
            y="11"
            width="26"
            height="26"
            rx="3"
            fill="currentColor"
            opacity="0.6"
            transform="rotate(45 220 24)"
          />
          <rect
            x="207"
            y="207"
            width="26"
            height="26"
            rx="3"
            fill="currentColor"
            opacity="0.6"
            transform="rotate(45 220 220)"
          />
          <rect
            x="403"
            y="207"
            width="26"
            height="26"
            rx="3"
            fill="currentColor"
            opacity="0.6"
            transform="rotate(45 416 220)"
          />
          <rect
            x="11"
            y="207"
            width="26"
            height="26"
            rx="3"
            fill="currentColor"
            opacity="0.6"
            transform="rotate(45 24 220)"
          />
        </svg>
      </div>

      {/* ── 메인 콘텐츠 ── */}
      <div
        className="relative z-10 flex flex-col items-center gap-5 text-center"
        style={{ maxWidth: 480 }}
      >
        {/* 404 + 야구공 */}
        <div className="flex items-center gap-2 select-none" aria-label="404">
          <span
            className="font-vitro leading-none"
            style={{
              fontSize: "clamp(5.5rem,16vw,8rem)",
              color: "var(--color-primary)",
              letterSpacing: "-0.04em",
            }}
          >
            4
          </span>

          {/* 야구공 */}
          <div
            className="relative shrink-0"
            style={{
              width: "clamp(68px,14vw,96px)",
              height: "clamp(68px,14vw,96px)",
              animation: "jikgwan-bounce 2.6s ease-in-out infinite",
            }}
            aria-hidden="true"
          >
            {/* 투구 궤적 */}
            <svg
              viewBox="0 0 120 56"
              fill="none"
              className="pointer-events-none absolute"
              style={{ top: -28, left: -18, width: "145%", height: 56 }}
            >
              <path
                d="M8 48 C30 8 80 4 114 16"
                stroke="var(--color-primary)"
                strokeWidth="2"
                strokeDasharray="7 5"
                strokeLinecap="round"
                opacity="0.35"
              />
            </svg>

            {/* 공 본체 */}
            <svg viewBox="0 0 80 80" fill="none" className="h-full w-full drop-shadow-md">
              <circle cx="40" cy="40" r="38" fill="white" />
              <circle cx="40" cy="40" r="38" stroke="var(--color-border)" strokeWidth="1" />
              {/* 왼 실밥 */}
              <path
                d="M23 17 C18 27 17 35 20 43 C23 51 22 60 27 66"
                stroke="#e05555"
                strokeWidth="2.4"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M28 17 C23 27 22 35 25 43 C28 51 27 60 32 66"
                stroke="#e05555"
                strokeWidth="2.4"
                strokeLinecap="round"
                fill="none"
              />
              {/* 오른 실밥 */}
              <path
                d="M57 17 C62 27 63 35 60 43 C57 51 58 60 53 66"
                stroke="#e05555"
                strokeWidth="2.4"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M52 17 C57 27 58 35 55 43 C52 51 53 60 48 66"
                stroke="#e05555"
                strokeWidth="2.4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          <span
            className="font-vitro leading-none"
            style={{
              fontSize: "clamp(5.5rem,16vw,8rem)",
              color: "var(--color-primary)",
              letterSpacing: "-0.04em",
            }}
          >
            4
          </span>
        </div>

        {/* BALL 판정 배지 */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
          style={{
            background: "var(--color-warning-soft)",
            border: "1.5px solid var(--color-warning)",
          }}
        >
          <span
            className="text-xs font-black tracking-widest uppercase"
            style={{ color: "var(--color-warning)" }}
          >
            BALL
          </span>
          <span className="text-xs font-medium" style={{ color: "var(--color-text-muted)" }}>
            스트라이크존을 벗어났습니다
          </span>
        </div>

        {/* 제목 / 설명 */}
        <div className="flex flex-col gap-2">
          <h1
            className="text-2xl leading-snug font-extrabold sm:text-[1.65rem]"
            style={{ color: "var(--color-text)" }}
          >
            페이지를 찾을 수 없습니다
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            요청하신 페이지가 삭제되었거나 주소가 변경되었을 수 있습니다.
          </p>
        </div>

        {/* CTA 버튼 */}
        <div className="mt-1 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="bg-primary text-primary-foreground hover:bg-primary-hover inline-flex items-center gap-1.5 rounded-[10px] px-5 py-2.5 text-sm font-bold transition-all hover:-translate-y-px active:scale-95"
          >
            🏠 홈으로 이동
          </Link>
        </div>

        {/* 빠른 이동 링크 */}
        <div
          className="mt-2 flex w-full flex-col items-center gap-2.5 rounded-xl p-4"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
          }}
        >
          <span
            className="text-xs font-semibold tracking-wide uppercase"
            style={{ color: "var(--color-text-disabled)" }}
          >
            이런 페이지는 어떠세요?
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: "/stadiums", icon: "🏟️", label: "구장 정보" },
              { href: "/food", icon: "🍗", label: "음식 부스" },
              { href: "/games", icon: "🗓️", label: "경기 일정" },
            ].map(({ href, icon, label }) => (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors hover:brightness-95"
                style={{
                  background: "var(--color-surface-2)",
                  color: "var(--color-text-muted)",
                }}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── 애니메이션 keyframes ── */}
      <style>{`
        @keyframes jikgwan-bounce {
          0%, 100% { transform: translateY(0)    rotate(0deg);   }
          28%       { transform: translateY(-20px) rotate(-16deg); }
          55%       { transform: translateY(-7px)  rotate(9deg);  }
          78%       { transform: translateY(-13px) rotate(-5deg); }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
