import { ExternalLink, Github, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import queryImage from '@/assets/project6.webp';
import shopImage from '@/assets/project-2.webp';
import sewageImage from '@/assets/iot-sewage.webp';

const projects = [
  { code: 'CASE-001', title: 'Query Gen AI — Natural Language to SQL', description: 'Converts plain-language questions into SQL queries through a FastAPI and React workflow backed by MySQL, Python, and NLP.', image: queryImage, technologies: ['Python', 'FastAPI', 'React', 'MySQL', 'NLP'], liveUrl: 'https://query-gen-ai-two.vercel.app/', githubUrl: 'https://github.com/sharansidh-0301/Query-GenAI/', signal: 'Data access & query safety' },
  { code: 'CASE-002', title: 'IoT Sewage Gas Monitoring', description: 'Monitors sewage gas levels using ESP32 and MQ sensors, with a React interface and REST API for visibility and safety alerts.', image: sewageImage, technologies: ['ESP32', 'MQ Sensors', 'React', 'REST API'], liveUrl: 'https://iot-sewage-gaurd-platform.vercel.app/', githubUrl: 'https://github.com/sharansidh-0301/IoT-SewageGaurd-Platform/', signal: 'Monitoring & alerting' },
  { code: 'CASE-003', title: 'Shopping Mall — Shop Owner Module', description: 'A Java and Spring Boot module for shop-owner operations, persistence, and REST-based workflows using PostgreSQL.', image: shopImage, technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'REST APIs'], githubUrl: 'https://github.com/sharansidh-0301/TNSIF-JAVA-SHARANSIDH-JR/tree/master/ShopOwner%20Module', signal: 'Application & API foundations' },
];

const Projects = () => (
  <section id="projects" className="relative min-h-screen overflow-hidden bg-gradient-hero pt-24 pb-20 noise">
    <div className="absolute inset-0 bg-grid-pattern opacity-45" aria-hidden />
    <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[.7fr_1.3fr]"><div className="font-mono text-xs uppercase text-primary">Project intelligence / 03 case files</div><div><h1 className="text-4xl sm:text-5xl lg:text-6xl">Systems examined through an engineering lens.</h1><p className="mt-4 max-w-2xl text-muted-foreground">Résumé-backed work across data, monitoring, APIs, and application logic—foundations that support secure-system thinking.</p></div></div>
      <div className="mt-10 space-y-6">
        {projects.map((project, index) => (
          <article key={project.code} className="grid overflow-hidden border border-border bg-card/55 lg:grid-cols-[.75fr_1.25fr]">
            <div className="relative min-h-64 overflow-hidden border-b border-border lg:border-b-0 lg:border-r"><img src={project.image} alt={project.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover grayscale transition duration-300 hover:grayscale-0" /><div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" /><span className="absolute left-4 top-4 bg-background/90 px-3 py-2 font-mono text-[10px] text-primary">{project.code}</span></div>
            <div className="flex flex-col p-6 sm:p-8">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-primary"><ShieldCheck className="h-4 w-4" />{project.signal}</div>
              <h2 className="mt-4 text-2xl sm:text-3xl">{project.title}</h2><p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="border border-border px-3 py-1.5 font-mono text-[10px] uppercase text-muted-foreground">{tech}</span>)}</div>
              <div className="mt-8 flex flex-wrap gap-3 lg:mt-auto lg:pt-8">{project.liveUrl && <Button asChild className="rounded-none"><a href={project.liveUrl} target="_blank" rel="noreferrer"><ExternalLink />Live system</a></Button>}<Button variant="outline" asChild className="rounded-none"><a href={project.githubUrl} target="_blank" rel="noreferrer"><Github />Source code</a></Button></div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center"><Button variant="outline" asChild className="rounded-none border-primary/50"><a href="https://github.com/sharansidh-0301?tab=repositories" target="_blank" rel="noreferrer"><Github />View all GitHub repositories</a></Button></div>
    </div>
  </section>
);
export default Projects;
