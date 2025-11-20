/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'zh',
    localeDetection: false,
  },
  // 确保关键脚本优先加载
  headers: async () => {
    return [
      {
        source: '/js/rem.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  }
}

module.exports = nextConfig