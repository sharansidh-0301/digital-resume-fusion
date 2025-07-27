import React, { useState, useEffect, useRef } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle, Trophy, TrendingUp, Star, BookOpen, Target, Zap, Sparkles, Brain, Code, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion, useAnimation, useInView } from 'framer-motion';

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

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

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const AnimatedParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/20 rounded-full"
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );

  return (
    <section id="certifications" className="relative py-20 overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>
      <AnimatedParticles />
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-b from-transparent via-background/50 to-transparent"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div variants={cardVariants} className="relative inline-block">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent animate-pulse">
                AI-Enhanced Certificates
              </span>
              <motion.div
                className="absolute -top-2 -right-2 text-primary"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8" />
              </motion.div>
            </h2>
          </motion.div>
          
          <motion.p 
            variants={cardVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Neural network-powered learning pathway with quantum-encrypted credentials
          </motion.p>
          
          {/* AI Dashboard Filter */}
          <motion.div 
            variants={cardVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {[
              { id: 'all', label: 'Neural Network', icon: Brain },
              { id: 'web', label: 'Frontend Matrix', icon: Code },
              { id: 'cloud', label: 'Cloud Systems', icon: Database },
              { id: 'ai', label: 'AI Core', icon: Sparkles }
            ].map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeFilter === filter.id 
                    ? 'bg-gradient-to-r from-primary to-purple-500 text-primary-foreground shadow-2xl shadow-primary/25' 
                    : 'bg-white/10 backdrop-blur-lg border border-white/20 text-muted-foreground hover:bg-white/20 hover:border-white/30'
                }`}
              >
                <div className="flex items-center gap-2">
                  <filter.icon className="w-4 h-4" />
                  {filter.label}
                </div>
                {activeFilter === filter.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <Tabs defaultValue="certifications" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="certifications">My Certifications</TabsTrigger>
            <TabsTrigger value="progress">Learning Progress</TabsTrigger>
            <TabsTrigger value="upcoming">Future Goals</TabsTrigger>
            <TabsTrigger value="stats">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="certifications" className="space-y-8">

            {/* Enhanced Certification Stats */}
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
            </div>

            {/* Futuristic Certificates Grid */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            >
              {filteredCertifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -10, rotateY: 5 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group perspective-1000"
                >
                  <div className="relative h-full">
                    {/* Glassmorphism Card */}
                    <div className="relative h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 overflow-hidden transform-gpu transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-primary/10">
                      
                      {/* Floating particles inside card */}
                      <div className="absolute inset-0 overflow-hidden">
                        {hoveredCard === index && (
                          <>
                            {[...Array(8)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-primary/40 rounded-full"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ 
                                  opacity: [0, 1, 0],
                                  scale: [0, 1, 0],
                                  x: Math.random() * 200 - 100,
                                  y: Math.random() * 200 - 100,
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.2
                                }}
                                style={{
                                  left: `${Math.random() * 100}%`,
                                  top: `${Math.random() * 100}%`,
                                }}
                              />
                            ))}
                          </>
                        )}
                      </div>

                      {/* Status Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        {['CCNA Certification', 'Java Full Stack Developement'].includes(cert.name) && (
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Badge className="bg-gradient-to-r from-green-400 to-blue-500 text-white border-0 shadow-lg">
                              <Sparkles className="w-3 h-3 mr-1" />
                              FEATURED
                            </Badge>
                          </motion.div>
                        )}
                      </div>

                      {/* Certificate Icon */}
                      <div className="text-center mb-6">
                        <motion.div 
                          className="relative w-20 h-20 mx-auto mb-4"
                          whileHover={{ rotateY: 180 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-500 rounded-2xl shadow-2xl group-hover:shadow-primary/50 transition-all duration-500">
                            <div className="absolute inset-1 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                              <Award className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          
                          {/* Glow effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-primary to-purple-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50"
                            animate={hoveredCard === index ? { scale: [1, 1.2, 1] } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </motion.div>

                        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                          {cert.name}
                        </h3>
                        <p className="text-primary font-medium mb-4">{cert.issuer}</p>

                        {/* Status Indicators */}
                        <div className="flex items-center justify-center gap-3">
                          <motion.div
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              cert.status === 'Active' 
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                                : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            }`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {cert.status === 'Active' && (
                              <motion.div
                                className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"
                                animate={{ opacity: [1, 0.3, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              />
                            )}
                            {cert.status}
                          </motion.div>
                          <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-muted-foreground">
                            {cert.date}
                          </div>
                        </div>
                      </div>

                      {/* Certificate Details */}
                      <div className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                        
                        {/* Credential Info */}
                        <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-4 space-y-2">
                          <div className="text-xs">
                            <span className="text-primary font-medium">ID: </span>
                            <span className="text-muted-foreground font-mono">{cert.credentialId}</span>
                          </div>
                          <div className="text-xs">
                            <span className="text-primary font-medium">Expires: </span>
                            <span className={cert.expiryDate === 'No Expiry' ? 'text-green-400' : 'text-muted-foreground'}>
                              {cert.expiryDate}
                            </span>
                          </div>
                        </div>
                        
                        {/* Skills */}
                        <div>
                          <h5 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                            <Star className="w-4 h-4 text-primary" />
                            Neural Pathways:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, skillIndex) => (
                              <motion.div
                                key={skillIndex}
                                whileHover={{ scale: 1.05 }}
                                className="px-3 py-1 bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/30 rounded-full text-xs text-primary font-medium hover:from-primary/30 hover:to-purple-500/30 transition-all duration-300"
                              >
                                {skill}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Hover Border Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-purple-500 to-primary opacity-0 group-hover:opacity-20 blur-xl"
                        animate={hoveredCard === index ? { rotate: 360 } : {}}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                  </div>
                </motion.div>
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

        {/* Skill Categories Summary - Always Visible */}
        <div className="bg-gradient-hero rounded-2xl p-8 mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gradient">
            Certified Skill Areas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="text-center hover-lift shadow-card">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-gradient mb-2">
                    {category.count}
                  </div>
                  <h4 className="text-sm font-bold text-foreground mb-3">
                    {category.category}
                  </h4>
                  <div className="space-y-1">
                    {category.skills.slice(0, 3).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs mx-1">
                        {skill}
                      </Badge>
                    ))}
                    {category.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs mx-1">
                        +{category.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;