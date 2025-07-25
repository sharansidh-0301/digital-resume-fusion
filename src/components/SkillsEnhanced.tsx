import React, { useState, useEffect, useRef } from 'react';
import { Code2, Database, Palette, Server, Smartphone, Globe, Brain, Zap, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const SkillsEnhanced = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [visibleSkills, setVisibleSkills] = useState(new Set());
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React/Next.js', level: 80, trend: '+15%' },
        { name: 'JavaScript', level: 85, trend: '+10%' },
        { name: 'HTML/CSS', level: 90, trend: '+5%' },
        { name: 'Tailwind CSS', level: 85, trend: '+20%' },
      ],
    },
    {
      icon: Server,
      title: 'Backend Development',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 75, trend: '+25%' },
        { name: 'Express.js', level: 70, trend: '+30%' },
        { name: 'MongoDB', level: 70, trend: '+20%' },
        { name: 'PostgreSQL', level: 65, trend: '+15%' },
      ],
    },
    {
      icon: Brain,
      title: 'AI/ML & Data Science',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Machine Learning', level: 65, trend: '+40%', isNew: true },
        { name: 'Python for AI', level: 70, trend: '+35%' },
        { name: 'Generative AI', level: 60, trend: '+50%', isNew: true },
        { name: 'Agentic AI', level: 55, trend: '+45%', isNew: true },
      ],
    },
    {
      icon: Database,
      title: 'DevOps & Tools',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git/GitHub', level: 80, trend: '+10%' },
        { name: 'VS Code', level: 85, trend: '+5%' },
        { name: 'Docker', level: 60, trend: '+35%', isNew: true },
        { name: 'AWS Basics', level: 55, trend: '+40%', isNew: true },
      ],
    },
  ];

  const technologies = [
    { name: 'JavaScript', category: 'Frontend', hot: true },
    { name: 'React', category: 'Frontend', hot: true },
    { name: 'Node.js', category: 'Backend', hot: false },
    { name: 'Python', category: 'AI/ML', hot: true },
    { name: 'TypeScript', category: 'Frontend', hot: true },
    { name: 'MongoDB', category: 'Database', hot: false },
    { name: 'TensorFlow', category: 'AI/ML', hot: true },
    { name: 'Docker', category: 'DevOps', hot: true },
    { name: 'AWS', category: 'Cloud', hot: true },
    { name: 'Tailwind CSS', category: 'Frontend', hot: false },
    { name: 'Express.js', category: 'Backend', hot: false },
    { name: 'PostgreSQL', category: 'Database', hot: false },
  ];

  const learningGoals = [
    { skill: 'Advanced React Patterns', progress: 75, target: 'Q1 2024' },
    { skill: 'Machine Learning Fundamentals', progress: 60, target: 'Q2 2024' },
    { skill: 'Cloud Architecture', progress: 45, target: 'Q2 2024' },
    { skill: 'System Design', progress: 30, target: 'Q3 2024' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillIndex = Number(entry.target.getAttribute('data-skill-index'));
            setVisibleSkills(prev => new Set([...prev, skillIndex]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillElements = skillsRef.current?.querySelectorAll('[data-skill-index]');
    skillElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const AnimatedProgress = ({ value, isVisible, delay = 0 }: { value: number; isVisible: boolean; delay?: number }) => {
    const [animatedValue, setAnimatedValue] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setAnimatedValue(value);
        }, delay);
        return () => clearTimeout(timer);
      }
    }, [isVisible, value, delay]);

    return (
      <Progress 
        value={animatedValue} 
        className="h-3 transition-all duration-1000 ease-out"
      />
    );
  };

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="h-8 w-8 text-primary animate-pulse" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient">
              Skills & Expertise
            </h2>
            <Zap className="h-8 w-8 text-primary animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive overview of my technical abilities with real-time learning progress
          </p>
        </div>

        {/* Interactive Skill Categories */}
        <div className="mb-16">
          {/* Category Selector */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {skillCategories.map((category, index) => (
              <Button
                key={index}
                variant={activeCategory === index ? "default" : "outline"}
                onClick={() => setActiveCategory(index)}
                className={`group transition-all duration-300 ${
                  activeCategory === index 
                    ? `bg-gradient-to-r ${category.color} text-white border-0` 
                    : 'hover:scale-105'
                }`}
              >
                {React.createElement(category.icon, { className: "h-4 w-4 mr-2" })}
                {category.title}
              </Button>
            ))}
          </div>

          {/* Active Category Skills */}
          <div ref={skillsRef} className="max-w-4xl mx-auto">
            <Card className="hover-lift shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color}`}>
                    {React.createElement(skillCategories[activeCategory].icon, { className: "h-6 w-6 text-white" })}
                  </div>
                  {skillCategories[activeCategory].title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="space-y-3"
                    data-skill-index={`${activeCategory}-${skillIndex}`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">{skill.name}</span>
                        {skill.isNew && (
                          <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs">
                            NEW
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-green-500 font-medium flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          {skill.trend}
                        </span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                    </div>
                    <AnimatedProgress 
                      value={skill.level} 
                      isVisible={visibleSkills.has(`${activeCategory}-${skillIndex}`)}
                      delay={skillIndex * 200}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technology Cloud with Categories */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gradient">
            Technology Stack
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`group relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-default ${
                  tech.hot 
                    ? 'bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-glow hover:scale-110' 
                    : 'bg-card text-card-foreground hover:bg-primary hover:text-primary-foreground shadow-card hover-lift'
                }`}
              >
                {tech.name}
                {tech.hot && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                )}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-background border border-primary/20 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Goals & Progress */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gradient">
            Current Learning Goals
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {learningGoals.map((goal, index) => (
              <Card key={index} className="hover-lift shadow-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold">{goal.skill}</h4>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Target className="h-3 w-3" />
                      {goal.target}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skill Icons Grid with Animation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {[
            { icon: Code2, label: 'Frontend', color: 'from-blue-500 to-cyan-500' },
            { icon: Server, label: 'Backend', color: 'from-green-500 to-emerald-500' },
            { icon: Database, label: 'Database', color: 'from-yellow-500 to-orange-500' },
            { icon: Brain, label: 'AI/ML', color: 'from-purple-500 to-pink-500' },
            { icon: Globe, label: 'Web', color: 'from-indigo-500 to-blue-500' },
            { icon: Palette, label: 'Design', color: 'from-red-500 to-pink-500' },
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center hover-lift shadow-elegant group-hover:shadow-glow transition-all duration-300 group-hover:scale-110`}>
                {React.createElement(item.icon, { className: "h-8 w-8 text-white" })}
              </div>
              <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsEnhanced;