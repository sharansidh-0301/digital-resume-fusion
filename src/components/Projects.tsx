import React from 'react';
import { ExternalLink, Github, Calendar, Star, GitFork } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website built with React and Tailwind CSS to showcase my projects and skills. Features smooth animations, dark mode support, and mobile-first design.',
      image: project2,
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      liveUrl: '#',
      githubUrl: '#',
      date: 'Dec 2023',
      stars: 24,
      forks: 8,
      featured: true,
    },
    {
      id: 2,
      title: 'Todo List Web App',
      description: 'A full-stack todo application with user authentication, CRUD operations, and real-time updates. Built as a learning project to understand React hooks and state management.',
      image: project1,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      liveUrl: '#',
      githubUrl: '#',
      date: 'Oct 2023',
      stars: 18,
      forks: 12,
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that fetches real-time weather data using API integration. Features location search, 5-day forecast, and clean UI design.',
      image: project3,
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API'],
      liveUrl: '#',
      githubUrl: '#',
      date: 'Aug 2023',
      stars: 15,
      forks: 5,
      featured: false,
    },
    {
      id: 4,
      title: 'Recipe Finder App',
      description: 'A recipe search application built with React that allows users to search for recipes by ingredients. Integrated with external recipe API for dynamic content.',
      image: project1,
      technologies: ['React', 'Recipe API', 'CSS3', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#',
      date: 'Jun 2023',
      stars: 9,
      forks: 3,
      featured: false,
    },
    {
      id: 5,
      title: 'Simple Calculator',
      description: 'A web-based calculator built with vanilla JavaScript, HTML, and CSS. Features basic arithmetic operations with a clean, intuitive interface.',
      image: project2,
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM Manipulation'],
      liveUrl: '#',
      githubUrl: '#',
      date: 'Apr 2023',
      stars: 6,
      forks: 2,
      featured: false,
    },
    // {
    //   id: 6,
    //   title: 'Landing Page Clone',
    //   description: 'A pixel-perfect recreation of a popular company\'s landing page as a practice project. Focus on responsive design and modern CSS techniques.',
    //   image: project3,
    //   technologies: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox'],
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   date: 'Feb 2023',
    //   stars: 4,
    //   forks: 1,
    //   featured: false,
    // },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
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
                <Button variant="default" size="sm" className="flex-1">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="h-4 w-4 mr-2" />
                  Source Code
                </Button>
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
                  <Button variant="ghost" size="sm" className="flex-1 text-xs">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Demo
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1 text-xs">
                    <Github className="h-3 w-3 mr-1" />
                    Code
                  </Button>
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
