import { Navigation } from "./components/Navigation";
import { ReportHeader } from "./components/ReportHeader";
import { OpportunityOne } from "./components/OpportunityOne";
import { OpportunityTwo } from "./components/OpportunityTwo";
import { OpportunityThree } from "./components/OpportunityThree";
import { Methodology } from "./components/Methodology";
import { Implementation } from "./components/Implementation";
import { FreeAnalysis } from "./components/FreeAnalysis";
import { ScrollProgress } from "./components/ScrollProgress";
import { BackToTop } from "./components/BackToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Navigation />
      
      <main className="pt-20">
        <ReportHeader />
        <OpportunityOne />
        <OpportunityTwo />
        <OpportunityThree />
        <Methodology />
        <Implementation />
        <FreeAnalysis />
      </main>
      
      <footer className="bg-black text-white py-8 text-center border-t border-white/20">
        <div className="container">
          <p className="text-sm text-white/60 uppercase tracking-wide">
            © 2025 SYMI Intelligence • Détection Automatique Opportunités Légales
          </p>
        </div>
      </footer>
      
      <BackToTop />
    </div>
  );
}