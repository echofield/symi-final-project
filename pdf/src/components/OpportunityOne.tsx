import { motion } from "motion/react";

export function OpportunityOne() {
  const companies = [
    {
      name: "DISTRILUX SARL",
      sector: "Distribution équipements éclairage",
      revenue: "€2.3M CA",
      employees: "23 employés",
      status: "Cessation paiements 15/09"
    },
    {
      name: "TECHNO PROD SAS",
      sector: "Fabrication composants industriels",
      revenue: "€4.1M CA",
      employees: "41 employés",
      status: "Procédure sauvegarde ouverte"
    }
  ];

  return (
    <section id="opportunities" className="py-24 bg-muted">
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
              <div className="text-4xl font-light text-primary">01</div>
              <div>
                <h2 className="text-black mb-2">Procédures Collectives</h2>
                <p className="text-lg text-black/70">Source: Greffes tribunaux de commerce</p>
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
                  <div className="text-3xl font-light text-primary">€45,000</div>
                </div>
                <p className="text-black/70">
                  8 entreprises identifiées (septembre-octobre 2025)
                  <br />
                  <span className="text-sm text-primary">Détectées entre 8 et 21 jours avant publication BODACC nationale</span>
                </p>
              </motion.div>

              {/* Company Details */}
              <motion.div
                className="space-y-6 mb-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {companies.map((company, index) => (
                  <div key={index} className="bg-white p-6 border border-black/10">
                    <h4 className="text-black mb-4">{company.name}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-black/50 uppercase tracking-wide block mb-1">Secteur</span>
                        <span className="text-black">{company.sector}</span>
                      </div>
                      <div>
                        <span className="text-black/50 uppercase tracking-wide block mb-1">Chiffre d'affaires</span>
                        <span className="text-black">{company.revenue}</span>
                      </div>
                      <div>
                        <span className="text-black/50 uppercase tracking-wide block mb-1">Effectif</span>
                        <span className="text-black">{company.employees}</span>
                      </div>
                      <div>
                        <span className="text-black/50 uppercase tracking-wide block mb-1">Statut</span>
                        <span className="text-primary font-medium">{company.status}</span>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="bg-white p-6 border border-black/10 border-dashed">
                  <p className="text-black/70">
                    <strong className="text-black">+ 6 autres opportunités détectées</strong>
                    <br />
                    CA cumulé: €18.5M • Total 156 employés
                  </p>
                </div>
              </motion.div>

              {/* Timing Strategy */}
              <motion.div
                className="bg-white p-8 mb-8 border border-black/10"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-black mb-6">Timing optimal</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-black">J-90 à J-30:</strong>
                      <span className="text-black/70 ml-2">Conseil préventif</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-black">J-30 à J0:</strong>
                      <span className="text-black/70 ml-2">Préparation dossier</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-black">J0 à J+30:</strong>
                      <span className="text-black/70 ml-2">Accompagnement procédure</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Financial Calculation */}
              <motion.div
                className="bg-white p-8 border border-black/10"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="text-black mb-6">Valorisation</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-light text-black mb-2">8 dossiers</div>
                    <div className="text-sm text-black/60">€8-15k honoraires</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light text-black mb-2">60%</div>
                    <div className="text-sm text-black/60">Taux conversion</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light text-primary mb-2">€45,000</div>
                    <div className="text-sm text-black/60">Total net</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Detection Visualization */}
            <div className="col-span-12 lg:col-span-4">
              <motion.div
                className="bg-white p-8 border border-black/10 sticky top-32"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="text-black mb-8">Détection SYMI</h4>
                
                <div className="w-full h-64">
                  <svg viewBox="0 0 240 256" className="w-full h-full">
                    {/* Company Nodes */}
                    <motion.rect 
                      x="20" y="40" width="60" height="40" 
                      fill="none" stroke="currentColor" strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                    <motion.rect 
                      x="100" y="40" width="60" height="40" 
                      fill="none" stroke="currentColor" strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1.2 }}
                    />
                    <motion.rect 
                      x="180" y="40" width="40" height="40" 
                      fill="none" stroke="currentColor" strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1.4 }}
                    />
                    
                    <motion.rect 
                      x="60" y="100" width="60" height="40" 
                      fill="none" stroke="currentColor" strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1.6 }}
                    />
                    <motion.rect 
                      x="140" y="100" width="60" height="40" 
                      fill="none" stroke="currentColor" strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1.8 }}
                    />

                    {/* Detection Lines */}
                    <motion.line 
                      x1="50" y1="88" x2="120" y2="160" 
                      stroke="#1B4332" strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 2 }}
                    />
                    <motion.line 
                      x1="130" y1="88" x2="120" y2="160" 
                      stroke="#1B4332" strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 2.2 }}
                    />
                    <motion.line 
                      x1="90" y1="148" x2="120" y2="160" 
                      stroke="#1B4332" strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 2.4 }}
                    />
                    <motion.line 
                      x1="170" y1="148" x2="120" y2="160" 
                      stroke="#1B4332" strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 2.6 }}
                    />

                    {/* Central Detection Hub */}
                    <motion.circle 
                      cx="120" cy="170" r="8" 
                      fill="#1B4332"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 2.8 }}
                    />

                    {/* Labels */}
                    <text x="50" y="30" textAnchor="middle" className="text-xs fill-current">DISTRILUX</text>
                    <text x="130" y="30" textAnchor="middle" className="text-xs fill-current">TECHNO PROD</text>
                    <text x="200" y="30" textAnchor="middle" className="text-xs fill-current">+6 AUTRES</text>
                    <text x="120" y="200" textAnchor="middle" className="text-xs fill-current font-medium">SYMI DETECTION</text>
                  </svg>
                </div>

                <div className="mt-6 pt-6 border-t border-black/10">
                  <div className="text-sm text-black/70 space-y-2">
                    <p><strong className="text-black">Avantage temporel:</strong> 8-21 jours d'avance</p>
                    <p><strong className="text-black">Précision:</strong> 73% conversion historique</p>
                    <p><strong className="text-black">Couverture:</strong> France entière</p>
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