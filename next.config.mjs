/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['*'],
    },
  },
  async rewrites() {
    return [
      // direct /report to the static PDF file
      { source: '/report', destination: '/report.pdf', locale: false },
      // if your site uses locales (/fr, /en), make both work:
      { source: '/:locale(fr|en)/report', destination: '/report.pdf', locale: false },
    ];
  },
};

export default nextConfig;
