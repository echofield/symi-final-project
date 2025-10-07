import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="container">
        <div className="grid grid-cols-12 gap-8">
          {/* Content - 8 columns */}
          <div className="col-span-12 lg:col-span-8">
            <div className="max-line-length">
              <motion.h1 
                className="text-black mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                SYMI INTELLIGENCE
              </motion.h1>
              
              <motion.div 
                className="space-y-6 mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <p className="text-xl text-black/80">
                  Détection automatique d'opportunités légales cross-sectorielles
                </p>
                
                <p className="text-lg text-black/60">
                  Procédures collectives • Marchés publics • Évolutions réglementaires
                </p>
              </motion.div>

              <motion.div 
                className="flex gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground border border-primary transition-all duration-300 hover:shadow-lg"
                  onClick={() => document.getElementById('analysis')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Analyse Gratuite
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white hover:bg-muted text-black border border-black transition-all duration-300 hover:shadow-lg"
                  onClick={() => document.getElementById('method')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Notre Méthode
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Geometric Illustration - 4 columns */}
          <div className="col-span-12 lg:col-span-4 flex items-center justify-center">
            <motion.div 
              className="w-80 h-80 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              {/* Legal intelligence visualization */}
              <svg viewBox="0 0 320 320" className="w-full h-full">
                {/* Document grid */}
                <motion.rect 
                  x="60" y="80" width="80" height="100" 
                  fill="none" stroke="currentColor" strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
                <motion.rect 
                  x="180" y="80" width="80" height="100" 
                  fill="none" stroke="currentColor" strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.0 }}
                />
                <motion.rect 
                  x="120" y="200" width="80" height="100" 
                  fill="none" stroke="currentColor" strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                />
                
                {/* Data lines */}
                <line x1="80" y1="100" x2="120" y2="100" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="80" y1="120" x2="120" y2="120" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="80" y1="140" x2="120" y2="140" stroke="currentColor" strokeWidth="0.5"/>
                
                <line x1="200" y1="100" x2="240" y2="100" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="200" y1="120" x2="240" y2="120" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="200" y1="140" x2="240" y2="140" stroke="currentColor" strokeWidth="0.5"/>
                
                <line x1="140" y1="220" x2="180" y2="220" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="140" y1="240" x2="180" y2="240" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="140" y1="260" x2="180" y2="260" stroke="currentColor" strokeWidth="0.5"/>
                
                {/* Intelligence connections */}
                <motion.line 
                  x1="160" y1="40" x2="100" y2="80" 
                  stroke="#1B4332" strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                />
                <motion.line 
                  x1="160" y1="40" x2="220" y2="80" 
                  stroke="#1B4332" strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.7 }}
                />
                <motion.line 
                  x1="160" y1="40" x2="160" y2="200" 
                  stroke="#1B4332" strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.9 }}
                />
                
                <motion.circle 
                  cx="160" cy="40" r="6" 
                  fill="#1B4332"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 2 }}
                />
                
                {/* Labels */}
                <text x="100" y="70" textAnchor="middle" className="text-xs fill-current">BODACC</text>
                <text x="220" y="70" textAnchor="middle" className="text-xs fill-current">BOAMP</text>
                <text x="160" y="190" textAnchor="middle" className="text-xs fill-current">LÉGIFRANCE</text>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}