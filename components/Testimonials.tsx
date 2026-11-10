import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  {
    id: 1,
    name: "Karim Benjelloun",
    role: "Maraîcher & Producteur Bio",
    location: "Souss-Massa, Agadir (Maroc)",
    rating: 5,
    text: "Nous avons équipé plus de 3 hectares de serres et plein champ avec la toile 105g/m² Maghreb Sac. Zéro mauvaise herbe, le sol garde son humidité même par fortes chaleurs et le rendement de nos fraises a nettement augmenté.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Amadou Diallo",
    role: "Agro-entrepreneur & Maraîchage",
    location: "Zone des Niayes, Dakar (Sénégal)",
    rating: 5,
    text: "Dans nos conditions sahéliennes, l'économie d'eau est vitale. La toile de paillage Maghreb Sac nous a permis de réduire l'arrosage de près de 50% tout en stoppant la prolifération des adventices. Une solidité exemplaire face aux UV.",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Mohamed Berrada",
    role: "Directeur de Domaine Agricole",
    location: "Berkane & Moulouya (Maroc)",
    rating: 5,
    text: "La toile tissée 110g/m² pour nos vergers d'agrumes et nos allées d'exploitation résiste remarquablement aux passages répétés et au vent. Les lignes de repérage facilitent grandement l'organisation des équipes sur le terrain.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-emerald-700 font-semibold tracking-wider uppercase text-xs sm:text-sm">
            Retours d'expérience
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Ce que disent les professionnels au Maroc & en Afrique
          </h2>
          <div className="flex justify-center items-center gap-2 mb-2">
            <div className="flex text-amber-400">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} fill="currentColor" size={20} />
              ))}
            </div>
            <span className="font-bold text-slate-800 text-sm">4.9/5 satisfaction clients</span>
          </div>
          <p className="text-xs text-slate-500">Agriculteurs, pépiniéristes et exploitants agricoles partenaires</p>
        </div>

        {/* Selected Element: Testimonials cards container */}
        <div>
          {/* Desktop Version: 3 columns grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col justify-between h-full hover:shadow-md transition-shadow relative"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="w-13 h-13 rounded-full object-cover ring-2 ring-emerald-500/30" 
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">{review.name}</h4>
                      <p className="text-xs font-semibold text-emerald-700">{review.role}</p>
                      <p className="text-xs text-slate-400">{review.location}</p>
                    </div>
                  </div>
                  <div className="flex text-amber-400 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} fill="currentColor" size={16} />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm italic leading-relaxed">
                    "{review.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Version: 1 single testimonial card with switch arrows */}
          <div className="block md:hidden max-w-md mx-auto">
            <div className="relative bg-white p-6 sm:p-7 rounded-2xl shadow-md border border-slate-200/90 min-h-[310px] flex flex-col justify-between">
              <Quote className="absolute top-4 right-4 text-emerald-100 w-10 h-10 pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center gap-3.5 mb-5">
                      <img 
                        src={currentReview.avatar} 
                        alt={currentReview.name} 
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-500/30 shrink-0" 
                      />
                      <div>
                        <h4 className="font-bold text-slate-900 text-base leading-tight">{currentReview.name}</h4>
                        <p className="text-xs font-semibold text-emerald-700 mt-0.5">{currentReview.role}</p>
                        <p className="text-[11px] text-slate-400">{currentReview.location}</p>
                      </div>
                    </div>
                    <div className="flex text-amber-400 mb-3.5">
                      {[...Array(currentReview.rating)].map((_, i) => (
                        <Star key={i} fill="currentColor" size={16} />
                      ))}
                    </div>
                    <p className="text-slate-600 text-sm italic leading-relaxed">
                      "{currentReview.text}"
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows & Dots */}
              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={prevReview}
                  aria-label="Témoignage précédent"
                  className="p-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 active:scale-95 transition-all shadow-xs"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="flex items-center gap-2">
                  {reviews.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Aller au témoignage ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentIndex === idx 
                          ? 'bg-emerald-600 w-6' 
                          : 'bg-slate-300 w-2 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextReview}
                  aria-label="Témoignage suivant"
                  className="p-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 active:scale-95 transition-all shadow-xs"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;