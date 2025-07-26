import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle, Trophy, TrendingUp, Star, BookOpen, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState('all');

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

  return (
    <section id="certifications" className="py-5 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Certifications & Learning Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Professional certifications, learning progress, and future learning goals
          </p>
          
          {/* Certification Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { id: 'all', label: 'All Certifications' },
              { id: 'web', label: 'Web Development' },
              { id: 'cloud', label: 'Cloud & Network' },
              { id: 'ai', label: 'AI/ML' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full transition-smooth ${
                  activeFilter === filter.id 
                    ? 'bg-gradient-primary text-primary-foreground shadow-glow' 
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

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

            {/* Enhanced Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filteredCertifications.map((cert, index) => (
                <Card key={index} className="hover-lift shadow-card group relative overflow-hidden">
                  <div className="absolute top-2 right-2 z-10">
                    {['CCNA Certification', 'JavaScript Algorithms and Data Structures'].includes(cert.name) && (
                      <Badge variant="destructive" className="text-xs animate-pulse">Featured</Badge>
                    )}
                  </div>
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden shadow-elegant group-hover:shadow-glow transition-smooth relative">
                      <img
                        src={cert.badge}
                        alt={cert.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        onError={(e) => {
                          e.currentTarget.src = 'https://via.placeholder.com/80/9333ea/ffffff?text=' + cert.issuer.charAt(0);
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </div>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <p className="text-sm text-muted-foreground font-medium">{cert.issuer}</p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <Badge variant={cert.status === 'Active' ? 'default' : 'secondary'} className="relative">
                        {cert.status === 'Active' && <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>}
                        {cert.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {cert.date}
                      </Badge>
                    </div>
                  </CardHeader>
              
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                    
                    <div className="bg-gradient-hero p-3 rounded-lg space-y-2">
                      <div className="text-xs">
                        <span className="font-medium text-foreground">Credential ID: </span>
                        <span className="text-muted-foreground font-mono">{cert.credentialId}</span>
                      </div>
                      <div className="text-xs">
                        <span className="font-medium text-foreground">Expires: </span>
                        <span className={`${cert.expiryDate === 'No Expiry' ? 'text-green-600' : 'text-muted-foreground'}`}>
                          {cert.expiryDate}
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium text-foreground mb-2 flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        Skills Covered:
                      </h5>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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