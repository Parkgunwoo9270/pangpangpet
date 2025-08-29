// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="section-hero">
      <div className="hero-rail">
        <div className="hero-frame hero-frame--photo">
          {/* 캐시 우회를 위해 ?v=3 붙였습니다 */}
          <img src="/img/hero.jpg?v=3" alt="PangpangPet Hero" />
          <div className="hero-body">
            <h1 className="hero-title">PangpangPet Club</h1>
            <p className="hero-sub">
              예방 중심 반려동물 헬스케어 · 레반 기반 장 건강 기능성 사료
            </p>
            <a href="/brand" className="hero-cta">브랜드 알아보기</a>
          </div>
        </div>
      </div>
    </section>
  );
}
