// src/app/page.tsx
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      {/* Hero (고양이+강아지 배너) */}
      <Hero />

      {/* 1. 핵심 베네핏 */}
      <section className="pp-wrap" style={{ paddingTop: 40 }}>
        <h2 style={{ fontWeight: 900, marginBottom: 12 }}>왜 PangpangPet 인가요?</h2>
        <div className="pp-cards pp-cards--3">
          <article className="pp-card">
            <h3 className="pp-card__title">레반 중심 포뮬러</h3>
            <p className="pp-card__desc">
              프럭토올리고당 기반 레반에 유산균을 더해 장 건강에 초점(초기 라인업).
            </p>
          </article>
          <article className="pp-card">
            <h3 className="pp-card__title">예방 중심 철학</h3>
            <p className="pp-card__desc">
              Prevention · Protection · Partnership 3P로 일관된 관리.
            </p>
          </article>
          <article className="pp-card">
            <h3 className="pp-card__title">신뢰 가능한 품질</h3>
            <p className="pp-card__desc">
              표준화된 제조·QC 체계로 안정적인 품질(협력 제조 포함).
            </p>
          </article>
        </div>
      </section>

      {/* 2. PangpangPet Club */}
      <section className="pp-wrap" style={{ paddingTop: 40 }}>
        <h2 style={{ fontWeight: 900, marginBottom: 10 }}>PangpangPet Club</h2>
        <p style={{ color: "var(--muted)", marginBottom: 16 }}>
          맞춤 급여 가이드, 품종/연령별 가이드, 캠페인 소식, 체험 이벤트 등
        </p>
        <div className="pf-grid">
          <article className="pf-card">
            <div className="pf-thumb">📘</div>
            <h3 className="pf-name">급여 가이드</h3>
            <p className="pp-card__desc">연령/체중/활동량에 맞는 급여표를 제공</p>
          </article>
          <article className="pf-card">
            <div className="pf-thumb">🎯</div>
            <h3 className="pf-name">맞춤 추천</h3>
            <p className="pp-card__desc">장 건강 목표에 맞춘 제품 추천</p>
          </article>
          <article className="pf-card">
            <div className="pf-thumb">🎟️</div>
            <h3 className="pf-name">체험/이벤트</h3>
            <p className="pp-card__desc">샘플/이벤트 소식 받아보기</p>
          </article>
        </div>
      </section>

      {/* 3. 브랜드 스토리 */}
      <section className="pp-wrap" style={{ paddingTop: 40 }}>
        <h2 style={{ fontWeight: 900, marginBottom: 10 }}>브랜드 스토리</h2>
        <div className="pp-cards">
          <article className="pp-card">
            <h3 className="pp-card__title">연구개발(R&D)</h3>
            <p className="pp-card__desc">레반/유산균 기반 포뮬러 설계 및 in-vitro 검증.</p>
          </article>
          <article className="pp-card">
            <h3 className="pp-card__title">제조 공정</h3>
            <p className="pp-card__desc">원료 추적/위생관리/자체 미생물 검사 등 표준화된 공정.</p>
          </article>
        </div>
      </section>

      {/* 4. 유기견 활동 */}
      <section className="pp-wrap" style={{ paddingTop: 40 }}>
        <h2 style={{ fontWeight: 900, marginBottom: 10 }}>유기견 활동</h2>
        <div className="pp-cards">
          <div className="pp-card">
            <h3 className="pp-card__title">진행 중 캠페인</h3>
            <p className="pp-card__desc">입양 촉진/인식 개선 캠페인을 진행 중입니다.</p>
          </div>
          <div className="pp-card">
            <h3 className="pp-card__title">예정 캠페인</h3>
            <p className="pp-card__desc">지역 협력으로 추가 캠페인을 준비하고 있습니다.</p>
          </div>
        </div>
      </section>
    </>
  );
}
{/* 1. 핵심 베네핏 (리디자인) */}
<section className="pp-wrap section-benefits">
  <h2 className="section-title">왜 PangpangPet 인가요?</h2>

  <div className="benefits-grid">
    {/* 01 */}
    <article className="benefit-card">
      <div className="benefit-top" aria-hidden />
      <div className="benefit-body">
        <div className="benefit-icon">🧪</div>
        <h3 className="benefit-title">레반 중심 포뮬러</h3>
        <p className="benefit-desc">
          프럭토올리고당 기반 레반에 유산균을 더해 장 건강에 초점(초기 라인업).
        </p>
      </div>
    </article>

    {/* 02 */}
    <article className="benefit-card">
      <div className="benefit-top benefit-top--blue" aria-hidden />
      <div className="benefit-body">
        <div className="benefit-icon">🛡️</div>
        <h3 className="benefit-title">예방 중심 철학</h3>
        <p className="benefit-desc">
          Prevention · Protection · Partnership 3P로 일관된 관리.
        </p>
      </div>
    </article>

    {/* 03 */}
    <article className="benefit-card">
      <div className="benefit-top benefit-top--orange" aria-hidden />
      <div className="benefit-body">
        <div className="benefit-icon">✅</div>
        <h3 className="benefit-title">신뢰 가능한 품질</h3>
        <p className="benefit-desc">
          표준화된 제조·QC 체계로 안정적인 품질(협력 제조 포함).
        </p>
      </div>
    </article>
  </div>
</section>
{/* 1. 핵심 베네핏 (리디자인) */}
<section className="pp-wrap section-benefits">
  <h2 className="section-title">왜 PangpangPet 인가요?</h2>

  <div className="benefits-grid">
    {/* 01 */}
    <article className="benefit-card">
      <div className="benefit-top" aria-hidden />
      <div className="benefit-body">
        <div className="benefit-icon">🧪</div>
        <h3 className="benefit-title">레반 중심 포뮬러</h3>
        <p className="benefit-desc">
          프럭토올리고당 기반 레반에 유산균을 더해 장 건강에 초점(초기 라인업).
        </p>
      </div>
    </article>

    {/* 02 */}
    <article className="benefit-card">
      <div className="benefit-top benefit-top--blue" aria-hidden />
      <div className="benefit-body">
        <div className="benefit-icon">🛡️</div>
        <h3 className="benefit-title">예방 중심 철학</h3>
        <p className="benefit-desc">
          Prevention · Protection · Partnership 3P로 일관된 관리.
        </p>
      </div>
    </article>

    {/* 03 */}
    <article className="benefit-card">
      <div className="benefit-top benefit-top--orange" aria-hidden />
      <div className="benefit-body">
        <div className="benefit-icon">✅</div>
        <h3 className="benefit-title">신뢰 가능한 품질</h3>
        <p className="benefit-desc">
          표준화된 제조·QC 체계로 안정적인 품질(협력 제조 포함).
        </p>
      </div>
    </article>
  </div>
</section>
