import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/myPic.webp';
import resume from '@/assets/Sharansidh_JR_SoftwareDeveloper.pdf';

const Hero = () => (
  <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-background px-5 pb-14 pt-24 sm:px-8 lg:px-12">
    <div className="absolute inset-0 bg-hud-grid opacity-30" aria-hidden />

    <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-12">
      <aside className="hidden h-[34rem] flex-col justify-between border-l border-border py-8 pl-5 font-mono text-[10px] uppercase text-muted-foreground md:col-span-1 md:flex" aria-label="System status">
        <span className="vertical-label">System.Init_Sequence</span>
        <div className="space-y-5">
          <div className="flex flex-col gap-1"><span className="text-primary">Status</span><span>Active</span></div>
          <div className="flex flex-col gap-1"><span className="text-primary">Node</span><span>SEC_01</span></div>
        </div>
      </aside>

      <div className="z-10 space-y-7 md:col-span-7">
        <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 font-mono text-[10px] uppercase text-primary">
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Live Protocol: Cybersecurity
        </div>

        <div>
          <h1 className="font-display text-5xl font-bold uppercase leading-none text-foreground sm:text-7xl lg:text-8xl">
            Sharansidh
            <span className="hud-outline mt-1 block">J R</span>
          </h1>
          <p className="mt-6 max-w-2xl font-mono text-base leading-relaxed text-muted-foreground sm:text-lg">
            Aspiring Cybersecurity Professional <span className="text-primary">/</span> SOC Analyst &amp; VAPT Enthusiast <span className="text-primary">/</span> Bug Hunter 🐞
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Threat Detection · Vulnerability Research · Ethical Hacking · Linux · Networking · SIEM · SQL · Java
          </p>
        </div>

        <div className="flex flex-col gap-4 pt-2 sm:flex-row">
          <Button size="lg" asChild className="relative rounded-none uppercase">
            <a href="mailto:sharansidh0301@gmail.com"><Mail />Establish contact<ArrowRight /></a>
          </Button>
          <Button variant="outline" size="lg" asChild className="rounded-none border-border uppercase hover:border-primary hover:text-primary">
            <a href={resume} download="Sharansidh_JR_SoftwareDeveloper.pdf"><Download />Fetch credentials.pdf</a>
          </Button>
        </div>

        <div className="flex items-center gap-3 border-t border-border/70 pt-5">
          <Button variant="ghost" size="icon" asChild className="rounded-none border border-border" title="GitHub"><a href="https://github.com/sharansidh-0301" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a></Button>
          <Button variant="ghost" size="icon" asChild className="rounded-none border border-border" title="LinkedIn"><a href="https://www.linkedin.com/in/sharansidh-jr/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a></Button>
          <span className="hidden font-mono text-[10px] text-muted-foreground sm:inline">IDENTITY // VERIFIED</span>
        </div>
      </div>

      <div className="group relative mx-auto w-full max-w-sm md:col-span-4">
        <div className="hud-corners relative aspect-[4/5] overflow-hidden bg-secondary grayscale contrast-125 transition-all duration-500 hover:grayscale-0">
          <div className="portrait-scan absolute inset-x-0 top-0 z-20 h-px bg-primary/50 shadow-glow" aria-hidden />
          <img src={profilePhoto} alt="Sharansidh J R" className="h-full w-full object-cover object-top" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" aria-hidden />
          <div className="absolute bottom-5 left-5 font-mono text-[10px] uppercase">
            <span className="text-primary">Bio_Sync Active</span>
            <div className="mt-2 flex gap-1" aria-hidden>
              <span className="h-1 w-6 bg-primary" /><span className="h-1 w-6 bg-primary" /><span className="h-1 w-6 bg-primary" /><span className="h-1 w-6 bg-border" />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-4 left-4 border border-border bg-background/95 p-3 font-mono text-[9px] shadow-card sm:-left-4">
          <div className="flex gap-4 text-primary"><span>NODE: SEC_01</span><span>MODE: HUNT</span></div>
          <div className="mt-1 uppercase text-muted-foreground">Identity verified // secure</div>
        </div>
        <div className="absolute right-3 top-3 font-mono text-[9px] text-primary">
          REC [●]
          <div className="mt-1 text-muted-foreground">00:03:01</div>
        </div>
      </div>

      <div className="col-span-full mt-4 grid gap-px border border-border bg-border sm:grid-cols-3">
        {[['Current mission', 'Cybersecurity career transition'], ['Academic base', 'B.E. ECE (Hons. in AI) · 8.34 CGPA'], ['Software foundation', 'SQL · Java · Python']].map(([label, value]) => (
          <div key={label} className="bg-background p-4">
            <div className="font-mono text-[9px] uppercase text-primary">{label}</div>
            <div className="mt-2 text-sm text-muted-foreground">{value}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
