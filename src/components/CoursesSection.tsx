import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Cpu, 
  Server, 
  Binary, 
  Network, 
  HardDrive, 
  CircuitBoard,
  Clock,
  Calendar,
  Trophy,
  Zap,
  BookOpen,
  Sparkles
} from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'PC Building & Hardware Assembly',
    category: 'Hardware',
    description: 'Complete guide to building custom PCs, component selection, and hardware troubleshooting',
    duration: '8 weeks',
    level: 'Intermediate',
    icon: Cpu,
    skills: ['Hardware Assembly', 'Component Testing', 'System Optimization'],
    status: 'Completed',
    date: '2023'
  },
  {
    id: 2,
    title: 'Server Administration & Deployment',
    category: 'DevOps',
    description: 'Linux server setup, configuration, monitoring, and maintenance for production environments',
    duration: '12 weeks',
    level: 'Advanced',
    icon: Server,
    skills: ['Linux Administration', 'Network Configuration', 'Security Hardening'],
    status: 'Completed',
    date: '2023'
  },
  {
    id: 3,
    title: 'Data Structures & Algorithms',
    category: 'Programming',
    description: 'Comprehensive study of fundamental data structures and algorithmic problem-solving techniques',
    duration: '16 weeks',
    level: 'Advanced',
    icon: Binary,
    skills: ['Algorithm Design', 'Time Complexity', 'Problem Solving'],
    status: 'In Progress',
    date: '2024'
  },
  {
    id: 4,
    title: 'Network Architecture & Security',
    category: 'Networking',
    description: 'Network design, security protocols, and infrastructure management for enterprise environments',
    duration: '10 weeks',
    level: 'Advanced',
    icon: Network,
    skills: ['Network Design', 'Security Protocols', 'Infrastructure Management'],
    status: 'Completed',
    date: '2023'
  },
  {
    id: 5,
    title: 'Database Design & Optimization',
    category: 'Database',
    description: 'Advanced database design principles, query optimization, and performance tuning',
    duration: '6 weeks',
    level: 'Intermediate',
    icon: HardDrive,
    skills: ['Database Design', 'Query Optimization', 'Performance Tuning'],
    status: 'Completed',
    date: '2024'
  },
  {
    id: 6,
    title: 'Embedded Systems Programming',
    category: 'Hardware',
    description: 'Programming microcontrollers, IoT devices, and embedded system development',
    duration: '14 weeks',
    level: 'Advanced',
    icon: CircuitBoard,
    skills: ['Microcontroller Programming', 'IoT Development', 'Hardware Integration'],
    status: 'Planned',
    date: '2024'
  }
];

const CourseCard = ({ course, index }: { course: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = course.icon;
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-gradient-to-r from-green-500 to-emerald-500';
      case 'In Progress':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'Planned':
        return 'bg-gradient-to-r from-purple-500 to-pink-500';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-gradient-to-r from-green-400 to-green-600';
      case 'Intermediate':
        return 'bg-gradient-to-r from-blue-400 to-blue-600';
      case 'Advanced':
        return 'bg-gradient-to-r from-purple-400 to-purple-600';
      default:
        return 'bg-gradient-to-r from-gray-400 to-gray-600';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
      style={{ perspective: '1000px' }}
    >
      <Card className="relative h-full bg-gradient-to-br from-background/80 to-muted/40 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
        
        {/* Background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <CardHeader className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <motion.div
              className="p-3 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm"
              animate={isHovered ? { scale: 1.1, rotate: 360 } : {}}
              transition={{ duration: 0.5 }}
            >
              <IconComponent className="h-6 w-6 text-primary" />
            </motion.div>
            
            <div className="flex gap-2">
              <Badge className={`${getStatusColor(course.status)} text-white text-xs px-2 py-1`}>
                {course.status}
              </Badge>
            </div>
          </div>
          
          <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
            {course.title}
          </CardTitle>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{course.date}</span>
            </div>
          </div>
          
          <Badge variant="outline" className={`${getLevelColor(course.level)} text-white border-transparent w-fit`}>
            {course.level}
          </Badge>
        </CardHeader>
        
        <CardContent className="relative z-10">
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {course.description}
          </p>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-sm flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              Key Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {course.skills.map((skill: string, skillIndex: number) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                  className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-xs font-medium border border-primary/20 backdrop-blur-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const CoursesSection = () => {
  const [filter, setFilter] = useState('All');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const categories = ['All', 'Hardware', 'DevOps', 'Programming', 'Networking', 'Database'];
  
  const filteredCourses = filter === 'All' 
    ? courses 
    : courses.filter(course => course.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20"
            variants={itemVariants}
          >
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-primary">Continuous Learning</span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Specialized Courses
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Advanced coursework and specialized training in cutting-edge technologies and methodologies
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'bg-background border border-border hover:border-primary/50 text-muted-foreground hover:text-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {filteredCourses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20"
            variants={itemVariants}
          >
            <Trophy className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-primary mb-2">6+</h3>
            <p className="text-muted-foreground">Specialized Courses</p>
          </motion.div>
          
          <motion.div
            className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20"
            variants={itemVariants}
          >
            <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-primary mb-2">200+</h3>
            <p className="text-muted-foreground">Hours of Learning</p>
          </motion.div>
          
          <motion.div
            className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20"
            variants={itemVariants}
          >
            <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-primary mb-2">4</h3>
            <p className="text-muted-foreground">Active Projects</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;