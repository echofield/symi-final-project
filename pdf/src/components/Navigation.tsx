import { motion } from "motion/react";

export function Navigation() {
  const navItems = [
    { label: "OPPORTUNITÉS", href: "#opportunities" },
    { label: "MÉTHODOLOGIE", href: "#methodology" },
    { label: "IMPLÉMENTATION", href: "#implementation" },
    { label: "ANALYSE GRATUITE", href: "#analysis" }
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-8 h-8 border border-black flex items-center justify-center">
              <div className="w-3 h-3 bg-primary"></div>
            </div>
            <span className="text-lg font-medium tracking-wide uppercase">
              SYMI Intelligence
            </span>
          </motion.div>

          {/* Navigation Items */}
          <motion.div 
            className="hidden lg:flex items-center gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-sm font-medium tracking-wide uppercase text-black/70 hover:text-black transition-colors duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}