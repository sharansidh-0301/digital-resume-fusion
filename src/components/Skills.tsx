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
      title: 'Design & UX',
      skills: [
        { name: 'Figma Basics', level: 70 },
        { name: 'UI/UX Principles', level: 65 },
        { name: 'Responsive Design', level: 80 },
        { name: 'Color Theory', level: 60 },
      ],
    },
  ];

  const technologies = [
    'JavaScript', 'React', 'Node.js', 'HTML5', 'CSS3', 'MongoDB',
    'Express.js', 'Git', 'GitHub', 'Tailwind CSS', 'Bootstrap',
    'REST APIs', 'JSON', 'Responsive Design', 'VS Code', 'Figma'
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

        {/* Technology Cloud */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gradient">
            Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-card text-card-foreground rounded-full text-sm font-medium hover-lift shadow-card transition-smooth hover:bg-primary hover:text-primary-foreground cursor-default"
              >
                {tech}
              </span>
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