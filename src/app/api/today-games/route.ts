import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

import { KBO_API_ENDPOINTS } from "@/src/constants/apiEndPoint";

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const formData = new URLSearchParams();

  formData.append("gameDate", body.gameDate);
  formData.append("leId", body.leId);
  formData.append("srId", body.srId);
  formData.append("headerCk", body.headerCk);

  const response = await axios.post(KBO_API_ENDPOINTS.todayGames, formData.toString(), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Requested-With": "XMLHttpRequest",
      Referer: KBO_API_ENDPOINTS.schedulePage,
      "User-Agent": "Mozilla/5.0",
    },
    responseType: "text",
  });

  const data = JSON.parse(response.data);

  return NextResponse.json(data);
};
