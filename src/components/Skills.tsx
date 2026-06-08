import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import {
  Code2, Globe, GitBranch, Terminal, Brain, Sparkles, Database, Cloud, Palette,
  FileCode, Boxes, Bot, Layers, Cpu, Wrench, Server, Hash, Triangle, Container,
  Workflow, BookOpen, Network, ArrowUpRight
} from 'lucide-react';

type Level = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

interface Skill {
  name: string;
  level: Level;
  icon: any;
  trending?: boolean;
}

interface Category {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  skills: Skill[];
}

const categories: Category[] = [
  {
    id: 'web',
    title: 'Web Technologies',
    subtitle: 'Frontend, backend, and the languages I ship with',
    icon: Globe,
    skills: [
      { name: 'JavaScript', level: 'Intermediate', icon: FileCode },
      { name: 'TypeScript', level: 'Intermediate', icon: FileCode, trending: true },
      { name: 'React', level: 'Intermediate', icon: Code2, trending: true },
      { name: 'HTML5', level: 'Expert', icon: Code2 },
      { name: 'CSS3', level: 'Expert', icon: Palette },
      { name: 'Tailwind CSS', level: 'Intermediate', icon: Palette },
      { name: 'Java', level: 'Intermediate', icon: Code2 },
      { name: 'Python', level: 'Intermediate', icon: Code2 },
      { name: 'C', level: 'Intermediate', icon: Code2 },
      { name: 'Spring Boot', level: 'Intermediate', icon: Boxes, trending: true },
      { name: 'Django', level: 'Beginner', icon: Server },
      { name: 'REST APIs', level: 'Intermediate', icon: Network },
      { name: 'SQL', level: 'Intermediate', icon: Database },
      { name: 'MongoDB', level: 'Beginner', icon: Database, trending: true },
    ],
  },
  {
    id: 'ai',
    title: 'AI / ML',
    subtitle: 'Models, agents, and the surrounding tooling',
    icon: Brain,
    skills: [
      { name: 'Python', level: 'Advanced', icon: Code2, trending: true },
      { name: 'Machine Learning', level: 'Intermediate', icon: Brain },
      { name: 'Deep Learning', level: 'Intermediate', icon: Cpu },
      { name: 'Neural Networks', level: 'Beginner', icon: Network },
      { name: 'PyTorch', level: 'Beginner', icon: Cpu },
      { name: 'Generative AI', level: 'Beginner', icon: Sparkles, trending: true },
      { name: 'LLMs', level: 'Beginner', icon: Brain, trending: true },
      { name: 'LangChain', level: 'Intermediate', icon: Workflow },
      { name: 'RAG', level: 'Beginner', icon: BookOpen, trending: true },
      { name: 'Agentic AI', level: 'Beginner', icon: Bot, trending: true },
      { name: 'AI Agents', level: 'Beginner', icon: Bot, trending: true },
      { name: 'MCP Server', level: 'Beginner', icon: Server, trending: true },
      { name: 'Pandas', level: 'Beginner', icon: Database },
      { name: 'Fuzzy Logic', level: 'Beginner', icon: Layers },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    subtitle: 'My day-to-day environment and productivity stack',
    icon: Terminal,
    skills: [
      { name: 'Git / GitHub', level: 'Expert', icon: GitBranch },
      { name: 'VS Code', level: 'Expert', icon: Code2 },
      { name: 'Eclipse IDE', level: 'Advanced', icon: Code2 },
      { name: 'PyCharm', level: 'Beginner', icon: Code2 },
      { name: 'Jupyter Notebook', level: 'Advanced', icon: FileCode },
      { name: 'n8n', level: 'Advanced', icon: Workflow },
      { name: 'Firebase', level: 'Intermediate', icon: Cloud, trending: true },
      { name: 'Vercel', level: 'Advanced', icon: Triangle, trending: true },
      { name: 'Figma', level: 'Intermediate', icon: Palette },
      { name: 'Postman', level: 'Intermediate', icon: Network },
    ],
  },
];

const levelStyles: Record<Level, { dot: string; label: string; dots: number }> = {
  Beginner:     { dot: 'bg-muted-foreground/60', label: 'text-muted-foreground',   dots: 1 },
  Intermediate: { dot: 'bg-primary/70',          label: 'text-primary/90',         dots: 2 },
  Advanced:     { dot: 'bg-primary',             label: 'text-primary',            dots: 3 },
  Expert:       { dot: 'bg-primary-glow',        label: 'text-primary-glow',       dots: 4 },
};

const LevelDots = ({ level }: { level: Level }) => {
  const { dots } = levelStyles[level];
  return (
    <div className="flex items-center gap-0.5" aria-label={`${level} proficiency`}>
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={`h-1 w-3 rounded-full ${i < dots ? levelStyles[level].dot : 'bg-border'}`}
        />
      ))}
    </div>
  );
};

const SkillsEnhanced = () => {
  const [active, setActive] = useState<string>('web');
  const current = categories.find((c) => c.id === active)!;

  const totals = categories.reduce(
    (acc, c) => acc + c.skills.length,
    0
  );

  return (
    <section className="relative pt-28 pb-24 bg-gradient-hero noise overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" aria-hidden />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs tracking-wide text-muted-foreground mb-6">
            <Hash className="w-3.5 h-3.5 text-primary" />
            Skills & Stack
          </div>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1] mb-5">
            The <span className="text-gradient italic">toolkit</span> I build with.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            {totals}+ technologies across web, AI/ML, and developer tooling — grouped by category so it's easy to scan.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap items-center gap-1 rounded-full glass p-1">
            {categories.map((c) => {
              const isActive = active === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  className={`relative flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-smooth ${
                    isActive ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {isActive && <span className="absolute inset-0 rounded-full bg-gradient-gold shadow-soft" />}
                  <span className="relative z-10 flex items-center gap-2">
                    <c.icon className="h-4 w-4" />
                    {c.title}
                    <span className="hidden sm:inline-block text-[10px] font-mono opacity-70">
                      ({c.skills.length})
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category header */}
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-1">{current.title}</h3>
          <p className="text-sm text-muted-foreground">{current.subtitle}</p>
        </div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 max-w-6xl mx-auto"
          >
            {current.skills.map((s, i) => (
              <motion.div
                key={`${current.id}-${s.name}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.025 }}
                className="group relative rounded-2xl glass p-4 hover:border-primary/40 hover-lift overflow-hidden"
              >
                {/* Gold corner accent */}
                <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {s.trending && (
                  <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 text-[9px] uppercase tracking-wider font-mono text-primary">
                    <Sparkles className="w-2.5 h-2.5" />
                    Hot
                  </span>
                )}

                <div className="relative flex items-start gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-card/60 border border-border/60 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 transition-smooth">
                    <s.icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                </div>

                <div className="relative">
                  <div className="text-sm font-medium text-foreground leading-tight mb-3 truncate">
                    {s.name}
                  </div>
                  <div className="flex items-center justify-between">
                    <LevelDots level={s.level} />
                    <span className={`text-[10px] uppercase tracking-wider font-mono ${levelStyles[s.level].label}`}>
                      {s.level}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Legend / footer */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[11px] font-mono text-muted-foreground">
          {(['Beginner', 'Intermediate', 'Advanced', 'Expert'] as Level[]).map((lv) => (
            <div key={lv} className="flex items-center gap-2">
              <LevelDots level={lv} />
              <span className={levelStyles[lv].label}>{lv}</span>
            </div>
          ))}
          <span className="hidden md:inline-flex items-center gap-1 text-primary">
            <Sparkles className="w-3 h-3" /> Trending — actively learning
          </span>
        </div>
      </div>
    </section>
  );
};

export default SkillsEnhanced;
