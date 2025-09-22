import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useToast } from '../hooks/use-toast';
import { 
  Cloud, 
  Server, 
  Database, 
  GitBranch, 
  Shield, 
  Zap, 
  Download, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  ExternalLink,
  MapPin,
  Calendar,
  Users,
  Award,
  Code,
  Container,
  Settings,
  Monitor,
  Cpu,
  HardDrive,
  Layers,
  Terminal,
  Globe,
  Lock,
  Rocket,
  Target,
  TrendingUp,
  CheckCircle,
  Star,
  Briefcase,
  BookOpen,
  Brain,
  Wrench,
  Activity
} from 'lucide-react';

const Portfolio = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});
  const [typedText, setTypedText] = useState('');
  const fullText = "Building Production-Ready Cloud Solutions";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/assets/Ayush_Gupta_Resume.pdf`;
    link.download = 'Ayush_Gupta_Azure_Cloud_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Resume Downloaded! 🚀",
      description: "Thank you for downloading my resume. Let's connect!",
    });
  };

  const skills = [
    { name: 'Azure Cloud Services', level: 95, icon: Cloud, category: 'Cloud' },
    { name: 'Docker & Containerization', level: 92, icon: Container, category: 'DevOps' },
    { name: 'CI/CD Pipelines', level: 90, icon: GitBranch, category: 'DevOps' },
    { name: 'Python & Django', level: 88, icon: Code, category: 'Programming' },
    { name: 'Infrastructure as Code', level: 85, icon: Settings, category: 'DevOps' },
    { name: 'Cloud Security & RBAC', level: 87, icon: Shield, category: 'Security' },
    { name: 'Microservices Architecture', level: 83, icon: Layers, category: 'Architecture' },
    { name: 'Performance Optimization', level: 89, icon: TrendingUp, category: 'Performance' },
    { name: 'Github Actions', level: 94, icon: Users, category: 'DevOps' },
  ];

  const technologies = [
     'Docker',  'Kubernetes', 'Azure App Service', 'Python', 'Django', 'Flask', 
    'SQL', 'MySQL', 'GitHub Actions', 'Terraform', 'Jenkins', 'Linux',
    'Git', 'Helm', 'Azure Container Registry', 'Blob Storage', 'Key Vault',
     'Postman', 'Log Analytics', 'VNet', 'Managed Identity',
    'Private Endpoints', 'Azure Monitor', 'REST APIs',
    'Microservices', 'RBAC', 'Application Insights',  'Excel', 'Azure DevOps',
    'ARM Templates'
  ];

  const experiences = [
    {
      company: "LTIMindtree",
      role: "SME & Trainer",
      period: "Jun 2024 – Jun 2025",
      location: "Pune, India",
      description: "Led Azure expertise and training initiatives, managing enterprise-scale cloud infrastructure while mentoring engineering teams.",
      achievements: [
        "Trained 30+ engineers across multiple batches, improving team performance by 50%",
        "Managed 100+ production Azure App Services with 99.9% uptime",
        "Automated deployment processes reducing manual errors by 70%",
        "Served as Tech Lead for trained teams, overseeing project delivery",
        "Debugged and optimized internal Microsoft applications"
      ],
      technologies: ["Azure", "DevOps", "GitHub Actions", "Training", "Leadership"]
    },
    {
      company: "LTIMindtree",
      role: "Senior Software Engineer",
      period: "Jun 2023 – Jun 2024",
      location: "Pune, India",
      description: "Architected and deployed scalable cloud solutions, leading digital transformation initiatives for enterprise clients.",
      achievements: [
        "Improved application performance by 20% through configuration optimization",
        "Reduced cloud costs by 15% via intelligent resource scaling",
        "Built containerized Flask microservices architecture",
        "Implemented end-to-end CI/CD pipelines accelerating releases",
        "Designed disaster recovery and high availability solutions"
      ],
      technologies: ["Azure App Service", "Flask", "Docker", "PostgreSQL", "CI/CD"]
    },
    {
      company: "Sna Sistec Pvt. Ltd",
      role: "Python Developer",
      period: "Jan 2020 – Jun 2023",
      location: "Bhopal, India",
      description: "Developed robust backend systems and RESTful APIs, establishing foundation in cloud-native development practices.",
      achievements: [
        "Built scalable REST APIs using Django REST Framework",
        "Implemented comprehensive monitoring and health check systems",
        "Enhanced CI/CD pipelines improving delivery speed by 15%",
        "Developed cloud-hosted application integrations",
        "Created monitoring dashboards for application stability"
      ],
      technologies: ["Python", "Django", "DRF", "REST API", "Cloud Integration"]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Large-Scale Azure App Service Management",
      description: "Managed and maintained 100+ production-grade Azure App Services (Web Apps & Web Apps for Containers) for enterprise clients. Ensured 99.9% uptime, security compliance, scalability, and disaster recovery readiness.",
      category: "Cloud Infrastructure",
      impact: "99.9% Uptime | 20% Performance Boost | 15% Cost Reduction",
      keyContributions: [
        "Optimized configurations (staging slots, scaling rules, connection settings) → improved performance by 20% and cut costs by 15%",
        "Applied Azure RBAC, Key Vault, VNets, and managed identities for secure deployments",
        "Implemented proactive monitoring with Application Insights & Log Analytics"
      ],
      technologies: ["Azure App Service", "Docker", "GitHub Actions", "PostgreSQL", "Application Insights"],
      scale: "Enterprise",
      status: "Production"
    },
    {
      id: 2,
      title: "CI/CD Automation with GitHub Actions",
      description: "Designed and implemented end-to-end CI/CD pipelines using GitHub Actions for Python and containerized applications. This reduced manual deployments, accelerated release cycles, and minimized errors.",
      category: "DevOps Automation",
      impact: "70% Deployment Time Reduction | Zero Manual Errors",
      keyContributions: [
        "Automated build, test, and deployment workflows for Azure App Services",
        "Reduced deployment time by 70% compared to manual methods",
        "Enabled seamless rollbacks using deployment slots"
      ],
      technologies: ["GitHub Actions", "Azure App Service", "Docker", "Terraform (IaC)"],
      scale: "Enterprise",
      status: "Production"
    },
    {
      id: 3,
      title: "Cost Optimization & High Availability",
      description: "Led initiatives to optimize cloud costs and enhance reliability across dozens of applications running on Azure.",
      category: "Cloud Optimization",
      impact: "15% Cost Reduction | 99.99% Availability",
      keyContributions: [
        "Analyzed usage patterns and implemented auto-scaling and right-sized resources → reduced monthly spend by 15%",
        "Ensured high availability by designing deployments with staging slots, redundancy, and disaster recovery plans",
        "Configured alerts and diagnostics logging for real-time troubleshooting"
      ],
      technologies: ["Azure App Service", "Azure Monitor", "Application Insights", "Terraform"],
      scale: "Enterprise",
      status: "Production"
    },
    {
      id: 4,
      title: "Containerized Flask Microservices on Azure",
      description: "Built and deployed Flask microservices containerized with Docker to Azure Web Apps for Containers. Ensured secure integrations with databases and cloud storage.",
      category: "Microservices Architecture",
      impact: "Scalable Architecture | Secure Integration",
      keyContributions: [
        "Designed scalable microservices architecture",
        "Integrated with PostgreSQL, Blob Storage, and App Services",
        "Enabled automated deployments through CI/CD pipelines"
      ],
      technologies: ["Flask", "Docker", "Azure Web App for Containers", "GitHub Actions", "PostgreSQL", "Blob Storage"],
      scale: "Enterprise",
      status: "Production"
    },
    {
      id: 5,
      title: "Training & Mentorship – DevOps & Cloud",
      description: "As SME & Trainer at LTIMindtree, conducted structured training sessions for 30+ engineers on Azure App Service, Docker, GitHub Actions, and CI/CD best practices.",
      category: "Leadership & Training",
      impact: "50% Team Performance Improvement | 30+ Engineers Trained",
      keyContributions: [
        "Improved team delivery speed and reduced incidents by 50%",
        "Created internal documentation and demo projects for hands-on learning",
        "Supported multiple teams in debugging and optimizing Azure-hosted applications"
      ],
      technologies: ["Azure App Service", "GitHub Actions", "Docker", "Flask", "Python"],
      scale: "Organization",
      status: "Ongoing"
    }
  ];

  const certifications = [
    {
      name: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2023",
      icon: Cloud,
      status: "Active"
    },
    {
      name: "LTIMindtree Generative AI",
      issuer: "LTIMindtree",
      date: "2024",
      icon: Brain,
      status: "Active"
    },
    {
      name: "Google Advanced Analytics",
      issuer: "Google",
      date: "2023",
      icon: TrendingUp,
      status: "Active"
    }
  ];

  const stats = [
    { label: "Years Experience", value: "5.5+", icon: Calendar },
    { label: "Apps Managed", value: "100+", icon: Server },
    { label: "Engineers Trained", value: "30+", icon: Users },
    { label: "Uptime Achieved", value: "99.9%", icon: CheckCircle },
    { label: "Cost Reduction", value: "15%", icon: TrendingUp },
    { label: "Performance Boost", value: "20%", icon: Rocket }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Matrix Background */}
      <div className="matrix-bg"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-green-500/30 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-cyber text-xl text-green-400">
              &lt;AYUSH.GUPTA/&gt;
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-mono text-sm text-green-400 hover:text-white transition-colors uppercase tracking-wider hover:neon-glow"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Floating Tech Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[Cloud, Server, Database, GitBranch, Shield, Container, Monitor, Cpu].map((Icon, index) => (
              <div
                key={index}
                className={`absolute float pulse`}
                style={{
                  top: `${20 + (index * 10)}%`,
                  left: `${10 + (index * 12)}%`,
                  animationDelay: `${index * 0.5}s`
                }}
              >
                <Icon className="w-6 h-6 text-green-400/20" />
              </div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <span className="font-mono text-sm text-green-400 terminal mb-4 block">
                LOADING PORTFOLIO...
              </span>
            </div>
            
            <h1 className="font-cyber text-6xl md:text-8xl lg:text-9xl text-green-400 mb-6 glitch">
              AYUSH GUPTA
            </h1>
            
            <div className="text-2xl md:text-3xl lg:text-4xl font-tech text-green-400 mb-4">
              CLOUD ENGINEER | AZURE EXPERT
            </div>
            
            <div className="text-lg md:text-xl font-mono text-green-300 mb-8 typing-text">
              {typedText}
            </div>
            
            <p className="text-lg max-w-3xl mx-auto mb-12 leading-relaxed text-gray-300 font-tech">
              5.5+ Years of Enterprise Cloud Experience • 100+ Production Apps Managed • 
              30+ Engineers Trained • 99.9% Uptime Specialist
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={handleDownloadResume}
                className="cyber-btn bg-green-400 hover:bg-green-500 text-black border-green-400 h-14 px-8 font-mono text-sm uppercase tracking-wider"
              >
                <Download className="w-5 h-5 mr-2" />
                DOWNLOAD RESUME
              </Button>
              
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/gupta07ayush" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-green-400 bg-transparent h-14 w-14 flex items-center justify-center hover:bg-green-400 hover:text-black transition-all duration-300 text-green-400"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com/gupta07ayush" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-green-400 bg-transparent h-14 w-14 flex items-center justify-center hover:bg-green-400 hover:text-black transition-all duration-300 text-green-400"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="holo-card p-4 text-center">
                    <Icon className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <div className="font-cyber text-2xl text-white mb-1">{stat.value}</div>
                    <div className="font-mono text-xs text-green-400 uppercase">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="photo-blend relative">
              <div className="holo-card p-8">
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/profile_photo.jpg`}
                  alt="Ayush Gupta - Cloud Engineer"
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>
            
            <div>
              <div className="mb-8">
                <span className="font-mono text-sm text-green-400 terminal mb-4 block">
                  PROFILE_DATA.LOADING...
                </span>
                <h2 className="font-cyber text-4xl md:text-6xl text-green-400 mb-6">
                  CLOUD ARCHITECT
                </h2>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed font-tech">
                <p className="text-gray-300">
                  As a <span className="text-green-400 font-bold">Cloud & Software Engineer</span> with 
                  <span className="text-white font-bold"> 5.5+ years of experience</span> in Azure Cloud, DevOps, 
                  and Web Application Development, I specialize in architecting and managing enterprise-scale 
                  cloud solutions.
                </p>
                
                <p className="text-gray-300">
                  I've successfully managed <span className="text-green-400 font-bold">100+ production-grade applications </span> 
                  on Azure App Service, ensuring high availability, security compliance, and cost optimization. 
                  My expertise spans from designing containerized microservices to implementing robust CI/CD pipelines.
                </p>

                <p className="text-gray-300">
                  As a <span className="text-green-400 font-bold">Tech Lead and Trainer</span>, I've mentored 
                  <span className="text-white font-bold">30+ engineers</span> across multiple batches, 
                  achieving a <span className="text-green-400 font-bold">50% improvement</span> in team performance 
                  and delivery speed.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {[
                  { icon: Rocket, title: "RAPID DEPLOYMENT", desc: "Deploy production apps in <15 minutes" },
                  { icon: Shield, title: "SECURITY EXPERT", desc: "RBAC, Key Vault, VNets, Managed Identities" },
                  { icon: TrendingUp, title: "PERFORMANCE OPTIMIZER", desc: "20% performance boost, 15% cost reduction" },
                  { icon: Users, title: "TEAM LEADER", desc: "Tech Lead for 30+ trained engineers" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="holo-card p-4 scan-line">
                      <Icon className="w-6 h-6 text-green-400 mb-2" />
                      <div className="font-mono text-xs text-green-400 uppercase mb-1">{item.title}</div>
                      <div className="text-sm text-gray-300 font-tech">{item.desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="font-mono text-sm text-green-400 terminal mb-4 block">
              SKILLS_MATRIX.INITIALIZE...
            </span>
            <h2 className="font-cyber text-4xl md:text-6xl text-green-400">
              TECHNICAL Skills
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="holo-card p-6 group">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-7 h-7 text-green-400 group-hover:text-white transition-colors" />
                    <div>
                      <div className="font-mono text-sm text-white uppercase">{skill.name}</div>
                      <Badge className="bg-green-400/20 text-green-400 border-green-400/50 text-xs mt-1">
                        {skill.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="skill-bar mb-2">
                    <div 
                      className="skill-progress transition-all duration-2000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="flex justify-between">
                    <span className="font-mono text-xs text-green-400">PROFICIENCY</span>
                    <span className="font-mono text-xs text-white">{skill.level}%</span>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Technology Stack */}
          <div className="holo-card p-8">
            <h3 className="font-cyber text-2xl text-center text-green-400 mb-8">
              TECHNOLOGY STACK
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index}
                  className="neon-border bg-transparent text-green-400 hover:bg-green-400/20 transition-all cursor-pointer px-3 py-2 font-mono text-xs uppercase tracking-wider text-center"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="font-mono text-sm text-green-400 terminal mb-4 block">
              CAREER_TIMELINE.LOADING...
            </span>
            <h2 className="font-cyber text-4xl md:text-6xl text-green-400">
              PROFESSIONAL JOURNEY
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-8 pb-12 last:pb-0">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 bg-green-400 neon-glow flex-shrink-0" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
                  {index < experiences.length - 1 && (
                    <div className="w-0.5 h-full bg-green-400/30 mt-4" />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="holo-card p-6 group">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="font-cyber text-xl text-white group-hover:text-green-400 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="font-mono text-green-400 text-sm uppercase tracking-wider mt-1">
                          {exp.company} • {exp.location}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-green-400" />
                        <span className="font-mono text-sm text-gray-300">{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 font-tech mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="font-mono text-sm text-green-400 uppercase tracking-wider">
                        KEY ACHIEVEMENTS:
                      </h4>
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 font-tech text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge 
                          key={i}
                          className="bg-green-400/10 text-green-400 border-green-400/30 font-mono text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="font-mono text-sm text-green-400 terminal mb-4 block">
              PROJECT_PORTFOLIO.EXECUTE...
            </span>
            <h2 className="font-cyber text-4xl md:text-6xl text-green-400">
              FLAGSHIP PROJECTS
            </h2>
            <p className="text-gray-300 font-tech text-lg mt-4 max-w-2xl mx-auto">
              Enterprise-scale solutions that drove measurable business impact
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="holo-card p-8 group scan-line">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-400/20 border border-green-400 flex items-center justify-center">
                      <span className="font-mono text-green-400 text-sm">0{project.id}</span>
                    </div>
                    <Badge className="bg-green-400/10 text-green-400 border-green-400/30 font-mono text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={`font-mono text-xs ${
                      project.status === 'Production' 
                        ? 'bg-green-400/20 text-green-400 border-green-400/50' 
                        : 'bg-blue-400/20 text-blue-400 border-blue-400/50'
                    }`}>
                      {project.status}
                    </Badge>
                    <Badge className="bg-red-400/20 text-red-400 border-red-400/50 font-mono text-xs">
                      {project.scale}
                    </Badge>
                  </div>
                </div>
                
                <h3 className="font-cyber text-xl text-white group-hover:text-green-400 transition-colors mb-4">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 font-tech leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <div className="font-mono text-sm text-green-400 uppercase tracking-wider mb-3">
                    BUSINESS IMPACT:
                  </div>
                  <div className="bg-green-400/10 border border-green-400/30 p-3">
                    <div className="font-mono text-green-400 text-sm">{project.impact}</div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-mono text-sm text-green-400 uppercase tracking-wider">
                    KEY CONTRIBUTIONS:
                  </h4>
                  {project.keyContributions.map((contribution, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Target className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 font-tech text-sm">{contribution}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge 
                      key={i}
                      className="bg-gray-800/50 text-gray-300 border-gray-600 font-mono text-xs hover:bg-green-400/10 hover:text-green-400 hover:border-green-400/30 transition-all cursor-pointer"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h3 className="font-cyber text-2xl text-green-400 mb-8">
              CERTIFICATIONS & ACHIEVEMENTS
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div key={index} className="holo-card p-6 text-center group">
                  <Icon className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:text-white transition-colors" />
                  <h4 className="font-mono text-white text-sm uppercase mb-2">{cert.name}</h4>
                  <p className="text-green-400 font-mono text-xs mb-2">{cert.issuer}</p>
                  <Badge className="bg-green-400/20 text-green-400 border-green-400/50 font-mono text-xs">
                    {cert.date} • {cert.status}
                  </Badge>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <span className="font-mono text-sm text-green-400 terminal mb-4 block">
                CONTACT_PROTOCOL.READY...
              </span>
              <h2 className="font-cyber text-4xl md:text-6xl text-green-400 mb-6">
                ESTABLISH CONNECTION
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto font-tech text-gray-300">
                Ready to architect your next cloud solution? Let's discuss how my expertise 
                can drive your organization's digital transformation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="holo-card p-8 text-left">
                <h3 className="font-cyber text-xl text-green-400 mb-8">
                  DIRECT CHANNELS
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 border border-green-400 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-green-400 uppercase tracking-wider">PRIMARY EMAIL</div>
                      <div className="text-white font-tech">gupta07ayush@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 border border-green-400 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-green-400 uppercase tracking-wider">DIRECT LINE</div>
                      <div className="text-white font-tech">+91-8982731180</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 border border-green-400 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-green-400 uppercase tracking-wider">LOCATION</div>
                      <div className="text-white font-tech">Pune, MH, India</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-8">
                  <a 
                    href="https://linkedin.com/in/gupta07ayush" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border-2 border-green-400 bg-transparent h-12 w-12 flex items-center justify-center hover:bg-green-400 hover:text-black transition-all duration-300 text-green-400"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://github.com/gupta07ayush" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border-2 border-green-400 bg-transparent h-12 w-12 flex items-center justify-center hover:bg-green-400 hover:text-black transition-all duration-300 text-green-400"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="holo-card p-8 text-left">
                <h3 className="font-cyber text-xl text-green-400 mb-8">
                  AVAILABILITY STATUS
                </h3>
                
                <div className="space-y-6 font-tech">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-mono text-sm">IMMEDIATE JOINER</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border-l-2 border-green-400 pl-4">
                      <div className="font-mono text-xs text-green-400 uppercase">SEEKING ROLE</div>
                      <div className="text-white">Cloud Solutions Architect</div>
                      <div className="text-white">Senior Cloud Engineer</div>
                    </div>
                    
                    <div className="border-l-2 border-green-400 pl-4">
                      <div className="font-mono text-xs text-green-400 uppercase">AVAILABILITY</div>
                      <div className="text-white">Open to Remote • Hybrid • On-site</div>
                    </div>
                    
                    <div className="border-l-2 border-green-400 pl-4">
                      <div className="font-mono text-xs text-green-400 uppercase">EXPERTISE AREAS</div>
                      <div className="text-white">Azure Cloud • DevOps • Team Leadership</div>
                    </div>
                  </div>
                  
                  <div className="bg-green-400/10 border border-green-400/30 p-4 mt-6">
                    <div className="font-mono text-green-400 text-sm mb-2">RESPONSE TIME:</div>
                    <div className="text-white font-tech">&lt; 24 hours guaranteed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-green-400/30 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-cyber text-xl text-green-400">
              &lt;AYUSH.GUPTA/&gt;
            </div>
            <div className="font-mono text-sm text-gray-400 uppercase tracking-wider">
              © 2025 • CLOUD ENGINEER PORTFOLIO • SYSTEM STATUS: ONLINE
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;