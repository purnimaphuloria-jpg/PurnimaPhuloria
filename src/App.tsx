/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  Trophy, 
  BookOpen, 
  Code, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  ChevronRight,
  MapPin,
  Calendar,
  Award,
  FileText,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Education, Achievement, Project, Publication } from './types';

const EDUCATION_DATA: Education[] = [
  {
    id: '1',
    institution: 'Stanford University',
    degree: 'Ph.D. in Computer Science',
    period: '2020 - Present',
    description: 'Specializing in Artificial Intelligence and Human-Computer Interaction. Research focuses on collaborative AI systems.'
  },
  {
    id: '2',
    institution: 'Massachusetts Institute of Technology (MIT)',
    degree: 'M.S. in Electrical Engineering',
    period: '2018 - 2020',
    description: 'Thesis on "Neural Architectures for Real-time Signal Processing". GPA: 4.0/4.0.'
  },
  {
    id: '3',
    institution: 'University of California, Berkeley',
    degree: 'B.S. in Computer Science',
    period: '2014 - 2018',
    description: 'Graduated with Highest Honors. Minor in Mathematics.'
  }
];

const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: '1',
    title: 'National Science Foundation (NSF) Graduate Fellowship',
    date: '2021',
    category: 'Scholarship',
    description: 'Awarded for research potential in the field of AI.'
  },
  {
    id: '2',
    title: 'Best Paper Award - CHI 2023',
    date: '2023',
    category: 'Award',
    description: 'Recognized for the paper "Augmenting Human Creativity with Generative Models".'
  },
  {
    id: '3',
    title: 'Google PhD Fellowship',
    date: '2022',
    category: 'Scholarship',
    description: 'Selected as one of the top PhD students globally in Machine Learning.'
  }
];

const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'NeuralCanvas',
    description: 'A collaborative AI-powered design tool that helps architects generate 3D models from sketches.',
    tags: ['PyTorch', 'React', 'Three.js'],
    image: 'https://picsum.photos/seed/neural/800/600'
  },
  {
    id: '2',
    title: 'BioGraph',
    description: 'A graph neural network framework for predicting protein-protein interactions.',
    tags: ['Python', 'GNN', 'Bioinformatics'],
    image: 'https://picsum.photos/seed/bio/800/600'
  },
  {
    id: '3',
    title: 'EthicAI',
    description: 'An open-source toolkit for auditing bias in large language models.',
    tags: ['NLP', 'Ethics', 'Python'],
    image: 'https://picsum.photos/seed/ethic/800/600'
  }
];

const PUBLICATIONS_DATA: Publication[] = [
  {
    id: '1',
    title: 'Scalable Neural Architectures for Dynamic Systems',
    authors: 'J. Doe, A. Smith, B. Johnson',
    journal: 'Journal of Machine Learning Research',
    year: '2023',
    link: '#'
  },
  {
    id: '2',
    title: 'The Future of Collaborative AI in Creative Workflows',
    authors: 'J. Doe, M. Lee',
    journal: 'Nature Machine Intelligence',
    year: '2022',
    link: '#'
  }
];

const SKILLS = [
  { category: 'Research', items: ['Machine Learning', 'Deep Learning', 'HCI', 'NLP'] },
  { category: 'Languages', items: ['Python', 'TypeScript', 'C++', 'R'] },
  { category: 'Tools', items: ['PyTorch', 'TensorFlow', 'React', 'D3.js'] }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('education');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/10 selection:text-primary">
      {/* Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-bottom border-border py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-heading font-bold">JD</div>
            <span className="font-heading font-bold text-xl tracking-tight">Jane Doe</span>
          </motion.div>
          
          <nav className="hidden md:flex items-center gap-8">
            {['About', 'Academic', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
            <Button variant="outline" size="sm" className="rounded-full">
              Download CV
            </Button>
          </nav>
        </div>
      </header>

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section id="about" className="container mx-auto px-6 mb-32">
          <div className="grid md:grid-template-columns-[1fr_400px] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                PhD Candidate @ Stanford
              </Badge>
              <h1 className="text-6xl md:text-7xl font-heading font-bold mb-6 leading-[1.1] tracking-tight">
                Advancing the frontier of <span className="italic text-primary/80">Human-AI</span> Collaboration.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                I am a researcher and engineer dedicated to building intelligent systems that augment human creativity and problem-solving capabilities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="rounded-full px-8 py-6 text-lg">
                  View Research
                </Button>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 group"
            >
              <img 
                src="https://picsum.photos/seed/jane/800/800" 
                alt="Jane Doe" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </div>
        </section>

        {/* Academic Tabs */}
        <section id="academic" className="container mx-auto px-6 mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-4">Academic Journey</h2>
              <p className="text-muted-foreground max-w-md">My educational background, research milestones, and recognized achievements.</p>
            </div>
            <Tabs defaultValue="education" className="w-full md:w-auto" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 rounded-full p-1 bg-muted/50">
                <TabsTrigger value="education" className="rounded-full px-6">Education</TabsTrigger>
                <TabsTrigger value="achievements" className="rounded-full px-6">Achievements</TabsTrigger>
                <TabsTrigger value="publications" className="rounded-full px-6">Publications</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'education' && (
                <div className="grid gap-6">
                  {EDUCATION_DATA.map((edu) => (
                    <Card key={edu.id} className="border-none shadow-none bg-muted/30 hover:bg-muted/50 transition-colors">
                      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                        <div className="p-3 bg-background rounded-2xl shadow-sm">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <CardTitle className="text-xl font-heading">{edu.institution}</CardTitle>
                            <span className="text-sm font-mono text-muted-foreground">{edu.period}</span>
                          </div>
                          <CardDescription className="text-primary font-medium mb-2">{edu.degree}</CardDescription>
                          <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              )}

              {activeTab === 'achievements' && (
                <div className="grid md:grid-cols-3 gap-6">
                  {ACHIEVEMENTS_DATA.map((award) => (
                    <Card key={award.id} className="border-none shadow-none bg-muted/30 hover:bg-muted/50 transition-colors">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-4">
                          <div className="p-2 bg-background rounded-xl shadow-sm">
                            <Trophy className="w-5 h-5 text-primary" />
                          </div>
                          <Badge variant="outline" className="font-mono text-[10px] uppercase tracking-tighter">
                            {award.date}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg font-heading leading-tight mb-2">{award.title}</CardTitle>
                        <CardDescription>{award.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              )}

              {activeTab === 'publications' && (
                <div className="space-y-4">
                  {PUBLICATIONS_DATA.map((pub) => (
                    <div key={pub.id} className="group flex items-start gap-6 p-6 rounded-3xl hover:bg-muted/30 transition-colors">
                      <div className="hidden md:block text-2xl font-heading text-muted-foreground/30 group-hover:text-primary/30 transition-colors">
                        {pub.year}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{pub.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{pub.authors}</p>
                        <div className="flex items-center gap-4">
                          <span className="text-xs font-mono uppercase tracking-wider text-primary/60">{pub.journal}</span>
                          <Separator orientation="vertical" className="h-4" />
                          <a href={pub.link} className="text-xs font-medium flex items-center gap-1 hover:underline">
                            Read Paper <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-primary text-primary-foreground py-32 mb-32">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div>
                <Badge className="bg-primary-foreground text-primary mb-4">Featured Work</Badge>
                <h2 className="text-5xl font-heading font-bold tracking-tight">Research & Engineering</h2>
              </div>
              <p className="max-w-sm text-primary-foreground/70 leading-relaxed">
                A selection of projects where I apply theoretical research to solve real-world problems.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {PROJECTS_DATA.map((project) => (
                <motion.div 
                  key={project.id}
                  whileHover={{ y: -10 }}
                  className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono uppercase tracking-widest text-primary-foreground/40">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-3">{project.title}</h3>
                    <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <Button variant="link" className="p-0 h-auto text-primary-foreground hover:text-primary-foreground/80 flex items-center gap-2">
                      View Project <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Expertise */}
        <section className="container mx-auto px-6 mb-32">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-8">Technical Expertise</h2>
              <div className="space-y-12">
                {SKILLS.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-3">
                      {skillGroup.items.map((skill) => (
                        <Badge key={skill} variant="outline" className="px-4 py-2 rounded-full border-border/50 hover:border-primary transition-colors cursor-default">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-[40px] p-12 relative overflow-hidden">
              <div className="relative z-10">
                <QuoteIcon className="w-12 h-12 text-primary/20 mb-6" />
                <p className="text-2xl font-heading italic leading-relaxed mb-8">
                  "Jane's work on collaborative AI architectures has redefined how we think about human-in-the-loop systems. Her ability to bridge deep theory with practical engineering is exceptional."
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="https://picsum.photos/seed/prof/100/100" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-sm">Dr. Andrew Smith</p>
                    <p className="text-xs text-muted-foreground">Professor of CS, Stanford University</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-6">
          <Card className="bg-primary text-primary-foreground rounded-[40px] border-none overflow-hidden p-12 md:p-24 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8">Let's collaborate on the <br /> future of AI.</h2>
              <p className="text-primary-foreground/70 text-lg mb-12 max-w-xl mx-auto">
                I'm always open to discussing research opportunities, speaking engagements, or interesting technical challenges.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-10 py-7 text-lg font-bold">
                  Send an Email
                </Button>
                <div className="flex items-center gap-4">
                  <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </Card>
        </section>
      </main>

      <footer className="container mx-auto px-6 py-12 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © 2024 Jane Doe. Built with precision and care.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-xs font-mono uppercase tracking-widest hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="text-xs font-mono uppercase tracking-widest hover:text-primary transition-colors">Scholar</a>
            <a href="#" className="text-xs font-mono uppercase tracking-widest hover:text-primary transition-colors">RSS</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function QuoteIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c1 0 1.25.25 1.25 1.25V15c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    </svg>
  );
}
