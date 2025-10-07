/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['*'],
    },
  },
  async rewrites() {
    return [
      // direct /report to the static file
      { source: '/report', destination: '/report.html', locale: false },
      // if your site uses locales (/fr, /en), make both work:
      { source: '/:locale(fr|en)/report', destination: '/report.html', locale: false },
    ];
  },
};

export default nextConfig;
