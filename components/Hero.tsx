import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Droplets, CheckCircle, Sprout, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenModal: (offerName?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative min-h-[720px] lg:min-h-screen flex flex-col justify-center overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
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

      <div className="container mx-auto px-4 z-10 text-center md:text-left my-auto">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex justify-center md:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-xs sm:text-sm font-semibold backdrop-blur-sm shadow-sm">
                <Sprout className="w-4 h-4 text-emerald-400 shrink-0" />
                Maghreb Sac • Fabricant & Spécialiste Toile de Paillage Tissée
              </span>
            </div>
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
              href="https://wa.me/212600000000?text=Bonjour%20Maghreb%20Sac%2C%20je%20souhaite%20obtenir%20des%20informations%20sur%20vos%20toiles%20de%20paillage."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter sur WhatsApp"
              className="px-8 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl shadow-xl hover:shadow-[#25D366]/25 transition-all text-center flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Contact WhatsApp</span>
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