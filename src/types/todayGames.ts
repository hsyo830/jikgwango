import type { KboTeamCode } from "@/src/constants/kboTeams";

import { KboWeatherCode } from "../constants/kboWeather";

export type KboGame = {
  stadium: string;
  stadiumFullName: string;
  homeCode: KboTeamCode;
  homeName: string;
  awayCode: KboTeamCode;
  awayName: string;
  gameTime: string;
  gameSc: number;
  cancelSc: number;
  icon: KboWeatherCode;
  iconName: string;
  temp: number;
  rain: number;
  gameIcon: KboWeatherCode;
  gameIconName: string;
  gameTemp: number;
  gameRain: number;
  gameTimeOver: string;
  gameId: string;
  dust: string;
  dustCode: string;
};

export type KboTodayGamesResponse = {
  dateDiff: number;
  gameList: KboGame[];
};

export type GameParams = {
  gameDate: string;
  leId: string;
  srId: string;
  headerCk: string;
};
