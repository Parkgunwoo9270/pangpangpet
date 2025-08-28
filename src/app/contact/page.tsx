// src/app/contact/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의하기 | PangpangPet 고객센터",
  description:
    "제품, 제휴, 입점 관련 문의는 PangpangPet 고객센터를 통해 남겨주세요. 빠르고 친절하게 안내드리겠습니다.",
  alternates: { canonical: "https://www.pangpangpet.com/contact" },
};

export default function ContactPage() {
  return (
    <main style={{ padding: 60 }}>
      <h1>문의하기</h1>
      <p>이메일: contact@pangpangpet.kr</p>
    </main>
  );
}
