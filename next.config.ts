import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true }, // ✅ 빌드 시 ESLint 검사 건너뜀
}

export default nextConfig
