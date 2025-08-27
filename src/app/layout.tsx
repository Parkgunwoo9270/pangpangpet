export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <title>PangpangPet</title>
        {/* ✅ 네이버 소유권 확인 메타태그 */}
        <meta name="naver-site-verification" content="네이버에서_준_값" />
      </head>
      <body>{children}</body>
    </html>
  )
}
