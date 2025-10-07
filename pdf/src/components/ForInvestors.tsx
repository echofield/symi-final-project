import { Button } from "./ui/button";
import { motion } from "motion/react";

export function ForInvestors() {
  const phases = [
    { phase: "Setup initial", timing: "J0-J7", description: "Configuration profil cabinet, critères filtrage" },
    { phase: "Formation équipe", timing: "J7-J14", description: "Sessions utilisateurs, bonnes pratiques" },
    { phase: "Optimisation", timing: "J14-J30", description: "Ajustement algorithmes, feedback" }
  ];

  const pricing = [
    { item: "Setup initial", price: "€5,000", note: "Configuration complète" },
    { item: "Abonnement mensuel", price: "€2,500/mois", note: "Formation & support inclus" },
    { item: "Total année 1", price: "€35,000", note: "ROI calculé: 10x" }
  ];

  return (
    <section id="investors" className="py-32 bg-muted">
      <div className="container">
        <div className="grid grid-cols-12 gap-16">
          {/* Content */}
          <div className="col-span-12 lg:col-span-8">
            <div className="max-line-length">
              <h2 className="text-black mb-8">Implémentation & ROI</h2>
              
              <p className="text-lg text-black/80 mb-12">
                Déploiement technique et calcul retour sur investissement
              </p>

              {/* Phase de déploiement */}
              <div className="mb-12">
                <h4 className="text-black mb-6 uppercase tracking-wide">Phase de déploiement:</h4>
                <div className="space-y-4">
                  {phases.map((phase, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-6 p-4 bg-white border border-black/20"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-8 h-8 border border-black flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-medium">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h5 className="text-black font-medium">{phase.phase}</h5>
                          <span className="text-sm text-primary font-medium">({phase.timing})</span>
                        </div>
                        <p className="text-sm text-black/70">{phase.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Structure tarifaire */}
              <div className="mb-12">
                <h4 className="text-black mb-6 uppercase tracking-wide">Structure tarifaire:</h4>
                <div className="bg-white border border-black/20 p-6">
                  {pricing.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-black/10 last:border-b-0">
                      <div>
                        <span className="text-black font-medium">{item.item}</span>
                        {item.note && <p className="text-sm text-black/60">{item.note}</p>}
                      </div>
                      <span className="text-primary font-medium">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calcul ROI */}
              <div className="bg-primary/5 p-8 border border-primary/20 mb-12">
                <h4 className="text-black mb-6 uppercase tracking-wide">Calcul ROI (basé sur cas d'usage moyens):</h4>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
                  <div>
                    <span className="text-4xl font-light text-black block">€180k</span>
                    <p className="text-sm text-black/70 mt-2">Nouveaux honoraires 6 mois</p>
                    <p className="text-xs text-black/60 mt-1">*Projection basée sur cabinet mid-market (10+ avocats)</p>
                  </div>
                  <div>
                    <span className="text-4xl font-light text-black block">€35k</span>
                    <p className="text-sm text-black/70 mt-2">Coût SYMI année 1</p>
                  </div>
                  <div>
                    <span className="text-4xl font-light text-primary block">10x</span>
                    <p className="text-sm text-black/70 mt-2">ROI calculé</p>
                    <p className="text-sm font-medium text-primary mt-1">Seuil rentabilité: 3 mois</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-xs text-black/60">
                    *avec taux de conversion standard de 25-35%
                  </p>
                </div>
              </div>

              <Button 
                size="lg" 
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white"
                onClick={() => document.getElementById('analysis')?.scrollIntoView({ behavior: 'smooth' })}
              >
                DÉMARRER IMPLÉMENTATION
              </Button>
            </div>
          </div>

          {/* Geometric Illustration */}
          <div className="col-span-12 lg:col-span-4 flex items-center justify-center">
            <motion.div 
              className="w-96 h-96"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <svg viewBox="0 0 384 384" className="w-full h-full">
                {/* ROI visualization */}
                <motion.rect 
                  x="50" y="200" width="80" height="100" 
                  fill="none" stroke="currentColor" strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />
                <motion.rect 
                  x="150" y="120" width="80" height="180" 
                  fill="none" stroke="#1B4332" strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  viewport={{ once: true }}
                />
                
                {/* Investment vs Return bars */}
                <motion.rect 
                  x="60" y="220" width="60" height="80" 
                  fill="currentColor" fillOpacity="0.3"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.rect 
                  x="160" y="140" width="60" height="160" 
                  fill="#1B4332" fillOpacity="0.8"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "bottom" }}
                />
                
                {/* ROI multiplication arrow */}
                <motion.line 
                  x1="130" y1="250" x2="150" y2="250" 
                  stroke="#1B4332" strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  viewport={{ once: true }}
                />
                <motion.polyline 
                  points="146,246 150,250 146,254" 
                  fill="none" stroke="#1B4332" strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 0.3, delay: 2.0 }}
                  viewport={{ once: true }}
                />
                
                {/* Multiplication symbol */}
                <motion.text 
                  x="140" y="235" 
                  textAnchor="middle" 
                  className="text-lg fill-primary font-bold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                  viewport={{ once: true }}
                >
                  10x
                </motion.text>
                
                {/* Labels */}
                <text x="90" y="330" textAnchor="middle" className="text-xs fill-current">€35k</text>
                <text x="90" y="345" textAnchor="middle" className="text-xs fill-current">INVESTMENT</text>
                <text x="190" y="330" textAnchor="middle" className="text-xs fill-current">€180k</text>
                <text x="190" y="345" textAnchor="middle" className="text-xs fill-current">RETURN</text>
                
                {/* Timeline */}
                <line x1="50" y1="370" x2="280" y2="370" stroke="currentColor" strokeWidth="1"/>
                <text x="80" y="365" textAnchor="middle" className="text-xs fill-current">3 mois</text>
                <text x="190" y="365" textAnchor="middle" className="text-xs fill-current">6 mois</text>
                <circle cx="80" cy="370" r="2" fill="#1B4332"/>
                <circle cx="190" cy="370" r="2" fill="#1B4332"/>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}