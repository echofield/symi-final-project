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
  const toEmail = process.env.NEXT_PUBLIC_CONTACT_TO || '';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-xl bg-white border border-black p-8">
        <div className="mb-6 flex items-start justify-between">
          <h3 className="text-2xl font-light text-black">Project Consultation</h3>
          <button type="button" className="text-black hover:opacity-70" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <form
          action="https://formspree.io/f/meeodzgz"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label className="block text-sm text-black">Full Name</label>
            <input className="form-input" name="name" placeholder="Full Name" required />
          </div>
          <div>
            <label className="block text-sm text-black">Company / Organization</label>
            <input className="form-input" name="company" placeholder="Company / Organization" />
          </div>
          <div>
            <label className="block text-sm text-black">Email</label>
            <input type="email" className="form-input" name="email" placeholder="Email" required />
          </div>
          <div>
            <label className="block text-sm text-black">Short Project Description</label>
            <textarea className="form-textarea" name="message" placeholder="Short Project Description" required />
          </div>
          <input type="hidden" name="_subject" value="Nouvelle demande Contact — SYMI" />
          <input type="hidden" name="_next" value="https://symi.io/merci" />
          <input type="hidden" name="_captcha" value="false" />
          <div className="flex items-center justify-between pt-2">
            {toEmail ? (
              <span className="text-sm text-black">We’ll send this to <span className="font-medium">{toEmail}</span>.</span>
            ) : (
              <span className="text-sm text-red-600">Email not configured</span>
            )}
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

