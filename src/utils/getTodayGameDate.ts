export const getTodayGameDate = () => {
  const pad = (value: number) => String(value).padStart(2, "0");

  const today = new Date();

  const year = today.getFullYear();
  const month = pad(today.getMonth() + 1);
  const day = pad(today.getDate());

  return `${year}${month}${day}`;
};
