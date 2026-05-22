const pad = (value: number) => String(value).padStart(2, "0");

export const getWeatherBaseDateTime = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = pad(now.getMonth() + 1);
  const date = pad(now.getDate());

  const hour = now.getHours();
  const minute = now.getMinutes();

  let baseHour = hour;
  let baseDate = `${year}${month}${date}`;

  // 데이터 없음 방지
  if (minute < 45) {
    baseHour = hour - 1;
  }

  if (baseHour < 0) {
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);

    baseDate = `${yesterday.getFullYear()}${pad(yesterday.getMonth() + 1)}${pad(
      yesterday.getDate(),
    )}`;
    baseHour = 23;
  }

  return {
    base_date: baseDate,
    base_time: `${pad(baseHour)}30`,
  };
};
