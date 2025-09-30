import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  localeDetection: true,
});

export const config = {
  matcher: ['/((?!_next|api|.*\\.\w+$).*)'],
};


