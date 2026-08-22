'use client';

import { Menu, X } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const NAV_ITEMS = ["About", "Skills", "Exp", "Leadership", "Projects", "Contact"];

export function Navigation({ activeSection, isMenuOpen, setIsMenuOpen }: NavigationProps) {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[90%] max-w-4xl px-6 py-3 glass rounded-full md:w-auto md:gap-8 text-sm font-medium">
      <div className="flex items-center md:hidden">
        <span className="text-gradient font-bold tracking-tighter">OLUWASEUN</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_ITEMS.map((item) => {
          const id = item.toLowerCase();
          return (
            <a
              key={item}
              href={`#${id}`}
              className={`transition-colors uppercase tracking-wider ${activeSection === id ? "text-blue-400" : "hover:text-blue-400"}`}
            >
              {item}
            </a>
          );
        })}
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden p-1 text-slate-100 focus:outline-none transition-transform active:scale-95"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 glass rounded-[2rem] p-6 flex flex-col gap-4 md:hidden animate-in fade-in slide-in-from-top-4 duration-300 shadow-2xl">
          {NAV_ITEMS.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors uppercase tracking-wider text-base py-2 border-b border-white/5 ${activeSection === id ? "text-blue-400" : "hover:text-blue-400"}`}
              >
                {item}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
