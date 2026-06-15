import axios from "axios";
import { unstable_cache } from "next/cache";

import { KBO_API_ENDPOINTS } from "@/src/constants/apiEndPoint";
import { GameParams } from "@/src/types/todayGames";

const fetchTodayGamesFromKBO = async (params: GameParams) => {
  const formData = new URLSearchParams();
  formData.append("gameDate", params.gameDate);
  formData.append("leId", params.leId);
  formData.append("srId", params.srId);
  formData.append("headerCk", params.headerCk);

  const response = await axios.post(KBO_API_ENDPOINTS.todayGames, formData.toString(), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Requested-With": "XMLHttpRequest",
      Referer: KBO_API_ENDPOINTS.schedulePage,
      "User-Agent": "Mozilla/5.0",
    },
    responseType: "text",
  });

  console.log("KBO status:", response.status);
  console.log("KBO raw response:", response.data);

  return JSON.parse(response.data);
};

export const getCachedTodayGames = unstable_cache(fetchTodayGamesFromKBO, ["today-games"], {
  revalidate: 60,
});
