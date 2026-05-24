import DoosanLogo from "@/public/image/team-logo/doosan-logo.svg";
import HanwhaLogo from "@/public/image/team-logo/hanwha-logo.svg";
import KiaLogo from "@/public/image/team-logo/kia-logo.svg";
import KiwoomLogo from "@/public/image/team-logo/kiwoom-logo.svg";
import KtLogo from "@/public/image/team-logo/kt-logo.svg";
import LgLogo from "@/public/image/team-logo/lg-logo.svg";
import LotteLogo from "@/public/image/team-logo/lotte-logo.svg";
import NcLogo from "@/public/image/team-logo/nc-logo.svg";
import SamsungLogo from "@/public/image/team-logo/samsung-logo.svg";
import SsgLogo from "@/public/image/team-logo/ssg-logo.svg";

export const KBO_TEAMS = {
  LT: {
    id: "lotte-giants",
    stadiumId: "busan",
    name: "롯데 자이언츠",
    logo: LotteLogo,
  },
  HH: {
    id: "hanwha-eagles",
    stadiumId: "daejeon",
    name: "한화 이글스",
    logo: HanwhaLogo,
  },
  HT: {
    id: "kia-tigers",
    stadiumId: "gwangju",
    name: "KIA 타이거즈",
    logo: KiaLogo,
  },
  WO: {
    id: "kiwoom-heroes",
    stadiumId: "gocheok",
    name: "키움 히어로즈",
    logo: KiwoomLogo,
  },
  KT: {
    id: "kt-wiz",
    stadiumId: "suwon",
    name: "KT 위즈",
    logo: KtLogo,
  },
  LG: {
    id: "lg-twins",
    stadiumId: "jamsil-lg",
    name: "LG 트윈스",
    logo: LgLogo,
  },
  NC: {
    id: "nc-dinos",
    stadiumId: "changwon",
    name: "NC 다이노스",
    logo: NcLogo,
  },
  OB: {
    id: "doosan-bears",
    stadiumId: "jamsil-ds",
    name: "두산 베어스",
    logo: DoosanLogo,
  },
  SS: {
    id: "samsung-lions",
    stadiumId: "daegu",
    name: "삼성 라이온즈",
    logo: SamsungLogo,
  },
  SK: {
    id: "ssg-landers",
    stadiumId: "incheon",
    name: "SSG 랜더스",
    logo: SsgLogo,
  },
} as const;

export type KboTeamCode = keyof typeof KBO_TEAMS;
