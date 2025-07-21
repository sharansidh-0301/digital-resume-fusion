import React from 'react';
import { Calendar, MapPin, Coffee, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { label: 'Months Learning', value: '18+' },
    { label: 'Projects Built', value: '12+' },
    { label: 'Technologies', value: '15+' },
    { label: 'GitHub Commits', value: '500+' },
  ];

  const interests = [
    { icon: Coffee, label: 'Tech Enthusiast' },
    { icon: Heart, label: 'Open Source Explorer' },
    { icon: Calendar, label: 'Continuous Learner' },
    { icon: MapPin, label: 'Problem Solver' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get to know more about my journey, passion, and what drives me
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Ready to Start My Tech Journey
            </h3>
            
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
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-card hover-lift">
                  <interest.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{interest.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover-lift shadow-card">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gradient">
            My Journey
          </h3>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-primary"></div>
            
            <div className="space-y-12">
              {[
                {
                  year: '2024',
                  title: 'Computer Science Graduate',
                  company: 'State University',
                  description: 'Graduated with Bachelor\'s in Computer Science. Specialized in web development and software engineering principles.'
                },
                {
                  year: '2023',
                  title: 'Full Stack Development Bootcamp',
                  company: 'TechEducation Institute',
                  description: 'Completed intensive 6-month bootcamp focusing on MERN stack development and modern web technologies.'
                },
                {
                  year: '2023',
                  title: 'Frontend Development Intern',
                  company: 'Local Tech Startup',
                  description: 'Gained hands-on experience building responsive websites and learning industry best practices.'
                },
                {
                  year: '2022',
                  title: 'Started Learning Programming',
                  company: 'Self-taught Journey',
                  description: 'Began my coding journey with HTML, CSS, and JavaScript. Built my first websites and discovered my passion for development.'
                }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <Card className={`w-full max-w-md hover-lift shadow-card ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                    <CardContent className="p-6">
                      <div className="text-sm text-primary font-bold mb-2">{item.year}</div>
                      <h4 className="text-lg font-bold text-foreground mb-1">{item.title}</h4>
                      <div className="text-sm text-muted-foreground font-medium mb-3">{item.company}</div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;