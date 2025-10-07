import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function FreeAnalysis() {
  const analysisFeatures = [
    "Procédures collectives dans votre zone géographique",
    "Marchés publics alignés avec vos spécialisations", 
    "Évolutions réglementaires impactant vos clients",
    "Scoring potentiel de chaque opportunité"
  ];

  const competitiveAnalysis = [
    "Positionnement vs cabinets comparables",
    "Gaps d'expertise détectés",
    "Stratégies de différenciation recommandées", 
    "Projection ROI personnalisée"
  ];

  const requiredFields = [
    "Nom du cabinet",
    "Nombre d'avocats",
    "Spécialisations principales",
    "Zone géographique d'intervention"
  ];

  return (
    <section id="analysis" className="py-24 bg-white">
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
            <h2 className="text-black mb-8">Votre Analyse Gratuite</h2>
            <p className="text-xl text-black/70 mb-8">Rapport personnalisé sous 48h</p>
            <div className="w-32 h-px bg-black mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-12 gap-16">
            {/* Analysis Content */}
            <div className="col-span-12 lg:col-span-8">
              <div className="space-y-12">
                {/* Specific Opportunities */}
                <motion.div
                  className="bg-muted p-8 border border-black/10"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-black mb-6">Opportunités spécifiques à votre cabinet</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {analysisFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-primary mt-3 flex-shrink-0"></div>
                        <p className="text-black/80">{feature}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Competitive Analysis */}
                <motion.div
                  className="bg-muted p-8 border border-black/10"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-black mb-6">Analyse concurrentielle</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {competitiveAnalysis.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-primary mt-3 flex-shrink-0"></div>
                        <p className="text-black/80">{feature}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Required Information */}
                <motion.div
                  className="bg-muted p-8 border border-black/10"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-black mb-6">Pour obtenir votre analyse</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {requiredFields.map((field, index) => (
                      <motion.div
                        key={index}
                        className="text-center p-4 bg-white border border-black/10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-3 h-3 bg-primary mx-auto mb-3"></div>
                        <p className="text-sm text-black/80">{field}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-span-12 lg:col-span-4">
              <motion.div
                className="bg-muted p-10 border border-black/10 sticky top-24"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="text-black mb-8">Démarrez votre analyse gratuite</h4>
                
                <form className="space-y-6 mb-6">
                  <div>
                    <Label htmlFor="cabinet">Nom du cabinet *</Label>
                    <Input id="cabinet" type="text" className="mt-2" />
                  </div>
                  
                  <div>
                    <Label htmlFor="lawyers">Nombre d'avocats *</Label>
                    <Input id="lawyers" type="number" className="mt-2" />
                  </div>
                  
                  <div>
                    <Label htmlFor="specializations">Spécialisations principales *</Label>
                    <Input id="specializations" type="text" className="mt-2" />
                  </div>
                  
                  <div>
                    <Label htmlFor="location">Zone géographique *</Label>
                    <Input id="location" type="text" className="mt-2" />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email de contact *</Label>
                    <Input id="email" type="email" className="mt-2" />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 px-4 h-14 text-xs font-medium"
                  >
                    ANALYSE GRATUITE →
                  </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-black/10">
                  <p className="text-sm text-black/70 text-center">
                    <strong className="text-black">contact@symi.io</strong>
                    <br />
                    Rapport personnalisé sous 48h
                  </p>
                </div>

                {/* Analysis Preview */}
                <div className="mt-8">
                  <h5 className="text-black mb-4">Aperçu de votre rapport</h5>
                  <div className="w-full h-32">
                    <svg viewBox="0 0 240 128" className="w-full h-full">
                      {/* Report Structure */}
                      <rect x="20" y="20" width="200" height="88" fill="none" stroke="currentColor" strokeWidth="1"/>
                      
                      {/* Header */}
                      <rect x="30" y="30" width="180" height="12" fill="#1B4332"/>
                      
                      {/* Content Blocks */}
                      <rect x="30" y="50" width="80" height="20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      <rect x="130" y="50" width="80" height="20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      
                      <rect x="30" y="80" width="80" height="20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      <rect x="130" y="80" width="80" height="20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      
                      {/* Data Lines */}
                      <g className="text-black/20" strokeWidth="0.3">
                        <line x1="35" y1="55" x2="105" y2="55" stroke="currentColor"/>
                        <line x1="35" y1="60" x2="95" y2="60" stroke="currentColor"/>
                        <line x1="35" y1="65" x2="100" y2="65" stroke="currentColor"/>
                        
                        <line x1="135" y1="55" x2="205" y2="55" stroke="currentColor"/>
                        <line x1="135" y1="60" x2="195" y2="60" stroke="currentColor"/>
                        <line x1="135" y1="65" x2="200" y2="65" stroke="currentColor"/>
                        
                        <line x1="35" y1="85" x2="105" y2="85" stroke="currentColor"/>
                        <line x1="35" y1="90" x2="95" y2="90" stroke="currentColor"/>
                        <line x1="35" y1="95" x2="100" y2="95" stroke="currentColor"/>
                        
                        <line x1="135" y1="85" x2="205" y2="85" stroke="currentColor"/>
                        <line x1="135" y1="90" x2="195" y2="90" stroke="currentColor"/>
                        <line x1="135" y1="95" x2="200" y2="95" stroke="currentColor"/>
                      </g>
                      
                      {/* Labels */}
                      <text x="120" y="15" textAnchor="middle" className="text-xs fill-current">RAPPORT SYMI</text>
                    </svg>
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