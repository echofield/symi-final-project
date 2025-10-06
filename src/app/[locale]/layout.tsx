import '../globals.css';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {ReactNode} from 'react';
import {notFound} from 'next/navigation';
import {ContactModalProvider} from '../../components/ContactModal';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

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
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ContactModalProvider>
            <SiteHeader />
            {children}
            <SiteFooter />
          </ContactModalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


