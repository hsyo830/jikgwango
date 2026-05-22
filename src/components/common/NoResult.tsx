"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

interface NoResultProps {
  message: string;
}
const NoResult = ({ message }: NoResultProps) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/lottie/NotFound.json")
      .then((res) => {
        return res.json();
      })
      .then(setAnimationData);
  }, []);

  if (!animationData) return null;

  return (
    <div className="flex w-full flex-col items-center justify-center pb-5 md:py-3">
      <div className="h-30 w-30 md:h-37 md:w-37">
        <Lottie animationData={animationData} loop autoplay />
      </div>
      <div className="text-sm text-gray-300 md:text-base">{message}</div>
    </div>
  );
};

export default NoResult;
