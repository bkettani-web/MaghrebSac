import React from 'react';
import { ArrowRight, FileSpreadsheet } from 'lucide-react';

interface FinalCTAProps {
  onOpenModal: (offerName?: string) => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenModal }) => {
  return (
    <section className="relative py-24 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=80" 
          alt="Champs et vergers aménagés avec toiles de protection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/80 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30">
          <FileSpreadsheet size={14} /> Devis Immédiat & Échantillons
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 max-w-3xl mx-auto leading-tight">
          Prêt à en finir avec les mauvaises herbes et réduire vos arrosages ?
        </h2>
        <p className="text-slate-200 text-base md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Rejoignez plus de 1 200 exploitants et professionnels qui font confiance à Maghreb Sac. 
          Conseils techniques personnalisés, expédition rapide et tarifs direct fabricant.
        </p>
        <button 
          onClick={() => onOpenModal('Demande Finale - Toile de Paillage')}
          className="px-9 py-4 sm:py-5 bg-emerald-600 hover:bg-emerald-500 text-white text-base sm:text-lg font-bold rounded-xl shadow-2xl hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2.5"
        >
          <span>Obtenir votre devis gratuit en 2 minutes</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;