import { useState } from 'react';
import { Menu, X, Home, User, Code, FolderKanban, Trophy, Award, Mail, Crosshair } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/about', label: 'About', icon: User },
  { path: '/skills-enhanced', label: 'Skills', icon: Code },
  { path: '/projects', label: 'Projects', icon: FolderKanban },
  { path: '/achievements', label: 'Achievements', icon: Trophy },
  { path: '/certifications', label: 'Certifications', icon: Award },
  { path: '/contact', label: 'Contact', icon: Mail },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const go = (path: string) => { navigate(path); setIsOpen(false); window.scrollTo(0, 0); };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <Button variant="ghost" onClick={() => go('/')} className="h-auto rounded-none p-0 hover:bg-transparent" aria-label="Sharansidh home">
          <Crosshair className="h-5 w-5 text-primary" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider">Sharansidh_JR</span>
        </Button>
        <div className="hidden items-center md:flex">
          {navItems.map((item) => (
            <Button key={item.path} variant="ghost" size="sm" onClick={() => go(item.path)} className={`rounded-none border-b-2 px-3 font-mono text-[10px] uppercase ${location.pathname === item.path ? 'border-primary text-primary' : 'border-transparent text-muted-foreground'}`}>
              {item.label}
            </Button>
          ))}
        </div>
        <Button variant="outline" size="icon" onClick={() => setIsOpen(!isOpen)} className="rounded-none md:hidden" aria-label="Toggle menu" aria-expanded={isOpen}>
          {isOpen ? <X /> : <Menu />}
        </Button>
      </nav>
      {isOpen && (
        <div className="border-t border-border bg-background p-3 md:hidden">
          {navItems.map((item) => (
            <Button key={item.path} variant="ghost" onClick={() => go(item.path)} className={`mb-1 w-full justify-start rounded-none font-mono text-xs uppercase ${location.pathname === item.path ? 'bg-primary/10 text-primary' : ''}`}>
              <item.icon />{item.label}
            </Button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navigation;
