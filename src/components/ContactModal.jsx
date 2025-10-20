'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const ContactModalContext = createContext({ open: () => {}, close: () => {} });

const DEFAULT_CONTACT_EMAIL = 'contact@symi.io';

export function ContactModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      {isOpen && <ContactModal onClose={close} />}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  return useContext(ContactModalContext);
}

export function ContactButton({ children = 'Contact', className = '', variant = 'primary' }) {
  const { open } = useContactModal();
  const classes = variant === 'primary' ? `btn btn-primary ${className}` : `btn border border-black bg-white text-black hover:opacity-80 ${className}`;
  return (
    <button type="button" className={classes} onClick={open}>
      {children}
    </button>
  );
}

function ContactModal({ onClose }) {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [intelligenceFocus, setIntelligenceFocus] = useState('');
  const [timeline, setTimeline] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState('');
  const toEmail = DEFAULT_CONTACT_EMAIL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    try {
      const description = [
        `Intelligence Focus: ${intelligenceFocus || '-'}`,
        `Desired Timeline: ${timeline || '-'}`,
      ].join('\n');
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          company,
          email,
          description,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || 'Submission failed');
      }
      setStatus('success');
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
        {status !== 'success' && (
          <div className="mb-4 flex items-start justify-between">
            <h3 className="text-xl font-semibold text-black">Request Intelligence Analysis</h3>
            <button type="button" className="text-black transition-opacity hover:opacity-70" onClick={onClose} aria-label="Close">
              ✕
            </button>
          </div>
        )}

        {status === 'success' ? (
          <div className="space-y-4 text-center">
            <p className="text-base text-black">Thank you — our team will review your request and get back to you shortly.</p>
            <button type="button" className="btn btn-primary" onClick={onClose}>Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-1">
              <label className="block text-xs font-medium uppercase tracking-wide text-gray-700">Full Name</label>
              <input className="form-input" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            </div>
            <div className="space-y-1">
              <label className="block text-xs font-medium uppercase tracking-wide text-gray-700">Company (optional)</label>
              <input className="form-input" value={company} onChange={(e) => setCompany(e.target.value)} />
            </div>
            <div className="space-y-1">
              <label className="block text-xs font-medium uppercase tracking-wide text-gray-700">Work Email</label>
              <input type="email" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="space-y-1">
              <label className="block text-xs font-medium uppercase tracking-wide text-gray-700">What do you need us to monitor?</label>
              <textarea
                className="form-textarea"
                value={intelligenceFocus}
                onChange={(e) => setIntelligenceFocus(e.target.value)}
                placeholder="e.g., EU tenders, litigation, regulatory updates"
                rows={3}
                required
              />
            </div>
            <div className="space-y-1">
              <label className="block text-xs font-medium uppercase tracking-wide text-gray-700">Ideal timeline (optional)</label>
              <input
                className="form-input"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                placeholder="e.g., weekly briefings"
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs text-gray-600">Your request is sent directly to <span className="font-semibold text-black">{toEmail}</span>.</span>
              <button type="submit" className="btn btn-primary sm:self-end" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Submitting…' : 'Submit'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}


