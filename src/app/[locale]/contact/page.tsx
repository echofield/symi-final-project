"use client";
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [vertical, setVertical] = useState('Legal');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    fetch('/api/contact', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        fullName: name,
        company,
        email,
        description: `${message}\n\nVertical: ${vertical}`
      })
    })
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data?.message || 'Server error');
        }
        setOk(true);
      })
      .catch((err: any) => {
        setError(err?.message || 'Server error');
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-xl px-6">
        <h1 className="text-4xl font-light">{t('title')}</h1>
        <p className="mt-2 text-base text-black opacity-80">{t('sampleNote')}</p>
        {ok ? (
          <p className="mt-6">{t('success')}</p>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <input className="form-input" placeholder={locale === 'fr' ? 'Nom' : 'Name'} value={name} onChange={(e) => setName(e.target.value)} required />
            <input className="form-input" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input className="form-input" placeholder={locale === 'fr' ? 'Société' : 'Company'} value={company} onChange={(e) => setCompany(e.target.value)} />
            <select className="form-input" value={vertical} onChange={(e) => setVertical(e.target.value)}>
              <option>Legal</option>
              <option>{locale === 'fr' ? 'Immobilier' : 'Real Estate'}</option>
            </select>
            <textarea className="form-textarea" placeholder={locale === 'fr' ? 'Message' : 'Message'} value={message} onChange={(e) => setMessage(e.target.value)} required />
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required />
              <span>{t('consent')}</span>
            </label>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button className="btn btn-primary" type="submit" disabled={submitting}>
              {submitting ? (locale === 'fr' ? 'Envoi...' : 'Sending...') : t('submit')}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
