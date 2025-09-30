"use client";
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [vertical, setVertical] = useState('Legal');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [ok, setOk] = useState(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log({ name, email, company, vertical, message, consent });
    setOk(true);
  };

  return (
    <section className="bg-white py-20 text-black">
      <div className="mx-auto max-w-xl px-6">
        <h1 className="text-4xl font-light">{t('contact.title')}</h1>
        {ok ? (
          <p className="mt-6">{t('contact.success')}</p>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <input className="form-input" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} required />
            <input className="form-input" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input className="form-input" placeholder="Société" value={company} onChange={(e) => setCompany(e.target.value)} />
            <select className="form-input" value={vertical} onChange={(e) => setVertical(e.target.value)}>
              <option>Legal</option>
              <option>Real Estate</option>
            </select>
            <textarea className="form-textarea" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required />
              <span>{t('contact.consent')}</span>
            </label>
            <button className="btn btn-primary" type="submit">{t('contact.submit')}</button>
          </form>
        )}
      </div>
    </section>
  );
}


