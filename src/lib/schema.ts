import type {Metadata} from 'next';

export const orgJsonLd = (name: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name,
  url
});

export const breadcrumbJsonLd = (items: {name: string; url: string}[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: it.url
  }))
});

type SeoInput = {
  locale: 'fr' | 'en';
  path: string;
  title: string;
  description: string;
};

export const buildLocalizedMetadata = ({locale, path, title, description}: SeoInput): Metadata => {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const normalizedPath = (path || '').trim();
  const normalized = normalizedPath === '' ? '' : normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`;
  const frUrl = `${base}/fr${normalized}`;
  const enUrl = `${base}/en${normalized}`;
  const canonical = locale === 'fr' ? frUrl : enUrl;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        'fr-FR': frUrl,
        en: enUrl,
        'x-default': frUrl
      }
    },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      alternateLocale: locale === 'fr' ? ['en_US'] : ['fr_FR'],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
};
