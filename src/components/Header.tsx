// src/components/Header.tsx
'use client';
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "홈" },
  { href: "/products", label: "제품" },
  { href: "/brand", label: "브랜드" },
  { href: "/esg", label: "ESG 활동" },
  { href: "/partners", label: "협력 기관" },
  { href: "/contact", label: "문의" },
];

export default function Header(){
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const active = (href:string)=> href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="pp-header">
      <div className="pp-container pp-header__wrap">
        <Link href="/" className="pp-brand" aria-label="PangpangPet 홈">
          <div className="pp-brand__logo">PP</div>
          <div className="pp-brand__name">PangpangPet</div>
        </Link>

        <button className="pp-btn pp-btn--ghost" onClick={()=>setOpen(!open)}>
          메뉴
        </button>

        <nav className="pp-nav" style={{display: open ? "flex" : undefined}}>
          {NAV.map(n=>(
            <Link key={n.href} href={n.href} className={active(n.href) ? "active" : ""}>{n.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
