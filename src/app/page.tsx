export default function Home() {
  return (
    <>
      {/* 1) 풀브리드 히어로 배너 (라운드+화이트 아웃라인+그림자) */}
      <section className="section-hero">
        <div className="hero-rail">
          <a className="hero-frame" href="/products">
            {/* 배경 이미지/영상이 있으면 여기 넣으세요 */}
            {/* <img src="/img/hero-bg.jpg" alt="" /> */}
            <div className="hero-body">
              <h1 className="hero-title">레반 포뮬러 런칭</h1>
              <p className="hero-sub">장 건강을 위한 핵심 설계</p>
              <span className="hero-cta">바로보기</span>
            </div>
          </a>
        </div>
      </section>

      {/* 2) 칩 네비게이션 (제품/브랜드/ESG/협력/문의) */}
      <nav className="nav-chips">
        <a href="/products">제품</a>
        <a href="/brand">브랜드</a>
        <a href="/esg">ESG 유기견 활동</a>
        <a href="/partners">협력 기관(입점)</a>
        <a href="/contact">문의</a>
      </nav>

      {/* 3) 공지/혜택 바 (간단 예시) */}
      <section className="pp-wrap pf-benefit-grid" style={{paddingTop:12}}>
        <div className="pf-benefit">⚡ 오늘주문 오늘도착(일부 지역)</div>
        <div className="pf-benefit">🌙 새벽배송</div>
        <div className="pf-benefit">📦 정기구독 예정</div>
      </section>

      {/* 4) 추천 상품 그리드 (플레이스홀더) */}
      <section className="pp-wrap" style={{paddingTop:20}}>
        <h2 style={{fontWeight:900, margin:'0 0 10px'}}>추천 상품</h2>
        <div className="pf-grid pf-grid--cards">
          {Array.from({length:8}).map((_,i)=>(
            <article key={i} className="pf-card">
              <div className="pf-thumb">🐶</div>
              <h3 className="pf-name">PangpangProbiotics {i+1}</h3>
              <div className="pf-price"><b>₩29,000</b><s>₩35,000</s></div>
              <a className="pf-btn pf-btn--ghost" href="/products">자세히 보기</a>
            </article>
          ))}
        </div>
      </section>

      {/* 5) ESG/파트너 티저 (간단 예시) */}
      <section className="pp-wrap" style={{paddingTop:28}}>
        <div className="pp-cards">
          <div className="pp-card">
            <h3 className="pp-card__title">ESG 캠페인</h3>
            <p className="pp-card__desc">유기견 인식 개선·입양 연계 활동을 진행합니다.</p>
            <a className="pp-btn pp-btn--primary" href="/esg">자세히 보기</a>
          </div>
          <div className="pp-card">
            <h3 className="pp-card__title">협력 기관</h3>
            <p className="pp-card__desc">파트너와 함께 안전한 제조·품질을 약속합니다.</p>
            <a className="pp-btn pp-btn--ghost" href="/partners">파트너 보기</a>
          </div>
          <div className="pp-card">
            <h3 className="pp-card__title">문의</h3>
            <p className="pp-card__desc">제품·협업 문의를 남겨주세요.</p>
            <a className="pp-btn pp-btn--dark" href="/contact">문의하기</a>
          </div>
        </div>
      </section>
    </>
  );
}
