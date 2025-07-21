import React from 'react';
import { Calendar, MapPin, Coffee, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Coffee Cups', value: '1000+' },
  ];

  const interests = [
    { icon: Coffee, label: 'Coffee Enthusiast' },
    { icon: Heart, label: 'Open Source Contributor' },
    { icon: Calendar, label: 'Continuous Learner' },
    { icon: MapPin, label: 'Digital Nomad' },
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
              Crafting Digital Experiences with Passion
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating 
              modern, responsive, and user-friendly applications. My journey began with a 
              curiosity for how websites work, and it has evolved into a deep passion for 
              crafting exceptional digital experiences.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of clean code, thoughtful design, and continuous learning. 
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
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
                  title: 'Senior Full Stack Developer',
                  company: 'Tech Innovators Inc.',
                  description: 'Leading development of enterprise-level applications using React, Node.js, and cloud technologies.'
                },
                {
                  year: '2022',
                  title: 'Full Stack Developer',
                  company: 'Digital Solutions Ltd.',
                  description: 'Developed and maintained multiple client projects, focusing on performance optimization and user experience.'
                },
                {
                  year: '2020',
                  title: 'Frontend Developer',
                  company: 'StartUp Studio',
                  description: 'Specialized in creating responsive web applications and implementing modern design systems.'
                },
                {
                  year: '2019',
                  title: 'Web Developer',
                  company: 'Creative Agency',
                  description: 'Started my professional journey building websites and learning the fundamentals of web development.'
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