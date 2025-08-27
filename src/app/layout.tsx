// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PangpangPet",
  description: "레반 기반 반려동물 장 건강 사료",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* <meta name="naver-site-verification" content="5c664ee06e402c9db7cc239b8276896c77c9a708" /> */}
        <meta name="naver-site-verification" content="여기에_네이버에서_준_값" />
      </head>
      <body>{children}</body>
    </html>
  );
}
