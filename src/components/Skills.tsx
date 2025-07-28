import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Globe, 
  GitBranch, 
  Terminal,
  Brain,
  Sparkles,
  Cpu,
  Palette,
  FileCode,
  Settings,
  Layers,
  Zap
} from 'lucide-react';

const skillCategories = [
  {
    id: 'web',
    icon: Globe,
    title: 'Web Technologies',
    color: 'from-blue-500 to-cyan-500',
    description: 'Frontend & Backend web development stack',
    skills: [
      { name: 'React', level: 50, experience: 'Intermediate', icon: Code2, trending: true },
      { name: 'JavaScript', level: 55, experience: 'Intermeditae', icon: FileCode, trending: false },
      { name: 'HTML5', level: 95, experience: 'Expert', icon: Code2, trending: false },
      { name: 'CSS3', level: 90, experience: 'Expert', icon: Palette, trending: false },
      { name: 'Tailwind CSS', level: 60, experience: 'Intermediate', icon: Palette, trending: false },
      { name: 'Java', level: 50, experience: 'Intermediate', icon: Code2, trending: false },
      { name: 'Python', level: 50, experience: 'Intermediate', icon: Code2, trending: false },
      { name: 'Django', level: 40, experience: 'Beginner', icon: FileCode, trending: false },
      { name: 'SQL', level: 65, experience: 'Intermediate', icon: Database, trending: false },
      { name: 'MongoDB', level: 30, experience: 'Beginner', icon: Database, trending: true },
    ]
  },
  {
    id: 'tools',
    icon: Terminal,
    title: 'Developer Tools',
    color: 'from-green-500 to-emerald-500',
    description: 'Development environment & productivity tools',
    skills: [
      { name: 'Git/GitHub', level: 90, experience: 'Expert', icon: GitBranch, trending: false },
      { name: 'VS Code', level: 95, experience: 'Expert', icon: Code2, trending: false },
      { name: 'Eclipse IDE', level: 85, experience: 'Advanced', icon: Code2, trending: false },
      { name: 'n8n', level: 85, experience: 'Advanced', icon: Code2, trending: false },
      { name: 'Firebase', level: 75, experience: 'Intermediate', icon: Cloud, trending: true },
      { name: 'Vercel', level: 80, experience: 'Advanced', icon: Cloud, trending: true },
      { name: 'Figma', level: 72, experience: 'Intermediate', icon: Palette, trending: false },
      { name: 'Jupyter Notebook', level: 82, experience: 'Advanced', icon: FileCode, trending: false },

    ]
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'AI/ML',
    color: 'from-purple-500 to-pink-500',
    description: 'Artificial intelligence & machine learning technologies',
    skills: [
      { name: 'Python', level: 85, experience: 'Advanced', icon: Code2, trending: true },
      { name: 'Generative AI', level: 65, experience: 'Beginner', icon: Brain, trending: true },
      { name: 'OpenAI API', level: 75, experience: 'Intermediate', icon: Brain, trending: true },
      { name: 'Gemini API', level: 75, experience: 'Intermediate', icon: Brain, trending: true },
      { name: 'Agentic AI', level: 75, experience: 'Intermediate', icon: Brain, trending: true },
      { name: 'AI Agents', level: 72, experience: 'Intermediate', icon: Settings, trending: true },
      { name: 'Pandas', level: 80, experience: 'Advanced', icon: Database, trending: false },
      { name: 'Fuzzy Logic', level: 78, experience: 'Advanced', icon: Settings, trending: false },
      { name: 'Machine Learning', level: 70, experience: 'Intermediate', icon: Brain, trending: true },
      { name: 'Deep Learning', level: 75, experience: 'Intermediate', icon: Database, trending: true },
      { name: 'Neural Networks', level: 60, experience: 'Beginner', icon: Brain, trending: true },
      { name: 'LangChain', level: 78, experience: 'Advanced', icon: Settings, trending: false },

    ]
  }
];

// Animated background particles component
const CodeParticles = () => {
  const particles = ['{ }', '< />', '[ ]', '( )', '=>', '&&', '||', '++', '--', '==='];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/20 font-mono text-sm"
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            opacity: 0 
          }}
          animate={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {particle}
        </motion.div>
      ))}
    </div>
  );
};

// 3D Skill Card Component
const SkillCard = ({ skill, index, isVisible }: { skill: any; index: number; isVisible: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getExperienceBadge = (experience: string) => {
    const variants = {
      'Beginner': 'bg-gradient-to-r from-green-400 to-green-600',
      'Intermediate': 'bg-gradient-to-r from-blue-400 to-blue-600', 
      'Advanced': 'bg-gradient-to-r from-purple-400 to-purple-600',
      'Expert': 'bg-gradient-to-r from-orange-400 to-orange-600'
    };
    return variants[experience] || variants['Beginner'];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -30 }}
      animate={isVisible ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 10,
        rotateX: 5,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
      style={{ perspective: '1000px' }}
    >
    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-background/60 to-muted/60 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden">
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
        
        <div className="relative z-10">
          {/* Header with icon and trending indicator */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div 
                className="p-2 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20"
                animate={isHovered ? { scale: 1.2, rotate: 360 } : {}}
                transition={{ duration: 0.5 }}
              >
                <skill.icon className="h-6 w-6 text-primary" />
              </motion.div>
              <div>
                <h3 className="font-bold text-lg">{skill.name}</h3>
                {skill.trending && (
                  <motion.div 
                    className="flex items-center gap-1 text-xs text-orange-500"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="h-3 w-3" />
                    <span>Trending</span>
                  </motion.div>
                )}
              </div>
            </div>
            
            {/* Experience badge */}
            <div className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getExperienceBadge(skill.experience)}`}>
              {skill.experience}
            </div>
          </div>

          {/* Progress section */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Proficiency</span>
              <span className="font-medium">{skill.level}%</span>
            </div>
            
            <div className="relative">
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
              {/* Glow effect on progress bar */}
              <motion.div
                className="absolute inset-0 h-2 bg-gradient-to-r from-primary/50 to-primary/30 rounded-full blur-sm"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 0.6 } : {}}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Category Timeline Component
const CategoryTimeline = ({ categories, activeCategory, onCategoryChange }: any) => {
  return (
    <div className="relative mb-12">
      {/* Desktop horizontal timeline */}
      <div className="hidden lg:block">
        <div className="flex justify-center items-center relative">
          <div className="absolute h-1 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 w-full rounded-full" />
          
          {categories.map((category: any, index: number) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <motion.div
                key={category.id}
                className="relative flex flex-col items-center cursor-pointer group"
                style={{ flex: 1 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => onCategoryChange(category.id)}
              >
                <motion.div
                  className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? `bg-gradient-to-r ${category.color} shadow-lg` 
                      : 'bg-background border-2 border-border hover:border-primary/50'
                  }`}
                  animate={isActive ? { scale: 1.2 } : { scale: 1 }}
                >
                  <IconComponent className={`h-6 w-6 ${isActive ? 'text-white' : 'text-muted-foreground'}`} />
                  
                  {/* Glow effect */}
                  {isActive && (
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.color} blur-xl opacity-50`}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
                
                <motion.div
                  className="mt-4 text-center"
                  animate={isActive ? { y: 0, opacity: 1 } : { y: 10, opacity: 0.7 }}
                >
                  <h3 className={`font-semibold ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                    {category.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{category.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile carousel */}
      <div className="lg:hidden">
        <Carousel className="w-full max-w-sm mx-auto">
          <CarouselContent>
            {categories.map((category: any) => {
              const IconComponent = category.icon;
              const isActive = activeCategory === category.id;
              
              return (
                <CarouselItem key={category.id} className="basis-1/2">
                  <motion.div
                    className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? `bg-gradient-to-r ${category.color} text-white border-transparent` 
                        : 'bg-background border-border hover:border-primary/50'
                    }`}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onCategoryChange(category.id)}
                  >
                    <div className="text-center">
                      <IconComponent className="h-8 w-8 mx-auto mb-2" />
                      <h3 className="font-semibold text-sm">{category.title}</h3>
                    </div>
                  </motion.div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

const SkillsEnhanced = () => {
  const [activeCategory, setActiveCategory] = useState('web');
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(new Set());
  const skillsRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(skillsRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    if (!skillsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute('data-skill');
            if (skillName) {
              setVisibleSkills(prev => new Set([...prev, skillName]));
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillElements = skillsRef.current.querySelectorAll('[data-skill]');
    skillElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [activeCategory]);

  const currentCategory = skillCategories.find(cat => cat.id === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
  <section className="relative py-8 px-4 mb-10 bg-gradient-to-br from-primary/5 via-secondary/10 to-muted/30 overflow-hidden">
      {/* Animated background */}
      <CodeParticles />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
         
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            A comprehensive overview of my technical capabilities across web development, developer tools, and artificial intelligence
          </motion.p>
        </motion.div>

        {/* Category Timeline/Carousel */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={itemVariants}
        >
          <CategoryTimeline 
            categories={skillCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          ref={skillsRef}
          className="mt-16"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {currentCategory && (
            <div className="space-y-8">
              <motion.div 
                className="text-center"
                variants={itemVariants}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <motion.div 
                    className={`p-4 rounded-2xl bg-gradient-to-r ${currentCategory.color} shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <currentCategory.icon className="h-8 w-8 text-white" />
                  </motion.div>
                </div>
                <h3 className="text-3xl font-bold mb-2">{currentCategory.title}</h3>
                <p className="text-muted-foreground text-lg">{currentCategory.description}</p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
              >
                {currentCategory.skills.map((skill, index) => (
                  <div key={skill.name} data-skill={skill.name}>
                    <SkillCard 
                      skill={skill} 
                      index={index}
                      isVisible={visibleSkills.has(skill.name)}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          )}
        </motion.div>

       

        {/* AI Keywords Section */}
        <motion.div 
          className="mt-20 text-center"
          initial="hidden"
          animate={controls}
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Key Areas of Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {[
              'Data Structures', 'Algorithms','Problem Solving', 'Logic Building', 'PC Building', 
              'Server Building', 'Web Hosting', 'Agentic AI', 'Generative AI', 'OpenAI API',
            ].map((keyword, index) => (
              <motion.div
                key={keyword}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-sm font-medium backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(var(--primary), 0.1)' }}
              >
                {keyword}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsEnhanced;