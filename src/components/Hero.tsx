import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-48 h-48 rounded-full object-cover shadow-elegant border-4 border-primary/20 hover-glow animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-glow"></div>
            </div>
          </div>

          {/* Text Content */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Hello, I'm </span>
            <span className="text-gradient">Alex Johnson</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-fade-in">
            Full Stack Developer & UI/UX Designer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in">
            Passionate about creating beautiful, functional, and user-centered digital experiences. 
            I bring ideas to life through clean code and intuitive design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="xl"
            >
              Download CV
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fade-in">
            <Button variant="ghost" size="icon" className="hover-lift">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-lift">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-lift">
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;