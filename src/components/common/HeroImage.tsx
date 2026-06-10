"use client";

import Image from "next/image";

import LightImage from "@/public/image/hero/PageHeroLightGR.png";
import NightImage from "@/public/image/hero/PageHeroNight.png";
import useTheme from "@/src/hooks/theme/useTheme";

export const HeroImage = () => {
  const { theme } = useTheme();

  const src = theme === "light" ? LightImage : NightImage;

  return <Image src={src} alt="hero background" fill className="object-cover object-bottom" />;
};
