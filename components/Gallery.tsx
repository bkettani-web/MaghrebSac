import React from 'react';
import { Tag, Check } from 'lucide-react';

const realizations = [
  {
    src: "/assets/aistudio/WhatsApp_Image_2026-10-28_at_16.36.08_bf321148.jpeg",
    title: "Toile Tissée Verte Quadrillée",
    location: "Format Rouleau Maghreb Sac",
    spec: "100 g/m² • Lignes de repère"
  },
  {
    src: "/assets/aistudio/WhatsApp_Image_2026-10-28_at_16.36.07_793034a7.jpeg",
    title: "Toile Noire Traitée Anti-UV",
    location: "Maraîchage & Pépinières",
    spec: "105 g/m² • Gamme Pro"
  },
  {
    src: "/assets/aistudio/WhatsApp_Image_2026-10-28_at_16.36.08_2__e870f36c.jpeg",
    title: "Détail Tissage Géotextile",
    location: "Contrôle Qualité Usine",
    spec: "110 g/m² • Haute Densité"
  },
  {
    src: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80",
    title: "Cultures Maraîchères Plein Champ",
    location: "Fraisiers & Légumes",
    spec: "90 & 100 g/m² • Éco-responsable"
  },
  {
    src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    title: "Sol de Serres & Pépinières",
    location: "Propreté & Drainage Rapide",
    spec: "105 g/m² • Spécial Serres"
  },
  {
    src: "https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=800&q=80",
    title: "Aménagement de Talus & Massifs",
    location: "Stabilisation & Parterres",
    spec: "110 g/m² • Résistance Talus"
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="realisations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-emerald-700 font-semibold tracking-wider uppercase text-xs sm:text-sm">
            Qualité visible
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Nos Produits & Applications Terrain
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Découvrez nos toiles de paillage tissées Maghreb Sac en rouleaux et en situation réelle chez nos clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {realizations.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-md h-72 border border-slate-200">
              <img 
                src={item.src} 
                alt={`${item.title} - Maghreb Sac`} 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-0 sm:translate-y-2 sm:group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-600 text-white shadow-sm">
                      <Tag size={12} className="mr-1.5" /> {item.spec}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg sm:text-xl leading-tight mb-1">{item.title}</h3>
                  <div className="flex items-center text-slate-300 text-xs sm:text-sm">
                    <Check size={14} className="mr-1 text-emerald-400" />
                    {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;