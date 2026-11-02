import React from 'react';
import { Shovel, Layers, Hammer, Scissors } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Préparation du sol",
    desc: "Nettoyez la zone, éliminez les gros cailloux et nivelez la surface pour un contact optimal.",
    icon: Shovel
  },
  {
    id: 2,
    title: "Déroulage de la toile",
    desc: "Déroulez la toile Maghreb Sac bien tendue avec un chevauchement d'au moins 15 cm entre lés.",
    icon: Layers
  },
  {
    id: 3,
    title: "Fixation par agrafes",
    desc: "Plantez des agrafes métalliques biseautées tous les mètres et sur toute la périphérie.",
    icon: Hammer
  },
  {
    id: 4,
    title: "Incision & Plantation",
    desc: "Entaillez la toile en croix (X) selon les lignes repères et mettez vos végétaux en terre.",
    icon: Scissors
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-emerald-400 font-semibold tracking-wider uppercase text-xs sm:text-sm">
            Mise en œuvre accessible à tous
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4">
            Comment poser votre toile de paillage ?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Une pose propre, rapide et durable en 4 étapes pour une protection efficace pendant des années.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-700/60 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.id} className="relative flex flex-col items-center text-center z-10">
                <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/10 group hover:border-emerald-500 transition-colors duration-300">
                  <step.icon size={32} className="text-emerald-400" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-sm shadow-md">
                    {step.id}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-slate-400 text-sm max-w-[220px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;