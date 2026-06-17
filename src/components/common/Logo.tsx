import Link from "next/link";

type LogoProps = {
  mobileHeader?: boolean;
};

export default function Logo({ mobileHeader }: LogoProps) {
  return (
    <div className={`font-vitro ${mobileHeader ? "text-2xl md:text-[35px]" : "text-[40px]"}`}>
      <Link href="/" aria-label="직관GO 홈으로 이동">
        <span className={` ${mobileHeader ?? "text-inverse"}`}>직관</span>
        <span className="text-brand">GO</span>
      </Link>
    </div>
  );
}
