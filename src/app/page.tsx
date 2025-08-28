// src/app/page.tsx
export default function HomePage(){
  return (
    <main className="hero-brand">
      <div className="hero-wrap">
        <div className="hero-grid">
          {/* 왼쪽: 카피/버튼 */}
          <div>
            <h1 className="hero-title">
              예방이 최고의 보호입니다.
            </h1>
            <p className="hero-sub">
              레반 기반 포뮬러와 유산균 블렌드로<br/>
              반려동물의 장 건강을 매일 꾸준히.
            </p>
            <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              <a className="btn-cta btn-cta--dark" href="/products">제품 보기</a>
              <a className="btn-cta btn-cta--light" href="/brand">브랜드 철학</a>
            </div>
            <ul className="badges">
              <li>레반 포뮬러</li>
              <li>유산균 블렌드</li>
              <li>정기구독 예정</li>
            </ul>
          </div>

          {/* 오른쪽: 기울어진 카드 + 리본 */}
          <div>
            <div className="mock-tilt">
              <div className="ribbon">PangpangPet</div>
              <div className="mock-emoji">🐶🐱</div>
            </div>
            <div className="note">Prevention · Protection · Partnership</div>
          </div>
        </div>
      </div>
      <div className="hero-wave" />
    </main>
  );
}
