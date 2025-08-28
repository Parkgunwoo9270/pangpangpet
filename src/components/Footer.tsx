// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pp-foot">
      <div className="pp-wrap pp-foot__grid">
        <section>
          <h4>pangpangpet</h4>
          <p className="pp-muted">레반 기반 반려동물 장 건강 기능성 사료</p>
        </section>
        <section>
          <h5>브랜드</h5>
          <Link className="pp-foot__link" href="/brand">브랜드 소개</Link>
          <Link className="pp-foot__link" href="/esg">ESG 활동</Link>
        </section>
        <section>
          <h5>고객지원</h5>
          <Link className="pp-foot__link" href="/products">제품 보기</Link>
          <Link className="pp-foot__link" href="/partners">협력 기관</Link>
          <Link className="pp-foot__link" href="/contact">문의하기</Link>
        </section>
      </div>
      <div className="pp-wrap pp-foot__copy">© 2025 Realbeat · PangpangPet</div>
    </footer>
  );
}
