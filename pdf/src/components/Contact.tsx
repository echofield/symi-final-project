import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { motion } from "motion/react";

export function Contact() {
  const analysisFields = [
    { label: "Nom du cabinet", placeholder: "Cabinet Dupont & Associés", required: true },
    { label: "Nombre d'avocats", placeholder: "15", required: true },
    { label: "Spécialisations principales", placeholder: "Droit des affaires, Procédures collectives", required: true },
    { label: "Zone géographique d'intervention", placeholder: "Île-de-France, Nord", required: true }
  ];

  return (
    <section id="analysis" className="py-32 bg-white">
      <div className="container">
        <div className="grid grid-cols-12 gap-16">
          {/* Content */}
          <div className="col-span-12 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-black mb-8">Votre Analyse Gratuite</h2>
              
              <p className="text-lg text-black/80 mb-8">
                Rapport personnalisé sous 48h
              </p>

              <div className="space-y-8 mb-12">
                <div>
                  <h4 className="text-black mb-4 uppercase tracking-wide">
                    Opportunités spécifiques à votre cabinet
                  </h4>
                  <div className="space-y-2 text-sm text-black/70 pl-4 border-l-2 border-primary/20">
                    <p>• Procédures collectives dans votre zone géographique</p>
                    <p>• Marchés publics alignés avec vos spécialisations</p>
                    <p>• Évolutions réglementaires impactant vos clients</p>
                    <p>• Scoring potentiel de chaque opportunité</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-black mb-4 uppercase tracking-wide">
                    Analyse concurrentielle
                  </h4>
                  <div className="space-y-2 text-sm text-black/70 pl-4 border-l-2 border-primary/20">
                    <p>• Positionnement vs cabinets comparables</p>
                    <p>• Gaps d'expertise détectés</p>
                    <p>• Stratégies de différenciation recommandées</p>
                    <p>• Projection ROI personnalisée</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <div className="col-span-12 lg:col-span-6">
            <motion.div
              className="bg-muted p-8 border border-black/10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-black mb-6 uppercase tracking-wide">
                Pour obtenir votre analyse:
              </h4>

              <form className="space-y-6">
                {analysisFields.map((field, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Label htmlFor={`field-${index}`} className="text-black">
                      {field.label} {field.required && <span className="text-primary">*</span>}
                    </Label>
                    {field.label === "Spécialisations principales" ? (
                      <Textarea
                        id={`field-${index}`}
                        placeholder={field.placeholder}
                        className="mt-2 bg-white border-black/20 focus:border-primary"
                        rows={3}
                      />
                    ) : (
                      <Input
                        id={`field-${index}`}
                        type={field.label === "Nombre d'avocats" ? "number" : "text"}
                        placeholder={field.placeholder}
                        className="mt-2 bg-white border-black/20 focus:border-primary"
                        required={field.required}
                      />
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-8"
                  >
                    DÉMARRER ANALYSE GRATUITE
                  </Button>
                </motion.div>
              </form>

              <motion.div 
                className="mt-8 pt-6 border-t border-black/10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <p className="text-sm text-black/70 mb-4">
                    Ou contactez-nous directement :
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-black font-medium">contact@symi.io</p>
                    <p className="text-black/60">Réponse garantie sous 24h</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}