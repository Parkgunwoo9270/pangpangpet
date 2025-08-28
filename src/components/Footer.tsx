// src/components/Footer.tsx
import Link from "next/link";

export default function Footer(){
  return (
    <footer className="pp-footer">
      <div className="pp-container pp-footer__grid">
        <div>
          <div className="pp-footer__title">PangpangPet</div>
          <p className="pp-muted">레반 기반 반려동물 장 건강 기능성 사료</p>
        </div>
        <div>
          <div className="pp-footer__title">브랜드</div>
          <Link href="/brand" className="pp-footer__link">브랜드 소개</Link>
          <Link href="/esg" className="pp-footer__link">ESG 활동</Link>
        </div>
        <div>
          <div className="pp-footer__title">고객지원</div>
          <Link href="/products" className="pp-footer__link">제품 보기</Link>
          <Link href="/partners" className="pp-footer__link">협력 기관</Link>
          <Link href="/contact" className="pp-footer__link">문의하기</Link>
        </div>
      </div>
      <div className="pp-footer__copy">© {new Date().getFullYear()} Realbeat · PangpangPet</div>
    </footer>
  );
}
