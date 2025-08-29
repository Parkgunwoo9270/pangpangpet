// src/app/brand/page.tsx
export default function BrandPage() {
  return (
    <main className="pp-wrap" style={{ padding: "40px 0" }}>
      <h1 style={{ fontWeight: 900, fontSize: "2rem", marginBottom: "24px" }}>
        브랜드 소개
      </h1>

      {/* 🐾 Pangpangpet 브랜드 스토리 */}
      <section className="brand-story" style={{ marginTop: "32px" }}>
        <h2 style={{ fontWeight: 800, fontSize: "1.5rem", marginBottom: "16px" }}>
          🐾 Pangpangpet 브랜드 스토리
        </h2>
        <p>
          처음 만나는 날부터, 오래도록 함께할 수 있도록.
          Pangpangpet은 ‘예방이 최고의 보호’라는 믿음에서 시작되었습니다.
        </p>
        <p>
          말하지 못하는 반려동물은 몸의 이상을 작은 신호로 표현합니다.
          하지만 그 신호는 너무 작고 미묘해서 쉽게 지나치기 쉽습니다.
          Pangpangpet은 그 신호를 놓치지 않도록,
          건강을 미리 지켜주는 ‘예방 중심’ 솔루션을 제안합니다.
        </p>
        <p>
          단순한 제품을 넘어,
          우리는 ‘반려동물과 함께 살아가는 가족의 건강한 삶’을 설계하는 브랜드가 되고자 합니다.
          첫 만남의 설렘부터 노후의 잔잔한 순간까지,
          Pangpangpet은 그 모든 여정에 함께하며
          더 건강하고 오래도록 함께하는 삶을 지향합니다.
        </p>
        <p>
          우리의 제품 하나하나에는
          반려동물의 건강을 위한 과학적 신뢰,
          그리고 보호자의 마음을 담은 따뜻한 철학이 함께 담겨 있습니다.
        </p>
        <p>
          당신의 선택은, 단순한 소비가 아닙니다.
          그건 아이의 평생 건강을 지키는 선택이며,
          당신의 하루를 더 건강하고, 반려동물의 삶을 더 행복하게 만드는 출발점입니다.
        </p>
        <p>
          우리는 믿습니다.
          작은 신호에 귀 기울이는 것만으로도,
          우리의 하루는 충분히 달라질 수 있다는 것을.
        </p>
      </section>

      {/* === 3P Philosophy (카드형 디자인) === */}
      <section style={{ marginTop: 48 }}>
        <h2 style={{ fontWeight: 800, fontSize: "1.5rem", marginBottom: "20px", textAlign:"center" }}>
          3P Philosophy — Prevention · Protection · Partnership
        </h2>

        <div className="pp-cards pp-cards--3">
          {/* Prevention */}
          <article className="pp-card" style={{ borderTop: "4px solid #22c55e" }}>
            <h3 className="pp-card__title">🛡️ Prevention (예방)</h3>
            <p className="pp-card__desc">
              문제를 겪기 전에 미리 막는 것.  
              장 건강 중심의 영양 설계와 생활 습관 가이드로 작은 신호를 놓치지 않습니다.
            </p>
          </article>

          {/* Protection */}
          <article className="pp-card" style={{ borderTop: "4px solid #1d4ed8" }}>
            <h3 className="pp-card__title">🔒 Protection (보호)</h3>
            <p className="pp-card__desc">
              원료 추적·위생 검사·품질 관리 등  
              과학적이고 투명한 공정을 통해 안전한 제품을 보장합니다.
            </p>
          </article>

          {/* Partnership */}
          <article className="pp-card" style={{ borderTop: "4px solid #f59e0b" }}>
            <h3 className="pp-card__title">🤝 Partnership (동반)</h3>
            <p className="pp-card__desc">
              반려가족, 전문가, 지역사회와 함께하는 동반자.  
              유기견 캠페인과 ESG 활동으로 선한 영향력을 확장합니다.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
