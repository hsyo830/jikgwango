import { NextRequest, NextResponse } from "next/server";

import { getCachedStadiumWeather } from "@/src/services/weather/fetchStadiumWeather";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;

  const params = {
    stadiumId: searchParams.get("stadiumId") ?? "",
    base_date: searchParams.get("base_date") ?? "",
    base_time: searchParams.get("base_time") ?? "",
    nx: Number(searchParams.get("nx")),
    ny: Number(searchParams.get("ny")),
  };

  try {
    const data = await getCachedStadiumWeather(params);
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "날씨 정보를 불러오지 못했습니다." }, { status: 500 });
  }
};
