export const getWeatherTipByPty = (pty: string) => {
  if (pty === "1" || pty === "2" || pty === "5" || pty === "6")
    return "비가 내리고 있어요. 우산을 꼭 챙겨주세요.";
  if (pty === "3" || pty === "7") return "눈이 내리고 있어요. 따뜻하게 입고 오세요.";
  return "비 예보가 없어요. 가볍게 직관을 즐겨보세요.";
};
