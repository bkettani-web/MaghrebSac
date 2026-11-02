import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

const faqItems: FaqItem[] = [
  {
    question: "Quelle est la durée de vie d'une toile de paillage Maghreb Sac ?",
    answer: "Nos toiles de paillage sont fabriquées en polypropylène tissé haute ténacité enrichi d'agents stabilisateurs anti-UV. Elles bénéficient d'une garantie de 3 à 5 ans en exposition plein soleil et conservent leurs propriétés mécaniques jusqu'à 7 à 8 ans sur le terrain."
  },
  {
    question: "L'eau et les engrais liquides traversent-ils la toile ?",
    answer: "Oui, parfaitement. La structure tissée micro-poreuse permet une excellente perméabilité à l'eau de pluie et à l'arrosage (goutte-à-goutte ou aspersion), évitant la formation de flaques et garantissant une aération saine des racines."
  },
  {
    question: "Comment choisir entre 90 g/m², 100 g/m², 105 g/m² et 110 g/m² ?",
    answer: "• 90 g/m² : Légère et très maniable, idéale pour les cultures maraîchères de courte à moyenne durée et les potagers. • 100 g/m² : Polyvalente, parfaite pour massifs, haies et parterres floraux. • 105 g/m² : Notre meilleure vente pour les professionnels, optimale pour serres, fraisiers et pépinières avec piétinement régulier. • 110 g/m² : Haute densité maximale pour forte exposition solaire, talus en pente et passages fréquents."
  },
  {
    question: "À quoi servent les lignes de couleur sur la toile ?",
    answer: "Les bandes vertes ou noires tissées tous les 15 ou 25 cm servent de repères visuels d'alignement pour réaliser des plantations parfaitement rectilignes et respecter les distances de plantation recommandées."
  },
  {
    question: "Combien d'agrafes de fixation métallique faut-il poser ?",
    answer: "Nous préconisons d'installer 1 à 2 agrafes au m² en quinconce, espacées d'environ 80 cm à 1 m. Sur les bordures exposées au vent et les recouvrements de lés, prévoyez une agrafe tous les 50 cm."
  },
  {
    question: "Fournissez-vous les professionnels et les coopératives en gros ?",
    answer: "Oui, Maghreb Sac approvisionne directement les exploitations agricoles, coopératives, pépiniéristes et entreprises du paysage. Nous proposons des tarifs dégressifs au rouleau, à la palette ou par camion complet avec expédition rapide."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-emerald-700 font-semibold tracking-wider uppercase text-xs sm:text-sm flex items-center justify-center gap-1.5 mb-2">
            <HelpCircle size={16} /> Réponses aux questions fréquentes
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            Tout savoir sur la toile de paillage
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Les conseils de nos experts pour bien choisir et réussir la pose de votre géotextile.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200/80 overflow-hidden">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-5 sm:p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-slate-800 text-sm sm:text-base pr-4">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-emerald-600 shrink-0" />
                ) : (
                  <ChevronDown className="text-slate-400 shrink-0" />
                )}
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-5 sm:p-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-1">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;