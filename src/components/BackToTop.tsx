'use client';

import {useEffect, useState} from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.5);
    window.addEventListener('scroll', onScroll, {passive: true});
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-30 rounded-none border border-black bg-white px-3 py-2 text-sm text-black shadow-sm transition hover:opacity-80"
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
    >
      ↑ Top
    </button>
  );
}


