import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Trophy, Award, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/about', label: 'About', icon: User },
  { path: '/skills-enhanced', label: 'Skills', icon: Code },
  { path: '/projects', label: 'Projects', icon: Trophy },
  { path: '/achievements', label: 'Achievements', icon: Award },
  { path: '/certifications', label: 'Certifications', icon: Award },
  { path: '/contact', label: 'Contact', icon: Mail },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className={`container mx-auto px-4 sm:px-6 transition-all duration-500 ${scrolled ? 'pt-3' : 'pt-5'}`}>
        <nav
          className={`pointer-events-auto mx-auto flex items-center justify-between rounded-full transition-all duration-500 ${
            scrolled
              ? 'glass-strong shadow-elegant max-w-5xl pl-5 pr-2 py-2'
              : 'bg-transparent border border-transparent max-w-6xl pl-5 pr-3 py-3'
          }`}
        >
          {/* Brand */}
          <button
            onClick={() => go('/')}
            className="flex items-center gap-2 group"
            aria-label="Sharansidh home"
          >
            <span className="h-7 w-7 rounded-full bg-gradient-gold flex items-center justify-center text-[10px] font-mono font-bold text-primary-foreground shadow-glow">
              S
            </span>
            <span className="font-serif text-xl tracking-tight">
              Sharansidh<span className="text-primary">.</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => go(item.path)}
                  className={`relative px-3.5 py-1.5 rounded-full text-[13px] font-medium tracking-wide transition-smooth ${
                    active
                      ? 'text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 rounded-full bg-gradient-gold shadow-soft" aria-hidden />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              size="sm"
              variant="outline"
              className="rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => go('/contact')}
            >
              Let's talk
            </Button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="rounded-full"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pointer-events-auto mt-2 glass-strong rounded-2xl p-2 shadow-elegant animate-fade-in">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => go(item.path)}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-smooth ${
                    active
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
