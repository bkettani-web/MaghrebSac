import React from 'react';
import { Layers, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2.5 text-white font-extrabold text-xl mb-4">
              <div className="bg-emerald-600 p-1.5 rounded-lg">
                <Layers className="text-white w-5 h-5" />
              </div>
              <span>Maghreb Sac</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Fabricant et distributeur de toiles de paillage tissées en polypropylène anti-UV, géotextiles et solutions d'agro-textiles pour maraîchers, pépiniéristes et paysagistes.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#avantages" className="hover:text-emerald-400 transition-colors">Avantages techniques</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Domaines d'application</a></li>
              <li><a href="#aides" className="hover:text-emerald-400 transition-colors">Rentabilité & Économies</a></li>
              <li><a href="#realisations" className="hover:text-emerald-400 transition-colors">Nos Réalisations</a></li>
              <li><a href="#tarifs" className="hover:text-emerald-400 transition-colors">Tarifs & Rouleaux</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Gamme Grammages</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-slate-300">Toile de paillage 90 g/m² (Éco)</span></li>
              <li><span className="text-slate-300">Toile de paillage 100 g/m² (Standard)</span></li>
              <li><span className="text-slate-300">Toile de paillage 105 g/m² (Pro N°1)</span></li>
              <li><span className="text-slate-300">Toile de paillage 110 g/m² (Haute Densité)</span></li>
              <li><span className="text-slate-300">Agrafes métalliques & bobines pro</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact & Devis</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-emerald-500 shrink-0" />
                <span>Service commercial : +33 1 89 71 23 45</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-emerald-500 shrink-0" />
                <span>contact@maghrebsac.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="text-emerald-500 shrink-0 mt-1" />
                <span>Expéditions & Livraisons directes France & International</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Maghreb Sac. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Conditions Générales de Vente</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;