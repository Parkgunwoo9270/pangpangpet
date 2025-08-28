// src/components/Header.tsx
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [q, setQ] = useState("");
  return (
    <header className="pf-header">
      <div className="pf-wrap">
        <Link href="/" className="pf-logo">PP</Link>
        <form action="/search" className="pf-search">
          <input
            name="q" value={q} onChange={e=>setQ(e.target.value)}
            placeholder="레반 · 유산균 · 브랜드 검색"
            aria-label="검색"
          />
          <button type="submit">검색</button>
        </form>
        <nav className="pf-icons">
          <Link href="/cart" aria-label="장바구니">🛒</Link>
          <button aria-label="메뉴" className="pf-burger">☰</button>
        </nav>
      </div>
    </header>
  );
}
