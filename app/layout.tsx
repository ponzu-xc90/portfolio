import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Inter は next/font で自己ホスト、日本語フォントは CDN で読み込む
const inter = Inter({
  variable: "--font-en",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "菊地 秀平 | Portfolio",
  description:
    "発想力×論理思考×AIで、ビジネスの現場に新しい視点を持ち込む人材・菊地秀平のポートフォリオです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
