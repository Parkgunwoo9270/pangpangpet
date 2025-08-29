"use client";
import Link from "next/link";
import { useState } from "react";

const NAV = [
  {
    label: "회사정보",
    href: "/brand",
    children: [
      { label: "인사말", href: "/brand#about" },
      { label: "이념과 비전", href: "/brand#vision" },
      { label: "연혁", href: "/brand#timeline" },
      { label: "오시는 길", href: "/brand#map" },
    ],
  },
  {
    label: "사업",
    href: "/business",
    children: [
      { label: "사업안내", href: "/business" },
      { label: "사업장 소개", href: "/partners" },
      { label: "OEM & ODM", href: "/business#oem" },
    ],
  },
  {
    label: "제품",
    href: "/products",
    children: [
      { label: "강아지", href: "/products?type=dog" },
      { label: "고양이", href: "/products?type=cat" },
    ],
  },
  {
    label: "고객지원",
    href: "/support/notice",
    children: [
      { label: "공지사항", href: "/support/notice" },
      { label: "문의하기", href: "/contact" },
    ],
  },
  {
    label: "ESG",
    href: "/esg",
    children: [
      { label: "ESG 성명서", href: "/esg" },
      { label: "소통채널", href: "/contact" },
    ],
  },
];

export default function Header() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <header className="pp-head">
      <div className="pp-wrap pp-head__inner">
        <Link href="/" className="pp-brand" aria-label="PangpangPet">
          <span className="pp-brand__logo">PP</span>
          <span className="pp-brand__name">PangpangPet</span>
        </Link>

        <nav aria-label="Global">
          <ul className="gnb">
            {NAV.map((m, i) => (
              <li
                key={m.label}
                className="gnb-item"
                onMouseEnter={() => setOpen(i)}
                onMouseLeave={() => setOpen((v) => (v === i ? null : v))}
              >
                <Link className="gnb-top" href={m.href}>
                  {m.label}
                </Link>
                {m.children && (
                  <ul className={`gnb-sub ${open === i ? "show" : ""}`}>
                    {m.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href}>{c.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
