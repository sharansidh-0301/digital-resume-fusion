import { Github, Linkedin, Mail, Crosshair } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="border-t border-border bg-background py-10">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div><div className="flex items-center gap-2 font-mono text-xs uppercase text-primary"><Crosshair className="h-4 w-4" />Sharansidh_JR</div><p className="mt-3 max-w-xl text-sm text-muted-foreground">Aspiring Cybersecurity Professional · SOC Analyst &amp; VAPT Enthusiast · Bug Hunter 🐞</p></div>
        <div className="flex gap-4 text-muted-foreground"><a href="https://github.com/sharansidh-0301" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary"><Github className="h-5 w-5" /></a><a href="https://www.linkedin.com/in/sharansidh-jr/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-5 w-5" /></a><a href="mailto:sharansidh0301@gmail.com" aria-label="Email" className="hover:text-primary"><Mail className="h-5 w-5" /></a></div>
      </div>
      <div className="mt-8 flex flex-col gap-3 border-t border-border pt-5 font-mono text-[9px] uppercase text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Sharansidh J R</span><nav className="flex flex-wrap gap-4"><Link to="/about">About</Link><Link to="/skills-enhanced">Skills</Link><Link to="/projects">Projects</Link><Link to="/contact">Contact</Link></nav></div>
    </div>
  </footer>
);
export default Footer;
