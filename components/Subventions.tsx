import React from 'react';
import { Check, TrendingUp, Sparkles } from 'lucide-react';

const Subventions: React.FC = () => {
  return (
    <section id="aides" className="py-20 bg-emerald-50/60">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <span className="text-emerald-700 font-semibold tracking-wider uppercase text-xs sm:text-sm">
              Rentabilité immédiate
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-6">
              Économies & Performance agronomique en <span className="text-emerald-700">{new Date().getFullYear()}</span>
            </h2>
            <p className="text-slate-600 mb-8 text-base sm:text-lg leading-relaxed">
              La toile de paillage Maghreb Sac n'est pas une simple protection : c'est un investissement rapidement amorti qui optimise votre production et divise vos coûts d'entretien.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-emerald-100 flex gap-4">
                <div className="mt-1 bg-emerald-100 p-2 rounded-full h-fit shrink-0">
                   <Check size={20} className="text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Élimination des herbicides & intrants</h4>
                  <p className="text-slate-500 text-sm mt-1">100% écologique et sans résidu chimique, respecte les normes environnementales et l'agriculture biologique.</p>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-emerald-100 flex gap-4">
                <div className="mt-1 bg-emerald-100 p-2 rounded-full h-fit shrink-0">
                   <Check size={20} className="text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Jusqu'à 50% d'économie en eau</h4>
                  <p className="text-slate-500 text-sm mt-1">Limite l'évapotranspiration du sol et conserve la fraîcheur en période de canicule ou de sécheresse.</p>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-emerald-100 flex gap-4">
                <div className="mt-1 bg-emerald-100 p-2 rounded-full h-fit shrink-0">
                   <Check size={20} className="text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Suppression des heures de sarclage</h4>
                  <p className="text-slate-500 text-sm mt-1">Divise par 10 les interventions de désherbage manuel ou mécanique pour un gain de temps considérable.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative w-full">
             <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-100 relative z-10">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                    <TrendingUp className="text-emerald-600" />
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Exemple de rentabilité chiffré</h3>
                      <p className="text-xs text-slate-500">Parcelle maraîchère ou paysagère de 1 000 m²</p>
                    </div>
                </div>
                <div className="space-y-4 text-sm sm:text-base">
                    <div className="flex justify-between items-center">
                        <span className="text-slate-600">Investissement Toile Maghreb Sac (1 000 m²)</span>
                        <span className="font-bold text-slate-900">~ 390 €</span>
                    </div>
                    <div className="flex justify-between items-center text-emerald-700 font-medium">
                        <span>Économie main-d'œuvre de désherbage (saison)</span>
                        <span className="font-bold">- 1 200 €</span>
                    </div>
                    <div className="flex justify-between items-center text-emerald-700 font-medium">
                        <span>Économie en eau d'arrosage & paillages</span>
                        <span className="font-bold">- 350 €</span>
                    </div>
                    <div className="pt-4 border-t border-slate-100 mt-4">
                         <div className="flex justify-between items-center">
                            <span className="text-base sm:text-lg font-bold text-slate-800">Retour sur investissement</span>
                            <span className="text-lg sm:text-xl font-extrabold text-emerald-700 flex items-center gap-1">
                              <Sparkles size={18} /> Moins de 4 mois
                            </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-2 italic">Toile garantie et traitée anti-UV pour durer plus de 5 ans en plein soleil.</p>
                    </div>
                </div>
             </div>
             {/* Decorative element */}
             <div className="absolute top-10 -right-4 w-full h-full bg-emerald-200/50 rounded-2xl -z-0 blur-xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Subventions;