// src/app/brand/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "브랜드 스토리 | PangpangPet",
  description:
    "PangpangPet은 '예방이 최고의 보호'라는 철학으로 반려동물의 건강을 지키는 브랜드입니다. 보호자와 반려동물이 오래도록 건강하게 함께할 수 있도록 연구합니다.",
  alternates: { canonical: "https://www.pangpangpet.com/brand" },
};

export default function BrandPage() {
  return (
    <main style={{ padding: 60 }}>
      <h1>브랜드 소개</h1>
      <p>예방 중심 헬스케어 철학(Prevention · Protection · Partnership).</p>
    </main>
  );
}
