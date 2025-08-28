// src/app/page.tsx
export default function HomePage(){
  return (
    <main className="pp-hero">
      <div className="pp-container pp-hero__grid">
        {/* 왼쪽 텍스트 */}
        <div>
          <h1 className="pp-hero__title">
            반려동물 장 건강, <span className="pp-text-gradient">예방이 먼저</span>
          </h1>
          <p className="pp-hero__desc">
            PangpangPet — 레반 기반 장 건강 기능성 사료. <br/>
            Prevention · Protection · Partnership
          </p>
          <div className="pp-hero__cta">
            <a href="/products" className="pp-btn pp-btn--primary">제품 보기</a>
            <a href="/brand" className="pp-btn pp-btn--ghost">브랜드 철학</a>
          </div>
          <ul className="pp-badges">
            <li>레반 포뮬러</li><li>유산균 블렌드</li><li>정기구독 예정</li>
          </ul>
        </div>

        {/* 오른쪽 이미지/노트 */}
        <div className="pp-hero__right">
          <div className="pp-mock">
            <div className="pp-mock__emoji">🐶🐱</div>
          </div>
          <div className="pp-mock__caption pp-muted">PangpangPet 제품 미리보기</div>

          <div className="pp-note">
            <p className="pp-note__label">브랜드 철학</p>
            <p className="pp-note__text">Prevention · Protection · Partnership</p>
          </div>
        </div>
      </div>
    </main>
  );
}
