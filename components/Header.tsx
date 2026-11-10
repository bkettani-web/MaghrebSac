import React, { useState, useEffect } from 'react';
import { Layers, Menu, X, PhoneCall } from 'lucide-react';

interface HeaderProps {
  onOpenModal: (offerName?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Avantages', href: '#avantages' },
    { label: 'Applications', href: '#services' },
    { label: 'Rentabilité', href: '#aides' },
    { label: 'Nos Toiles', href: '#realisations' },
    { label: 'Tarifs & Rouleaux', href: '#tarifs' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="bg-emerald-600 p-2 rounded-xl shadow-md group-hover:bg-emerald-700 transition-colors">
            <Layers className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className={`font-extrabold text-xl tracking-tight leading-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Maghreb Sac
            </span>
            <span className={`text-[10px] font-medium uppercase tracking-widest ${isScrolled ? 'text-emerald-700 font-semibold' : 'text-emerald-300'}`}>
              Toile de Paillage Pro
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className={`text-sm font-semibold hover:text-emerald-500 transition-colors ${isScrolled ? 'text-slate-700' : 'text-slate-100'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA WhatsApp */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="https://wa.me/212600000000?text=Bonjour%20Maghreb%20Sac%2C%20je%20souhaite%20obtenir%20des%20informations%20sur%20vos%20toiles%20de%20paillage."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter sur WhatsApp"
            className="px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-[#25D366]/25 hover:scale-105 active:scale-95"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Contact WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-slate-800' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-2xl p-5 flex flex-col gap-3">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-slate-700 font-medium py-2 border-b border-slate-100 hover:text-emerald-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="https://wa.me/212600000000?text=Bonjour%20Maghreb%20Sac%2C%20je%20souhaite%20obtenir%20des%20informations%20sur%20vos%20toiles%20de%20paillage."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl font-bold mt-2 shadow-lg shadow-[#25D366]/25 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Contact WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;