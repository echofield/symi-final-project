import { motion } from "motion/react";

export function OpportunityThree() {
  const regulations = [
    {
      title: "Directive RBE",
      deadline: "Actualisation obligatoire avant 31/12/2025",
      urgency: "500k sociétés non conformes",
      impact: "Mise à jour obligatoire"
    },
    {
      title: "CSRD Étendue",
      deadline: "Mise en œuvre juin 2026",
      urgency: "PME +50 salariés concernées",
      impact: "Nouvelles obligations reporting"
    },
    {
      title: "Réforme Copropriété",
      deadline: "Impact immédiat",
      urgency: "730k copropriétés",
      impact: "Nouvelles obligations syndics"
    },
    {
      title: "Loi Anti-Gaspillage 2.0",
      deadline: "T1 2026",
      urgency: "Secteur: Retail & e-commerce",
      impact: "Nouvelles sanctions distribution"
    }
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="text-4xl font-light text-primary">03</div>
              <div>
                <h2 className="text-black mb-2">Évolutions Réglementaires</h2>
                <p className="text-lg text-black/70">Source: Légifrance - Textes en préparation</p>
              </div>
            </div>
            <div className="w-24 h-px bg-primary"></div>
          </motion.div>

          <div className="grid grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="col-span-12 lg:col-span-8">
              {/* Value Estimation */}
              <motion.div
                className="bg-white p-8 mb-8 border border-black/10"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-black">Valeur estimée</h3>
                  <div className="text-3xl font-light text-primary">€85,000</div>
                </div>
                <p className="text-black/70">
                  Textes en préparation (T1 2026)
                </p>
              </motion.div>

              {/* Regulatory Changes */}
              <motion.div
                className="space-y-6 mb-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {regulations.map((regulation, index) => (
                  <div key={index} className="bg-white p-6 border border-black/10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div>
                        <h4 className="text-black mb-2">{regulation.title}</h4>
                        <p className="text-sm text-black/60">{regulation.deadline}</p>
                      </div>
                      <div>
                        <div className="text-sm text-primary font-medium mb-1">Urgence:</div>
                        <p className="text-sm text-black/70">{regulation.urgency}</p>
                      </div>
                      <div>
                        <div className="text-sm text-primary font-medium mb-1">Impact:</div>
                        <p className="text-sm text-black/70">{regulation.impact}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Revenue Breakdown */}
              <motion.div
                className="bg-white p-8 border border-black/10"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-black mb-6">Calcul ROI</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-black mb-4">Formations</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-black/70">15 formations</span>
                        <span className="text-black">€1,000 moyenne</span>
                      </div>
                      <div className="w-full h-px bg-black/10"></div>
                      <div className="flex justify-between font-medium">
                        <span className="text-black">Sous-total</span>
                        <span className="text-primary">€15,000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-black mb-4">Audits</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-black/70">8 audits</span>
                        <span className="text-black">€8,500 moyenne</span>
                      </div>
                      <div className="w-full h-px bg-black/10"></div>
                      <div className="flex justify-between font-medium">
                        <span className="text-black">Sous-total</span>
                        <span className="text-primary">€68,000</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-black/10">
                  <div className="flex justify-between items-center">
                    <span className="text-xl text-black">Total prévu</span>
                    <span className="text-3xl font-light text-primary">€85,000</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Regulatory Timeline */}
            <div className="col-span-12 lg:col-span-4">
              <motion.div
                className="bg-white p-8 border border-black/10 sticky top-32"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="text-black mb-8">Timeline Réglementaire</h4>
                
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-px h-full bg-black/20"></div>
                    
                    <div className="space-y-8 ml-6">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        viewport={{ once: true }}
                      >
                        <div className="absolute left-[-30px] w-3 h-3 bg-primary rounded-full"></div>
                        <div className="text-sm text-primary font-medium">31/12/2025</div>
                        <div className="text-sm text-black">Directive RBE</div>
                        <div className="text-xs text-black/60">Deadline critique</div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="absolute left-[-30px] w-3 h-3 bg-primary rounded-full"></div>
                        <div className="text-sm text-primary font-medium">T1 2026</div>
                        <div className="text-sm text-black">Anti-Gaspillage 2.0</div>
                        <div className="text-xs text-black/60">Nouvelles sanctions</div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        viewport={{ once: true }}
                      >
                        <div className="absolute left-[-30px] w-3 h-3 bg-primary rounded-full"></div>
                        <div className="text-sm text-primary font-medium">Juin 2026</div>
                        <div className="text-sm text-black">CSRD Étendue</div>
                        <div className="text-xs text-black/60">PME concernées</div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                        viewport={{ once: true }}
                      >
                        <div className="absolute left-[-30px] w-3 h-3 bg-black/30 rounded-full"></div>
                        <div className="text-sm text-black/60 font-medium">Continu</div>
                        <div className="text-sm text-black">Réforme Copropriété</div>
                        <div className="text-xs text-black/60">730k copropriétés</div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-black/10">
                  <div className="text-sm text-black/70 space-y-2">
                    <p><strong className="text-black">Avantage anticipation:</strong> 3-6 mois</p>
                    <p><strong className="text-black">Sources:</strong> Légifrance, JO</p>
                    <p><strong className="text-black">Mise à jour:</strong> Quotidienne</p>
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