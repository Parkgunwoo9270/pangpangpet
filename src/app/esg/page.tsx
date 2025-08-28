// src/app/esg/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESG & 유기견 활동 | PangpangPet",
  description:
    "PangpangPet은 ESG 경영과 유기견 보호 활동을 통해 반려동물과 사회가 함께 건강해지는 문화를 만듭니다.",
  alternates: { canonical: "https://www.pangpangpet.com/esg" },
};

export default function EsgPage() {
  return (
    <main style={{ padding: 60 }}>
      <h1>ESG · 유기견 활동</h1>
      <p>유기견 보호/입양 캠페인, 인식 개선 활동을 소개합니다.</p>
    </main>
  );
}
