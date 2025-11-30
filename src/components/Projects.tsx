import React from 'react';
import { ExternalLink, Github, Calendar, Star, GitFork } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import project1 from '@/assets/portFolio.png';
import project2 from '@/assets/project-2.png';
import project3 from '@/assets/QRProject.png';
import project4 from '@/assets/ChatBOx.png';
import project6 from '@/assets/project6.png';
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Generative AI SQL Querying Platform(AskMyDB AI)',
      description: 'A GenAI-based SQL assistant that converts plain English prompts into safe MySQL queries using FastAPI and OpenRouter, featuring a real-time results dashboard and secure read-only operations.',
      image: project6,
      technologies: ['Python','MySQL','OpenRouter','React', 'Tailwind CSS', 'FastAPI', 'Responsive Design'],
      liveUrl: '',
      githubUrl: 'https://github.com/sharansidh-0301/SaaS/tree/main/askmydbai',
      date: 'Nov 2025',
      stars: 2,
      forks: 1,
      featured: true,
    },
    {
      id: 2,
      title: 'Shop Owner Module in Shopping Mall',
      description: 'A full-stack Shop Owner Module in Shopping Mall application  CRUD operations, and real-time updates. Built as a learning project to understand React hooks and state management.',
      image: project2,
      technologies: ['Spring Boot', 'REST   API','Angular', 'PostgreSQL', 'POSTMAN','JPA'],
      liveUrl: '0',
      githubUrl: 'https://github.com/sharansidh-0301/TNSIF-JAVA-SHARANSIDH-JR/tree/master/ShopOwner%20Module',
      date: 'Oct 2025',
      stars: 18,
      forks: 12,
      featured: true,
    },
    {
      id: 3,
      title: 'AI Assistant Chat Application',
      description: 'A real-time AI-assistant chat application build with python and Gemini API. It allows users to interact with an AI assistant for various tasks and queries.',      
      image: project4,
      technologies: ['Python', 'Gemini API', 'VS Code'],
      githubUrl: 'https://github.com/sharansidh-0301/Pythom-Agents/tree/main/ChatBox%20Using%20Gemini',
      date: 'June 2025',
      stars: 1,
      forks: 1,
      featured: false,
    },
    {
      id: 4,
      title: 'QR Code Generator',
      description: 'A recipe search application built with React that allows users to search for recipes by ingredients. Integrated with external recipe API for dynamic content.',
      image: project3,
      technologies: ['React', 'API', 'Tailwind', 'JavaScript'],
      githubUrl: 'https://github.com/sharansidh-0301/QR-Code-Generator',
      date: 'Jun 2023',
      stars: 9,
      forks: 3,
      featured: false,
    },
    {
      id: 5,
       title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website built with React and Tailwind CSS to showcase my projects and skills. Features smooth animations, dark mode support, and mobile-first design.',
      image: project1,
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      liveUrl: 'https://sidh-profolio.vercel.app/',
      githubUrl: 'https://github.com/sharansidh-0301/PortFolio',
      date: 'May 2025',
      stars: 2,
      forks: 1,
      featured: false,
    },
   
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-5 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my best work and the projects I'm most proud of
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover-lift shadow-card group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-smooth"></div>
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  Featured
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {project.date}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    {project.stars}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    {project.forks}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-3">
                <a href={project.liveUrl} className="flex  w-full" target="_blank" rel="noopener noreferrer">
                 <Button variant="default" size="sm"  className='flex-1'>
                  <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                </Button> 
                </a>
                <a href={project.githubUrl} className="flex  w-full" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className='flex-1'>
                  <Github className="h-4 w-4 mr-2" />
                  Source Code
                </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gradient">
            Other Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover-lift shadow-card group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-smooth"></div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold">{project.title}</CardTitle>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {project.date}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      {project.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-3 w-3" />
                      {project.forks}
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-2 pt-0">
                 <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex w-full">
                     <Button variant="ghost" size="sm" className="flex-1 text-xs">
                      <Github className="h-3 w-3 mr-1" />
                       Code
                     </Button>
                 </a>
                  
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Want to see more of my work?</h3>
          <p className="text-muted-foreground mb-8">
            Check out my GitHub profile for more projects and contributions
          </p>
          <Button variant="hero" size="lg">
            <a href="https://github.com/sharansidh-0301?tab=repositories" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
