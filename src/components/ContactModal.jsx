'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const ContactModalContext = createContext({ open: () => {}, close: () => {} });

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
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState('');
  const toEmail = process.env.NEXT_PUBLIC_CONTACT_TO || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          company,
          email,
          projectType: 'modal-contact',
          message: description,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-xl bg-white border border-black p-8">
        {status !== 'success' && (
          <div className="mb-6 flex items-start justify-between">
            <h3 className="text-2xl font-light text-black">Project Consultation</h3>
            <button type="button" className="text-black hover:opacity-70" onClick={onClose} aria-label="Close">
              ✕
            </button>
          </div>
        )}

        {status === 'success' ? (
          <div className="text-center">
            <p className="text-lg text-black">Thank you — our team will review your request and get back to you shortly.</p>
            <button type="button" className="btn btn-primary mt-6" onClick={onClose}>Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-black">Full Name</label>
              <input className="form-input" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            </div>
            <div>
              <label className="block text-sm text-black">Company / Organization</label>
              <input className="form-input" value={company} onChange={(e) => setCompany(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm text-black">Email</label>
              <input type="email" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label className="block text-sm text-black">Short Project Description</label>
              <textarea className="form-textarea" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <div className="flex items-center justify-between pt-2">
              {toEmail ? (
                <span className="text-sm text-black">We’ll send this to <span className="font-medium">{toEmail}</span>.</span>
              ) : (
                <span className="text-sm text-red-600">Email not configured</span>
              )}
              <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Submitting…' : 'Submit'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}


