import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Droplets, CheckCircle, Sprout, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenModal: (offerName?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative min-h-[640px] lg:h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1920&auto=format&fit=crop" 
          alt="Cultures agricoles et serres protégées par toile de paillage" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-slate-950/85 to-slate-900/70 mix-blend-multiply" />
        {/* Subtle grid pattern overlay reminiscent of woven geotextile */}
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center md:text-left">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm shadow-sm">
              <Sprout className="w-4 h-4 text-emerald-400" />
              Maghreb Sac • Fabricant & Spécialiste Toile de Paillage Tissée
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-md">
              La toile de paillage haute résistance pour <span className="text-emerald-400">vos cultures & espaces verts</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
              Dites adieu aux mauvaises herbes sans herbicides chimiques. Préservez l’humidité du sol, réduisez vos coûts d’arrosage et facilitez vos plantations grâce à notre gamme en <strong>90, 100, 105 et 110 g/m²</strong> traitée anti-UV.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <button 
              onClick={() => onOpenModal('Demande de Devis Général - Toile de Paillage')}
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-xl hover:shadow-emerald-500/25 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Obtenir un devis gratuit
              <ArrowRight className="w-4 h-4" />
            </button>
            <a 
              href="#tarifs"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-md border border-white/20 transition-all text-center"
            >
              Voir les 4 grammages & rouleaux
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-5 sm:gap-7 justify-center md:justify-start items-center text-white/90 text-xs sm:text-sm font-medium"
          >
            <div className="flex items-center gap-2 bg-slate-900/40 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Traitement Anti-UV Garanti</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/40 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-xs">
              <Droplets className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>100% Perméable Eau & Air</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/40 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-xs">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Grammages : 90 / 100 / 105 / 110 g/m²</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;