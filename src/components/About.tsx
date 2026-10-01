import { useState } from 'react';
import { User, GraduationCap, Briefcase, ShieldCheck, Trophy, Clock, ExternalLink, Radar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import sih from '@/assets/momentum.webp';
import pic1 from '@/assets/pic1.webp';
import pic from '@/assets/pic.webp';
import auro from '@/assets/auro.webp';
import idea from '@/assets/idea.webp';
import debate from '@/assets/debate.webp';

const education = [
  { degree: 'B.E. Electronics & Communication Engineering', detail: 'Honours in Artificial Intelligence', school: 'IFET College of Engineering, Villupuram', period: 'Nov 2022 — May 2026', score: '8.34 CGPA' },
  { degree: 'Higher Secondary', detail: 'Academic qualification', school: 'Vivekananda Higher Secondary School', period: '2020 — 2022', score: '83.33%' },
  { degree: 'SSLC', detail: 'Academic qualification', school: 'Saraswathi Matric Higher Secondary School', period: '2019 — 2020', score: '75.2%' },
];

const gallery = [
  { title: 'Smart India Hackathon 2023 Finalist', img: sih, note: 'Top 1,028 teams from 50,000+ entries', link: 'https://www.linkedin.com/posts/sharansidh-jr_newabrdelhi-sihgrandfinale-hackathonexperience-activity-7151229167886307328-GCko' },
  { title: 'National-Level Symposium — 1st Prize', img: pic1, note: 'Paper presentation · Mailam Engineering College' },
  { title: 'Paper Presentation — 3rd Prize', img: pic, note: 'Velammal Engineering College' },
  { title: 'Team Collaboration', img: auro, note: 'Project and hackathon field notes' },
  { title: 'Intra-college Ideathon — 2nd Prize', img: idea, note: 'Innovation and product pitching' },
  { title: 'AI Technologies Debate', img: debate, note: 'Technical communication and critical thinking' },
];

const About = () => {
  const [tab, setTab] = useState<'profile' | 'education'>('profile');
  return (
    <section id="about" className="relative min-h-screen overflow-hidden bg-gradient-hero pt-24 pb-20 noise">
      <div className="absolute inset-0 bg-grid-pattern opacity-45" aria-hidden />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[.7fr_1.3fr]">
          <div className="font-mono text-xs uppercase text-primary">Case file / operator background</div>
          <div><h1 className="text-4xl sm:text-5xl lg:text-6xl">From software foundations to cyber defense.</h1><p className="mt-4 max-w-2xl text-muted-foreground">An engineering graduate building toward SOC analysis, VAPT, bug hunting, and vulnerability research.</p></div>
        </div>

        <div className="mt-8 flex gap-2" role="tablist" aria-label="About sections">
          <Button variant={tab === 'profile' ? 'default' : 'outline'} onClick={() => setTab('profile')} className="rounded-none uppercase"><User />Profile</Button>
          <Button variant={tab === 'education' ? 'default' : 'outline'} onClick={() => setTab('education')} className="rounded-none uppercase"><GraduationCap />Education</Button>
        </div>

        {tab === 'profile' ? (
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
            <article className="hud-corners border border-border bg-card/60 p-6 sm:p-8">
              <div className="font-mono text-[10px] uppercase text-primary">Mission profile</div>
              <h2 className="mt-4 text-3xl">Curious about how systems break—and how to defend them.</h2>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>I am an aspiring cybersecurity professional focused on SOC operations, VAPT, threat detection, ethical hacking, Linux, networking, SIEM, and vulnerability research.</p>
                <p>My software background in SQL, Java, Python, Spring Boot, REST APIs, and database development helps me understand applications from the inside and approach security with an engineering mindset.</p>
              </div>
              <div className="mt-8 border-l-2 border-primary bg-primary/5 p-5">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-primary"><Briefcase className="h-4 w-4" />Verified experience</div>
                <h3 className="mt-3 font-sans text-lg font-semibold">Software Developer Trainee · iSPIDER Software Solutions</h3>
                <p className="mt-1 font-mono text-[10px] text-muted-foreground">Puducherry · Jun–Aug 2026</p>
                <p className="mt-3 text-sm text-muted-foreground">Worked with payroll backend logic, Microsoft SQL Server, queries, and stored procedures.</p>
              </div>
            </article>
            <div className="grid grid-cols-2 gap-px border border-border bg-border">
              {[['8.34', 'Engineering CGPA'], ['55+', 'GeeksforGeeks DSA'], ['400+', 'SkillRack problems'], ['Top 1,028', 'SIH 2023 finalist']].map(([value, label]) => (
                <div key={label} className="bg-background p-5"><Radar className="h-4 w-4 text-primary" /><div className="mt-8 text-2xl font-bold text-primary">{value}</div><div className="mt-1 text-xs text-muted-foreground">{label}</div></div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-8 space-y-3">
            {education.map((item, index) => (
              <article key={item.degree} className="grid gap-4 border border-border bg-card/50 p-6 sm:grid-cols-[90px_1fr_auto] sm:items-center">
                <span className="font-mono text-xs text-primary">EDU-0{index + 1}</span>
                <div><h2 className="font-sans text-lg font-semibold">{item.degree}</h2><p className="text-sm text-primary">{item.detail}</p><p className="mt-1 text-sm text-muted-foreground">{item.school} · {item.period}</p></div>
                <strong className="font-mono text-sm text-foreground">{item.score}</strong>
              </article>
            ))}
          </div>
        )}

        <div className="mt-24">
          <div className="mb-8 flex items-end justify-between border-b border-border pb-5"><div><div className="flex items-center gap-2 font-mono text-[10px] uppercase text-primary"><Trophy className="h-4 w-4" />Evidence archive</div><h2 className="mt-3 text-3xl sm:text-4xl">Professional gallery</h2></div><span className="hidden font-mono text-[10px] text-muted-foreground sm:block">06 records</span></div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <article key={item.title} className="group border border-border bg-card/50">
                <div className="relative aspect-[16/10] overflow-hidden"><img src={item.img} alt={item.title} loading="lazy" className="h-full w-full object-cover grayscale transition duration-300 group-hover:grayscale-0" /><div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" /></div>
                <div className="p-4"><div className="flex items-start justify-between gap-3"><div><h3 className="font-sans text-sm font-semibold">{item.title}</h3><p className="mt-2 text-xs text-muted-foreground">{item.note}</p></div>{item.link && <a href={item.link} target="_blank" rel="noreferrer" aria-label={`Open ${item.title}`} className="text-primary"><ExternalLink className="h-4 w-4" /></a>}</div></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
