import { motion } from "motion/react";

export function Methodology() {
  const dataSources = [
    "Greffes tribunaux de commerce (API directe)",
    "BODACC - Bulletins officiels",
    "BOAMP - Marchés publics",
    "Légifrance - Textes réglementaires",
    "Infogreffe - Données entreprises"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Collecte",
      description: "Scanning 24h/24"
    },
    {
      step: "2", 
      title: "Analyse",
      description: "IA classification"
    },
    {
      step: "3",
      title: "Filtrage", 
      description: "Critères mid-market"
    },
    {
      step: "4",
      title: "Qualification",
      description: "Scoring potentiel"
    },
    {
      step: "5",
      title: "Livraison",
      description: "Rapport personnalisé"
    }
  ];

  return (
    <section id="methodology" className="py-24 bg-white">
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
            <h2 className="text-black mb-8">Méthodologie Système</h2>
            <p className="text-xl text-black/70 mb-8">Architecture technique SYMI Intelligence</p>
            <div className="w-32 h-px bg-black mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-12 gap-16">
            {/* Data Sources */}
            <div className="col-span-12 lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-black mb-8">Sources de données</h3>
                
                <div className="space-y-4 mb-12">
                  {dataSources.map((source, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-muted border border-black/10"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-primary mt-3 flex-shrink-0"></div>
                      <p className="text-black/80">{source}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-muted p-8 border border-black/10">
                  <h4 className="text-black mb-6">Intelligence prédictive</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-black/70">Modèle d'analyse</span>
                      <span className="text-black">Corrélations sur 18 mois de données BODACC/BOAMP</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black/70">Précision de détection</span>
                      <span className="text-primary font-medium">73% (vérifié sur 90 derniers jours)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black/70">Amélioration</span>
                      <span className="text-black">Continue via feedback manuel</span>
                    </div>
                  </div>
                </div>
                
                {/* Concrete Example */}
                <div className="bg-primary/5 p-6 border border-primary/20 mt-8">
                  <h4 className="text-black mb-4">Exemple concret</h4>
                  <p className="text-sm text-black/80">
                    <strong className="text-primary">Liquidation judiciaire détectée le 9 septembre</strong>
                    <br />
                    Publication BODACC nationale le 25 septembre
                    <br />
                    <span className="text-primary font-medium">= 16 jours d'avance competitive</span>
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Process Flow */}
            <div className="col-span-12 lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-black mb-8">Processus automatisé</h3>
                
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 border border-black flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-medium">{step.step}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-black mb-1">{step.title}</h4>
                        <p className="text-sm text-black/70">{step.description}</p>
                      </div>
                      {index < processSteps.length - 1 && (
                        <motion.div
                          className="w-6 h-px bg-primary"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* System Architecture Visualization */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="w-full h-64">
                <svg viewBox="0 0 800 256" className="w-full h-full">
                  {/* Data Input Layer */}
                  <g className="text-black">
                    <motion.rect 
                      x="50" y="50" width="120" height="60" 
                      fill="none" stroke="currentColor" strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                    <motion.rect 
                      x="50" y="130" width="120" height="60" 
                      fill="none" stroke="currentColor" strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1.2 }}
                    />
                    
                    {/* Processing Layer */}
                    <motion.rect 
                      x="250" y="90" width="120" height="80" 
                      fill="none" stroke="currentColor" strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1.4 }}
                    />
                    
                    {/* Intelligence Layer */}
                    <motion.rect 
                      x="450" y="90" width="120" height="80" 
                      fill="none" stroke="#1B4332" strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1.6 }}
                    />
                    
                    {/* Output Layer */}
                    <motion.rect 
                      x="650" y="90" width="120" height="80" 
                      fill="none" stroke="currentColor" strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1.8 }}
                    />

                    {/* Connection Flows */}
                    <motion.line 
                      x1="170" y1="80" x2="250" y2="120" 
                      stroke="#1B4332" strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 2 }}
                    />
                    <motion.line 
                      x1="170" y1="160" x2="250" y2="140" 
                      stroke="#1B4332" strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 2.2 }}
                    />
                    <motion.line 
                      x1="370" y1="130" x2="450" y2="130" 
                      stroke="#1B4332" strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 2.4 }}
                    />
                    <motion.line 
                      x1="570" y1="130" x2="650" y2="130" 
                      stroke="#1B4332" strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 2.6 }}
                    />

                    {/* Labels */}
                    <text x="110" y="35" textAnchor="middle" className="text-sm fill-current">SOURCES</text>
                    <text x="310" y="35" textAnchor="middle" className="text-sm fill-current">COLLECTE</text>
                    <text x="510" y="35" textAnchor="middle" className="text-sm fill-current font-medium">IA ANALYSE</text>
                    <text x="710" y="35" textAnchor="middle" className="text-sm fill-current">RAPPORT</text>
                    
                    <text x="110" y="85" textAnchor="middle" className="text-xs fill-current">BODACC</text>
                    <text x="110" y="100" textAnchor="middle" className="text-xs fill-current">BOAMP</text>
                    <text x="110" y="165" textAnchor="middle" className="text-xs fill-current">LÉGIFRANCE</text>
                    <text x="110" y="180" textAnchor="middle" className="text-xs fill-current">INFOGREFFE</text>
                    
                    <text x="310" y="125" textAnchor="middle" className="text-xs fill-current">24h/24</text>
                    <text x="310" y="140" textAnchor="middle" className="text-xs fill-current">SCANNING</text>
                    
                    <text x="510" y="120" textAnchor="middle" className="text-xs fill-current">FILTRAGE</text>
                    <text x="510" y="135" textAnchor="middle" className="text-xs fill-current">SCORING</text>
                    <text x="510" y="150" textAnchor="middle" className="text-xs fill-current">QUALIFICATION</text>
                    
                    <text x="710" y="125" textAnchor="middle" className="text-xs fill-current">PERSONNALISÉ</text>
                    <text x="710" y="140" textAnchor="middle" className="text-xs fill-current">48H MAX</text>
                  </g>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}