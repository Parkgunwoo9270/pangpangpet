// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PangpangPet",
  description: "레반 기반 반려동물 장 건강 사료",
  // ✅ 네이버 소유권 확인 메타태그 (App Router 방식)
  verification: {
    other: {
      "naver-site-verification": "여기에_네이버에서_제공한_값", // 따옴표 포함 그대로
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
