export default function Home() {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PANGPANGPET - 우리 아이 건강, 아프기 전에 지켜주세요</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" />
      </head>
      <body className="bg-orange-100 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-orange-600 mb-4">🐕🐱</h1>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">PANGPANGPET</h2>
          <p className="text-xl text-gray-600 mb-8">우리 아이 건강, 아프기 전에 지켜주세요</p>
          <p className="text-lg text-gray-500">예방이 최고의 보호</p>
        </div>
      </body>
    </html>
  );
}
