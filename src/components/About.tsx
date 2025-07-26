import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Coffee, Heart, Code2, Zap, Users, Lightbulb, Rocket, Target, User, BookOpen, TrendingUp, Award, Clock, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: 'Problem Solved', value: '150+', icon: TrendingUp, trend: '+15 this month' },
    { label: 'Projects Built', value: '8+', icon: Rocket, trend: '2 in progress' },
    { label: 'Technologies', value: '15+', icon: Code2, trend: '3 learning' },
    { label: 'GitHub Commits', value: '400+', icon: Globe, trend: 'Daily active' },
  ];

  const personalMetrics = [
    { label: 'Learning Hours/Week', value: 25, max: 40, color: 'bg-blue-500' },
    { label: 'Code Quality Score', value: 85, max: 100, color: 'bg-green-500' },
    { label: 'Project Completion', value: 90, max: 100, color: 'bg-purple-500' },
    { label: 'Team Collaboration', value: 95, max: 100, color: 'bg-orange-500' },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Graduation & Job Search',
      description: 'Completed CSE degree with distinction. Building portfolio and seeking opportunities.',
      status: 'current'
    },
    {
      year: '2023',
      title: 'Advanced Learning Phase',
      description: 'Focused on full-stack development, AI/ML, and competitive programming.',
      status: 'completed'
    },
    {
      year: '2022',
      title: 'Project Development',
      description: 'Built multiple web applications and participated in hackathons.',
      status: 'completed'
    },
    {
      year: '2021',
      title: 'Foundation Building',
      description: 'Learned core programming concepts and started web development journey.',
      status: 'completed'
    }
  ];

  const interests = [
    { icon: Coffee, label: 'Tech Enthusiast' },
    { icon: Heart, label: 'Open Source Explorer' },
    { icon: Calendar, label: 'Continuous Learner' },
    { icon: MapPin, label: 'Problem Solver' },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'education', label: 'Education', icon: BookOpen },
    { id: 'metrics', label: 'Metrics', icon: TrendingUp },
    { id: 'timeline', label: 'Journey', icon: Clock }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Live Status */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Currently available for opportunities</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get to know more about my journey, passion, and what drives me as a fresh graduate
          </p>
          <div className="text-sm text-muted-foreground mt-2">
            Last updated: {currentTime.toLocaleString()}
          </div>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-smooth ${
                activeTab === tab.id 
                  ? 'bg-gradient-primary text-primary-foreground shadow-glow' 
                  : 'bg-card hover:bg-muted border border-border'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Content Based on Active Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in">
            {/* Enhanced Profile Content */}
            <div className="space-y-6">
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Ready to Start My Tech Journey
                </h3>
                <div className="absolute -top-2 -right-2">
                  <Badge variant="secondary" className="animate-pulse">🚀 Fresh Graduate</Badge>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a recent Computer Science graduate, I'm excited to begin my career in web development. 
                My journey started with curiosity about how websites work, and through dedicated learning 
                and hands-on projects, I've developed strong skills in modern web technologies.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in writing clean, efficient code and creating user-friendly interfaces. 
                I'm always eager to learn new technologies and take on challenges that help me grow 
                as a developer while contributing meaningful value to projects.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-card hover-lift transition-smooth hover:scale-105">
                    <interest.icon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover-lift shadow-card group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-glow">
                      <stat.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-primary">
                      {stat.trend}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Card className="hover-lift shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gradient">
                  <BookOpen className="h-6 w-6" />
                  Educational Background
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-hero p-6 rounded-lg border">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h5 className="text-xl font-bold text-foreground">Bachelor of Computer Science and Engineering</h5>
                      <p className="text-muted-foreground">University Name • 2020-2024</p>
                    </div>
                    <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">
                      First Class with Distinction
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-3 bg-card rounded-lg">
                      <div className="text-2xl font-bold text-gradient">8.5</div>
                      <div className="text-sm text-muted-foreground">CGPA / 10.0</div>
                    </div>
                    <div className="text-center p-3 bg-card rounded-lg">
                      <div className="text-2xl font-bold text-gradient">4</div>
                      <div className="text-sm text-muted-foreground">Years</div>
                    </div>
                    <div className="text-center p-3 bg-card rounded-lg">
                      <div className="text-2xl font-bold text-gradient">Top 10%</div>
                      <div className="text-sm text-muted-foreground">Class Rank</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h6 className="font-semibold text-foreground mb-3">Core Subjects & Grades:</h6>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { subject: 'Data Structures & Algorithms', grade: 'A+' },
                      { subject: 'Database Management Systems', grade: 'A' },
                      { subject: 'Web Technologies', grade: 'A+' },
                      { subject: 'Software Engineering', grade: 'A' },
                      { subject: 'Computer Networks', grade: 'A' },
                      { subject: 'Operating Systems', grade: 'A' },
                      { subject: 'Machine Learning Fundamentals', grade: 'A+' },
                      { subject: 'Object-Oriented Programming', grade: 'A+' }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-muted rounded">
                        <span className="text-sm">{item.subject}</span>
                        <Badge variant={item.grade === 'A+' ? 'default' : 'secondary'}>{item.grade}</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h6 className="font-semibold text-foreground mb-3">Academic Achievements:</h6>
                  <div className="space-y-2">
                    {[
                      'Dean\'s List for 6 consecutive semesters',
                      'Best Project Award for Final Year Capstone',
                      'Merit Scholarship recipient (2022-2024)',
                      'Published research paper on AI/ML applications'
                    ].map((achievement, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'metrics' && (
          <div className="max-w-6xl mx-auto animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover-lift shadow-card">
                <CardHeader>
                  <CardTitle className="text-gradient">Personal Development Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {personalMetrics.map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{metric.label}</span>
                        <span className="text-sm text-muted-foreground">{metric.value}%</span>
                      </div>
                      <Progress value={metric.value} className="h-3" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="hover-lift shadow-card">
                <CardHeader>
                  <CardTitle className="text-gradient">Current Focus Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { area: 'Full-Stack Development', progress: 80, status: 'Advanced' },
                      { area: 'AI/ML Integration', progress: 60, status: 'Learning' },
                      { area: 'Cloud Technologies', progress: 40, status: 'Exploring' },
                      { area: 'DevOps Practices', progress: 35, status: 'Beginning' }
                    ].map((item, index) => (
                      <div key={index} className="p-3 bg-gradient-hero rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{item.area}</span>
                          <Badge variant="outline">{item.status}</Badge>
                        </div>
                        <Progress value={item.progress} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'timeline' && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-12">
                    <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      item.status === 'current' ? 'bg-gradient-primary animate-glow' : 'bg-muted'
                    }`}>
                      <div className="w-3 h-3 bg-background rounded-full"></div>
                    </div>
                    <Card className="hover-lift shadow-card">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={item.status === 'current' ? 'default' : 'secondary'}>
                            {item.year}
                          </Badge>
                          {item.status === 'current' && (
                            <Badge variant="outline" className="animate-pulse">Current</Badge>
                          )}
                        </div>
                        <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* What Sets Me Apart - Always Visible */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gradient">
            What Sets Me Apart as a Fresh Graduate
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: 'Clean Code Advocate',
                description: 'I prioritize writing maintainable, well-documented code following industry best practices and coding standards.',
                badge: 'Quality First'
              },
              {
                icon: Zap,
                title: 'Fast Learner',
                description: 'Quickly adapt to new technologies and frameworks. Always eager to expand my skill set and take on new challenges.',
                badge: 'Adaptable'
              },
              {
                icon: Users,
                title: 'Team Collaborator',
                description: 'Experience working in team environments through group projects, hackathons, and open source contributions.',
                badge: 'Team Player'
              },
              {
                icon: Lightbulb,
                title: 'Problem Solver',
                description: 'Strong analytical thinking with 150+ LeetCode problems solved and consistent practice on coding platforms.',
                badge: 'Analytical'
              },
              {
                icon: Rocket,
                title: 'Innovation Focused',
                description: 'Passionate about emerging technologies like AI/ML and always exploring new ways to solve problems efficiently.',
                badge: 'Future Ready'
              },
              {
                icon: Target,
                title: 'Goal Oriented',
                description: 'Committed to continuous learning with clear career goals and a structured approach to skill development.',
                badge: 'Driven'
              }
            ].map((item, index) => (
              <Card key={index} className="text-center hover-lift shadow-card p-6 group relative overflow-hidden">
                <div className="absolute top-2 right-2">
                  <Badge variant="outline" className="text-xs">{item.badge}</Badge>
                </div>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-glow">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gradient">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;