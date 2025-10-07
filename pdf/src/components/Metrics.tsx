import { motion } from "motion/react";

export function Metrics() {
  const opportunities = [
    { 
      value: "€45k", 
      label: "Procédures Collectives", 
      description: "8 entreprises identifiées (septembre-octobre 2025)",
      details: "Détectées 8-21 jours avant publication BODACC nationale"
    },
    { 
      value: "€50k", 
      label: "Marchés Publics", 
      description: "3 appels d'offres qualifiés en cours d'analyse",
      details: "+35% appels d'offres transition énergétique vs 2024"
    },
    { 
      value: "€85k", 
      label: "Évolutions Réglementaires", 
      description: "4 textes impactants en préparation (T1 2026)",
      details: "500k+ sociétés concernées par la Directive RBE"
    }
  ];

  return (
    <section id="opportunities" className="py-24 bg-white border-y border-black/10">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-black mb-8 max-w-4xl mx-auto">
            Opportunités légales détectées automatiquement
          </h2>
          <p className="text-black/60 text-lg">
            Surveillance automatique des procédures collectives - France • Automne 2025
          </p>
        </motion.div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Large Number */}
              <div className="mb-6">
                <motion.span 
                  className="text-6xl lg:text-7xl font-light text-black block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {opportunity.value}
                </motion.span>
                <span className="text-lg font-medium text-black/70 uppercase tracking-wide block mt-2">
                  {opportunity.label}
                </span>
              </div>
              
              {/* Description */}
              <p className="text-black/60 mb-4 leading-relaxed">
                {opportunity.description}
              </p>
              
              {/* Details */}
              <div className="bg-muted p-4 border border-black/10">
                <p className="text-sm text-black/70 leading-relaxed">
                  {opportunity.details}
                </p>
              </div>
              
              {/* System Response */}
              <div className="flex items-center justify-center gap-3 mt-6">
                <motion.div 
                  className="w-4 h-px bg-primary"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                />
                <p className="text-sm font-medium text-primary uppercase tracking-wide">
                  Valeur estimée: {opportunity.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Summary */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-px bg-black mx-auto mb-6"></div>
            <p className="text-black/70 leading-relaxed">
              Détection automatique avec intelligence prédictive. 
              Modèle d'analyse basé sur 18 mois de données BODACC/BOAMP.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}