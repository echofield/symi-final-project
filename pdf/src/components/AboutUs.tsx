import { motion } from "motion/react";

export function AboutUs() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="container">
        <div className="grid grid-cols-12 gap-16">
          {/* Content */}
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-black mb-8">Architecture SYMI</h2>
              <motion.div 
                className="w-32 h-px bg-black mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.div>

            <motion.div 
              className="max-line-length mx-auto space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-black leading-relaxed">
                SYMI Intelligence fonctionne comme un <strong className="text-black">système d'intégration verticale</strong> 
                qui transforme la détection d'opportunités légales en avantage concurrentiel mesurable.
              </p>
              
              <p className="text-black/80 leading-relaxed">
                Plutôt que d'opérer comme un simple outil de veille, nous créons un 
                <strong className="text-black"> écosystème d'intelligence prédictive</strong> qui anticipe 
                les besoins juridiques avant même qu'ils ne deviennent publics.
              </p>
              
              <p className="text-black/80 leading-relaxed">
                Notre méthodologie systémique repose sur l'analyse continue de millions de données 
                officielles, transformées en opportunités d'affaires qualifiées et quantifiées 
                pour les cabinets d'avocats mid-market.
              </p>
            </motion.div>

            {/* System Architecture Visualization */}
            <motion.div 
              className="flex justify-center mt-20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-96 h-48">
                <svg viewBox="0 0 384 192" className="w-full h-full">
                  {/* Input layer */}
                  <motion.rect 
                    x="20" y="60" width="80" height="72" 
                    fill="none" stroke="currentColor" strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Processing layer */}
                  <motion.rect 
                    x="152" y="40" width="80" height="112" 
                    fill="none" stroke="#1B4332" strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1.0 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Output layer */}
                  <motion.rect 
                    x="284" y="60" width="80" height="72" 
                    fill="none" stroke="currentColor" strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Data flow */}
                  <motion.line 
                    x1="100" y1="96" x2="152" y2="96" 
                    stroke="#1B4332" strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    viewport={{ once: true }}
                  />
                  <motion.line 
                    x1="232" y1="96" x2="284" y2="96" 
                    stroke="#1B4332" strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Processing indicators */}
                  <motion.circle 
                    cx="172" cy="76" r="3" 
                    fill="#1B4332"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.8 }}
                    viewport={{ once: true }}
                  />
                  <motion.circle 
                    cx="192" cy="96" r="3" 
                    fill="#1B4332"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 2.0 }}
                    viewport={{ once: true }}
                  />
                  <motion.circle 
                    cx="212" cy="116" r="3" 
                    fill="#1B4332"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 2.2 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Labels */}
                  <text x="60" y="50" textAnchor="middle" className="text-xs fill-current">SOURCES</text>
                  <text x="60" y="160" textAnchor="middle" className="text-xs fill-current">OFFICIELLES</text>
                  
                  <text x="192" y="30" textAnchor="middle" className="text-xs fill-current font-medium">SYMI</text>
                  <text x="192" y="175" textAnchor="middle" className="text-xs fill-current font-medium">INTELLIGENCE</text>
                  
                  <text x="324" y="50" textAnchor="middle" className="text-xs fill-current">OPPORTUNITÉS</text>
                  <text x="324" y="160" textAnchor="middle" className="text-xs fill-current">QUALIFIÉES</text>
                  
                  {/* Top-level system indicator */}
                  <motion.line 
                    x1="192" y1="20" x2="192" y2="40" 
                    stroke="#1B4332" strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 2.4 }}
                    viewport={{ once: true }}
                  />
                  <motion.circle 
                    cx="192" cy="15" r="4" 
                    fill="#1B4332"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 2.6 }}
                    viewport={{ once: true }}
                  />
                </svg>
              </div>
            </motion.div>

            {/* Core Technology */}
            <motion.div 
              className="bg-muted p-8 border border-black/10 mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-black mb-6 uppercase tracking-wide text-center">Technologies Core</h4>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm text-center">
                <div>
                  <strong className="text-primary block mb-2">Machine Learning</strong>
                  <span className="text-black/70">Classification automatique des opportunités</span>
                </div>
                <div>
                  <strong className="text-primary block mb-2">API Integration</strong>
                  <span className="text-black/70">Connexion directe sources officielles</span>
                </div>
                <div>
                  <strong className="text-primary block mb-2">Predictive Analytics</strong>
                  <span className="text-black/70">Scoring de conversion probabiliste</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}