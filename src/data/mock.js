// Enhanced mock data for Ayush Gupta's futuristic portfolio
export const mockData = {
  personalInfo: {
    name: "Ayush Gupta",
    title: "Cloud Engineer | Azure Expert",
    subtitle: "Building Production-Ready Cloud Solutions",
    description: "5.5+ Years of Enterprise Cloud Experience • 100+ Production Apps Managed • 30+ Engineers Trained • 99.9% Uptime Specialist",
    email: "gupta07ayush@gmail.com",
    phone: "+91-8982731180",
    location: "Pune, MH, India",
    profileImage: "/assets/profile_photo.jpg",
    linkedin: "https://linkedin.com/in/gupta07ayush",
    github: "https://github.com/gupta07ayush",
    resumeUrl: "/assets/Ayush_Gupta_Resume.pdf"
  },

  aboutMe: {
    summary: "As a Cloud & Software Engineer with 5.5+ years of experience in Azure Cloud, DevOps, and Web Application Development, I specialize in architecting and managing enterprise-scale cloud solutions.",
    expertise: "I've successfully managed 100+ production-grade applications on Azure App Service, ensuring high availability, security compliance, and cost optimization. My expertise spans from designing containerized microservices to implementing robust CI/CD pipelines.",
    leadership: "As a Tech Lead and Trainer, I've mentored 30+ engineers across multiple batches, achieving a 50% improvement in team performance and delivery speed.",
    highlights: [
      {
        icon: "Rocket",
        title: "RAPID DEPLOYMENT",
        description: "Deploy production apps in <15 minutes"
      },
      {
        icon: "Shield",
        title: "SECURITY EXPERT",
        description: "RBAC, Key Vault, VNets, Managed Identities"
      },
      {
        icon: "TrendingUp",
        title: "PERFORMANCE OPTIMIZER",
        description: "20% performance boost, 15% cost reduction"
      },
      {
        icon: "Users",
        title: "TEAM LEADER",
        description: "Tech Lead for 30+ trained engineers"
      }
    ]
  },

  skills: [
    { name: 'Azure Cloud Services', level: 95, category: 'Cloud', icon: 'Cloud' },
    { name: 'Docker & Containerization', level: 92, category: 'DevOps', icon: 'Container' },
    { name: 'CI/CD Pipelines', level: 90, category: 'DevOps', icon: 'GitBranch' },
    { name: 'Python & Django', level: 88, category: 'Programming', icon: 'Code' },
    { name: 'Infrastructure as Code', level: 85, category: 'DevOps', icon: 'Settings' },
    { name: 'Cloud Security & RBAC', level: 87, category: 'Security', icon: 'Shield' },
    { name: 'Microservices Architecture', level: 83, category: 'Architecture', icon: 'Layers' },
    { name: 'Performance Optimization', level: 89, category: 'Performance', icon: 'TrendingUp' },
    { name: 'Team Leadership', level: 94, category: 'Leadership', icon: 'Users' }
  ],

  technologies: [
    'Azure App Service', 'Docker', 'Kubernetes', 'Python', 'Django', 'Flask', 
    'PostgreSQL', 'MySQL', 'GitHub Actions', 'Terraform', 'Jenkins', 'Linux',
    'Git', 'Helm', 'Azure Container Registry', 'Blob Storage', 'Key Vault',
    'Application Insights', 'Log Analytics', 'VNet', 'Managed Identity',
    'Private Endpoints', 'Azure Monitor', 'Power BI', 'REST APIs',
    'Microservices', 'RBAC', 'Postman', 'Excel', 'Azure DevOps',
    'ARM Templates', 'PowerShell', 'Bash', 'JSON', 'YAML'
  ],

  experiences: [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
  ],

  projects: [
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
  ],

  certifications: [
    {
      id: 1,
      name: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2023",
      credentialId: "AZ-900",
      verificationUrl: null,
      status: "Active",
      icon: "Cloud"
    },
    {
      id: 2,
      name: "LTIMindtree Generative AI",
      issuer: "LTIMindtree",
      date: "2024",
      credentialId: "GAI-2024-001",
      verificationUrl: null,
      status: "Active",
      icon: "Brain"
    },
    {
      id: 3,
      name: "Google Advanced Analytics",
      issuer: "Google",
      date: "2023",
      credentialId: "GAA-2023-456",
      verificationUrl: null,
      status: "Active",
      icon: "TrendingUp"
    }
  ],

  stats: [
    { label: "Years Experience", value: "5.5+", icon: "Calendar" },
    { label: "Apps Managed", value: "100+", icon: "Server" },
    { label: "Engineers Trained", value: "30+", icon: "Users" },
    { label: "Uptime Achieved", value: "99.9%", icon: "CheckCircle" },
    { label: "Cost Reduction", value: "15%", icon: "TrendingUp" },
    { label: "Performance Boost", value: "20%", icon: "Rocket" }
  ],

  testimonials: [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Team Lead",
      company: "LTIMindtree",
      message: "Ayush has deep expertise in Azure and CI/CD pipelines. He was our go-to SME for App Service deployments and consistently delivered exceptional results.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Senior Manager",
      company: "LTIMindtree",
      message: "Working with Ayush was a pleasure. His training sessions helped our team achieve 50% better performance. His technical knowledge is outstanding.",
      rating: 5
    }
  ]
};

export default mockData;