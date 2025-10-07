import { Button } from "./ui/button";
import { motion } from "motion/react";

export function ValueProposition() {
  const propositions = [
    {
      title: "Détection Précoce",
      description: "Surveillance 24h/24 des sources officielles avec alertes automatiques",
      cta: "Voir Opportunités",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" className="mb-6">
          <circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" strokeWidth="1"/>
          <circle cx="24" cy="24" r="8" fill="none" stroke="currentColor" strokeWidth="1"/>
          <circle cx="24" cy="24" r="2" fill="#1B4332"/>
          <line x1="24" y1="8" x2="24" y2="16" stroke="#1B4332" strokeWidth="2"/>
          <line x1="40" y1="24" x2="32" y2="24" stroke="#1B4332" strokeWidth="2"/>
          <line x1="24" y1="40" x2="24" y2="32" stroke="#1B4332" strokeWidth="2"/>
          <line x1="8" y1="24" x2="16" y2="24" stroke="#1B4332" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Intelligence Prédictive",
      description: "73% de précision sur les conversions opportunité vers mandat",
      cta: "Notre Méthode",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" className="mb-6">
          <rect x="8" y="32" width="4" height="8" fill="#1B4332"/>
          <rect x="16" y="28" width="4" height="12" fill="currentColor"/>
          <rect x="24" y="20" width="4" height="20" fill="#1B4332"/>
          <rect x="32" y="24" width="4" height="16" fill="currentColor"/>
          <rect x="40" y="16" width="4" height="24" fill="#1B4332"/>
          <line x1="6" y1="42" x2="46" y2="42" stroke="currentColor" strokeWidth="1"/>
          <line x1="6" y1="42" x2="6" y2="14" stroke="currentColor" strokeWidth="1"/>
        </svg>
      )
    },
    {
      title: "ROI Quantifié",
      description: "Retour sur investissement 10x avec seuil de rentabilité à 3 mois",
      cta: "Analyse Gratuite",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" className="mb-6">
          <circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" strokeWidth="1"/>
          <path d="M16 24 L22 30 L32 18" stroke="#1B4332" strokeWidth="2" fill="none"/>
          <circle cx="34" cy="14" r="4" fill="#1B4332"/>
          <text x="34" y="18" textAnchor="middle" className="text-xs fill-white">€</text>
        </svg>
      )
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container">
        <div className="grid grid-cols-12 gap-8">
          {/* Section Title */}
          <div className="col-span-12 text-center mb-20">
            <h2 className="text-black mb-8">Ce que nous détectons</h2>
            <div className="w-32 h-px bg-black mx-auto"></div>
          </div>

          {/* Three Cards */}
          {propositions.map((prop, index) => (
            <motion.div 
              key={index} 
              className="col-span-12 md:col-span-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center px-8 group hover:transform hover:scale-105 transition-all duration-500">
                <motion.div 
                  className="flex justify-center text-black"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {prop.icon}
                </motion.div>
                
                <h3 className="text-black mb-6">{prop.title}</h3>
                
                <p className="text-black/70 mb-8 max-line-length mx-auto">
                  {prop.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="border-black text-black hover:bg-black hover:text-white transition-all duration-300"
                  onClick={() => {
                    if (prop.title === "Détection Précoce") {
                      document.getElementById('opportunities')?.scrollIntoView({ behavior: 'smooth' });
                    } else if (prop.title === "Intelligence Prédictive") {
                      document.getElementById('method')?.scrollIntoView({ behavior: 'smooth' });
                    } else if (prop.title === "ROI Quantifié") {
                      document.getElementById('analysis')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {prop.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}