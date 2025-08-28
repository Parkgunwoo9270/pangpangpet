// src/app/partners/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "협력 기관(입점) | PangpangPet",
  description:
    "PangpangPet과 함께하는 협력 기관 및 입점 파트너를 소개합니다. 지속 가능한 반려동물 헬스케어 생태계를 함께 만들어갑니다.",
  alternates: { canonical: "https://www.pangpangpet.com/partners" },
};

export default function PartnersPage() {
  return (
    <main style={{ padding: 60 }}>
      <h1>협력 기관(입점)</h1>
      <p>파트너 및 입점 문의는 문의 페이지를 이용해 주세요.</p>
    </main>
  );
}
