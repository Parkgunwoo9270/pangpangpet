// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Baloo_2, Noto_Sans_KR } from "next/font/google";

const baloo = Baloo_2({ subsets: ["latin"], weight: ["700","800"] });
const noto = Noto_Sans_KR({ subsets: ["latin"], weight: ["400","700","900"] });

export const metadata: Metadata = {
  title: "PangpangPet",
  description: "레반 기반 반려동물 장 건강 기능성 사료",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${noto.className} ${baloo.className}`}>
        {/* Organization 스키마 (SEO) */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PangpangPet",
              url: "https://www.pangpangpet.com",
              brand: "PangpangPet",
              slogan: "Prevention · Protection · Partnership",
            }),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
