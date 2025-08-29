export default function Home() {
  return (
    <>
      {/* 풀브리드 히어로 (라운드+화이트 아웃라인+그림자) */}
      <section className="section-hero">
        <div className="hero-rail">
          <a className="hero-frame" href="/brand">
            {/* 필요하면 이미지/영상 */}
            {/* <img src="/img/hero.jpg" alt="" /> */}
            <div className="hero-body">
              <h1 className="hero-title">About Us</h1>
              <p className="hero-sub">
                World No.1 Pet Food Company · 장 건강을 위한 핵심 설계
              </p>
              <span className="hero-cta">View more +</span>
            </div>
          </a>
        </div>
      </section>

      {/* Business (3분할 카드) */}
      <section className="pp-wrap" style={{ paddingTop: 28 }}>
        <h2 style={{ fontWeight: 900, margin: "0 0 10px" }}>Business</h2>
        <p style={{ color: "var(--muted)", margin: "0 0 16px" }}>
          Total Solution Process
        </p>
        <div className="pp-cards pp-cards--3">
          <article className="pp-card pp-card--line">
            <h3 className="pp-card__title">R&amp;D</h3>
            <p className="pp-card__desc">
              레반·유산균 기반 성분 연구, in-vitro 시험 및 포뮬러 개발
            </p>
          </article>
          <article className="pp-card pp-card--line">
            <h3 className="pp-card__title">Manufacturing Process</h3>
            <p className="pp-card__desc">
              위생 공정·원료 추적·QC 체계로 건강한 펫푸드 생산
            </p>
          </article>
          <article className="pp-card pp-card--line">
            <h3 className="pp-card__title">OEM &amp; ODM</h3>
            <p className="pp-card__desc">
              의뢰→제조→출하까지 파트너 맞춤 협업
            </p>
          </article>
        </div>
      </section>

      {/* Products (카테고리 그리드) */}
      <section className="pp-wrap" style={{ paddingTop: 28 }}>
        <h2 style={{ fontWeight: 900, margin: "0 0 10px" }}>Products</h2>
        <p style={{ color: "var(--muted)", margin: "0 0 16px" }}>
          Manufactures
        </p>

        <div className="cat-grid">
          {[
            { name: "츄르", img: "/img/cat-churu.jpg" },
            { name: "젤타입", img: "/img/cat-gel.jpg" },
            { name: "주식파우치", img: "/img/cat-pouch.jpg" },
            { name: "죽, 레토르트", img: "/img/cat-retort.jpg" },
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

      {/* 문의/오시는 길 카드 */}
      <section className="pp-wrap" style={{ paddingTop: 28 }}>
        <div className="pp-cards">
          <a className="pp-card" href="/contact">
            <h3 className="pp-card__title">문의사항</h3>
            <p className="pp-card__desc">View more +</p>
          </a>
          <a className="pp-card" href="/brand#map">
            <h3 className="pp-card__title">오시는 길</h3>
            <p className="pp-card__desc">View more +</p>
          </a>
        </div>
      </section>
    </>
  );
}
