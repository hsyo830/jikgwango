export const getWeatherTipByRainProbability = (pop: number) => {
  if (pop >= 70) return "강수 확률이 높습니다. 우산을 꼭 챙겨주세요.";
  if (pop >= 40) return "비가 올 수 있어요. 작은 우산을 챙기면 좋아요.";
  return "강수 확률이 낮습니다. 가볍게 직관을 즐겨보세요.";
};
