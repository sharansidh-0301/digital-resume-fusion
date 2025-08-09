import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, ChevronRight, Sparkles, Code2, Brain, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import profilePhoto from '@/assets/myPic.png';
import resume from '@/assets/SHARANSIDH_JR_SOFTWARE_ENGINEER.pdf';

const HeroEnhanced = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'Software Developer',
    'Frontend Enthusiast', 
    'AI Generalist',
    'Problem Solver',
    'Tech Innovator'
  ];

  useEffect(() => {
    const typeText = async () => {
      const role = roles[currentRole];
      setIsTyping(true);
      
      // Type out the text
      for (let i = 0; i <= role.length; i++) {
        setDisplayText(role.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      // Pause
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Delete the text
      for (let i = role.length; i >= 0; i--) {
        setDisplayText(role.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      
      setCurrentRole((prev) => (prev + 1) % roles.length);
      setIsTyping(false);
    };

    typeText();
  }, [currentRole]);

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  const particles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 3}s`
      }}
    />
  ));

  return (
    <section id='home' className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles}
      </div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4  hover:text-white hover:shadow-lg hover:bg-primary">
                <Sparkles className="w-4 h-4 mr-2" />
                Available for Opportunities
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Hi, I'm</span>
                <span className="block text-gradient">Sharansidh.<span className='text-emerald-900'>Jr</span> </span>
              </h1>
              
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                  <span className="text-primary">{displayText}</span>
                  <span className={`inline-block w-1 h-8 bg-black ml-1 ${isTyping ? 'animate-pulse' : 'animate-none'}`}></span>
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Passionate software developer skilled in building efficient, scalable applications. Always eager to learn, solve real-world problems, and create meaningful user experiences.
                Specializing in modern web development with a growing interest in AI/ML technologies.
              </p>
            </div>

            {/* Key highlights */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Badge variant="secondary" className="flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                15+ Technologies
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                150+ Problems Solved
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                12+ Projects Built
              </Badge>
            </div>

            {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="lg" className="group" asChild>
                  <a href="mailto:sharansidh0301@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="group" asChild>
                  <a href={resume} download>
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

            {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <Button variant="ghost" size="icon" className="hover-scale">
                  <a href="https://github.com/sharansidh-0301" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover-scale">
                  <a href="https://www.linkedin.com/in/sharansidh0301/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover-scale">
                  <a href="mailto:sharansidh0301@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
              </div>
          </div>

          {/* Profile Photo with enhanced effects */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative group">
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-hero rounded-full opacity-30 group-hover:scale-110 transition-transform duration-700"></div>
              
              {/* Main photo container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-primary-glow/30  rounded-full overflow-hidden shadow-elegant group-hover:shadow-glow transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
                <img
                  src={profilePhoto}
                  alt="Sharansidh - Software Developer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Floating tech icons */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-20 right-20 w-10 h-10 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/20 animate-bounce" style={{animationDelay: '0s'}}>
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute top-1/2 left-14 w-10 h-10 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/20 animate-bounce" style={{animationDelay: '1s'}}>
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <div className="absolute top-1/2 right-8 w-10 h-10 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/20 animate-bounce" style={{animationDelay: '2s'}}>
                    <Rocket className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
              
              {/* Status indicator */}
              <div className="absolute bottom-8 right-8 flex items-center gap-2 px-3 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-primary/20">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Open to work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom- left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToNext}
            className="rounded-full border border-primary/20 hover:border-primary/40"
          >
            <ArrowDown className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroEnhanced;