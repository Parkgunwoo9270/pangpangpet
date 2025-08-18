type Props = {
  name: string;
  price: number;
  imgSrc?: string;  // 이미지 없으면 플레이스홀더
  badge?: string;   // "RENEWAL" 같은 라벨
};

export default function ProductCard({ name, price, imgSrc, badge }: Props) {
  return (
    <div className="group border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative aspect-[4/3] bg-neutral-100 grid place-items-center">
        {imgSrc ? (
          <img src={imgSrc} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="text-neutral-400">이미지 준비중</div>
        )}
        {badge && (
          <span className="absolute left-3 top-3 text-[10px] tracking-wide rounded-full bg-black/80 text-white px-2 py-1">
            {badge}
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-neutral-600 mt-1">
          {price.toLocaleString()}원
        </div>

        {/* ⛔ onClick 제거 → 단순 표시만 */}
        <span className="mt-3 inline-flex text-sm rounded-md border px-3 py-1.5 cursor-not-allowed opacity-60 select-none">
          출시 대기
        </span>
      </div>
    </div>
  );
}
