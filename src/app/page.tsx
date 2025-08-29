// src/app/page.tsx
export default function Home() {
  return (
    <>
      {/* Hero 배너 */}
      <section className="section-hero">
        <div className="hero-rail">
          <div className="hero-frame">
            <img src="/img/hero.jpg" alt="PangpangPet Hero" />
            <div className="hero-body">
              <h1 className="hero-title">PangpangPet</h1>
              <p className="hero-sub">
                예방 중심 반려동물 헬스케어 · 레반 기반 장 건강 기능성 사료
              </p>
              <a href="/brand" className="hero-cta">
                브랜드 알아보기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Business */}
      <section className="pp-wrap" style={{ paddingTop: 40 }}>
        <h2 style={{ fontWeight: 900, marginBottom: 10 }}>사업 영역</h2>
        <div className="pp-cards pp-cards--3">
          <article className="pp-card pp-card--line">
            <h3 className="pp-card__title">연구개발 (R&D)</h3>
            <p className="pp-card__desc">
              레반·유산균 기반 성분 연구, in-vitro 시험 및 포뮬러 개발
            </p>
          </article>
          <article className="pp-card pp-card--line">
            <h3 className="pp-card__title">제조 공정</h3>
            <p className="pp-card__desc">
              위생 공정·원료 추적·QC 체계로 안전하고 건강한 펫푸드 생산
            </p>
          </article>
        </div>
      </section>

      {/* Products */}
      <section className="pp-wrap" style={{ paddingTop: 40 }}>
        <h2 style={{ fontWeight: 900, marginBottom: 10 }}>제품</h2>
        <div className="cat-grid">
          {[
            { name: "츄르", img: "/img/cat-churu.jpg" },
            { name: "젤타입", img: "/img/cat-gel.jpg" },
            { name: "주식파우치", img: "/img/cat-pouch.jpg" },
            { name: "죽·레토르트", img: "/img/cat-retort.jpg" },
            { name: "저키", img: "/img/cat-jerky.jpg" },
            { name: "사료", img: "/img/cat-feed.jpg" },
          ].map((c) => (
            <a key={c.name} className="cat" href="/products">
              <img src={c.img} alt={c.name} />
              <span className="cat__label">{c.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* ESG */}
      <section className="pp-wrap" style={{ paddingTop: 40 }}>
        <h2 style={{ fontWeight: 900, marginBottom: 10 }}>유기견 활동</h2>
        <div className="pp-cards">
          <div className="pp-card">
            <h3 className="pp-card__title">진행 중 캠페인</h3>
            <p className="pp-card__desc">
              유기견 입양 촉진 및 인식 개선 캠페인을 진행하고 있습니다.
            </p>
            <a className="pp-btn pp-btn--primary" href="/esg">
              자세히 보기
            </a>
          </div>
          <div className="pp-card">
            <h3 className="pp-card__title">예정 캠페인</h3>
            <p className="pp-card__desc">
              지역 사회와 협력하여 추가적인 캠페인을 준비 중입니다.
            </p>
            <a className="pp-btn pp-btn--ghost" href="/esg">
              캠페인 보기
            </a>
          </div>
        </div>
      </section>

      {/* 고객지원 */}
      <section className="pp-wrap" style={{ paddingTop: 40 }}>
        <h2 style={{ fontWeight: 900, marginBottom: 10 }}>고객지원</h2>
        <div className="pp-cards">
          <a className="pp-card" href="/support">
            <h3 className="pp-card__title">공지사항</h3>
            <p className="pp-card__desc">View more +</p>
          </a>
          <a className="pp-card" href="/contact">
            <h3 className="pp-card__title">문의하기</h3>
            <p className="pp-card__desc">View more +</p>
          </a>
        </div>
      </section>
    </>
  );
}
