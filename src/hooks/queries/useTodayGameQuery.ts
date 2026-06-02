import { useQuery } from "@tanstack/react-query";

import { getTodayGames } from "@/src/services/kbo/getTodayGames";
import { GameParams } from "@/src/types/todayGames";

export const useTodayGame = (params: GameParams) => {
  return useQuery({
    queryKey: ["todayGames", params],
    queryFn: () => {
      return getTodayGames(params);
    },
  });
};
