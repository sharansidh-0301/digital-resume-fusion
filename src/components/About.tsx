import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Calendar, Coffee, Heart, Code2, Zap, Users, Lightbulb, Rocket, Target,
  User, BookOpen, TrendingUp, Award, Clock, Globe, Video, MapPin, ArrowUpRight,
  Briefcase, GraduationCap, ExternalLink, Sparkles
} from 'lucide-react';
import sih from '../assets/momentum.jpg';
import pic1 from '../assets/pic1.jpg';
import pic from '../assets/pic.jpg';
import auro from '../assets/auro.jpg';
import idea from '../assets/idea.jpg';
import debate from '../assets/debate.jpg';

const stats = [
  { label: 'Problems Solved', value: '150+', icon: TrendingUp, hint: 'LeetCode / consistent' },
  { label: 'Projects Built', value: '12+', icon: Rocket, hint: '2 in active dev' },
  { label: 'Technologies', value: '15+', icon: Code2, hint: '.NET focused stack' },
  { label: 'GitHub Commits', value: '400+', icon: Globe, hint: 'Daily active' },
];

const interests = [
  { icon: Coffee, label: 'Tech Generalist' },
  { icon: Heart, label: 'Open Source Explorer' },
  { icon: Calendar, label: 'Continuous Learner' },
  { icon: MapPin, label: 'Problem Solver' },
];

const education = [
  {
    degree: 'B.E. Electronics & Communication Engineering (Hons.)',
    school: 'IFET College Of Engineering',
    period: '2022 — 2026',
    location: 'Villupuram, India',
    score: '8.25',
    scoreLabel: 'CGPA / 10',
  },
  {
    degree: 'Higher Secondary',
    school: 'Vivekananda Hr. Sec. School',
    period: '2020 — 2022',
    location: 'Sholavandan, Madurai',
    score: '83.33%',
    scoreLabel: 'Percentage',
  },
  {
    degree: 'SSLC',
    school: 'Saraswathi Matric Hr. Sec. School',
    period: '2019 — 2020',
    location: 'Villupuram',
    score: '75.2%',
    scoreLabel: 'Percentage',
  },
];

const gallery = [
  { title: 'Smart India Hackathon 2023 — Finalist', category: 'Achievement', img: sih, link: 'https://www.linkedin.com/posts/sharansidh-jr_newabrdelhi-sihgrandfinale-hackathonexperience-activity-7151229167886307328-GCko', description: 'Selected as a finalist among 50,000+ teams nationwide.', date: 'Dec 2023', badge: 'Milestone' },
  { title: '1st Prize — National-Level Symposium', category: 'Recognition', img: pic1, description: 'Awarded for an innovative project presentation.', date: 'Mar 2025', badge: 'Winner' },
  { title: '3rd Prize — Paper Presentation', category: 'Research', img: pic, description: 'Presented research on emerging tech trends.', date: 'Jan 2024', badge: 'Top 3' },
  { title: 'Team Collaboration', category: 'Career Insight', img: auro, description: 'Lessons from group projects and hackathons.', date: 'Aug 2024', badge: 'Teamwork' },
  { title: 'Inter-College Ideathon', category: 'Achievement', img: idea, description: 'Pitched a product idea at an inter-college ideathon.', date: 'Jul 2024', badge: 'Creative' },
  { title: 'AI Technologies — Debate', category: 'Career Insight', img: debate, description: 'Discussed the impact of AI on society and industry.', date: 'Jun 2024', badge: 'Growth' },
];

const sets = [
  { icon: Code2, title: 'Clean Code Advocate', description: 'Maintainable, well-documented code following industry standards.', badge: 'Quality' },
  { icon: Briefcase, title: 'ERP & Payroll Domain', description: 'Hands-on with business logic, modules, and payroll workflows.', badge: 'Domain' },
  { icon: Zap, title: 'Fast Learner', description: 'Adapts quickly to new tools, frameworks, and team conventions.', badge: 'Adaptable' },
  { icon: Users, title: 'Team Collaborator', description: 'Comfortable in group projects, hackathons, and code reviews.', badge: 'Team' },
  { icon: Lightbulb, title: 'Problem Solver', description: '150+ DSA problems solved with consistent daily practice.', badge: 'Analytical' },
  { icon: Target, title: 'Goal Oriented', description: 'Structured approach to learning and shipping production work.', badge: 'Driven' },
];

const tabs = [
  { id: 'overview', label: 'Overview', icon: User },
  { id: 'education', label: 'Education', icon: BookOpen },
];

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section id="about" className="relative pt-28 pb-24 bg-gradient-hero noise overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" aria-hidden />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs tracking-wide text-muted-foreground mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            About me
          </div>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1] mb-5">
            A <span className="text-gradient italic">software developer</span><br />
            building things that ship.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Focused on the .NET ecosystem and ERP & Payroll domain. I care about clean architecture,
            reliable systems, and developer experience.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1 rounded-full glass p-1">
            {tabs.map((t) => {
              const active = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`relative flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-smooth ${
                    active ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {active && <span className="absolute inset-0 rounded-full bg-gradient-gold shadow-soft" />}
                  <span className="relative z-10 flex items-center gap-2">
                    <t.icon className="h-4 w-4" />
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* OVERVIEW */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 items-start"
          >
            {/* Story card */}
            <Card className="glass border-border/60 overflow-hidden">
              <CardContent className="p-8 md:p-10 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="h-8 w-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <User className="w-4 h-4 text-primary" />
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">My story</span>
                </div>

                <h3 className="font-serif text-3xl md:text-4xl leading-tight">
                  Building reliable business apps in the <span className="text-primary italic">.NET</span> world.
                </h3>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a software developer focused on the .NET ecosystem with hands-on experience across
                    <span className="text-foreground"> ERP and Payroll </span> systems. My work emphasizes clean
                    architecture, predictable data models, and code that's easy for the next developer to read.
                  </p>
                  <p>
                    Currently learning <span className="text-foreground">ASP.NET</span> in depth alongside modern
                    web tooling. I enjoy turning messy business requirements into small, well-tested pieces of software.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  {interests.map((i) => (
                    <div key={i.label} className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/40 px-4 py-3 hover:border-primary/40 transition-smooth">
                      <i.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm text-foreground">{i.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * i }}
                  className="group relative rounded-2xl glass p-6 hover:border-primary/40 transition-smooth overflow-hidden"
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <s.icon className="w-5 h-5 text-primary mb-4" />
                  <div className="font-serif text-4xl md:text-5xl text-gradient leading-none mb-2">
                    {s.value}
                  </div>
                  <div className="text-sm font-medium text-foreground">{s.label}</div>
                  <div className="text-[11px] text-muted-foreground mt-1 font-mono">{s.hint}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* EDUCATION */}
        {activeTab === 'education' && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative pl-6 md:pl-8">
              {/* Timeline rail */}
              <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />

              <div className="space-y-6">
                {education.map((e, i) => (
                  <motion.div
                    key={e.degree}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.08 * i }}
                    className="relative"
                  >
                    {/* Dot */}
                    <span className="absolute -left-[22px] md:-left-[26px] top-7 h-3 w-3 rounded-full bg-primary shadow-glow ring-4 ring-background" />

                    <Card className="glass border-border/60 hover:border-primary/40 transition-smooth">
                      <CardContent className="p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-6 justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <GraduationCap className="w-4 h-4 text-primary" />
                            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-mono">
                              {e.period}
                            </span>
                          </div>
                          <h4 className="font-serif text-xl md:text-2xl text-foreground leading-snug mb-1">{e.degree}</h4>
                          <p className="text-sm text-muted-foreground">{e.school}</p>
                          <p className="text-xs text-muted-foreground/80 mt-1 flex items-center gap-1.5">
                            <MapPin className="w-3 h-3" /> {e.location}
                          </p>
                        </div>
                        <div className="text-center md:text-right md:min-w-[120px]">
                          <div className="font-serif text-3xl text-gradient leading-none">{e.score}</div>
                          <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{e.scoreLabel}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* What sets me apart */}
        <div className="mt-28">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs tracking-wide text-muted-foreground mb-5">
              <Award className="w-3.5 h-3.5 text-primary" />
              What sets me apart
            </div>
            <h3 className="font-serif text-4xl md:text-5xl leading-tight">
              Engineering <span className="text-gradient italic">strengths</span> recruiters care about.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sets.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.04 * i }}
                className="group relative rounded-2xl glass p-6 hover-lift overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="text-[10px] font-mono border-border/60 text-muted-foreground">
                    {s.badge}
                  </Badge>
                </div>
                <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <s.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <h4 className="font-serif text-xl text-foreground mb-2">{s.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Professional Gallery */}
        <div className="mt-28">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs tracking-wide text-muted-foreground mb-5">
              <Video className="w-3.5 h-3.5 text-primary" />
              Professional Gallery
            </div>
            <h3 className="font-serif text-4xl md:text-5xl leading-tight mb-3">
              Career <span className="text-gradient italic">moments</span> & milestones.
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hackathons, recognitions, and learning experiences from my professional journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {gallery.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.04 * i }}
              >
                <Card className="group glass border-border/60 overflow-hidden hover-lift">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={g.img}
                      alt={g.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-background/70 backdrop-blur text-foreground border border-border/60 text-[10px]">
                        {g.badge}
                      </Badge>
                    </div>
                    {g.link && (
                      <a
                        href={g.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${g.title}`}
                        className="absolute top-3 right-3 h-8 w-8 rounded-full glass-strong flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-smooth"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground mb-2 font-mono">
                      <span>{g.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {g.date}
                      </span>
                    </div>
                    <h4 className="font-serif text-lg text-foreground leading-snug mb-2 line-clamp-2">
                      {g.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {g.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
