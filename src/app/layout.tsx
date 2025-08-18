// 이미 있는 import와 메타는 유지하세요.
import { Noto_Sans_KR } from "next/font/google";
const noto = Noto_Sans_KR({ subsets: ["latin"], weight: ["400","500","700","900"], display: "swap" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={noto.className}>
      <body className="antialiased bg-white">{children}</body>
    </html>
  );
}
