import { motion } from "motion/react";

export function OpportunityTwo() {
  const contracts = [
    {
      client: "Conseil Départemental Haute-Garonne",
      mission: "Mission Audit",
      value: "€180,000 HT",
      description: "Audit juridique SPL énergies renouvelables"
    },
    {
      client: "Métropole Aix-Marseille",
      mission: "Conseil Juridique",
      value: "€120,000 HT/an",
      description: "Marché 3 ans renouvelable"
    },
    {
      client: "Région Nouvelle-Aquitaine",
      mission: "Contentieux Européen",
      value: "€90,000 HT",
      description: "Mission ponctuelle contentieux CJUE"
    }
  ];

  const trends = [
    { sector: "Transition énergétique", growth: "+35%" },
    { sector: "Conseil juridique numérique", growth: "+28%" },
    { sector: "Contentieux environnementaux", growth: "+22%" }
  ];

  return (
    <section className="py-24 bg-white">
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
              <div className="text-4xl font-light text-primary">02</div>
              <div>
                <h2 className="text-black mb-2">Marchés Publics</h2>
                <p className="text-lg text-black/70">Source: BOAMP - Appels d'offres</p>
              </div>
            </div>
            <div className="w-24 h-px bg-primary"></div>
          </motion.div>

          <div className="grid grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="col-span-12 lg:col-span-8">
              {/* Value Estimation */}
              <motion.div
                className="bg-muted p-8 mb-8 border border-black/10"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-black">Valeur estimée</h3>
                  <div className="text-3xl font-light text-primary">€50,000</div>
                </div>
                <p className="text-black/70">
                  Appels d'offres détectés (septembre-octobre 2025)
                </p>
              </motion.div>

              {/* Contract Details */}
              <motion.div
                className="space-y-6 mb-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {contracts.map((contract, index) => (
                  <div key={index} className="bg-muted p-6 border border-black/10">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">
                      <div className="lg:col-span-2">
                        <h4 className="text-black mb-2">{contract.client}</h4>
                        <p className="text-sm text-black/60 uppercase tracking-wide">{contract.mission}</p>
                      </div>
                      <div className="text-center lg:text-left">
                        <div className="text-xl font-light text-primary mb-1">{contract.value}</div>
                      </div>
                      <div>
                        <p className="text-sm text-black/70">{contract.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Market Trends */}
              <motion.div
                className="bg-muted p-8 mb-8 border border-black/10"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-black mb-6">Tendances 2025</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {trends.map((trend, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-light text-primary mb-2">{trend.growth}</div>
                      <div className="text-sm text-black/70">{trend.sector}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ROI Calculation */}
              <motion.div
                className="bg-muted p-8 border border-black/10"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="text-black mb-6">Opportunité calculée</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-light text-black mb-2">3 marchés</div>
                    <div className="text-sm text-black/60">€16k moyens qualifiés</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light text-black mb-2">20%</div>
                    <div className="text-sm text-black/60">Taux succès estimé</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light text-primary mb-2">€50,000</div>
                    <div className="text-sm text-black/60">ROI net</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* BOAMP Analysis */}
            <div className="col-span-12 lg:col-span-4">
              <motion.div
                className="bg-muted p-8 border border-black/10 sticky top-32"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="text-black mb-8">Analyse BOAMP</h4>
                
                <div className="w-full h-64">
                  <svg viewBox="0 0 240 256" className="w-full h-full">
                    {/* Market Segments */}
                    <motion.rect 
                      x="20" y="30" width="200" height="30" 
                      fill="none" stroke="currentColor" strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                    <motion.rect 
                      x="20" y="80" width="200" height="30" 
                      fill="none" stroke="currentColor" strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1.2 }}
                    />
                    <motion.rect 
                      x="20" y="130" width="200" height="30" 
                      fill="none" stroke="currentColor" strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1.4 }}
                    />

                    {/* Value Bars */}
                    <motion.rect 
                      x="30" y="35" width="120" height="20" 
                      fill="#1B4332"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 1.6 }}
                      style={{ transformOrigin: "left" }}
                    />
                    <motion.rect 
                      x="30" y="85" width="80" height="20" 
                      fill="#1B4332"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 1.8 }}
                      style={{ transformOrigin: "left" }}
                    />
                    <motion.rect 
                      x="30" y="135" width="60" height="20" 
                      fill="#1B4332"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 2 }}
                      style={{ transformOrigin: "left" }}
                    />

                    {/* Success Indicators */}
                    <motion.circle 
                      cx="200" cy="45" r="4" 
                      fill="#1B4332"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 2.2 }}
                    />
                    <motion.circle 
                      cx="200" cy="95" r="4" 
                      fill="#1B4332"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 2.4 }}
                    />
                    <motion.circle 
                      cx="200" cy="145" r="4" 
                      fill="#1B4332"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 2.6 }}
                    />

                    {/* Labels */}
                    <text x="120" y="25" textAnchor="middle" className="text-xs fill-current">HAUTE-GARONNE</text>
                    <text x="120" y="75" textAnchor="middle" className="text-xs fill-current">AIX-MARSEILLE</text>
                    <text x="120" y="125" textAnchor="middle" className="text-xs fill-current">NOUVELLE-AQUITAINE</text>

                    {/* Timeline */}
                    <line x1="20" y1="190" x2="220" y2="190" stroke="currentColor" strokeWidth="1"/>
                    <text x="30" y="210" className="text-xs fill-current">SEPT</text>
                    <text x="120" y="210" className="text-xs fill-current">OCT</text>
                    <text x="200" y="210" className="text-xs fill-current">NOV</text>
                  </svg>
                </div>

                <div className="mt-6 pt-6 border-t border-black/10">
                  <div className="text-sm text-black/70 space-y-2">
                    <p><strong className="text-black">Surveillance:</strong> 24h/24 BOAMP</p>
                    <p><strong className="text-black">Filtrage:</strong> Critères cabinet</p>
                    <p><strong className="text-black">Qualification:</strong> Scoring potentiel</p>
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