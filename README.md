# ⚾ 직관GO

**KBO 야구 직관을 앞둔 팬들을 위한 통합 정보 서비스**

[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)

![직관GO 미리보기](https://github.com/user-attachments/assets/13fbeb83-6ea1-4ad3-90c9-cced80782431)

🔗 **Demo** | https://jikgwango.vercel.app/
🔗 **GitHub** | https://github.com/hsyo830/jikgwango

---

## ⚾ 프로젝트 개요

- KBO 경기 일정·구장 정보·음식 부스·준비물을 한 곳에서 확인할 수 있는 야구 직관 특화 서비스
- KBO 경기 API 및 기상청 초단기예보 API를 직접 연동하여 실시간 경기 일정과 구장별 날씨 정보 제공
- Supabase 기반 인증 및 사용자 즐겨찾기 기능으로 맞춤형 직관 정보 제공

---

## ⚾ 기술 스택

| 구분              | 사용 기술                                  |
| ----------------- | ------------------------------------------ |
| **개발 환경**     | VS Code · ESLint · Prettier · Git & GitHub |
| **프레임워크**    | Next.js 15 · React 19 · TypeScript 5       |
| **스타일링**      | Tailwind CSS · clsx                        |
| **상태 관리**     | Zustand · TanStack Query                   |
| **HTTP 통신**     | Axios                                      |
| **인증/DB**       | Supabase                                   |
| **UI/애니메이션** | Framer Motion · Swiper                     |
| **빌드/배포**     | Next.js Build · Vercel                     |

---

## ⚾ 프로젝트 실행 방법

```bash
# 패키지 설치
npm install

# 로컬 개발 서버
npm run dev

# ESLint 규칙 검사
npm run lint

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start
```

---

## ⚾ 주요 기능

| 기능          | 설명                                                        |
| ------------- | ----------------------------------------------------------- |
| **오늘 경기** | KBO API 연동으로 당일 경기 일정 및 실시간 경기 정보 제공    |
| **구장 날씨** | 기상청 초단기예보 API 연동으로 구장별 실시간 날씨 정보 제공 |
| **음식 부스** | 구장별·카테고리별 필터링 및 페이지네이션으로 부스 탐색      |
| **구장 안내** | 구장별 좌석·시설·교통 정보 제공                             |
| **즐겨찾기**  | Supabase 기반 팀·부스 즐겨찾기 저장                         |
| **다크모드**  | Zustand 기반 다크모드 상태 관리 및 CSS 토큰 시스템          |

---

## ⚾ GitHub 브랜치 전략

| 브랜치         | 용도          | 비고             |
| -------------- | ------------- | ---------------- |
| **main**       | 최종 배포용   | 운영 환경        |
| **develop**    | 기능 통합용   | 테스트 / 통합    |
| **feature/\*** | 기능별 작업용 | 개인 작업 브랜치 |

---

## ⚾ Commit 컨벤션

| 타입         | 설명                    | 예시                              |
| ------------ | ----------------------- | --------------------------------- |
| **feat**     | 새로운 기능 추가        | `feat: 오늘 경기 섹션 추가`       |
| **fix**      | 버그 수정               | `fix: 날씨 API CORS 오류 해결`    |
| **style**    | 코드 포맷팅 변경        | `style: 들여쓰기 수정`            |
| **refactor** | 기능 변화 없는 리팩토링 | `refactor: 날씨 포매터 로직 분리` |
| **docs**     | 문서 수정               | `docs: README 수정`               |
| **chore**    | 빌드/설정 관련 변경     | `chore: ESLint 설정 수정`         |

---

## 🗂️ 프로젝트 구조

```
src/
├── app/                  # Next.js App Router
│   ├── (main)/           # 메인 레이아웃 그룹
│   │   ├── food/         # 음식 부스 페이지
│   │   ├── games/        # 경기 일정 페이지
│   │   ├── stadiums/     # 구장 안내 페이지
│   │   └── mypage/       # 마이페이지
│   └── api/              # Route Handlers (서버 프록시)
├── components/           # 공통 컴포넌트
├── hooks/                # 커스텀 훅
├── services/             # API 호출 함수
├── stores/               # Zustand 스토어
├── types/                # TypeScript 타입 정의
└── utils/                # 유틸리티 함수
```
