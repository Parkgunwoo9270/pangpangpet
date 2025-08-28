// src/app/page.tsx
import Link from "next/link";

const hero = [
  { title: "레반 포뮬러 런칭", desc: "장 건강을 위한 핵심 설계", cta: "/products" },
  { title: "첫구매 웰컴 혜택", desc: "신규 고객 전용 쿠폰", cta: "/products" },
  { title: "정기구독 예정", desc: "꾸준한 장케어를 더 쉽게", cta: "/brand" },
];

const cats = [
  { name:"제품", href:"/products" },
  { name:"브랜드", href:"/brand" },
  { name:"ESG 유기견 활동", href:"/esg" },
  { name:"협력 기관(입점)", href:"/partners" },
  { name:"문의", href:"/contact" },
];

export default function Home() {
  return (
    <main>
      {/* 1) 히어로 캐러셀(단순 슬라이드) */}
      <section className="pf-hero">
        <div className="pf-wrap pf-hero-track">
          {hero.map((h,i)=>(
            <article className="pf-hero-card" key={i}>
              <h2>{h.title}</h2>
              <p>{h.desc}</p>
              <Link className="pf-btn pf-btn--dark" href={h.cta}>바로보기</Link>
            </article>
          ))}
        </div>
      </section>

      {/* 2) 카테고리 칩 가로 스크롤 */}
      <nav className="pf-chipbar" aria-label="주요 메뉴">
        <div className="pf-wrap pf-chip-scroll">
          {cats.map(c=>(
            <Link key={c.name} href={c.href} className="pf-chip">{c.name}</Link>
          ))}
        </div>
      </nav>

      {/* 3) 배송/편의 배지 */}
      <section className="pf-benefits">
        <div className="pf-wrap pf-benefit-grid">
          <div className="pf-benefit">⚡ 오늘주문 오늘도착(일부 지역)</div>
          <div className="pf-benefit">🌙 새벽배송</div>
          <div className="pf-benefit">🔁 정기구독 예정</div>
        </div>
      </section>

      {/* 4) 탭형 추천 섹션(샘플) */}
      <section className="pf-wrap pf-section">
        <header className="pf-section-head">
          <h3>추천 상품</h3>
          <div className="pf-tabs">
            <button className="active">강아지</button>
            <button>고양이</button>
          </div>
        </header>
        <div className="pf-grid">
          {/* TODO: 실제 상품 데이터 바인딩 */}
          {Array.from({length:6}).map((_,i)=>(
            <article className="pf-card" key={i}>
              <div className="pf-thumb">🐶</div>
              <h4 className="pf-name">레반 · 유산균 포뮬러 {i+1}</h4>
              <div className="pf-price"><b>29,900</b><s>35,000</s></div>
              <Link className="pf-btn pf-btn--ghost" href="/products">자세히</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
