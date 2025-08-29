// src/app/page.tsx
export default function Home() {
  return (
    <>
      {/* 0. 라운드 프레임 히어로 (Royal Canin 이벤트형) */}
      <section className="section-hero">
        <div className="hero-rail">
          <div className="hero-frame">
            {/* 배경 이미지/영상 중 택1: 이미지 예시 */}
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

      {/* 1. 핵심 베네핏 (3~4가지) */}
      <section className="pp-wrap" style={{ paddingTop: 40 }}>
        <h2 style={{ fontWeight: 900, marginBottom: 12 }}>왜 PangpangPet 인가요?</h2>
        <div className="pp-cards pp-cards--3">
          <article className="pp-card">
            <h3 className="pp-card__title">레반 중심 포뮬러</h3>
            <p className="pp-card__desc">프럭토올리고당 기반 레반에 유산균을 더해 장 건강에 초점(초기 라인업).</p>
          </article>
          <article className="pp-card">
            <h3 className="pp-card__title">예방 중심 철학</h3>
            <p className="pp-card__desc">Prevention · Protection · Partnership 3P로 일관된 관리.</p>
          </article>
          <article className="pp-card">
            <h3 className="pp-card__title">신뢰 가능한 품질</h3>
            <p className="pp-card__desc">표준화된 제조·QC 체계로 안정적인 품질(협력 제조 포함).</p>
          </article>
        </div>
      </section>

      {/* 2. 프로그램/클럽 소개 섹션 (Royal Canin Club 유사 흐름) */}
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
            <a className="pf-btn pf-btn--ghost" href="/products">자세히</a>
          </article>
          <article className="pf-card">
            <div className="pf-thumb">🎯</div>
            <h3 className="pf-name">맞춤 추천</h3>
            <p className="pp-card__desc">장 건강 목표에 맞춘 제품 추천</p>
            <a className="pf-btn pf-btn--ghost" href="/products">자세히</a>
          </article>
          <article className="pf-card">
            <div className="pf-thumb">🎟️</div>
            <h3 className="pf-name">체험/이벤트</h3>
            <p className="pp-card__desc">샘플/이벤트 소식 받아보기</p>
            <a className="pf-btn pf-btn--ghost" href="/support">자세히</a>
          </article>
        </div>
      </section>

      {/* 3. 제품 카테고리 타일 (이미지+레이블) */}
      <section className="pp-wrap" style={{ paddingTop: 40 }}>
        <h2 style={{ fontWeight: 900, marginBottom: 10 }}>제품 카테고리</h2>
        <div className="cat-grid">
          {[
            { name: "츄르", img: "/img/cat-churu.jpg" },
            { name: "젤타입", img: "/img/cat-gel.jpg" },
            { name: "주식파우치", img: "/img/cat-pouch.jpg" },
            { name: "죽·레토르트", img: "/img/cat-retort.jpg" },
            { name: "저키", img: "/img/cat-jerky.jpg" },
            { name: "사료", img: "/img/cat-feed.jpg" },
          ].map((c) => (
            <a key={c.name} className="cat" href="/products">
              <img src={c.img} alt={c.name} />
              <span className="cat__label">{c.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* 4. 스토리 섹션(브랜드 철학/연구/제조) – 레퍼런스의 About/Business 흐름 */}
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

      {/* 5. 파트너/후원(있다면) */}
      <section className="pp-wrap" style={{ paddingTop: 40 }}>
        <h2 style={{ fontWeight: 900, marginBottom: 10 }}>협력 파트너</h2>
        <div className="pf-benefit-grid">
          <div className="pf-benefit">🏢 제조/품질 파트너</div>
          <div className="pf-benefit">🔬 연구/검증 파트너</div>
          <div className="pf-benefit">🤝 유통/커머스 파트너</div>
        </div>
      </section>

      {/* 6. FAQ (간단 아코디언) */}
      <section className="pp-wrap" style={{ paddingTop: 40 }}>
        <h2 style={{ fontWeight: 900, marginBottom: 10 }}>FAQ</h2>
        <div className="pp-faq">
          <details>
            <summary>레반은 무엇인가요?</summary>
            <p>프럭토올리고당 계열의 식이섬유로 장내 유익균 환경에 도움을 주는 성분입니다.</p>
          </details>
          <details>
            <summary>유산균과 함께 쓰는 이유는?</summary>
            <p>레반 기반 섬유에 유산균을 결합해 장 건강 시너지를 노립니다.</p>
          </details>
          <details>
            <summary>정기구독/체험 이벤트는 있나요?</summary>
            <p>클럽 가입 시 공개되는 이벤트에서 확인하실 수 있습니다.</p>
          </details>
        </div>
      </section>

      {/* 7. ESG/유기견 활동 티저 + CTA */}
      <section className="pp-wrap" style={{ paddingTop: 40 }}>
        <h2 style={{ fontWeight: 900, marginBottom: 10 }}>유기견 활동</h2>
        <div className="pp-cards">
          <div className="pp-card">
            <h3 className="pp-card__title">진행 중 캠페인</h3>
            <p className="pp-card__desc">입양 촉진/인식 개선 캠페인을 진행 중입니다.</p>
            <a className="pp-btn pp-btn--primary" href="/esg">자세히 보기</a>
          </div>
          <div className="pp-card">
            <h3 className="pp-card__title">예정 캠페인</h3>
            <p className="pp-card__desc">지역 협력으로 추가 캠페인을 준비하고 있습니다.</p>
            <a className="pp-btn pp-btn--ghost" href="/esg">캠페인 보기</a>
          </div>
        </div>
      </section>

      {/* 8. 고객지원 CTA (공지/문의) */}
      <section className="pp-wrap" style={{ padding: "40px 0 60px" }}>
        <h2 style={{ fontWeight: 900, marginBottom: 10 }}>고객지원</h2>
        <div className="pp-cards">
          <a className="pp-card" href="/support">
            <h3 className="pp-card__title">공지사항</h3>
            <p className="pp-card__desc">View more +</p>
          </a>
          <a className="pp-card" href="/contact">
            <h3 className="pp-card__title">문의하기</h3>
            <p className="pp-card__desc">View more +</p>
          </a>
        </div>
      </section>
    </>
  );
}
