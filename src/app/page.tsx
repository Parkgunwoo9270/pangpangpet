// src/app/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PangpangPet | 반려동물 장 건강 기능성 사료",
  description:
    "PangpangPet은 레반 기반 반려동물 장 건강 기능성 사료 브랜드입니다. 장 건강, 소화 흡수, 면역 균형을 지켜 반려동물의 행복한 삶을 함께합니다.",
  alternates: { canonical: "https://www.pangpangpet.com/" },
};

export default function HomePage() {
  return (
    <main style={{ padding: 60 }}>
      <h1>메인 페이지</h1>
      <p>PangpangPet 홈페이지에 오신 것을 환영합니다.</p>
    </main>
  );
}
