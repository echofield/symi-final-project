import { motion } from "motion/react";

export function Implementation() {
  const activationSteps = [
    {
      etape: "1. Cadrage initial",
      periode: "J0–J7",
      objectif: "Définition du profil cabinet, filtres de veille"
    },
    {
      etape: "2. Configuration & Test",
      periode: "J7–J14", 
      objectif: "Calibration des flux, validation des premiers rapports"
    },
    {
      etape: "3. Ajustement & Suivi",
      periode: "J14–J30",
      objectif: "Analyse des retours et adaptation du scoring"
    }
  ];

  const formules = [
    { 
      format: "Rapport unique", 
      deliverable: "10–20 signaux qualifiés + synthèse juridique", 
      tarif: "à partir de €490 / rapport" 
    },
    { 
      format: "Abonnement mensuel", 
      deliverable: "Veille continue + support prioritaire", 
      tarif: "à partir de €1 500 / mois" 
    },
    { 
      format: "Installation cabinet", 
      deliverable: "Intégration système & API interne", 
      tarif: "sur demande" 
    }
  ];

  return (
    <section id="implementation" className="py-24 bg-muted">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-black mb-8">Implémentation & Valeur</h2>
            <p className="text-xl text-black/70 mb-8">Processus d'activation et indicateurs de performance</p>
            <div className="w-32 h-px bg-black mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-12 gap-16">
            {/* Left Side - Process + Pricing */}
            <div className="col-span-12 lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Activation Steps */}
                <h3 className="text-black mb-8">Étapes d'activation du système SYMI</h3>
                
                <div className="bg-white border border-black/10 mb-12">
                  <div className="grid grid-cols-12 bg-muted border-b border-black/10">
                    <div className="col-span-4 p-4 border-r border-black/10">
                      <span className="text-sm font-medium text-black uppercase tracking-wide">Étape</span>
                    </div>
                    <div className="col-span-3 p-4 border-r border-black/10">
                      <span className="text-sm font-medium text-black uppercase tracking-wide">Période</span>
                    </div>
                    <div className="col-span-5 p-4">
                      <span className="text-sm font-medium text-black uppercase tracking-wide">Objectif</span>
                    </div>
                  </div>
                  
                  {activationSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      className="grid grid-cols-12 border-b border-black/10 last:border-b-0"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="col-span-4 p-4 border-r border-black/10">
                        <span className="text-sm text-black font-medium">{step.etape}</span>
                      </div>
                      <div className="col-span-3 p-4 border-r border-black/10">
                        <span className="text-sm text-primary font-medium">{step.periode}</span>
                      </div>
                      <div className="col-span-5 p-4">
                        <span className="text-sm text-black/70">{step.objectif}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Pricing Formulas */}
                <h4 className="text-black mb-6">Formules disponibles :</h4>
                
                <div className="bg-white border border-black/10">
                  <div className="grid grid-cols-12 bg-muted border-b border-black/10">
                    <div className="col-span-3 p-4 border-r border-black/10">
                      <span className="text-sm font-medium text-black uppercase tracking-wide">Format</span>
                    </div>
                    <div className="col-span-5 p-4 border-r border-black/10">
                      <span className="text-sm font-medium text-black uppercase tracking-wide">Délivrable</span>
                    </div>
                    <div className="col-span-4 p-4">
                      <span className="text-sm font-medium text-black uppercase tracking-wide">Tarif indicatif</span>
                    </div>
                  </div>
                  
                  {formules.map((formule, index) => (
                    <motion.div
                      key={index}
                      className="grid grid-cols-12 border-b border-black/10 last:border-b-0"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="col-span-3 p-4 border-r border-black/10">
                        <span className="text-sm text-black font-medium">{formule.format}</span>
                      </div>
                      <div className="col-span-5 p-4 border-r border-black/10">
                        <span className="text-sm text-black/70">{formule.deliverable}</span>
                      </div>
                      <div className="col-span-4 p-4">
                        <span className="text-sm text-primary font-medium">{formule.tarif}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6">
                  <p className="text-xs text-black/60 italic">
                    Les cabinets peuvent commencer avec un rapport à l'unité avant de passer à la veille continue.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-white border border-black/10">
                  <p className="text-sm text-black/70 text-center">
                    Tarification et intégration personnalisées selon la taille et les besoins du cabinet.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Value Metrics + Performance Graph */}
            <div className="col-span-12 lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-black mb-8">Indicateurs de performance SYMI</h3>
                
                <div className="bg-white p-8 border border-black/10 mb-8">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-black/10">
                      <span className="text-black/70">Temps moyen d'anticipation :</span>
                      <span className="font-medium text-primary">10 à 20 jours avant publication publique</span>
                    </div>
                    
                    <div className="flex justify-between items-center pb-4 border-b border-black/10">
                      <span className="text-black/70">Taux d'exploitation observé :</span>
                      <span className="font-medium text-primary">25–35 %</span>
                      <span className="text-xs text-black/60">des signaux convertis en actions</span>
                    </div>
                    
                    <div className="flex justify-between items-center pb-4 border-b border-black/10">
                      <span className="text-black/70">Sources de données :</span>
                      <span className="font-medium text-black">100 % officielles</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-black/70">Processus de validation :</span>
                      <span className="font-medium text-black">Validation manuelle avant diffusion</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-black/10 text-center">
                    <div className="grid grid-cols-3 gap-4 text-xs text-black/60 uppercase tracking-wide">
                      <span>BODACC</span>
                      <span>BOAMP</span>
                      <span>LÉGIFRANCE</span>
                    </div>
                  </div>
                </div>

                {/* Performance Visualization */}
                <div className="bg-white p-8 border border-black/10">
                  <h4 className="text-black mb-6">Progression de pertinence et de valeur du système</h4>
                  
                  <div className="w-full h-48">
                    <svg viewBox="0 0 320 192" className="w-full h-full">
                      {/* Grid */}
                      <defs>
                        <pattern id="grid" width="40" height="32" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 32" fill="none" stroke="#000000" strokeWidth="0.2"/>
                        </pattern>
                      </defs>
                      <rect width="320" height="192" fill="url(#grid)" />
                      
                      {/* Performance Curve - starts at 60%, rises to 90% by M6, then plateau */}
                      <motion.path 
                        d="M 40 140 Q 80 120 120 80 Q 160 60 200 50 L 280 45"
                        fill="none" 
                        stroke="#1B4332" 
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.6 }}
                        viewport={{ once: true }}
                      />
                      
                      {/* Plateau phase marker */}
                      <motion.circle 
                        cx="200" cy="50" r="4" 
                        fill="#1B4332"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 2.6 }}
                        viewport={{ once: true }}
                      />
                      
                      {/* Axis labels */}
                      <text x="40" y="185" className="text-xs fill-current">Mois 1</text>
                      <text x="100" y="185" className="text-xs fill-current">Mois 2</text>
                      <text x="160" y="185" className="text-xs fill-current">Mois 4</text>
                      <text x="200" y="185" className="text-xs fill-current">Mois 6</text>
                      <text x="280" y="185" className="text-xs fill-current">M12</text>
                      
                      <text x="15" y="165" className="text-xs fill-current">0</text>
                      <text x="10" y="125" className="text-xs fill-current">40%</text>
                      <text x="10" y="85" className="text-xs fill-current">60%</text>
                      <text x="10" y="65" className="text-xs fill-current">80%</text>
                      <text x="10" y="45" className="text-xs fill-current">90%</text>
                      
                      {/* Phase stable label */}
                      <text x="205" y="42" className="text-xs fill-current font-medium">Phase stable</text>
                    </svg>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <p className="text-xs text-black/60">
                      Pertinence / valeur exploitable (%)
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}