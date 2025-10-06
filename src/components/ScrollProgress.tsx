'use client';

import {motion, useScroll} from 'framer-motion';

export default function ScrollProgress() {
  const {scrollYProgress} = useScroll();
  return (
    <motion.div
      style={{scaleX: scrollYProgress}}
      className="fixed inset-x-0 top-0 z-30 h-0.5 origin-left bg-[var(--forest-green)]"
    />
  );
}


