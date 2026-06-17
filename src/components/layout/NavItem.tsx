"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  href: string;
  label: string;
  icon: React.ComponentType<{
    size?: number;
    className?: string;
  }>;
  variant: "side" | "bottom";
};

const NavItem = ({ href, label, icon: Icon, variant }: NavItemProps) => {
  const pathname = usePathname();

  const isActive = !!pathname && (href === "/" ? pathname === "/" : pathname.startsWith(href));

  if (variant === "bottom") {
    return (
      <Link
        href={href}
        aria-current={isActive ? "page" : undefined}
        className={`md:0.5 m-0.5 inline-flex w-12 flex-col items-center justify-center gap-0.5 md:w-15 md:gap-0.5`}
      >
        <Icon size={30} className={`text-inverse ${isActive ? "text-primary" : "text-muted"}`} />
        <span className={`text-[11px] md:text-[13px] ${isActive ? "text-primary" : "text-muted"}`}>
          {label}
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`flex items-center gap-3 rounded-xl p-3 ${isActive ? "bg-primary hover:bg-primary" : "hover:bg-primary-hover/50 bg-none"}`}
    >
      <Icon size={26} className="text-inverse" />
      <span className="text-inverse text-xl">{label}</span>
    </Link>
  );
};

export default NavItem;
