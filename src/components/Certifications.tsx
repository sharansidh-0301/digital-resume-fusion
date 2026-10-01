import { Award, Network, Database, Code2, ShieldCheck } from 'lucide-react';

const certifications = [
  { code: 'CERT-01', name: 'Java Full Stack Development', issuer: 'TNS India Foundation', icon: Code2, skills: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL'] },
  { code: 'CERT-02', name: 'Introduction to Networks', issuer: 'Cisco', icon: Network, skills: ['Networking', 'Network Models', 'IP Fundamentals'] },
  { code: 'CERT-03', name: 'Switching, Routing, and Wireless Essentials', issuer: 'Cisco', icon: ShieldCheck, skills: ['Switching', 'Routing', 'Wireless Networks'] },
  { code: 'CERT-04', name: 'SQL Basics', issuer: 'SkillRack', icon: Database, skills: ['SQL', 'Queries', 'Problem Solving'] },
];

const Certifications = () => (
  <section id="certifications" className="relative min-h-screen overflow-hidden bg-gradient-hero pt-24 pb-20 noise">
    <div className="absolute inset-0 bg-grid-pattern opacity-45" aria-hidden />
    <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[.7fr_1.3fr]"><div className="font-mono text-xs uppercase text-primary">Credential vault / 04 records</div><div><h1 className="text-4xl sm:text-5xl lg:text-6xl">Verified learning records.</h1><p className="mt-4 max-w-2xl text-muted-foreground">Networking, programming, and database credentials that support the move into cybersecurity.</p></div></div>
      <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2">
        {certifications.map((cert) => (
          <article key={cert.code} className="group bg-background p-6 transition-colors hover:bg-primary/5 sm:p-8">
            <div className="flex items-start justify-between"><div className="border border-primary/40 bg-primary/5 p-3"><cert.icon className="h-6 w-6 text-primary" /></div><span className="font-mono text-[10px] text-primary">{cert.code}</span></div>
            <h2 className="mt-7 font-sans text-xl font-semibold">{cert.name}</h2><div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><Award className="h-4 w-4 text-primary" />{cert.issuer}</div>
            <div className="mt-6 flex flex-wrap gap-2">{cert.skills.map((skill) => <span key={skill} className="border border-border px-3 py-1.5 font-mono text-[9px] uppercase text-muted-foreground">{skill}</span>)}</div>
          </article>
        ))}
      </div>
      <div className="mt-8 border-l-2 border-primary bg-primary/5 p-5 text-sm text-muted-foreground"><strong className="text-foreground">Current direction:</strong> building practical cybersecurity knowledge across SOC workflows, VAPT, Linux, SIEM, ethical hacking, and vulnerability research.</div>
    </div>
  </section>
);
export default Certifications;
