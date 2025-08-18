export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-6 md:grid-cols-3 text-sm">
          <div>
            <div className="font-bold">CS</div>
            <div className="mt-1">070-0000-0000</div>
            <div className="text-neutral-500">AM 10:00 - PM 5:00 (점심 12:00 - 2:00)</div>
          </div>
          <div>
            <div className="font-bold">COMPANY</div>
            <div className="mt-1 text-neutral-600">
              (주)리얼비트 · 사업자등록번호 000-00-00000
              <br /> 서울특별시 ○○구 ○○로 00
              <br /> 이메일: contact@pangpangpet.kr
            </div>
          </div>
          <div>
            <div className="font-bold">POLICY</div>
            <div className="mt-1 space-x-3">
              <a href="/policy/privacy" className="underline">개인정보처리방침</a>
              <a href="/policy/terms" className="underline">이용약관</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-neutral-500">
          © {new Date().getFullYear()} PangpangPet · Realbeat
        </div>
      </div>
    </footer>
  );
}
