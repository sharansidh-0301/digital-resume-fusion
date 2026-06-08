import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download, ChevronDown, Sparkles, Code2, Database, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/myPic.png';
import resumeSoftware from '@/assets/SHARANSIDH_JR_SOFTWARE_ENGINEER.pdf';
import resumeAI from '@/assets/SHARANSIDH_JR_AI_ENGINEER.pdf';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';

const ROLES = [
  '.NET Developer',
  'ASP.NET Engineer',
  'ERP & Payroll Domain',
  'Software Developer',
];

const Hero = () => {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      const role = ROLES[idx];
      for (let i = 0; i <= role.length; i++) {
        if (cancelled) return;
        setText(role.slice(0, i));
        await new Promise((r) => setTimeout(r, 70));
      }
      await new Promise((r) => setTimeout(r, 1800));
      for (let i = role.length; i >= 0; i--) {
        if (cancelled) return;
        setText(role.slice(0, i));
        await new Promise((r) => setTimeout(r, 35));
      }
      setIdx((p) => (p + 1) % ROLES.length);
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [idx]);

  const stagger = {
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero noise pt-28 pb-20"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" aria-hidden />
      {/* Spotlight */}
      <div
        className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, hsl(44 53% 54% / 0.35), transparent)' }}
        aria-hidden
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left — content */}
          <motion.div initial="hidden" animate="show" variants={stagger} className="text-center lg:text-left">
            <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs tracking-wide text-muted-foreground mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Available for full-time Software Developer roles
            </motion.div>

            <motion.h1 variants={item} className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-6">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block">
                <span className="text-gradient">Sharansidh.</span>
                <span className="italic text-muted-foreground/70 text-[0.7em]">jr</span>
              </span>
            </motion.h1>

            <motion.div variants={item} className="h-9 mb-6 flex items-center justify-center lg:justify-start">
              <span className="font-mono text-sm text-muted-foreground mr-3">{'>'}</span>
              <span className="font-mono text-base sm:text-lg text-primary">
                {text}
                <span className="inline-block w-[2px] h-5 bg-primary/80 ml-0.5 align-middle animate-pulse" />
              </span>
            </motion.div>

            <motion.p variants={item} className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Software Developer focused on building reliable, production-grade business
              applications. Specialized in the{' '}
              <span className="text-foreground font-medium">.NET ecosystem</span> with hands-on
              experience across <span className="text-foreground font-medium">ERP & Payroll</span> systems,
              and an active learner of <span className="text-foreground font-medium">ASP.NET</span> and modern web tooling.
            </motion.p>

            {/* Stat strip */}
            <motion.div variants={item} className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0 mb-8">
              {[
                { icon: Code2, label: '.NET / C#', value: 'Core stack' },
                { icon: Database, label: 'ERP & Payroll', value: 'Domain' },
                { icon: Server, label: 'ASP.NET', value: 'Learning' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl glass p-3 text-left">
                  <s.icon className="w-4 h-4 text-primary mb-2" />
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.value}</div>
                  <div className="text-sm font-medium text-foreground">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="rounded-full group" asChild>
                <a href="mailto:sharansidh0301@gmail.com">
                  <Mail className="w-4 h-4" />
                  Get in touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="lg" className="rounded-full group border-border/80">
                    <Download className="w-4 h-4" />
                    Download Resume
                    <ChevronDown className="w-4 h-4 opacity-70 transition-transform group-data-[state=open]:rotate-180" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="min-w-[16rem] glass-strong">
                  <DropdownMenuLabel className="text-xs text-muted-foreground">Select resume</DropdownMenuLabel>
                  <DropdownMenuItem asChild className="rounded-md cursor-pointer">
                    <a href={resumeSoftware} download className="flex items-center gap-3 px-3 py-2 text-sm">
                      <Download className="w-4 h-4 text-primary" />
                      Software Developer (.NET)
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-md cursor-pointer">
                    <a href={resumeAI} download className="flex items-center gap-3 px-3 py-2 text-sm">
                      <Download className="w-4 h-4 text-primary" />
                      AI Engineer
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>

            {/* Socials */}
            <motion.div variants={item} className="mt-8 flex items-center gap-2 justify-center lg:justify-start">
              {[
                { href: 'https://github.com/sharansidh-0301', icon: Github, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/sharansidh0301/', icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:sharansidh0301@gmail.com', icon: Mail, label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="h-10 w-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-smooth"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
              <span className="ml-3 text-xs text-muted-foreground font-mono hidden sm:inline">
                sharansidh0301@gmail.com
              </span>
            </motion.div>
          </motion.div>

          {/* Right — portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Gold ring frame */}
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-gold opacity-25 blur-2xl" aria-hidden />
              <div className="relative rounded-[2rem] p-[1px] bg-gradient-to-br from-primary/60 via-border to-transparent">
                <div className="rounded-[calc(2rem-1px)] overflow-hidden bg-card w-[280px] h-[360px] sm:w-[340px] sm:h-[440px] lg:w-[380px] lg:h-[480px] relative">
                  <img
                    src={profilePhoto}
                    alt="Sharansidh — Software Developer"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  {/* Bottom info card */}
                  <div className="absolute left-3 right-3 bottom-3 glass-strong rounded-2xl px-4 py-3 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Currently</div>
                      <div className="text-sm font-medium text-foreground">Building .NET apps</div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-[11px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                      Open to work
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech chips */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-6 top-10 glass-strong rounded-xl px-3 py-2 text-xs font-mono flex items-center gap-2 shadow-soft"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> C# / .NET
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 top-32 glass-strong rounded-xl px-3 py-2 text-xs font-mono flex items-center gap-2 shadow-soft"
              >
                <Sparkles className="w-3 h-3 text-primary" /> ASP.NET
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-2 bottom-24 glass-strong rounded-xl px-3 py-2 text-xs font-mono flex items-center gap-2 shadow-soft"
              >
                <Database className="w-3 h-3 text-primary" /> SQL Server
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Marquee credibility strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 lg:mt-24 border-t border-border/60 pt-8"
        >
          <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground text-center mb-5">
            Core toolkit
          </div>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm font-mono text-muted-foreground/80">
            {['C#', '.NET', 'ASP.NET', 'SQL Server', 'JavaScript', 'React', 'Git', 'REST APIs'].map((t) => (
              <span key={t} className="hover:text-primary transition-smooth">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
