// src/app/page.tsx (히어로 부분만 변경)
<section className="section-hero">
  <div className="hero-rail">
    <div className="hero-frame hero-frame--photo">{/* ← 추가된 클래스 */}
      <img src="/img/hero.jpg" alt="PangpangPet Hero" />
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
