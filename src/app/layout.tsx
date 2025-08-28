// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PangpangPet",
  description: "레반 기반 반려동물 장 건강 기능성 사료",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* (유지) 네이버/구글 소유권 메타태그가 있다면 여기 유지 */}
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
