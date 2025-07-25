import React from 'react';
import { Calendar, MapPin, Coffee, Heart, Code2, Zap, Users, Lightbulb, Rocket, Target } from 'lucide-react';
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

        {/* Modern Fresher Features */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gradient">
            What Sets Me Apart
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover-lift shadow-card p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Code2 className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-3">Clean Code Advocate</h4>
              <p className="text-sm text-muted-foreground">
                I prioritize writing maintainable, well-documented code following industry best practices and coding standards.
              </p>
            </Card>
            
            <Card className="text-center hover-lift shadow-card p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-3">Fast Learner</h4>
              <p className="text-sm text-muted-foreground">
                Quickly adapt to new technologies and frameworks. Always eager to expand my skill set and take on new challenges.
              </p>
            </Card>
            
            <Card className="text-center hover-lift shadow-card p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-3">Team Collaborator</h4>
              <p className="text-sm text-muted-foreground">
                Experience working in team environments through group projects, hackathons, and open source contributions.
              </p>
            </Card>
            
            <Card className="text-center hover-lift shadow-card p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-3">Problem Solver</h4>
              <p className="text-sm text-muted-foreground">
                Strong analytical thinking with 150+ LeetCode problems solved and consistent practice on coding platforms.
              </p>
            </Card>
            
            <Card className="text-center hover-lift shadow-card p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Rocket className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-3">Innovation Focused</h4>
              <p className="text-sm text-muted-foreground">
                Passionate about emerging technologies like AI/ML and always exploring new ways to solve problems efficiently.
              </p>
            </Card>
            
            <Card className="text-center hover-lift shadow-card p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-3">Goal Oriented</h4>
              <p className="text-sm text-muted-foreground">
                Committed to continuous learning with clear career goals and a structured approach to skill development.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;