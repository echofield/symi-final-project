import { motion } from "motion/react";

export function ReportHeader() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Report Title */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-black mb-6">
              SYMI INTELLIGENCE
            </h1>
            <div className="text-xl text-black/70 mb-8 space-y-2">
              <p className="text-primary font-medium">DÉTECTEZ LES OPPORTUNITÉS JURIDIQUES</p>
              <p className="uppercase tracking-wide font-medium">8 à 21 jours avant vos concurrents</p>
            </div>
            <div className="w-32 h-px bg-black mx-auto mb-8"></div>
            <p className="text-lg text-black/60 mb-8">
              180k€ d'honoraires identifiés en 90 jours via corrélation BODACC • BOAMP • Légifrance
            </p>
            <motion.a
              href="#analysis"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 hover:bg-primary/90 transition-colors font-medium tracking-wide uppercase text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Analyse gratuite de votre cabinet →
            </motion.a>
          </motion.div>

          {/* Report Meta */}
          <motion.div
            className="flex justify-center items-center gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-center">
              <p className="text-sm uppercase tracking-wide text-black/50 mb-2">RAPPORT</p>
              <p className="font-medium text-black">SYMI INTELLIGENCE</p>
            </div>
            <div className="w-px h-12 bg-black/20"></div>
            <div className="text-center">
              <p className="text-sm uppercase tracking-wide text-black/50 mb-2">PÉRIODE</p>
              <p className="font-medium text-black">Automne 2025</p>
            </div>
          </motion.div>

          {/* Data Sources Visualization */}
          <motion.div
            className="flex justify-center mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="w-96 h-56">
              <svg viewBox="0 0 384 224" className="w-full h-full">
                {/* Central Intelligence Hub */}
                <motion.circle 
                  cx="192" cy="96" r="8" 
                  fill="#1B4332"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                />
                
                {/* Data Source Boxes */}
                <motion.rect 
                  x="50" y="30" width="80" height="60" 
                  fill="none" stroke="currentColor" strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
                <motion.rect 
                  x="254" y="30" width="80" height="60" 
                  fill="none" stroke="currentColor" strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.0 }}
                />
                <motion.rect 
                  x="152" y="140" width="80" height="60" 
                  fill="none" stroke="currentColor" strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                />

                {/* Connection Lines */}
                <motion.line 
                  x1="130" y1="70" x2="170" y2="85" 
                  stroke="#1B4332" strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                />
                <motion.line 
                  x1="254" y1="70" x2="214" y2="85" 
                  stroke="#1B4332" strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                />
                <motion.line 
                  x1="192" y1="104" x2="192" y2="140" 
                  stroke="#1B4332" strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                />

                {/* Data Lines in Boxes */}
                <g className="text-black/30" strokeWidth="0.5">
                  <line x1="60" y1="45" x2="120" y2="45" stroke="currentColor"/>
                  <line x1="60" y1="55" x2="110" y2="55" stroke="currentColor"/>
                  <line x1="60" y1="65" x2="115" y2="65" stroke="currentColor"/>
                  <line x1="60" y1="75" x2="105" y2="75" stroke="currentColor"/>
                  
                  <line x1="264" y1="45" x2="324" y2="45" stroke="currentColor"/>
                  <line x1="264" y1="55" x2="314" y2="55" stroke="currentColor"/>
                  <line x1="264" y1="65" x2="319" y2="65" stroke="currentColor"/>
                  <line x1="264" y1="75" x2="309" y2="75" stroke="currentColor"/>
                  
                  <line x1="162" y1="155" x2="222" y2="155" stroke="currentColor"/>
                  <line x1="162" y1="165" x2="212" y2="165" stroke="currentColor"/>
                  <line x1="162" y1="175" x2="217" y2="175" stroke="currentColor"/>
                  <line x1="162" y1="185" x2="207" y2="185" stroke="currentColor"/>
                </g>

                {/* Labels */}
                <text x="90" y="20" textAnchor="middle" className="text-xs fill-current font-medium">BODACC</text>
                <text x="294" y="20" textAnchor="middle" className="text-xs fill-current font-medium">BOAMP</text>
                <text x="192" y="220" textAnchor="middle" className="text-xs fill-current font-medium">LÉGIFRANCE</text>
              </svg>
            </div>
          </motion.div>

          {/* Summary Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="text-center">
              <div className="text-2xl font-light text-primary mb-2">€180k</div>
              <div className="text-sm uppercase tracking-wide text-black/60">Potentiel total détecté</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-primary mb-2">73%</div>
              <div className="text-sm uppercase tracking-wide text-black/60">Précision de détection</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-primary mb-2">48h</div>
              <div className="text-sm uppercase tracking-wide text-black/60">Délai d'analyse</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}