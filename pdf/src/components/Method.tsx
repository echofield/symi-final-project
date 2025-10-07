import { motion, useReducedMotion } from "motion/react";

export function Method() {
  const shouldReduceMotion = useReducedMotion();
  const steps = [
    { title: "Collecte", description: "Scanning 24h/24 des sources officielles" },
    { title: "Analyse", description: "Classification IA des opportunités" },
    { title: "Filtrage", description: "Application critères mid-market" },
    { title: "Qualification", description: "Scoring du potentiel de conversion" },
    { title: "Livraison", description: "Rapport personnalisé cabinet" }
  ];

  return (
    <section id="method" className="py-32 bg-muted">
      <div className="container">
        <div className="grid grid-cols-12 gap-8">
          {/* Section Title */}
          <motion.div 
            className="col-span-12 text-center mb-16 lg:mb-20"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-black">Méthodologie Système</h2>
            <p className="text-black/60 text-lg mt-4 mb-8">
              Architecture technique SYMI Intelligence
            </p>
            <motion.div 
              className="w-32 h-px bg-black mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ 
                duration: shouldReduceMotion ? 0.4 : 0.8, 
                delay: shouldReduceMotion ? 0.1 : 0.3 
              }}
              viewport={{ once: true, amount: 0.3 }}
            ></motion.div>
          </motion.div>

          {/* Process Timeline */}
          <div className="col-span-12">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-8">
              {steps.map((step, index) => {
                const mobileDelay = index * 0.1 + 0.4;
                const desktopDelay = index * 0.2 + 0.8;
                const delay = shouldReduceMotion ? 0.1 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? mobileDelay : desktopDelay);
                
                return (
                <motion.div 
                  key={index} 
                  className="flex flex-col lg:flex-row items-center"
                  initial={shouldReduceMotion ? 
                    { opacity: 0 } : 
                    { opacity: 0, y: 20, scale: 0.95 }
                  }
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: shouldReduceMotion ? 0.3 : 0.5, 
                    delay: delay,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  {/* Step */}
                  <div className="text-center lg:text-left">
                    <motion.div 
                      className="w-20 h-20 lg:w-24 lg:h-24 border border-black flex items-center justify-center mb-4 lg:mb-6 mx-auto lg:mx-0"
                      initial={shouldReduceMotion ? 
                        { opacity: 0 } : 
                        { borderColor: "transparent" }
                      }
                      whileInView={shouldReduceMotion ? 
                        { opacity: 1 } : 
                        { borderColor: "#000000" }
                      }
                      transition={{ 
                        duration: shouldReduceMotion ? 0.2 : 0.3, 
                        delay: delay + 0.1
                      }}
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <motion.span 
                        className="text-xs font-medium tracking-widest uppercase"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ 
                          duration: shouldReduceMotion ? 0.2 : 0.3, 
                          delay: delay + 0.2
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </motion.span>
                    </motion.div>
                    
                    <motion.h4 
                      className="text-black mb-3 lg:mb-4 uppercase tracking-wide"
                      initial={shouldReduceMotion ? 
                        { opacity: 0 } : 
                        { opacity: 0, y: 10 }
                      }
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: shouldReduceMotion ? 0.2 : 0.3, 
                        delay: delay + 0.25
                      }}
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      {step.title}
                    </motion.h4>
                    
                    <motion.p 
                      className="text-sm text-black/70 max-w-48 lg:max-w-32 leading-relaxed mx-auto lg:mx-0"
                      initial={shouldReduceMotion ? 
                        { opacity: 0 } : 
                        { opacity: 0, y: 10 }
                      }
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: shouldReduceMotion ? 0.2 : 0.3, 
                        delay: delay + 0.3
                      }}
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      {step.description}
                    </motion.p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <motion.div 
                      className="flex-shrink-0 my-6 lg:my-0 lg:mx-8"
                      initial={shouldReduceMotion ? 
                        { opacity: 0 } : 
                        { opacity: 0, scale: 0.8 }
                      }
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: shouldReduceMotion ? 0.2 : 0.3, 
                        delay: delay + 0.4,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 32 32" 
                        className="rotate-90 lg:rotate-0 lg:w-8 lg:h-8"
                      >
                        <motion.line 
                          x1="8" 
                          y1="16" 
                          x2="24" 
                          y2="16" 
                          stroke="#1B4332" 
                          strokeWidth="2"
                          initial={shouldReduceMotion ? { opacity: 0 } : { pathLength: 0 }}
                          whileInView={shouldReduceMotion ? { opacity: 1 } : { pathLength: 1 }}
                          transition={{ 
                            duration: shouldReduceMotion ? 0.2 : 0.3, 
                            delay: delay + 0.5
                          }}
                          viewport={{ once: true, amount: 0.5 }}
                        />
                        <motion.polyline 
                          points="20,12 24,16 20,20" 
                          fill="none" 
                          stroke="#1B4332" 
                          strokeWidth="2"
                          initial={shouldReduceMotion ? { opacity: 0 } : { pathLength: 0 }}
                          whileInView={shouldReduceMotion ? { opacity: 1 } : { pathLength: 1 }}
                          transition={{ 
                            duration: shouldReduceMotion ? 0.2 : 0.25, 
                            delay: delay + 0.55
                          }}
                          viewport={{ once: true, amount: 0.5 }}
                        />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
                );
              })}
            </div>
          </div>

          {/* Sources de données */}
          <motion.div 
            className="col-span-12 text-center mt-16"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: shouldReduceMotion ? 0.3 : 0.6, 
              delay: shouldReduceMotion ? 0.2 : 2.5
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-white p-8 border border-black/10">
              <h4 className="text-black mb-6 uppercase tracking-wide">Sources de données</h4>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-sm text-black/70">
                <div>
                  <strong className="text-black">Greffes</strong><br/>
                  Tribunaux de commerce
                </div>
                <div>
                  <strong className="text-black">BODACC</strong><br/>
                  Bulletins officiels
                </div>
                <div>
                  <strong className="text-black">BOAMP</strong><br/>
                  Marchés publics
                </div>
                <div>
                  <strong className="text-black">Légifrance</strong><br/>
                  Textes réglementaires
                </div>
                <div>
                  <strong className="text-black">Infogreffe</strong><br/>
                  Données entreprises
                </div>
              </div>
            </div>
          </motion.div>

          {/* Intelligence prédictive */}
          <motion.div 
            className="col-span-12 text-center mt-8"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: shouldReduceMotion ? 0.3 : 0.6, 
              delay: shouldReduceMotion ? 0.3 : 2.8
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-primary/5 p-8 border border-primary/20">
              <h4 className="text-black mb-6 uppercase tracking-wide">Intelligence Prédictive</h4>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm">
                <div>
                  <strong className="text-primary">73%</strong><br/>
                  <span className="text-black/70">Précision de détection (vérifié sur 90 derniers jours)</span>
                </div>
                <div>
                  <strong className="text-primary">18 mois</strong><br/>
                  <span className="text-black/70">Corrélations sur données BODACC/BOAMP</span>
                </div>
                <div>
                  <strong className="text-primary">+2%/mois</strong><br/>
                  <span className="text-black/70">Amélioration continue via feedback manuel</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}