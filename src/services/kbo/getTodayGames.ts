import axios from "axios";

import { INTERNAL_API_ENDPOINTS } from "@/src/constants/apiEndPoint";
import { GameParams, KboTodayGamesResponse } from "@/src/types/todayGames";

export const getTodayGames = async (params: GameParams): Promise<KboTodayGamesResponse> => {
  const response = await axios.post(INTERNAL_API_ENDPOINTS.todayGames, params);

  return response.data;
};
