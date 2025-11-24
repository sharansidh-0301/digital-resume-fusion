import React from 'react';
import { Award, Calendar, CheckCircle, BookOpen, Globe, Code, Brain, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CertificateCard = ({ cert, index }: { cert: any; index: number }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'Learning': return <BookOpen className="h-4 w-4 text-blue-500" />;
      default: return <Award className="h-4 w-4 text-primary" />;
    }
  };

  const getCategoryIcon = (issuer: string) => {
    if (issuer.includes('Cisco')) return <Globe className="h-8 w-8 text-primary" />;
    if (issuer.includes('Wipro') || issuer.includes('SkillRack')) return <Code className="h-8 w-8 text-primary" />;
    if (issuer.includes('TVS')) return <Brain className="h-8 w-8 text-primary" />;
    if (issuer.includes('Coursera')) return <Database className="h-8 w-8 text-primary" />;
    return <Award className="h-8 w-8 text-primary" />;
  };

  return (
    <Card className="h-full hover-lift border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-primary/10">
            {getCategoryIcon(cert.issuer)}
          </div>
          <div className="flex items-center gap-2">
            {getStatusIcon(cert.status)}
            <span className="text-xs font-medium text-muted-foreground">{cert.status}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
          {cert.name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {cert.description}
        </p>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Award className="h-4 w-4" />
          <span className="font-medium">{cert.issuer}</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
          <Calendar className="h-3 w-3" />
          <span>{cert.date}</span>
          {cert.expiryDate && (
            <>
              <span>•</span>
              <span>Expires: {cert.expiryDate}</span>
            </>
          )}
        </div>

        {cert.credentialId && cert.credentialId !== 'xxx' && (
          <div className="text-xs text-muted-foreground mb-4 font-mono">
            ID: {cert.credentialId}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {cert.skills.map((skill: string, idx: number) => (
            <Badge key={idx} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Certifications = () => {
  const certifications = [
    {
      name: 'CCNA Certification',
      issuer: 'Cisco',
      date: '2023',
      expiryDate: 'No expiry',
      description: 'Cisco Certified Network Associate - Routing and Switching',
      credentialId: 'CSCO12345678',
      skills: ['Networking', 'Routing', 'Switching', 'Network Security'],
      status: 'Active'
    },
    {
      name: 'Java Full Stack Development',
      issuer: 'Wipro',
      date: '2025',
      expiryDate: 'No Expiry',
      description: 'Comprehensive Java Full Stack Development program',
      credentialId: '',
      skills: ['Java', 'Logic Building', 'Frontend', 'Spring Boot', 'SQL'],
      status: 'Learning'
    },
    {
      name: 'SQL Basics',
      issuer: 'SkillRack',
      date: '2025',
      expiryDate: 'No Expiry',
      description: 'Solved SQL problems and queries',
      credentialId: 'fcc-jsad-2023',
      skills: ['SQL', 'Queries', 'Problem Solving'],
      status: 'Active'
    },
    {
      name: 'Java Problem Solving',
      issuer: 'SkillRack',
      date: '2025',
      expiryDate: 'No Expiry',
      description: 'Solved Java problems and algorithms',
      credentialId: 'fcc-jsad-2023',
      skills: ['Fundamentals', 'Logic Building', 'Problem Solving'],
      status: 'Active'
    },
    {
      name: 'Industry 4.0 and Embedded Systems',
      issuer: 'TVS Training & Services Ltd',
      date: '2025',
      expiryDate: 'No Expiry',
      description: '10-day inplant training focused on Industry 4.0 concepts and Embedded Systems',
      credentialId: '',
      skills: ['IoT', 'Microcontroller', 'Embedded', 'Arduino', 'ESP8266'],
      status: 'Active'
    },
    {
      name: 'Microsoft Excel Fundamentals',
      issuer: 'Coursera',
      date: '2023',
      expiryDate: 'No Expiry',
      description: 'Excel basics, formulas, data analysis, and visualization techniques',
      credentialId: 'edx-ml-intro-2024',
      skills: ['Excel', 'Data Analysis', 'Formulas', 'Visualization'],
      status: 'Active'
    }
  ];

  const stats = [
    { label: 'Total Certifications', value: '6+', icon: Award },
    { label: 'Active Credentials', value: '6', icon: CheckCircle },
    { label: 'Learning Hours', value: '200+', icon: Calendar },
    { label: 'Skill Areas', value: '10+', icon: Globe },
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Award className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Professional Credentials</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Certifications & Achievements
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications showcasing my commitment to continuous learning and skill development
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover-lift bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificateCard key={index} cert={cert} index={index} />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <Card className="inline-block bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground max-w-xl">
                <span className="font-semibold text-foreground">Continuous Learning:</span> Actively pursuing new certifications in cloud technologies, advanced web development, and AI/ML to stay current with industry trends.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
