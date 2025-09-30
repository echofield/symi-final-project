export const orgJsonLd = (name: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name, url
});

export const breadcrumbJsonLd = (items: {name: string; url: string}[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem", position: i + 1, name: it.name, item: it.url
  }))
});


