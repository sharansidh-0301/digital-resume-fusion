import React from 'react';
import { Award, Trophy, Star, Target, Users, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Dean\'s List Achievement',
      description: 'Maintained 3.8+ GPA throughout Computer Science degree program',
      date: '2024',
      category: 'Academic',
      color: 'text-yellow-500',
    },
    {
      icon: Award,
      title: 'Bootcamp Graduate',
      description: 'Successfully completed intensive 6-month Full Stack Development Bootcamp',
      date: '2023',
      category: 'Education',
      color: 'text-orange-500',
    },
    {
      icon: Code,
      title: 'First Open Source Contribution',
      description: 'Made first meaningful contribution to an open source React component library',
      date: '2023',
      category: 'Community',
      color: 'text-green-500',
    },
    {
      icon: Users,
      title: 'Study Group Leader',
      description: 'Led weekly coding study sessions for 15+ fellow students during university',
      date: '2023',
      category: 'Leadership',
      color: 'text-blue-500',
    },
    {
      icon: Star,
      title: 'Hackathon Participant',
      description: 'Participated in local 48-hour hackathon, built functional web app in team of 4',
      date: '2023',
      category: 'Competition',
      color: 'text-purple-500',
    },
    {
      icon: Target,
      title: 'Personal Project Milestone',
      description: 'Built and deployed 6+ personal projects showcasing different technologies',
      date: '2023',
      category: 'Technical',
      color: 'text-red-500',
    },
  ];

  const certifications = [
    {
      name: 'CCNA Certification',
      issuer: 'Cisco',
      date: '2023',
      badge: 'https://images.credly.com/size/340x340/images/683783d8-eaac-4c37-a14d-11bd8a36321d/CCNAv7.png',
      description: 'Cisco Certified Network Associate - Routing and Switching',
    },
    {
      name: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2022',
      badge: 'https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
      description: 'AWS Certified Solutions Architect - Associate Level',
    },
    {
      name: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: '2022',
      badge: 'https://images.credly.com/size/340x340/images/71ccc1ab-e8d2-4d67-b58b-58e80e5c942d/image.png',
      description: 'Professional Cloud Developer Certification',
    },
    {
      name: 'Frontend Development Certificate',
      issuer: 'FreeCodeCamp',
      date: '2023',
      badge: 'https://images.credly.com/size/340x340/images/0c6d9839-f468-4adc-987d-5cfae4a9ee67/image.png',
      description: 'Responsive Web Design and JavaScript Algorithms Certification',
    },
  ];

  const githubStats = [
    { label: 'Public Repositories', value: '12+' },
    { label: 'Total Commits', value: '500+' },
    { label: 'Followers', value: '25+' },
    { label: 'Learning Streak', value: '200+ days' },
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Milestones, awards, and recognitions that mark my professional journey
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover-lift shadow-card group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-full bg-gradient-primary`}>
                    <achievement.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {achievement.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{achievement.date}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gradient">
            Certifications & Badges
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover-lift shadow-card group">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-elegant group-hover:shadow-glow transition-smooth">
                    <img
                      src={cert.badge}
                      alt={cert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="mb-3">
                    {cert.date}
                  </Badge>
                  <p className="text-xs text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="bg-gradient-hero rounded-2xl p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gradient">
            GitHub Statistics
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {githubStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Active contributor</span>
            </div>
          </div>
        </div>

        {/* Professional Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center hover-lift shadow-card">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Trophy className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-2">Learning Achievements</h4>
              <div className="text-3xl font-bold text-gradient">6+</div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover-lift shadow-card">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-2">Certifications</h4>
              <div className="text-3xl font-bold text-gradient">4+</div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover-lift shadow-card">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Star className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-2">Projects Built</h4>
              <div className="text-3xl font-bold text-gradient">12+</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;