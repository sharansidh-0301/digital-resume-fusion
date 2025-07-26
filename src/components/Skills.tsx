import React, { useState, useEffect } from 'react';
import { Code2, Database, Palette, Server, Smartphone, Globe, TrendingUp, Star, Zap, Target, Award, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    setAnimateProgress(true);
  }, []);

  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Building modern, responsive user interfaces',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React/Next.js', level: 80, trend: 'rising', isHot: true },
        { name: 'JavaScript/TypeScript', level: 85, trend: 'stable', isHot: true },
        { name: 'HTML5/CSS3', level: 90, trend: 'stable', isHot: false },
        { name: 'Tailwind CSS', level: 85, trend: 'rising', isHot: true },
      ],
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Server-side development and API design',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 75, trend: 'rising', isHot: true },
        { name: 'Express.js', level: 70, trend: 'stable', isHot: false },
        { name: 'MongoDB', level: 70, trend: 'stable', isHot: false },
        { name: 'PostgreSQL', level: 65, trend: 'learning', isHot: false },
      ],
    },
    {
      icon: Database,
      title: 'DevOps & Tools',
      description: 'Development tools and deployment practices',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git/GitHub', level: 80, trend: 'stable', isHot: false },
        { name: 'VS Code', level: 85, trend: 'stable', isHot: false },
        { name: 'Docker', level: 45, trend: 'learning', isHot: true },
        { name: 'AWS Basics', level: 40, trend: 'learning', isHot: true },
      ],
    },
    {
      icon: Palette,
      title: 'AI/ML & Emerging Tech',
      description: 'Artificial Intelligence and Machine Learning',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Machine Learning', level: 65, trend: 'rising', isHot: true },
        { name: 'Generative AI', level: 60, trend: 'rising', isHot: true },
        { name: 'Python for AI', level: 70, trend: 'stable', isHot: true },
        { name: 'LangChain', level: 45, trend: 'learning', isHot: true },
      ],
    },
  ];

  const learningGoals = [
    { skill: 'Advanced React Patterns', target: 90, current: 80, timeframe: '2 months' },
    { skill: 'Cloud Architecture', target: 75, current: 40, timeframe: '6 months' },
    { skill: 'AI/ML Production', target: 80, current: 65, timeframe: '4 months' },
    { skill: 'System Design', target: 70, current: 35, timeframe: '8 months' },
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

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'rising': return <TrendingUp className="h-3 w-3 text-green-500" />;
      case 'learning': return <BookOpen className="h-3 w-3 text-blue-500" />;
      default: return <Target className="h-3 w-3 text-gray-500" />;
    }
  };

  const filteredCategories = activeCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.title.toLowerCase().includes(activeCategory));

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            A comprehensive overview of my technical skills, learning progress, and future goals
          </p>
          
          {/* Skill Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['all', 'frontend', 'backend', 'devops', 'ai/ml'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-smooth capitalize ${
                  activeCategory === category 
                    ? 'bg-gradient-primary text-primary-foreground shadow-glow' 
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {category === 'ai/ml' ? 'AI/ML' : category}
              </button>
            ))}
          </div>
        </div>

        <Tabs defaultValue="skills" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="skills">Current Skills</TabsTrigger>
            <TabsTrigger value="technologies">Tech Stack</TabsTrigger>
            <TabsTrigger value="goals">Learning Goals</TabsTrigger>
          </TabsList>

          <TabsContent value="skills" className="space-y-8">
            {/* Enhanced Skill Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredCategories.map((category, index) => (
                <Card key={index} className="hover-lift shadow-card animate-fade-in group">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{category.title}</h3>
                        <p className="text-sm text-muted-foreground font-normal">{category.description}</p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{skill.name}</span>
                            {skill.isHot && <Badge variant="destructive" className="text-xs">HOT</Badge>}
                            {getTrendIcon(skill.trend)}
                          </div>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={animateProgress ? skill.level : 0} 
                          className="h-3 transition-all duration-1000"
                        />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="technologies" className="space-y-8">

            {/* Enhanced Technology Stack with Images */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gradient">
                Technology Ecosystem
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
                {technologyStack.map((tech, index) => (
                  <Card key={index} className="p-4 hover-lift shadow-card group transition-smooth relative overflow-hidden">
                    <div className="absolute top-1 right-1">
                      {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Python'].includes(tech.name) && (
                        <Badge variant="destructive" className="text-xs">Expert</Badge>
                      )}
                    </div>
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-16 h-16 flex items-center justify-center relative">
                        <img
                          src={tech.image}
                          alt={tech.name}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/64/9333ea/ffffff?text=' + tech.name.charAt(0);
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 rounded-lg transition-opacity"></div>
                      </div>
                      <div className="text-center">
                        <h4 className="text-sm font-semibold text-foreground">{tech.name}</h4>
                        <Badge variant="outline" className="text-xs mt-1">{tech.category}</Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Skill Level Legend */}
              <div className="flex justify-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Expert (80%+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Proficient (60-79%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Learning (40-59%)</span>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="goals" className="space-y-8">
            {/* Learning Goals Section */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gradient text-center">
                2024 Learning Roadmap
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {learningGoals.map((goal, index) => (
                  <Card key={index} className="hover-lift shadow-card">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-bold text-foreground">{goal.skill}</h4>
                        <Badge variant="outline">{goal.timeframe}</Badge>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Current Level</span>
                          <span>{goal.current}%</span>
                        </div>
                        <Progress value={goal.current} className="h-2" />
                        
                        <div className="flex justify-between text-sm">
                          <span>Target Level</span>
                          <span>{goal.target}%</span>
                        </div>
                        <Progress value={goal.target} className="h-2 opacity-50" />
                        
                        <div className="text-sm text-muted-foreground">
                          Progress needed: {goal.target - goal.current}%
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Learning Philosophy */}
              <Card className="mt-8 hover-lift shadow-card">
                <CardContent className="p-8 text-center">
                  <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h4 className="text-xl font-bold mb-4 text-gradient">Continuous Learning Mindset</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe in staying ahead of the curve by continuously learning and adapting to new technologies. 
                    My goal is to combine strong fundamentals with emerging trends to build innovative solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

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