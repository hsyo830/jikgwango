import "./globals.css";

import type { Metadata } from "next";
import Script from "next/script";

import { pretendard } from "../styles/fonts";

export const metadata: Metadata = {
  title: "직관GO | 야구 직관 정보를 한번에!",
  description: "KBO Baseball Stadium Information Platform",
  openGraph: {
    title: "직관GO",
    description: "야구 직관 정보는 직관GO에서!",
    url: "https://jikgwango.vercel.app",
    siteName: "직관GO",
    images: [
      {
        url: "https://jikgwango.vercel.app/jikgwango-ogtag.png",
        width: 1200,
        height: 630,
        alt: "직관GO OG 이미지",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "직관GO",
    description: "야구 직관 정보는 직관GO에서!",
    images: ["/jikgwango-ogtag.png"],
  },
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
