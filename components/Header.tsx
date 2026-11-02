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
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
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

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={() => onOpenModal()}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm flex items-center gap-2 ${
              isScrolled 
                ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-600/20' 
                : 'bg-white text-emerald-800 hover:bg-slate-100 shadow-black/10'
            }`}
          >
            <PhoneCall className="w-4 h-4" />
            Devis Gratuit
          </button>
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
          <button 
            onClick={() => {
              onOpenModal();
              setMobileMenuOpen(false);
            }}
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold mt-2 shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            Obtenir un devis gratuit
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;