import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: "Gamme Éco",
    power: "90 g/m²",
    price: "Tarif direct fabricant*",
    features: [
      "Polypropylène tissé souple & léger",
      "Perméabilité maximale à l'eau",
      "Lignes de repère de plantation",
      "Pose facile et découpe rapide",
      "Idéal cultures maraîchères & potagers",
      "Rouleaux 100m (largeurs 1m05 à 4m20)"
    ],
    recommended: false
  },
  {
    name: "Gamme Standard",
    power: "100 g/m²",
    price: "Tarif direct fabricant*",
    features: [
      "Polyvalence souplesse / résistance",
      "Traitement anti-UV stabilisé",
      "Quadrillage guide d'alignement",
      "Protection anti-mauvaises herbes 99%",
      "Recommandé massifs, haies & bordures",
      "Disponible en toutes largeurs"
    ],
    recommended: false
  },
  {
    name: "Gamme Pro Maraîchère",
    power: "105 g/m²",
    price: "N°1 des exploitants*",
    features: [
      "Tissage renforcé haute densité",
      "Stabilisation anti-UV 5 ans plein soleil",
      "Excellente résistance au piétinement",
      "Quadrillage vert haute visibilité",
      "Plébiscité en serres, fraisiers & vergers",
      "Longévité et rendement supérieurs"
    ],
    recommended: true
  },
  {
    name: "Gamme Haute Densité",
    power: "110 g/m²",
    price: "Protection maximale*",
    features: [
      "Épaisseur et robustesse maximales",
      "Ultra-résistant aux UV intenses",
      "Conçu pour passages répétés",
      "Maintien des talus & anti-érosion",
      "Idéal pépinières, voiries & chantiers",
      "Tarifs dégressifs par palette"
    ],
    recommended: false
  }
];

interface PricingProps {
  onOpenModal: (offerName?: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenModal }) => {
  return (
    <section id="tarifs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-emerald-700 font-semibold tracking-wider uppercase text-xs sm:text-sm flex items-center justify-center gap-1.5">
            <Sparkles size={16} /> 4 grammages certifiés Maghreb Sac
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Nos variantes de toile de paillage : 90, 100, 105 & 110 g/m²
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Choisissez l’épaisseur adaptée à votre terrain et votre culture. Bobines de 100 mètres disponibles en multiples largeurs (1m05, 1m65, 2m10, 3m30, 4m20, 5m25) ou sur-mesure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-6 sm:p-7 transition-all flex flex-col justify-between ${
                tier.recommended 
                  ? 'bg-white border-2 border-emerald-500 shadow-xl lg:-translate-y-2 z-10 ring-4 ring-emerald-500/10' 
                  : 'bg-slate-50 border border-slate-200 hover:shadow-lg hover:border-emerald-300'
              }`}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white px-3.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider shadow-md uppercase">
                  LE PLUS POPULAIRE
                </div>
              )}
              
              <div>
                <div className="text-center mb-6">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">{tier.name}</span>
                  <div className="text-3xl font-extrabold text-emerald-700 my-1">{tier.power}</div>
                  <div className="text-xs font-semibold text-slate-600">{tier.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-slate-600 text-xs sm:text-sm">
                      <Check size={16} className="text-emerald-600 mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <button 
                  onClick={() => onOpenModal(`${tier.name} (${tier.power})`)}
                  className={`w-full py-3 rounded-xl font-bold transition-all text-xs sm:text-sm ${
                    tier.recommended 
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25' 
                      : 'bg-white border-2 border-slate-300 text-slate-700 hover:border-emerald-600 hover:text-emerald-700'
                  }`}
                >
                  Demander un devis ({tier.power})
                </button>
                
                <div className="mt-3 text-center">
                   <p className="text-[10px] text-slate-400">*Tarifs dégressifs selon rouleaux & volumes</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;