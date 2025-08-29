export default function Hero() {
  return (
    <section className="hero-brand">
      <div className="hero-wrap">
        <div className="hero-grid">
          {/* 왼쪽 텍스트 */}
          <div>
            <h1 className="hero-title">레반 포뮬러 런칭</h1>
            <p className="hero-sub">장 건강을 위한 핵심 설계</p>
            <div className="hero-cta">
              <a href="/products" className="btn-cta btn-cta--dark">바로보기</a>
            </div>
            <ul className="badges">
              <li>제품</li>
              <li>브랜드</li>
              <li>ESG 유기견 활동</li>
              <li>협력 기관</li>
              <li>문의</li>
            </ul>
          </div>

          {/* 오른쪽 카드 (기울어진 박스) */}
          <div className="mock-tilt">
            <span className="mock-emoji">🐶</span>
            <span className="ribbon">신제품</span>
          </div>
        </div>
      </div>
      <div className="hero-wave"></div>
    </section>
  );
}
