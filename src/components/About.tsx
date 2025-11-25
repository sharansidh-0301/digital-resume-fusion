import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Coffee, Heart, Code2, Zap, Users, Lightbulb, Rocket, Target, User, BookOpen, TrendingUp, Award, Clock, Globe, Video, Play } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import chat from '../assets/momentum.jpg';

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

  

  const interests = [
    { icon: Coffee, label: 'Tech Enthusiast' },
    { icon: Heart, label: 'Open Source Explorer' },
    { icon: Calendar, label: 'Continuous Learner' },
    { icon: MapPin, label: 'Problem Solver' },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'education', label: 'Education', icon: BookOpen },
    // { id: 'metrics', label: 'Metrics', icon: TrendingUp },
    // { id: 'timeline', label: 'Journey', icon: Clock }
  ];

  return (
    <section id="about" className="py-3 bg-gradient-hero ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20 ">
        {/* Header with Live Status */}
        <div className="text-center mb-5">
          {/* <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Currently available for opportunities</span>
          </div> */}
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
                Pursuing Electronic and Communication Engineering, I'm excited to begin my career in Software development. 
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
                  <div className="flex items-start justify-between ">
                        <div>
                          <h5 className="text-xl font-bold text-foreground">B.E. Electronics And Communication Engineering (Hons.)</h5>
                              <p className="text-muted-foreground">IFET College Of Engineering  • 2022- 2026</p>   
                              <p className="text-muted-foreground">Villupuram - 605108</p>

                        </div>
                        <div className=" ">
                        <div className="text-center p-5 bg-card rounded-lg">
                          <div className="text-2xl font-bold text-gradient">8.25</div>
                          <div className="text-sm text-muted-foreground">CGPA / 10.0</div>
                        </div>
                  </div>
                      {/* <div className='text-end'>
                        <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">
                          {/* First Class with Distinction 
                        </Badge>
                      </div> */}
                  </div>
                </div>

             <div className="bg-gradient-hero p-6 rounded-lg border">
                  <div className="flex items-start justify-between ">
                        <div>
                          <h5 className="text-xl font-bold text-foreground">Higher Secondary</h5>
                              <p className="text-muted-foreground">Vivekananda Hr Sec School  • 2020- 2022</p>   
                              <p className="text-muted-foreground">Sholavandan, Madurai - 625214</p>

                        </div>
                        <div className=" ">
                        <div className="text-center p-5 bg-card rounded-lg">
                          <div className="text-2xl font-bold text-gradient">83.33%</div>
                          <div className="text-sm text-muted-foreground">Percentage / 100</div>
                        </div>
                  </div>
                      {/* <div className='text-end'>
                        <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">
                          {/* First Class with Distinction 
                        </Badge>
                      </div> */}
                  </div>
                </div>



                <div className="bg-gradient-hero p-6 rounded-lg border">
                  <div className="flex items-start justify-between ">
                        <div>
                          <h5 className="text-xl font-bold text-foreground">SSLC</h5>
                              <p className="text-muted-foreground">Saraswathi Matric Hr Sec School • 2019-2020</p>   
                              <p className="text-muted-foreground">Villupuram - 605602</p>

                        </div>
                        <div className=" ">
                        <div className="text-center p-5 bg-card rounded-lg">
                          <div className="text-2xl font-bold text-gradient">75.2%</div>
                          <div className="text-sm text-muted-foreground">Percentage / 100</div>
                        </div>
                  </div>
                      {/* <div className='text-end'>
                        <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">
                          {/* First Class with Distinction 
                        </Badge>
                      </div> */}
                  </div>
                </div>


                {/* <div>
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
                </div> */}

                {/* <div>
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
                </div>*/}
              </CardContent>
            </Card>
          </div>
        )}
{/* 
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
        )} */}

        {/* {activeTab === 'timeline' && (
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
        )}  */}


        {/* Professional Vlogs Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Video className="h-6 w-6 text-primary" />
              <h3 className="text-2xl md:text-3xl font-bold text-gradient">
                Professional Gallery
              </h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Career insights, achievements, and milestones from my professional journey
            </p>
          </div>


          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'First Full-Stack Project',
                category: 'Achievement',
                img: chat,
                description: 'Building my first complete web application from scratch',
                date: 'Nov 2024',
                badge: 'Milestone'
              },
              {
                title: 'Learning Journey',
                category: 'Career Insight',
                img: chat,
                description: 'How I mastered React and modern web development',
                date: 'Oct 2024',
                badge: 'Learning'
              },
              {
                title: 'Problem Solving Skills',
                category: 'Achievement',
                img: chat,
                description: 'Reaching 150+ problems on LeetCode',
                date: 'Sep 2024',
                badge: 'Technical'
              },
              {
                title: 'Team Collaboration',
                category: 'Career Insight',
                img: chat,
                description: 'Lessons learned from group projects and hackathons',
                date: 'Aug 2024',
                badge: 'Teamwork'
              },
              {
                title: 'Portfolio Development',
                category: 'Achievement',
                img: chat,
                description: 'Creating a professional portfolio to showcase my work',
                date: 'Jul 2024',
                badge: 'Creative'
              },
              {
                title: 'Continuous Learning',
                category: 'Career Insight',
                img: chat,
                description: 'Staying updated with latest technologies and trends',
                date: 'Jun 2024',
                badge: 'Growth'
              }
            ].map((vlog, index) => (
              <Card key={index} className="overflow-hidden hover-lift shadow-card group cursor-pointer">
                <div className="relative aspect-video bg-gradient-hero">
                  {/* Visible thumbnail */}
                  <img src={vlog.img} alt={vlog.title} className="absolute inset-0 w-full h-full object-cover" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="w-40 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center text-sm text-white">
                      View
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="text-xs">{vlog.badge}</Badge>
                  </div>
                </div>
                <CardContent className="p-5">
                  <Badge variant="outline" className="mb-3 text-xs">{vlog.category}</Badge>
                  <h4 className="font-bold mb-2 text-foreground line-clamp-1">
                    {vlog.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {vlog.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{vlog.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>



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