export const getFoodBoothStadiumId = (stadiumId: string) => {
  if (stadiumId === "jamsil-lg" || stadiumId === "jamsil-ds") {
    return "jamsil";
  }

  return stadiumId;
};
