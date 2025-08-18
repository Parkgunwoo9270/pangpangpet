export default function Header() {
  return (
    <header className="border-b bg-white/70 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-5 py-3 flex items-center gap-6">
        <a href="/" className="font-extrabold text-lg tracking-tight">PangpangPet</a>
        <a href="/shop" className="text-sm hover:opacity-80">제품</a>
        <a href="/about" className="text-sm hover:opacity-80">브랜드</a>
        <a href="/contact" className="text-sm hover:opacity-80">문의</a>
        <span className="ml-auto text-xs text-neutral-500">
          Prevention · Protection · Partnership
        </span>
      </nav>
    </header>
  );
}
