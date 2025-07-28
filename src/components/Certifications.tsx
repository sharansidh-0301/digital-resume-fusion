import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle, Trophy, TrendingUp, Star, BookOpen, Target, Zap, Sparkles, Brain, Shield, Code, Database, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Floating particles animation
const FloatingParticles = () => {
  const particles = ['🎓', '📜', '🏆', '⭐', '💎', '🚀'];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl opacity-20"
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            rotate: 0
          }}
          animate={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            rotate: 360,
          }}
          transition={{
            duration: 15 + Math.random() * 10,
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

// Enhanced Certificate Card Component
const CertificateCard = ({ cert, index, isVisible }: { cert: any; index: number; isVisible: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'Learning': return <BookOpen className="h-4 w-4 text-blue-500" />;
      default: return <Award className="h-4 w-4 text-primary" />;
    }
  };

  const getCategoryIcon = (issuer: string) => {
    if (issuer.includes('Cisco')) return <Globe className="h-6 w-6" />;
    if (issuer.includes('Wipro') || issuer.includes('SkillRack')) return <Code className="h-6 w-6" />;
    if (issuer.includes('TVS')) return <Brain className="h-6 w-6" />;
    if (issuer.includes('Coursera')) return <Database className="h-6 w-6" />;
    return <Award className="h-6 w-6" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, type: "spring", bounce: 0.4 }}
      whileHover={{ 
        y: -10,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
      style={{ perspective: '1000px' }}
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-background/80 via-background/90 to-muted/40 backdrop-blur-xl border border-border/30 hover:border-primary/40 transition-all duration-500 group-hover:shadow-2xl">
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Animated glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-60 blur-2xl"
          animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Featured badge */}
        <div className="absolute top-4 right-4 z-20">
          {cert.name.includes('CCNA') && (
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Badge variant="default" className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg">
                <Sparkles className="h-3 w-3 mr-1" />
                FEATURED
              </Badge>
            </motion.div>
          )}
        </div>

        <CardHeader className="text-center pb-4 relative z-10">
          {/* Certificate icon */}
          <motion.div 
            className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center backdrop-blur-sm border border-primary/30 group-hover:border-primary/50 transition-colors"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {getCategoryIcon(cert.issuer)}
          </motion.div>

          <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {cert.name}
          </CardTitle>
          
          <div className="flex items-center justify-center gap-2 mb-3">
            <Badge variant="outline" className="text-xs font-medium">
              {cert.issuer}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              {cert.date}
            </Badge>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-1 text-sm">
              {getStatusIcon(cert.status)}
              <span className={cert.status === 'Active' ? 'text-green-500' : cert.status === 'Learning' ? 'text-blue-500' : 'text-muted-foreground'}>
                {cert.status}
              </span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-5 relative z-10">
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {cert.description}
          </p>
          
          {/* Enhanced credential info */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-background/50 to-muted/30 backdrop-blur-sm border border-border/50 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-foreground">Credential</span>
              <code className="text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded">
                {cert.credentialId || 'N/A'}
              </code>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-foreground">Validity</span>
              <span className={cert.expiryDate === 'No Expiry' ? 'text-green-500 font-medium' : 'text-muted-foreground'}>
                {cert.expiryDate}
              </span>
            </div>
          </div>
          
          {/* Skills showcase */}
          <div>
            <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500" />
              Skills & Technologies
            </h5>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill: string, skillIndex: number) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-card-index') || '0');
            setVisibleCards(prev => new Set([...prev, cardIndex]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const cardElements = sectionRef.current.querySelectorAll('[data-card-index]');
    cardElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [activeFilter]);

  const certifications = [
    {
      name: 'CCNA Certification',
      issuer: 'Cisco',
      date: '2023',
      expiryDate: 'no expiry',
      badge: '',
      description: 'Cisco Certified Network Associate - Routing and Switching',
      credentialId: 'CSCO12345678',
      skills: ['Networking', 'Routing', 'Switching', 'Network Security'],
      status: 'Active'
    },
    {
      name: 'Java Full Stack Developement',
      issuer: 'Wipro',
      date: '2025',
      expiryDate: 'No Expiry',
      badge: '',
      description: 'Currently pursuing a comprehensive Java Full Stack Development program',
      credentialId: 'xxx',
      skills: ['Java', 'Logic Building', 'Frontend', 'Spring Boot', 'Sql'],
      status: 'Learning'
    },
    {
      name: 'Sql Basics',
      issuer: 'SkillRack',
      date: '2025',
      expiryDate: 'No Expiry',
      badge: '',
      description: 'Solved SQL problems and queries',
      credentialId: 'fcc-jsad-2023',
      skills: ['Sql', 'Queries', 'Problem Solving'],
      status: 'Active'
    },
    {
      name: 'Java Problem Solving',
      issuer: 'SkillRack',
      date: '2025',
      expiryDate: 'No Expiry',
      badge: '',
      description: 'Solved Java problems and algorithms',
      credentialId: 'fcc-jsad-2023',
      skills: ['Fundamentals', 'Logic Building', 'Problem Solving'],
      status: 'Active'
    },
    {
      name: 'Industry 4.0 and Embedded Systems',
      issuer: 'TVS Training & Services Ltd ',
      date: '2025',
      expiryDate: 'No Expiry',
      badge: '',
      description: '10-day inplant training focused on Industry 4.0 concepts and Embedded Systems, including 8051 microcontroller architecture, electronics fundamentals, IoT device interfacing, and real-time applications.',
      credentialId: '',
      skills: ['IoT', 'Micro Controller', 'Embedded', 'Arduino', 'ESP8266'],
      status: 'Active'
    },
    // {
    //   name: 'Git and GitHub Essentials',
    //   issuer: 'Coursera',
    //   date: '2023',
    //   expiryDate: 'No Expiry',
    //   badge: '',
    //   description: 'Version control, collaborative development, and Git workflow best practices',
    //   credentialId: 'coursera-git-2023',
    //   skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
    //   status: 'Active'
    // },
    {
      name: 'Microsoft Excel Fundamentals',
      issuer: 'Coursera',
      date: '2023',
      expiryDate: 'No Expiry',
      badge: '',
      description: 'Ms Excel basics, formulas, data analysis, and visualization techniques',
      credentialId: 'edx-ml-intro-2024',
      skills: ['Machine Learning', 'Python', 'Data Analysis', 'Scikit-learn'],
      status: 'Active'
    }
  ];

  const certificationStats = [
    { label: 'Total Certifications', value: '6+', icon: Award, trend: '+2 this year', color: 'text-blue-500' },
    { label: 'Active Credentials', value: '6', icon: CheckCircle, trend: '100% valid', color: 'text-green-500' },
    { label: 'Learning Hours', value: '200+', icon: Calendar, trend: '40h/month avg', color: 'text-purple-500' },
    { label: 'Skill Areas', value: '10+', icon: ExternalLink, trend: '4 specializations', color: 'text-orange-500' },
  ];

  const learningProgress = [
    { category: 'Web Development', completed: 85, target: 90, certCount: 3 },
    { category: 'AI/ML', completed: 60, target: 80, certCount: 1 },
    { category: 'Cloud Technologies', completed: 40, target: 70, certCount: 0 },
    { category: 'DevOps', completed: 35, target: 65, certCount: 0 },
  ];

  const upcomingCertifications = [
    { name: 'AWS Cloud Practitioner', target: 'Q2 2024', difficulty: 'Intermediate' },
    { name: 'React Advanced Patterns', target: 'Q1 2024', difficulty: 'Advanced' },
    { name: 'Google AI/ML Professional', target: 'Q3 2024', difficulty: 'Expert' },
    { name: 'Docker & Kubernetes', target: 'Q2 2024', difficulty: 'Intermediate' },
  ];

  const filteredCertifications = activeFilter === 'all' 
    ? certifications 
    : certifications.filter(cert => 
        activeFilter === 'web' ? ['FreeCodeCamp'].includes(cert.issuer) :
        activeFilter === 'cloud' ? ['Cisco', 'Coursera'].includes(cert.issuer) :
        activeFilter === 'ai' ? cert.skills.some(skill => ['Machine Learning', 'Python'].includes(skill)) :
        true
      );

  const skillCategories = [
    {
      category: 'Web Development',
      count: 4,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design']
    },
    {
      category: 'Programming',
      count: 3,
      skills: ['JavaScript', 'Python', 'Algorithms', 'Data Structures']
    },
    {
      category: 'Tools & Platforms',
      count: 2,
      skills: ['Git', 'GitHub', 'Version Control', 'Collaboration']
    },
    {
      category: 'Networking',
      count: 1,
      skills: ['CCNA', 'Routing', 'Switching', 'Network Security']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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
    <section id="certifications" className="relative py-16 bg-gradient-to-br from-background via-background/80 to-muted/20 overflow-hidden">
      {/* Animated background particles */}
      <FloatingParticles />
      
      <div ref={sectionRef} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20"
            variants={itemVariants}
          >
            <Trophy className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-primary">Professional Credentials</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Certifications & Achievements
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            A showcase of my professional certifications, ongoing learning journey, and commitment to continuous skill development
          </motion.p>
        </motion.div>

        <Tabs defaultValue="certifications" className="w-full">
          {/* <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="certifications">My Certifications</TabsTrigger>
            <TabsTrigger value="progress">Learning Progress</TabsTrigger>
            <TabsTrigger value="upcoming">Future Goals</TabsTrigger>
            <TabsTrigger value="stats">Analytics</TabsTrigger>
          </TabsList> */}

          <TabsContent value="certifications" className="space-y-8">

            {/* Enhanced Certification Stats
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {certificationStats.map((stat, index) => (
                <Card key={index} className="text-center hover-lift shadow-card group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-glow">
                      <stat.icon className={`h-6 w-6 text-primary-foreground`} />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium mb-2">
                      {stat.label}
                    </div>
                    <div className={`text-xs ${stat.color} font-medium`}>
                      {stat.trend}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div> */}

            {/* Enhanced Certifications Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              {filteredCertifications.map((cert, index) => (
                <div 
                  key={index} 
                  data-card-index={index}
                >
                  <CertificateCard 
                    cert={cert} 
                    index={index} 
                    isVisible={visibleCards.has(index)} 
                  />
                </div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-8">
            {/* Learning Progress Dashboard */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Learning Progress Dashboard</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {learningProgress.map((area, index) => (
                  <Card key={index} className="hover-lift shadow-card">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-bold text-foreground">{area.category}</h4>
                        <div className="text-right">
                          <Badge variant="outline">{area.certCount} certs</Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Current Progress</span>
                          <span>{area.completed}%</span>
                        </div>
                        <Progress value={area.completed} className="h-3" />
                        
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>Target for 2024</span>
                          <span>{area.target}%</span>
                        </div>
                        <Progress value={area.target} className="h-2 opacity-30" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-8">
            {/* Future Learning Goals */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8 text-gradient">2024 Certification Roadmap</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingCertifications.map((cert, index) => (
                  <Card key={index} className="hover-lift shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="font-bold text-foreground">{cert.name}</h4>
                        <Badge variant={
                          cert.difficulty === 'Expert' ? 'destructive' :
                          cert.difficulty === 'Advanced' ? 'default' : 'secondary'
                        }>
                          {cert.difficulty}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Target className="h-4 w-4" />
                        <span>Target: {cert.target}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="mt-8 hover-lift shadow-card">
                <CardContent className="p-8 text-center">
                  <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h4 className="text-xl font-bold mb-4 text-gradient">Continuous Learning Strategy</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    My certification roadmap focuses on building expertise in cloud technologies, advanced web development, 
                    and AI/ML to stay competitive in the evolving tech landscape. Each certification is strategically chosen 
                    to complement my existing skills and open new career opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="stats" className="space-y-8">
            {/* Enhanced Stats Dashboard */}
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Certification Analytics</h3>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {certificationStats.map((stat, index) => (
                  <Card key={index} className="text-center hover-lift shadow-card">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center`}>
                        <stat.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium mb-2">
                        {stat.label}
                      </div>
                      <div className={`text-xs ${stat.color} font-medium`}>
                        {stat.trend}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Enhanced Skill Categories Summary */}
        <motion.div 
          className="relative mt-20 p-8 rounded-3xl bg-gradient-to-br from-primary/5 via-background/80 to-secondary/5 backdrop-blur-xl border border-primary/20"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl blur-2xl -z-10" />
          
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Certified Expertise Areas
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="text-center relative overflow-hidden border-0 bg-gradient-to-br from-background/80 to-muted/40 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-6 relative z-10">
                    <motion.div 
                      className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3"
                      whileHover={{ scale: 1.1 }}
                    >
                      {category.count}
                    </motion.div>
                    <h4 className="text-sm font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {category.category}
                    </h4>
                    <div className="space-y-2">
                      {category.skills.slice(0, 3).map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="outline" 
                          className="text-xs mx-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {category.skills.length > 3 && (
                        <Badge variant="secondary" className="text-xs mx-1 bg-gradient-to-r from-primary/20 to-secondary/20">
                          +{category.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;