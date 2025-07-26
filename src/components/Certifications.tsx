import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Certifications = () => {
  const certifications = [
    {
      name: 'CCNA Certification',
      issuer: 'Cisco',
      date: '2023',
      expiryDate: '2026',
      badge: 'https://images.credly.com/size/340x340/images/683783d8-eaac-4c37-a14d-11bd8a36321d/CCNAv7.png',
      description: 'Cisco Certified Network Associate - Routing and Switching',
      credentialId: 'CSCO12345678',
      skills: ['Networking', 'Routing', 'Switching', 'Network Security'],
      status: 'Active'
    },
    {
      name: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      date: '2023',
      expiryDate: 'No Expiry',
      badge: 'https://images.credly.com/size/340x340/images/0c6d9839-f468-4adc-987d-5cfae4a9ee67/image.png',
      description: 'Complete certification covering HTML, CSS, Flexbox, CSS Grid, and Responsive Design',
      credentialId: 'fcc-rwd-2023',
      skills: ['HTML5', 'CSS3', 'Responsive Design', 'Flexbox', 'CSS Grid'],
      status: 'Active'
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'FreeCodeCamp',
      date: '2023',
      expiryDate: 'No Expiry',
      badge: 'https://www.freecodecamp.org/news/content/images/2021/08/js-cert.png',
      description: 'Advanced JavaScript programming including ES6, algorithms, and data structures',
      credentialId: 'fcc-jsad-2023',
      skills: ['JavaScript', 'ES6+', 'Algorithms', 'Data Structures', 'Problem Solving'],
      status: 'Active'
    },
    {
      name: 'Frontend Development Libraries',
      issuer: 'FreeCodeCamp',
      date: '2024',
      expiryDate: 'No Expiry',
      badge: 'https://www.freecodecamp.org/news/content/images/2021/08/fe-libs-cert.png',
      description: 'React, Redux, Bootstrap, jQuery, and Sass for modern frontend development',
      credentialId: 'fcc-fedl-2024',
      skills: ['React', 'Redux', 'Bootstrap', 'jQuery', 'Sass'],
      status: 'Active'
    },
    {
      name: 'Git and GitHub Essentials',
      issuer: 'Coursera',
      date: '2023',
      expiryDate: 'No Expiry',
      badge: 'https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/sMBzISAOQeKGrxqIL5dPiQ_1be5e1b2b0e0460b9e89f8c8ca4dc9a1_coursera_icon_rgb.png',
      description: 'Version control, collaborative development, and Git workflow best practices',
      credentialId: 'coursera-git-2023',
      skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
      status: 'Active'
    },
    {
      name: 'Introduction to Machine Learning',
      issuer: 'edX',
      date: '2024',
      expiryDate: 'No Expiry',
      badge: 'https://www.edx.org/images/logos/edx-logo-header.png',
      description: 'Fundamentals of ML algorithms, data preprocessing, and model evaluation',
      credentialId: 'edx-ml-intro-2024',
      skills: ['Machine Learning', 'Python', 'Data Analysis', 'Scikit-learn'],
      status: 'Active'
    }
  ];

  const certificationStats = [
    { label: 'Total Certifications', value: '6+', icon: Award },
    { label: 'Active Credentials', value: '6', icon: CheckCircle },
    { label: 'Learning Hours', value: '200+', icon: Calendar },
    { label: 'Skill Areas', value: '10+', icon: ExternalLink },
  ];

  const skillCategories = [
    {
      category: 'Web Development',
      count: 4,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design']
    },
    {
      category: 'Programming',
      count: 3,
      skills: ['JavaScript', 'Python', 'Algorithms', 'Data Structures']
    },
    {
      category: 'Tools & Platforms',
      count: 2,
      skills: ['Git', 'GitHub', 'Version Control', 'Collaboration']
    },
    {
      category: 'Networking',
      count: 1,
      skills: ['CCNA', 'Routing', 'Switching', 'Network Security']
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Certifications & Learning
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and continuous learning achievements that validate my skills
          </p>
        </div>

        {/* Certification Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certificationStats.map((stat, index) => (
            <Card key={index} className="text-center hover-lift shadow-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover-lift shadow-card group">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden shadow-elegant group-hover:shadow-glow transition-smooth">
                  <img
                    src={cert.badge}
                    alt={cert.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/80/9333ea/ffffff?text=' + cert.issuer.charAt(0);
                    }}
                  />
                </div>
                <CardTitle className="text-lg">{cert.name}</CardTitle>
                <p className="text-sm text-muted-foreground font-medium">{cert.issuer}</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Badge variant={cert.status === 'Active' ? 'default' : 'secondary'}>
                    {cert.status}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {cert.date}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{cert.description}</p>
                
                <div className="space-y-2">
                  <div className="text-xs">
                    <span className="font-medium text-foreground">Credential ID: </span>
                    <span className="text-muted-foreground">{cert.credentialId}</span>
                  </div>
                  <div className="text-xs">
                    <span className="font-medium text-foreground">Expires: </span>
                    <span className="text-muted-foreground">{cert.expiryDate}</span>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-sm font-medium text-foreground mb-2">Skills Covered:</h5>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Categories Summary */}
        <div className="bg-gradient-hero rounded-2xl p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gradient">
            Certified Skill Areas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="text-center hover-lift shadow-card">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-gradient mb-2">
                    {category.count}
                  </div>
                  <h4 className="text-sm font-bold text-foreground mb-3">
                    {category.category}
                  </h4>
                  <div className="space-y-1">
                    {category.skills.slice(0, 3).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs mx-1">
                        {skill}
                      </Badge>
                    ))}
                    {category.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs mx-1">
                        +{category.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto hover-lift shadow-card">
            <CardContent className="p-8">
              <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Continuous Learning Mindset</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in the power of continuous learning and skill validation through industry-recognized certifications. 
                Each certification represents not just knowledge gained, but practical skills that I can apply to real-world projects. 
                My goal is to stay current with evolving technologies while building a strong foundation in computer science fundamentals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;