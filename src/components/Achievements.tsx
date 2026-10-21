import { Award, Trophy, Target, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const achievements = [
  { icon: Trophy, title: '1st Prize — Paper Presentation', detail: 'National-level technical symposium at Mailam Engineering College.', year: '2025', link: 'https://www.linkedin.com/posts/sharansidh0301_paperpresentation-adzap-symposiumsuccess-activity-7346507758210293762-iP0U?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl4bRIBUsO19sMARa770vyYHWdCfQvkSPM' },
  { icon: Award, title: 'Smart India Hackathon Finalist', detail: 'Selected among the top 1,028 teams from more than 50,000 entries in SIH 2023 Hardware Edition.', year: '2023', link: 'https://www.linkedin.com/posts/sharansidh0301_newabrdelhi-sihgrandfinale-hackathonexperience-activity-7151229167886307328-AcH3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl4bRIBUsO19sMARa770vyYHWdCfQvkSPM' },
  { icon: Target, title: '2nd Prize — Intra-college Ideathon', detail: 'Recognized for an innovative solution presented through team collaboration.', year: '2025', link: 'https://www.linkedin.com/posts/sharansidh0301_ideathon-decibalclub-teamwork-activity-7347247904077598722-Cuj8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl4bRIBUsO19sMARa770vyYHWdCfQvkSPM' },
  { icon: Award, title: '3rd Prize — Paper Presentation', detail: 'Awarded at Velammal Engineering College, Ambattur.', year: '2024', link: 'https://www.linkedin.com/posts/sharansidh0301_velammal-chennai-third-activity-7167464915434156032-B79o?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl4bRIBUsO19sMARa770vyYHWdCfQvkSPM' },
];
const bugBounties = [
  {
    code: 'BB-01',
    title: 'Admin Account Takeover via Weak Credentials',
    cwe: 'CWE-1391',
    severity: 'Critical',
    score: '9.8',
    vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
    summary: 'Subdomain enumeration and GitHub OSINT reconnaissance uncovered sensitive data exposing password patterns. Harvesting active corporate emails and running a targeted credential-stuffing attack achieved full administrative account takeover, exposing the organization\'s cloud environment and sensitive client PII, including GST details and tax invoices for 200+ clients.',
    tools: ['Subfinder', 'Burp Suite', 'OSINT'],
  },
  {
    code: 'BB-02',
    title: 'Improper Input Validation Leading to Fee Manipulation',
    cwe: 'CWE-20',
    severity: 'High',
    score: '8.6',
    vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:N/I:H/A:N',
    summary: 'During a payment workflow assessment, identified a server-side input validation flaw in the transaction pipeline. An unauthenticated remote attacker can intercept transactional traffic and manipulate parameter values such as the fee amount, bypassing financial controls to complete registrations for an arbitrarily reduced value.',
    tools: ['Traffic interception', 'Parameter tampering'],
  },
];
const badges = [
  { name: 'Pull Shark', detail: 'Pull requests successfully merged.', image: 'https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png' },
  { name: 'Quickdraw', detail: 'Issue or pull request closed quickly.', image: 'https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png' },
];

const Achievements = () => (
  <section id="achievements" className="relative min-h-screen overflow-hidden bg-gradient-hero pt-24 pb-20 noise">
    <div className="absolute inset-0 bg-grid-pattern opacity-45" aria-hidden />
    <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[.7fr_1.3fr]"><div className="font-mono text-xs uppercase text-primary">Recognition log / verified</div><div><h1 className="text-4xl sm:text-5xl lg:text-6xl">Evidence of initiative and execution.</h1><p className="mt-4 max-w-2xl text-muted-foreground">National and college-level recognition, presented without estimated totals or unsupported metrics.</p></div></div>
      <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2">
        {achievements.map((item, index) => (
          <article key={item.title} className="bg-background p-6 sm:p-8"><div className="flex items-center justify-between"><item.icon className="h-5 w-5 text-primary" /><span className="font-mono text-[10px] text-muted-foreground">REC-0{index + 1} / {item.year}</span></div><h2 className="mt-8 font-sans text-xl font-semibold">{item.title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>{item.link && <Button variant="link" asChild className="mt-4 h-auto p-0 font-mono text-xs uppercase"><a href={item.link} target="_blank" rel="noreferrer">View evidence <ExternalLink /></a></Button>}</article>
        ))}
      </div>
      <div className="mt-20 grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase text-primary"><Bug className="h-4 w-4" />Offensive security / verified reports</div>
          <h2 className="mt-3 text-3xl">Bug bounty findings</h2>
          <p className="mt-3 text-sm text-muted-foreground">Disclosed vulnerabilities from security assessments, mapped to CWE and scored with CVSS v3.1.</p>
        </div>
        <div className="space-y-6">
          {bugBounties.map((finding) => (
            <article key={finding.code} className="hud-corners relative border border-border bg-card/55 p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-[10px] uppercase text-primary">{finding.code} // {finding.cwe}</span>
                <span className="flex items-center gap-2 border border-primary/50 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase text-primary">
                  <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping opacity-60" /><span className="relative inline-flex h-2 w-2 bg-primary" /></span>
                  {finding.severity} · CVSS {finding.score}
                </span>
              </div>
              <h3 className="mt-5 font-sans text-xl font-semibold">{finding.title}</h3>
              <p className="mt-3 font-mono text-[10px] text-muted-foreground">{finding.vector}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{finding.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">{finding.tools.map((tool) => <span key={tool} className="border border-border px-3 py-1.5 font-mono text-[10px] uppercase text-muted-foreground">{tool}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-20 grid gap-8 lg:grid-cols-[.7fr_1.3fr]"><div><div className="flex items-center gap-2 font-mono text-xs uppercase text-primary"><Github className="h-4 w-4" />GitHub signals</div><h2 className="mt-3 text-3xl">Achievement badges</h2><p className="mt-3 text-sm text-muted-foreground">Badges listed from the supplied profile details.</p></div><div className="grid gap-4 sm:grid-cols-2">{badges.map((badge) => <article key={badge.name} className="flex items-center gap-5 border border-border bg-card/55 p-5"><img src={badge.image} alt={`${badge.name} GitHub badge`} loading="lazy" className="h-20 w-20" /><div><h3 className="font-sans text-lg font-semibold">{badge.name}</h3><p className="mt-2 text-sm text-muted-foreground">{badge.detail}</p></div></article>)}</div></div>
    </div>
  </section>
);
export default Achievements;
