"use client";
import Link from "next/link";
import { useState } from "react";

const NAV = [
  { label: "회사정보", href: "/brand" },
  { label: "사업", href: "/business" },
  { label: "제품", href: "/products" },
  { label: "유기견활동", href: "/esg" },
  { label: "고객지원", href: "/support" },
];

export default function Header() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <header className="pp-header">
      <div className="pp-header__wrap">
        {/* 로고/브랜드 */}
        <Link href="/" className="pp-brand" aria-label="PangpangPet">
          <span className="pp-brand__logo">PP</span>
          {/* ⬇️ 텍스트 블록 추가 (브랜드명 + 슬로건) */}
          <span className="pp-brand__text">
            <strong className="pp-brand__name">PangpangPet</strong>
            <small className="pp-brand__slogan">Prevention · Protection · Partnership</small>
          </span>
        </Link>

        {/* GNB */}
        <nav aria-label="Global">
          <ul className="gnb" onMouseLeave={() => setActive(null)}>
            {NAV.map((m, i) => (
              <li key={m.href} className="gnb-item" onMouseEnter={() => setActive(i)}>
                <Link className="gnb-top" href={m.href}>
                  {m.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
