// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="hero">
      {/* 배경 이미지 */}
      <img src="/img/hero.jpg?v=4" alt="PangpangPet Hero" className="hero-bg" />
      {/* 어두운 오버레이 (가독성) */}
      <div className="hero-overlay" />

      {/* 중앙 컨텐츠 */}
      <div className="hero-content">
        <h1 className="hero-title">PangpangPet Club</h1>
        <p className="hero-sub">
          예방 중심 반려동물 헬스케어 · 레반 기반 장 건강 기능성 사료
        </p>

        <div className="hero-cta-group">
          <a href="/brand" className="hero-cta hero-cta--primary">브랜드 알아보기</a>
          <a href="/products" className="hero-cta hero-cta--light">제품 보러가기</a>
        </div>
      </div>
    </section>
  );
}
