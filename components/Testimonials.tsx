import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  {
    id: 1,
    name: "Karim Benjelloun",
    role: "Maraîcher Bio",
    location: "Souss & Agadir",
    rating: 5,
    text: "Nous avons équipé nos parcelles de fraises et légumes avec la toile 105g/m² Maghreb Sac. Fini les corvées de désherbage, le sol garde son humidité et les récoltes restent bien propres.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Laurent Mercier",
    role: "Paysagiste & Espaces Verts",
    location: "Région PACA & Sud",
    rating: 5,
    text: "Le quadrillage vert facilite grandement l'alignement rectiligne des massifs. Toile indéchirable, excellente résistance aux UV même en plein été. Livraison des rouleaux rapide et soignée.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Youssef El Amrani",
    role: "Responsable Pépinière Horticole",
    location: "Serres & Arboretums",
    rating: 5,
    text: "Nous posons les toiles Maghreb Sac sous nos serres tunnels et plateformes de conteneurs. Zéro flaque, drainage direct et une longévité remarquable après 4 ans de plein soleil.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-emerald-700 font-semibold tracking-wider uppercase text-xs sm:text-sm">
            Retours d'expérience
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Ce que disent les professionnels
          </h2>
          <div className="flex justify-center items-center gap-2 mb-2">
            <div className="flex text-amber-400">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} fill="currentColor" size={20} />
              ))}
            </div>
            <span className="font-bold text-slate-800 text-sm">4.9/5 satisfaction clients</span>
          </div>
          <p className="text-xs text-slate-500">Agriculteurs, pépiniéristes, paysagistes et coopératives</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col justify-between h-full">
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
      </div>
    </section>
  );
};

export default Testimonials;