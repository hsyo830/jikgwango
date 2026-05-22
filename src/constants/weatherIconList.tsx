import type { StaticImageData } from "next/image";

import clearCloudyIcon from "@/src/components/icons/weather/clear-cloudy.png";
import cloudyIcon from "@/src/components/icons/weather/cloudy.png";
import rainIcon from "@/src/components/icons/weather/rain.png";
import snowIcon from "@/src/components/icons/weather/snow.png";
import sunnyIcon from "@/src/components/icons/weather/sunny.png";

export const SKY_ICON: Record<string, StaticImageData> = {
  "1": sunnyIcon,
  "3": clearCloudyIcon,
  "4": cloudyIcon,
};

export const PTY_ICON: Record<string, StaticImageData> = {
  "0": sunnyIcon,
  "1": rainIcon,
  "2": snowIcon,
  "3": snowIcon,
  "5": rainIcon,
  "6": snowIcon,
  "7": snowIcon,
};
