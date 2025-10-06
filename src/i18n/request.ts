import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({requestLocale}) => {
  const resolvedLocale = await requestLocale;
  let locale: string = resolvedLocale || 'fr';
  if (!['fr', 'en'].includes(locale)) locale = 'fr';
  const common = (await import(`../messages/${locale}/common.json`)).default;
  const services = (await import(`../messages/${locale}/services.json`)).default;
  const process = (await import(`../messages/${locale}/process.json`)).default;
  const about = (await import(`../messages/${locale}/about.json`)).default;
  const contact = (await import(`../messages/${locale}/contact.json`)).default;
  const cases = (await import(`../messages/${locale}/cases.json`)).default;
  const messages = { ...common, ...services, ...process, ...about, ...contact, ...cases } as Record<string, string>;
  return {locale, messages};
});


