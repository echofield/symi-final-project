export const legalProfile = {
  brand: process.env.NEXT_PUBLIC_LEGAL_BRAND || 'SYMI',
  legalEntity: process.env.NEXT_PUBLIC_LEGAL_ENTITY || 'SYMI',
  legalForm: process.env.NEXT_PUBLIC_LEGAL_FORM || 'Societe a completer',
  shareCapital: process.env.NEXT_PUBLIC_LEGAL_CAPITAL || 'A completer',
  registrationNumber: process.env.NEXT_PUBLIC_LEGAL_REGISTRATION || 'A completer',
  vatNumber: process.env.NEXT_PUBLIC_LEGAL_VAT || 'A completer',
  registeredOffice: process.env.NEXT_PUBLIC_LEGAL_ADDRESS || 'A completer',
  publicationDirector: process.env.NEXT_PUBLIC_LEGAL_PUBLICATION_DIRECTOR || 'A completer',
  contactEmail: process.env.NEXT_PUBLIC_LEGAL_CONTACT_EMAIL || 'contact@symi.io',
  dpoEmail: process.env.NEXT_PUBLIC_LEGAL_DPO_EMAIL || 'contact@symi.io',
  hostingProvider: 'Vercel Inc.',
  hostingAddress: '340 S Lemon Ave #4133, Walnut, CA 91789, USA'
};

export const legalProcessors = [
  {
    name: 'Vercel',
    roleFr: 'Hebergement applicatif',
    roleEn: 'Application hosting'
  },
  {
    name: 'Brevo',
    roleFr: 'Email transactionnel',
    roleEn: 'Transactional email'
  }
];
