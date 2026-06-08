import "./globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { cn } from "@/src/lib/utils";
import ReactQueryProvider from "@/src/providers/ReactQueryProvider";

import { pretendard } from "../styles/fonts";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
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
    <html
      lang="ko"
      className={cn("h-full", pretendard.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col font-sans antialiased">
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
