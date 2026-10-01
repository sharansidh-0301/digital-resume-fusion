import { ArrowRight, Github, Linkedin, Mail, Download, ShieldCheck, Radar, Bug, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/myPic.webp';
import resume from '@/assets/Sharansidh_JR_SoftwareDeveloper.pdf';

const focusAreas = ['Threat Detection', 'Vulnerability Research', 'Ethical Hacking', 'Linux', 'Networking', 'SIEM', 'SQL', 'Java'];

const Hero = () => (
  <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-hero pt-24 pb-14 noise">
    <div className="absolute inset-0 bg-grid-pattern opacity-60" aria-hidden />
    <div className="scan-line absolute inset-x-0 top-0 h-px bg-primary/35 pointer-events-none" aria-hidden />
    <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between border-y border-border/70 py-3 font-mono text-[10px] uppercase text-muted-foreground">
        <span>Operator / SHARANSIDH_JR</span>
        <span className="flex items-center gap-2 text-primary"><span className="h-1.5 w-1.5 bg-primary" />Available for opportunities</span>
      </div>

      <div className="grid min-h-[68vh] grid-cols-1 items-center gap-12 lg:grid-cols-[1.25fr_.75fr]">
        <div className="max-w-4xl">
          <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase text-primary">
            <ShieldCheck className="h-4 w-4" /> Aspiring Cybersecurity Professional
          </div>
          <h1 className="mb-6 text-5xl leading-[1.02] sm:text-6xl lg:text-7xl xl:text-8xl">
            Sharansidh J R
            <span className="mt-3 block text-primary">hunts the signal.</span>
          </h1>
          <p className="max-w-3xl text-lg font-semibold text-foreground sm:text-xl">
            SOC Analyst &amp; VAPT Enthusiast <span className="text-primary">/</span> Bug Hunter 🐞
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Building toward a career in defensive and offensive security through threat detection, vulnerability research, ethical hacking, Linux, networking, and SIEM—supported by strong SQL and Java foundations.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {focusAreas.map((area) => <span key={area} className="border border-border bg-card/70 px-3 py-2 font-mono text-[11px] uppercase text-muted-foreground hover:border-primary/60 hover:text-primary transition-colors">{area}</span>)}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="default" size="lg" asChild className="rounded-none uppercase tracking-wider">
              <a href="mailto:sharansidh0301@gmail.com"><Mail />Establish contact<ArrowRight /></a>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-none border-primary/50 uppercase tracking-wider">
              <a href={resume} download="Sharansidh_JR_SoftwareDeveloper.pdf"><Download />Download intel [CV]</a>
            </Button>
          </div>
          <div className="mt-7 flex items-center gap-3">
            <Button variant="ghost" size="icon" asChild className="rounded-none border border-border" title="GitHub"><a href="https://github.com/sharansidh-0301" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a></Button>
            <Button variant="ghost" size="icon" asChild className="rounded-none border border-border" title="LinkedIn"><a href="https://www.linkedin.com/in/sharansidh-jr/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a></Button>
            <span className="font-mono text-[11px] text-muted-foreground">secure_line: sharansidh0301@gmail.com</span>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm lg:ml-auto">
          <div className="hud-corners relative border border-primary/35 bg-card/70 p-4 shadow-elegant">
            <div className="relative aspect-[4/5] overflow-hidden border border-border bg-secondary">
              <img src={profilePhoto} alt="Sharansidh J R" className="h-full w-full object-cover object-top grayscale contrast-125" loading="eager" fetchPriority="high" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-color" />
              <div className="absolute inset-x-0 bottom-0 bg-background/90 p-4 backdrop-blur-sm">
                <div className="font-mono text-[9px] uppercase text-muted-foreground">Target profile / verified</div>
                <div className="mt-1 text-sm font-semibold">SOC · VAPT · BUG HUNTING</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[{ icon: Radar, label: 'Detect' }, { icon: Bug, label: 'Hunt' }, { icon: Network, label: 'Defend' }].map(({icon: Icon, label}) => (
                <div key={label} className="border-l-2 border-primary bg-primary/5 p-2"><Icon className="mb-2 h-4 w-4 text-primary" /><span className="font-mono text-[10px] uppercase">{label}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-3">
        {[['Current mission', 'Cybersecurity career transition'], ['Academic base', 'B.E. ECE (Hons. in AI) · 8.34 CGPA'], ['Software foundation', 'SQL · Java · Python']].map(([label, value]) => (
          <div key={label} className="bg-background p-4"><div className="font-mono text-[9px] uppercase text-primary">{label}</div><div className="mt-2 text-sm text-muted-foreground">{value}</div></div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
