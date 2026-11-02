import React from 'react';
import { Sprout, Trees, Mountain, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Maraîchage & Arboriculture",
    description: "Protection des cultures légumières, fraisiers et vignes. Garde les fruits propres et améliore le calibre.",
    icon: Sprout
  },
  {
    title: "Pépinières & Serres Pro",
    description: "Revêtement de sol impeccable pour serres et conteneurs. Drainage direct, zéro boue et entretien facile.",
    icon: Trees
  },
  {
    title: "Talus & Espaces Verts",
    description: "Maintien des terres sur pentes raides contre le ravinement et le ruissellement tout en bloquant les ronces.",
    icon: Mountain
  },
  {
    title: "Sous Graviers & Allées",
    description: "Sous-couche idéale pour allées de jardin, terrasses bois et massifs d'écorces ou de galets décoratifs.",
    icon: Sparkles
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-emerald-700 font-semibold tracking-wider uppercase text-xs sm:text-sm">
            Applications polyvalentes
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
            Une solution adaptée à chaque aménagement
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mt-3 text-sm sm:text-base">
            Professionnels de la terre, collectivités et paysagistes : découvrez les multiples usages de notre géotextile tissé.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-6 rounded-2xl border border-slate-200/80 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-600/10 transition-all duration-300 bg-white">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                <service.icon className="text-emerald-700 group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;