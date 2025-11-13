"use client";

import { useTranslations } from 'next-intl';
import ContactForm from '../../../components/ContactForm';

export default function ContactPage() {
  const t = useTranslations();

  const copy = {
    eyebrow: t('contact.eyebrow'),
    title: t('contact.title'),
    subtitle: t('contact.subtitle'),
    fields: {
      name: t('contact.fields.name'),
      email: t('contact.fields.email'),
      company: t('contact.fields.company'),
      projectType: t('contact.fields.projectType'),
      projectTypePlaceholder: t('contact.fields.projectTypePlaceholder'),
      message: t('contact.fields.message'),
    },
    projectOptions: [
      { value: 'founders-os', label: t('contact.options.founders') },
      { value: 'portfolio-os', label: t('contact.options.portfolio') },
      { value: 'creative-studio-os', label: t('contact.options.studio') },
      { value: 'expansion-playbook', label: t('contact.options.expansion') },
      { value: 'other', label: t('contact.options.other') },
    ],
    submitLabel: t('contact.submit'),
    successMessage: t('contact.success'),
    errors: {
      generic: t('contact.errors.generic'),
      required: t('contact.errors.required'),
      email: t('contact.errors.email'),
    },
    direct: {
      heading: t('contact.direct.heading'),
      email: t('contact.direct.email'),
      location: t('contact.direct.location'),
      responseTime: t('contact.direct.responseTime'),
    },
  };

  return <ContactForm copy={copy} />;
}
