import { useState } from 'react';
import { ShieldCheck, Code2, BrainCircuit, Radar, Terminal, Network, Database, Bug, ScanSearch, Boxes, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Level = 'Focus Area' | 'Proficient' | 'Familiar' | 'Good Knowledge';
type Skill = { name: string; level: Level; icon: typeof ShieldCheck };

const categories: Record<string, { title: string; code: string; description: string; skills: Skill[] }> = {
  security: {
    title: 'Cybersecurity', code: 'SEC-01', description: 'Career focus areas I am actively building through structured study and hands-on exploration.',
    skills: [
      { name: 'SOC Analysis', level: 'Focus Area', icon: Radar }, { name: 'VAPT', level: 'Focus Area', icon: ScanSearch },
      { name: 'Bug Hunting', level: 'Focus Area', icon: Bug }, { name: 'Threat Detection', level: 'Focus Area', icon: ShieldCheck },
      { name: 'Vulnerability Research', level: 'Focus Area', icon: ScanSearch }, { name: 'Ethical Hacking', level: 'Focus Area', icon: Terminal },
      { name: 'Linux', level: 'Focus Area', icon: Terminal }, { name: 'SIEM', level: 'Focus Area', icon: Radar },
    ],
  },
  programming: {
    title: 'Programming & Data', code: 'DEV-02', description: 'Verified software foundations that support security automation, analysis, and secure development.',
    skills: [
      { name: 'SQL', level: 'Proficient', icon: Database }, { name: 'Java', level: 'Proficient', icon: Code2 },
      { name: 'Python', level: 'Proficient', icon: Code2 }, { name: 'React', level: 'Familiar', icon: Code2 },
      { name: 'Spring Boot', level: 'Familiar', icon: Boxes }, { name: 'REST APIs', level: 'Familiar', icon: Network },
    ],
  },
  foundations: {
    title: 'Core Knowledge', code: 'KNW-03', description: 'Computer science and analytical concepts supporting investigation and problem solving.',
    skills: [
      { name: 'Computer Networks', level: 'Good Knowledge', icon: Network }, { name: 'DBMS', level: 'Good Knowledge', icon: Database },
      { name: 'Operating Systems', level: 'Good Knowledge', icon: Terminal }, { name: 'DSA', level: 'Good Knowledge', icon: BrainCircuit },
      { name: 'Problem Solving', level: 'Good Knowledge', icon: BrainCircuit }, { name: 'OOP', level: 'Good Knowledge', icon: Boxes },
      { name: 'Generative AI', level: 'Good Knowledge', icon: BrainCircuit }, { name: 'Git / GitHub', level: 'Familiar', icon: GitBranch },
    ],
  },
};

const Skills = () => {
  const [active, setActive] = useState('security');
  const current = categories[active];
  if (!current) return null;

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero pt-24 pb-20 noise">
      <div className="absolute inset-0 bg-grid-pattern opacity-50" aria-hidden />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[.7fr_1.3fr]">
          <div className="font-mono text-xs uppercase text-primary">Capability matrix / verified profile</div>
          <div><h1 className="text-4xl sm:text-5xl lg:text-6xl">Security focus. Software foundations.</h1><p className="mt-4 max-w-2xl text-muted-foreground">A transparent view of what I know, what I use, and the cybersecurity disciplines I am actively pursuing.</p></div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="space-y-2">
            {Object.entries(categories).map(([id, category]) => (
              <Button key={id} variant="ghost" onClick={() => setActive(id)} className={`h-auto w-full justify-between rounded-none border px-4 py-4 font-mono text-xs uppercase ${active === id ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-muted-foreground'}`}>
                <span>{category.title}</span><span>{category.code}</span>
              </Button>
            ))}
            <div className="mt-5 border-l-2 border-primary bg-primary/5 p-4 font-mono text-[10px] leading-relaxed text-muted-foreground">No percentages or inflated ratings. Labels reflect the profile supplied for this portfolio.</div>
          </aside>

          <div>
            <div className="mb-6 flex items-end justify-between gap-4"><div><div className="font-mono text-[10px] uppercase text-primary">{current.code}</div><h2 className="mt-2 text-3xl">{current.title}</h2><p className="mt-2 max-w-xl text-sm text-muted-foreground">{current.description}</p></div><span className="font-mono text-xs text-muted-foreground">{String(current.skills.length).padStart(2, '0')} signals</span></div>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2 xl:grid-cols-3">
              {current.skills.map((skill, index) => (
                <article key={skill.name} className="group min-h-40 bg-background p-5 transition-colors hover:bg-primary/5">
                  <div className="flex items-start justify-between"><skill.icon className="h-5 w-5 text-primary" /><span className="font-mono text-[9px] text-muted-foreground">0x{String(index + 1).padStart(2, '0')}</span></div>
                  <h3 className="mt-8 font-sans text-base font-semibold">{skill.name}</h3>
                  <div className="mt-3 inline-flex border-l-2 border-primary pl-2 font-mono text-[9px] uppercase text-primary">{skill.level}</div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
