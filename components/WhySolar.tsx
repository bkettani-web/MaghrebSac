import React from 'react';
import { Droplets, ShieldCheck, Grid3X3, Sparkles } from 'lucide-react';

const benefits = [
  {
    title: "Zéro Mauvaises Herbes",
    description: "Occultation lumineuse à 99% stoppant net la germination des adventices sans aucun herbicide.",
    icon: Sparkles,
    color: "bg-emerald-100 text-emerald-700"
  },
  {
    title: "Économie d'Eau & Fraîcheur",
    description: "Perméable à l'eau de pluie et goutte-à-goutte, tout en réduisant l'évaporation de plus de 50%.",
    icon: Droplets,
    color: "bg-blue-100 text-blue-700"
  },
  {
    title: "Haute Résistance & Anti-UV",
    description: "Tissage indéchirable en polypropylène vierge traité anti-UV (stabilisation 5 ans garantie plein soleil).",
    icon: ShieldCheck,
    color: "bg-amber-100 text-amber-700"
  },
  {
    title: "Lignes de Guidage Intégrées",
    description: "Quadrillage vert tous les 15 ou 25 cm permettant un alignement et un espacement parfait des plants.",
    icon: Grid3X3,
    color: "bg-purple-100 text-purple-700"
  }
];

const WhySolar: React.FC = () => {
  return (
    <section id="avantages" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-emerald-700 font-semibold tracking-wider uppercase text-xs sm:text-sm">
            Efficacité prouvée sur le terrain
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Pourquoi choisir la toile de paillage Maghreb Sac ?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Une solution professionnelle écologique et économique pour protéger durablement vos sols, massifs et productions agricoles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-200/80">
                <div className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center mb-4`}>
                  <benefit.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="relative h-full min-h-[420px] rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
            <img 
              src="/assets/aistudio/WhatsApp_Image_2026-10-28_at_16.36.08_bf321148.jpeg" 
              alt="Rouleau de toile de paillage tissée verte Maghreb Sac" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent flex flex-col justify-end p-8">
              <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-md w-fit mb-2">
                Tissage Maghreb Sac Certifié
              </span>
              <h4 className="text-white text-2xl font-bold mb-2">Structure tissée haute densité</h4>
              <p className="text-slate-200 text-sm">
                Micro-pores garantissant une excellente perméabilité à l'eau et aux nutriments tout en empêchant les mauvaises herbes de percer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySolar;