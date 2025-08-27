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
        <title>PangpangPet</title>

        {/* ✅ 네이버 소유권 확인 */}
        <meta
          name="naver-site-verification"
          content="5c664ee06e402c9db7cc239b8276896c77c9a708"
        />

        {/* ✅ 구글 소유권 확인 */}
        <meta
          name="google-site-verification"
          content="lPFc5jlkp9V83bm-hoSmTEiSVScVYV1VHM6thkA4lGc"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
