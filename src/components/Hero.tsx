export default function Hero() {
  return (
    <section className="relative">
      {/* 배경 그라디언트 */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 via-white to-white" />
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-14 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-neutral-600">
          레반 · 유산균 포뮬러 / 장 건강 루틴
        </p>
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          예방이 최고의 보호입니다.
          <br className="hidden md:block" />
          PangpangPet가 <span className="whitespace-nowrap">장 건강</span>을 바꿉니다.
        </h1>
        <p className="mt-4 text-neutral-600">
          프리미엄 포뮬러, 과학적 근거, 매끈한 정기구독 경험으로 <b>재구매</b>까지 잇는 구조.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/shop" className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-white hover:opacity-90">
            제품 보기
          </a>
          <a href="/contact" className="inline-flex items-center justify-center rounded-md border px-6 py-3 hover:bg-neutral-50">
            문의하기
          </a>
        </div>
      </div>
    </section>
  );
}
