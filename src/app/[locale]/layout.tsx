import '../globals.css';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {ReactNode} from 'react';
import {notFound} from 'next/navigation';
import {ContactModalProvider} from '../../components/ContactModal';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import ScrollProgress from '../../components/ScrollProgress';
import BackToTop from '../../components/BackToTop';

export const dynamic = 'force-static';

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: {locale: string};
}) {
  const {locale} = params;
  if (!['fr', 'en'].includes(locale)) return notFound();
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ContactModalProvider>
        <div className="flex min-h-screen flex-col">
          <ScrollProgress />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <BackToTop />
        </div>
      </ContactModalProvider>
    </NextIntlClientProvider>
  );
}
