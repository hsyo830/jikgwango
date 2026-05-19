import "./globals.css";

import type { Metadata } from "next";
import Script from "next/script";

import { pretendard } from "../styles/fonts";

export const metadata: Metadata = {
  title: "직관GO | 야구 직관 정보를 한번에!",
  description: "KBO Baseball Stadium Information Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} h-full`} suppressHydrationWarning>
      <head>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}&autoload=false&libraries=services`}
          strategy="beforeInteractive"
        />
      </head>
      <body className="flex min-h-full flex-col font-sans antialiased">{children}</body>
    </html>
  );
}
