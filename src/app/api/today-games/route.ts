import { NextRequest, NextResponse } from "next/server";

import { getCachedTodayGames } from "@/src/services/kbo/fetchTodayGamesFromKBO";

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  try {
    const data = await getCachedTodayGames(body);
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "경기 데이터를 불러오지 못했습니다." }, { status: 500 });
  }
};
