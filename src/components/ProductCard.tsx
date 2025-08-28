// src/components/ProductCard.tsx
import Link from "next/link";

type Props = {
  name: string;
  price: string;        // "29,900"
  compareAt?: string;   // "35,000"
  href: string;
  emoji?: string;       // 이미지 준비 전 임시
  badge?: string;       // "신상" 등
};

export default function ProductCard({
  name, price, compareAt, href, emoji = "🐶", badge,
}: Props) {
  return (
    <article className="pf-card">
      <div className="pf-thumb" aria-hidden>
        <span style={{ fontSize: 32 }}>{emoji}</span>
      </div>
      {badge && <div className="pf-badge">{badge}</div>}
      <h4 className="pf-name">{name}</h4>
      <div className="pf-price">
        <b>{price}</b>
        {compareAt && <s>{compareAt}</s>}
      </div>
      <Link className="pf-btn pf-btn--ghost" href={href}>자세히</Link>
    </article>
  );
}
