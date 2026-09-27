import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles, Code2, Database, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/myPic.webp';
import resume from '@/assets/Sharansidh_JR_SoftwareDeveloper.pdf';

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-28 pb-20">
    <div className="absolute inset-0 bg-grid-pattern opacity-40" aria-hidden />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-muted-foreground mb-8">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Software Developer · Open to opportunities
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-6">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block text-gradient">Sharansidh.</span>
          </h1>
          <div className="font-mono text-base sm:text-lg text-primary mb-6">Backend development · Databases · Business applications</div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
            Engineering graduate with hands-on experience in payroll business logic and database development. I build reliable software with Java, SQL, Python, and Spring Boot.
          </p>
          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0 mb-8">
            {[
              { icon: Code2, label: 'Java', value: 'Proficient' },
              { icon: Database, label: 'SQL', value: 'Proficient' },
              { icon: Server, label: 'Spring Boot', value: 'Familiar' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl glass p-3 text-left">
                <item.icon className="w-4 h-4 text-primary mb-2" />
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{item.value}</div>
                <div className="text-sm font-medium text-foreground">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Button variant="hero" size="lg" className="rounded-full group" asChild>
              <a href="mailto:sharansidh0301@gmail.com"><Mail className="w-4 h-4" />Get in touch<ArrowRight className="w-4 h-4" /></a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-border/80" asChild>
              <a href={resume} download="Sharansidh_JR_SoftwareDeveloper.pdf"><Download className="w-4 h-4" />Download résumé</a>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-2 justify-center lg:justify-start">
            {[
              { href: 'https://github.com/sharansidh-0301', icon: Github, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/sharansidh-jr/', icon: Linkedin, label: 'LinkedIn' },
              { href: 'mailto:sharansidh0301@gmail.com', icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} target={label === 'Email' ? undefined : '_blank'} rel="noopener noreferrer" aria-label={label} className="h-10 w-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <span className="ml-3 text-xs text-muted-foreground font-mono hidden sm:inline">sharansidh0301@gmail.com</span>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative rounded-2xl overflow-hidden bg-card w-[280px] h-[360px] sm:w-[340px] sm:h-[440px] lg:w-[380px] lg:h-[480px]">
            <img src={profilePhoto} alt="Sharansidh — Software Developer" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
            <div className="absolute left-3 right-3 bottom-3 glass-strong rounded-xl px-4 py-3 flex items-center justify-between">
              <div><div className="text-[10px] uppercase tracking-wider text-muted-foreground">Experience</div><div className="text-sm font-medium text-foreground">Software Developer Trainee</div></div>
              <span className="text-xs text-primary">iSPIDER · 2026</span>
            </div>
            <div className="absolute top-4 left-4 glass-strong rounded-lg px-3 py-2 text-xs font-mono flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" />Java · SQL</div>
            <div className="absolute top-16 right-4 glass-strong rounded-lg px-3 py-2 text-xs font-mono flex items-center gap-2"><Sparkles className="w-3 h-3 text-primary" />Spring Boot</div>
          </div>
        </div>
      </div>
      <div className="mt-16 border-t border-border/60 pt-7">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground text-center mb-4">Core toolkit</div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-mono text-muted-foreground/80">
          {['Java', 'SQL', 'Python', 'Spring Boot', 'React', 'REST APIs', 'MS SQL Server', 'Git / GitHub'].map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;