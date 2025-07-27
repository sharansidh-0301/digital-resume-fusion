import React from 'react';
import { Award, Trophy, Star, Target, Users, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button'; // Make sure Button is imported


const Achievements = () => {
  const achievements = [
    {
    icon: Trophy,
    title: 'National-Level Technical Symposium Winner',
    description: 'Awarded 1st Prize for Paper Presentation at a National Level Symposium hosted by Mailam Engineering College.',
    date: '2025',
    category: 'Competition',
    color: 'text-yellow-500',
    link: 'https://www.linkedin.com/posts/sharansidh0301_paperpresentation-adzap-symposiumsuccess-activity-7346507758210293762-iP0U?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl4bRIBUsO19sMARa770vyYHWdCfQvkSPM', // Add your actual link
  },
  {
    icon: Award,
    title: 'Smart India Hackathon Finalist',
    description: 'Shortlisted as one of 1028 teams from over 50,000 teams for the Smart India Hackathon 2023 – Hardware Edition ',
    date: '2023',
    category: 'Innovation Cell',
    color: 'text-orange-500',
    link: 'https://www.linkedin.com/posts/sharansidh0301_newabrdelhi-sihgrandfinale-hackathonexperience-activity-7151229167886307328-AcH3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl4bRIBUsO19sMARa770vyYHWdCfQvkSPM', // Add your actual link
  },
    // {
    //   icon: Star,
    //   title: 'Coding Competition Champion',
    //   description: 'Won intra-college coding competition with 150+ participants for algorithmic problem solving',
    //   date: '2023',
    //   category: 'Competition',
    //   color: 'text-purple-500',
    // },
    {
      icon: Target,
      title: 'Ideathon Runner-up',
      description: 'Secured 2nd place in intra-college ideathon with innovative AI solution',
      date: '2025',
      category: 'Competition',
      color: 'text-blue-500',
      link: 'https://www.linkedin.com/posts/sharansidh0301_ideathon-decibalclub-teamwork-activity-7347247904077598722-Cuj8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl4bRIBUsO19sMARa770vyYHWdCfQvkSPM', 

    },
    {
      icon: Users,
      title: 'Class  Representative & IV Coordinator',
      description: 'Served as the Class Representative and Student Coordinator of Industrial Visit for the department.',
      date: '2022-2024',
      category: 'Leadership',
      color: 'text-green-500',
    },
    {
      icon: Code,
      title: 'Open Source Contributor',
      description: 'Active contributor to multiple open source projects with 50+ merged pull requests',
      date: '2023-2024',
      category: 'Community',
      color: 'text-red-500',
    },
    // {
    //   icon: Trophy,
    //   title: 'Dean\'s List Recognition',
    //   description: 'Consistently maintained 8.5+ CGPA and featured in Dean\'s List for academic excellence',
    //   date: '2022-2024',
    //   category: 'Academic',
    //   color: 'text-indigo-500',
    // },
    {
      icon: Award,
      title: 'Paper Presentation Winner',
      description: '3rd Prize – Paper Presentation at Velammal Engineering College, Ambattur',
      date: '2024',
      category: 'Research',
      color: 'text-pink-500',
      link:'https://www.linkedin.com/posts/sharansidh0301_velammal-chennai-third-activity-7167464915434156032-B79o?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl4bRIBUsO19sMARa770vyYHWdCfQvkSPM' ,
    },
  ];


  const githubBadges = [
    {
      name: 'Pull Shark',
      description: 'Opened multiple pull requests',
      badge: 'https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png',
      rarity: 'Bronze'
    },
    {
      name: 'Quickdraw',
      description: 'Closed an issue or pull request within 5 minutes',
      badge: 'https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png',
      rarity: 'Silver'
    },
    {
      name: 'YOLO',
      description: 'Merged a pull request without code review',
      badge: 'https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png',
      rarity: 'Bronze'
    },
    {
      name: 'Arctic Code Vault Contributor',
      description: 'Contributed code to repositories in 2020 GitHub Archive Program',
      badge: 'https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png',
      rarity: 'Special'
    },
  ];

  const githubStats = [
    { label: 'Public Repositories', value: '30+' },
    { label: 'Total Commits', value: '400+' },
    { label: 'Followers', value: '5+' },
    { label: 'Learning Streak', value: '50+ days' },
  ];

  const codingStats = [
    { platform: 'LeetCode', label: 'Problems Solved', value: '20+', color: 'text-orange-500' },
    { platform: 'SkillRack', label: 'Challenges Solved', value: '115+', color: 'text-blue-500' },
    { platform: 'HackerRank', label: 'Badges Earned', value: '8+', color: 'text-green-500' },
    { platform: 'CodeChef', label: 'Contest Rating', value: '1200+', color: 'text-purple-500' },
  ];

  return (
    <section id="achievements" className="py-5 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Milestones, awards, and recognitions that mark my professional journey
          </p>
        </div>

        {/* Achievements Grid */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {achievements.map((achievement, index) => {
              const CardContentElement = (
                <Card key={index} className="hover-lift shadow-card group">
                  <CardHeader>
                    <div className="flex items-center gap-3 h-20">
                      <div className={`p-3 rounded-full bg-gradient-primary`}>
                        <achievement.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{achievement.title}</CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {achievement.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{achievement.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    {achievement.link && (
                      <div className="mt-4 flex justify-center">
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="group"
                        >
                          <a
                            href={achievement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex  absolute items-center gap-1 py-2"
                          >
                            View Details
                            <svg
                              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </a>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
              return CardContentElement;
            })}
          </div>
        {/* GitHub Achievement Badges */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gradient">
            GitHub Achievement Badges
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {githubBadges.map((badge, index) => (
              <Card key={index} className="text-center hover-lift shadow-card group p-4">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden shadow-elegant group-hover:shadow-glow transition-smooth">
                  <img
                    src={badge.badge}
                    alt={badge.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h5 className="text-sm font-bold mb-1">{badge.name}</h5>
                <Badge variant="secondary" className="text-xs mb-2">
                  {badge.rarity}
                </Badge>
                <p className="text-xs text-muted-foreground">{badge.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Coding Platform Statistics */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gradient">
            Coding Platform Stats
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {codingStats.map((stat, index) => (
              <Card key={index} className="text-center hover-lift shadow-card">
                <CardContent className="p-6">
                  <div className="text-sm font-bold text-muted-foreground mb-2">
                    {stat.platform}
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="bg-gradient-hero rounded-2xl p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gradient">
            GitHub Statistics
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {githubStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Active contributor</span>
            </div>
          </div>
        </div>

        {/* Achievement Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center hover-lift shadow-card">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Trophy className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-2">Competition Wins</h4>
              <div className="text-3xl font-bold text-gradient">5+</div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover-lift shadow-card">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-2">Awards Received</h4>
              <div className="text-3xl font-bold text-gradient">8+</div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover-lift shadow-card">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Star className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-2">GitHub Badges</h4>
              <div className="text-3xl font-bold text-gradient">4+</div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover-lift shadow-card">
            <CardContent className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-2">Leadership Roles</h4>
              <div className="text-3xl font-bold text-gradient">3+</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;