// src/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="pp-head">
      <div className="pp-wrap pp-head__inner">
        <Link href="/" className="pp-brand">
          <span className="pp-brand__logo">PP</span>
          <strong className="pp-brand__name">PangpangPet</strong>
        </Link>
        <nav className="pp-gnb" aria-label="주요 메뉴">
          <Link href="/products">제품</Link>
          <Link href="/brand">브랜드</Link>
          <Link href="/esg">ESG 활동</Link>
          <Link href="/partners">협력 기관</Link>
          <Link href="/contact">문의</Link>
        </nav>
      </div>
    </header>
  );
}
