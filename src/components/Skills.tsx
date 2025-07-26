import React from 'react';
import { Code2, Database, Palette, Server, Smartphone, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
      ],
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 70 },
        { name: 'MongoDB', level: 70 },
        { name: 'PostgreSQL', level: 65 },
      ],
    },
    {
      icon: Database,
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git/GitHub', level: 80 },
        { name: 'VS Code', level: 85 },
        { name: 'Linux Basics', level: 60 },
        { name: 'Deployment', level: 65 },
      ],
    },
    {
      icon: Palette,
      title: 'AI/ML & Data Science',
      skills: [
        { name: 'Machine Learning', level: 65 },
        { name: 'Generative AI', level: 60 },
        { name: 'Python for AI', level: 70 },
        { name: 'Agentic AI', level: 55 },
      ],
    },
  ];

  const technologyStack = [
    {
      name: 'JavaScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      category: 'Language'
    },
    {
      name: 'React',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      category: 'Frontend'
    },
    {
      name: 'Node.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      category: 'Backend'
    },
    {
      name: 'HTML5',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      category: 'Frontend'
    },
    {
      name: 'CSS3',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      category: 'Frontend'
    },
    {
      name: 'MongoDB',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      category: 'Database'
    },
    {
      name: 'Express.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      category: 'Backend'
    },
    {
      name: 'Git',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      category: 'Tools'
    },
    {
      name: 'GitHub',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      category: 'Tools'
    },
    {
      name: 'Tailwind CSS',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      category: 'Frontend'
    },
    {
      name: 'Bootstrap',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      category: 'Frontend'
    },
    {
      name: 'Python',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      category: 'Language'
    },
    {
      name: 'TypeScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      category: 'Language'
    },
    {
      name: 'VS Code',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      category: 'Tools'
    },
    {
      name: 'PostgreSQL',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      category: 'Database'
    },
    {
      name: 'Linux',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      category: 'OS'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-lift shadow-card animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <category.icon className="h-6 w-6 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack with Images */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gradient">
            Technology Stack
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {technologyStack.map((tech, index) => (
              <Card key={index} className="p-4 hover-lift shadow-card group transition-smooth">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/48/9333ea/ffffff?text=' + tech.name.charAt(0);
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-foreground">{tech.name}</h4>
                    <p className="text-xs text-muted-foreground">{tech.category}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Skill Icons Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {[
            { icon: Code2, label: 'Frontend' },
            { icon: Server, label: 'Backend' },
            { icon: Database, label: 'Database' },
            { icon: Smartphone, label: 'Mobile' },
            { icon: Globe, label: 'Web' },
            { icon: Palette, label: 'Design' },
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center hover-lift shadow-elegant group-hover:shadow-glow transition-smooth">
                <item.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;