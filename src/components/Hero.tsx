export default function Hero() {
  return (
    <section className="hero-split">
      <div className="hero-split__wrap">
        {/* 왼쪽: 카피 영역(밝은 배경) */}
        <div className="hero-copy">
          <h1 className="hero-copy__title">
            <span className="accent">건강</span>에 대한 — 바른 집념
          </h1>
          <p className="hero-copy__sub">
            반려동물마다 필요한 영양은 다릅니다. PangpangPet은
            반려묘와 반려견이 최상의 장 건강 상태를 유지하도록 돕는
            <b> 예방 중심 포뮬러</b>를 세밀하게 설계합니다.
          </p>

          <div className="hero-copy__cta">
            <a href="/products" className="cta-red">맞춤 사료 찾기</a>
            <a href="/brand" className="cta-ghost">브랜드 이야기</a>
          </div>
        </div>

        {/* 오른쪽: 큰 실사 이미지 */}
        <div className="hero-photo">
          <img src="/img/hero.jpg?v=5" alt="PangpangPet" />
        </div>
      </div>
    </section>
  );
}
