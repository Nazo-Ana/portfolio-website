import type {
  AnalyticsPoint,
  Experience,
  GrowthPoint,
  Metric,
  Project,
  Service,
  SkillCategory,
  Testimonial,
} from '../types/portfolio'

export const heroRoles = [
  'Software Engineering Student',
  'Frontend Developer',
  'AI Systems Builder',
  'Technical Educator',
  'Future Startup Founder',
]

export const metrics: Metric[] = [
  {
    label: 'Years of Teaching',
    value: '4+',
    detail: 'English, coding, and digital learning support',
    icon: 'teaching',
  },
  {
    label: 'Students Trained',
    value: '850+',
    detail: 'Across classroom, online, and mentoring programs',
    icon: 'students',
  },
  {
    label: 'Technologies Learned',
    value: '18+',
    detail: 'Frontend, programming, productivity, and AI tools',
    icon: 'technology',
  },
  {
    label: 'Projects Completed',
    value: '12+',
    detail: 'Dashboards, education systems, and service platforms',
    icon: 'projects',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    description: 'Modern interface engineering with fast, accessible UI systems.',
    icon: 'frontend',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 92 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 82 },
      { name: 'React', level: 86 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title: 'Programming',
    description: 'Reliable foundations for problem solving and applied systems.',
    icon: 'programming',
    skills: [
      { name: 'Java', level: 78 },
      { name: 'Python', level: 74 },
    ],
  },
  {
    title: 'Tools',
    description: 'A practical stack for teaching, product work, and delivery.',
    icon: 'tools',
    skills: [
      { name: 'GitHub', level: 84 },
      { name: 'VS Code', level: 92 },
      { name: 'Google Classroom', level: 95 },
      { name: 'Canva', level: 88 },
      { name: 'Microsoft Office', level: 91 },
    ],
  },
  {
    title: 'Soft Skills',
    description: 'Communication strength for teams, classrooms, and clients.',
    icon: 'soft',
    skills: [
      { name: 'Leadership', level: 90 },
      { name: 'Communication', level: 94 },
      { name: 'Teaching', level: 96 },
      { name: 'Team Management', level: 86 },
      { name: 'Public Speaking', level: 89 },
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'Online English Learning System',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85',
    description:
      'A structured digital learning platform for English courses, lessons, student progress, and teacher workflows.',
    longDescription:
      'Designed as a modern education product with student onboarding, course modules, assignment tracking, teacher feedback loops, and clean dashboards for learning progress.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Google Classroom'],
    impact: 'Improves online learning visibility for teachers and students.',
    liveUrl: '#contact',
    githubUrl: 'https://github.com/',
  },
  {
    title: 'AI-Powered Education Platform',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85',
    description:
      'An AI-first concept for personalized study plans, lesson recommendations, and learner support.',
    longDescription:
      'A premium education system concept that combines learner profiles, AI-generated study suggestions, progress analytics, and smart content organization for modern classrooms.',
    stack: ['React', 'AI APIs', 'Python', 'Recharts'],
    impact: 'Positions education as adaptive, data-informed, and scalable.',
    liveUrl: '#contact',
    githubUrl: 'https://github.com/',
  },
  {
    title: 'Gym Management Dashboard',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=85',
    description:
      'A management dashboard for members, plans, attendance, revenue, and trainer performance.',
    longDescription:
      'Built around operational clarity with KPI cards, member activity, plan status, branch performance, and responsive admin views for gym owners.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    impact: 'Turns scattered gym operations into a clean decision surface.',
    liveUrl: '#contact',
    githubUrl: 'https://github.com/',
  },
  {
    title: 'SPA Management System',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=85',
    description:
      'A polished booking and operations system for appointments, staff, services, and client records.',
    longDescription:
      'A calm, premium admin experience for managing spa schedules, service packages, client notes, and daily performance without clutter.',
    stack: ['React', 'Tailwind CSS', 'JavaScript', 'UI/UX'],
    impact: 'Creates a smoother service workflow for beauty and wellness teams.',
    liveUrl: '#contact',
    githubUrl: 'https://github.com/',
  },
  {
    title: 'Travel Agency System',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85',
    description:
      'A travel operations platform for packages, bookings, customers, destinations, and invoices.',
    longDescription:
      'Created for travel teams that need clean booking views, destination catalogs, lead tracking, package filtering, and fast customer communication.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Forms'],
    impact: 'Helps agencies present offers and manage customer journeys faster.',
    liveUrl: '#contact',
    githubUrl: 'https://github.com/',
  },
  {
    title: 'Student Management System',
    image:
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=85',
    description:
      'A student information system for attendance, records, courses, teachers, and academic analytics.',
    longDescription:
      'An education operations dashboard that combines student records, course assignment, attendance views, teacher coordination, and high-signal academic reporting.',
    stack: ['React', 'Java', 'TypeScript', 'Dashboard UI'],
    impact: 'Gives schools a more organized and measurable operating system.',
    liveUrl: '#contact',
    githubUrl: 'https://github.com/',
  },
]

export const services: Service[] = [
  {
    title: 'Frontend Web Development',
    description:
      'Responsive React and TypeScript interfaces with startup-grade polish, speed, and accessibility.',
    icon: 'frontend',
  },
  {
    title: 'AI Integration',
    description:
      'AI-assisted workflows, chat experiences, content tools, and intelligent education features.',
    icon: 'ai',
  },
  {
    title: 'Dashboard Systems',
    description:
      'Analytics dashboards for schools, gyms, agencies, service businesses, and internal teams.',
    icon: 'dashboard',
  },
  {
    title: 'Educational Platforms',
    description:
      'Learning portals, course systems, student tracking, lesson organization, and teacher tools.',
    icon: 'education',
  },
  {
    title: 'UI/UX Design',
    description:
      'Clear product flows, premium interface systems, and conversion-focused digital experiences.',
    icon: 'design',
  },
  {
    title: 'Website Optimization',
    description:
      'Performance, SEO, accessibility, motion tuning, and responsive refinement for modern sites.',
    icon: 'optimization',
  },
  {
    title: 'Digital Systems Setup',
    description:
      'Practical tool setup for classrooms, online teams, content workflows, and professional operations.',
    icon: 'systems',
  },
]

export const experiences: Experience[] = [
  {
    role: 'English Instructor',
    company: 'Modern Language Programs',
    years: '2021 - Present',
    icon: 'education',
    responsibilities: [
      'Designed interactive English lessons for beginner to intermediate students.',
      'Led speaking, grammar, writing, and confidence-building sessions.',
      'Used digital tools to improve assignments, feedback, and progress tracking.',
    ],
  },
  {
    role: 'Coding Instructor',
    company: 'Youth Technology Workshops',
    years: '2023 - Present',
    icon: 'code',
    responsibilities: [
      'Introduced learners to web fundamentals, JavaScript, and practical project building.',
      'Mentored students through small projects and debugging exercises.',
      'Translated complex technical ideas into clear classroom explanations.',
    ],
  },
  {
    role: 'Interpreter',
    company: 'Education and Community Programs',
    years: '2020 - 2023',
    icon: 'language',
    responsibilities: [
      'Supported cross-language communication in professional and educational settings.',
      'Built strong listening, cultural awareness, and high-pressure communication skills.',
      'Helped teams communicate clearly across English, Dari, and Pashto contexts.',
    ],
  },
  {
    role: 'Technical Trainer',
    company: 'Digital Skills Training',
    years: '2022 - Present',
    icon: 'training',
    responsibilities: [
      'Trained learners on productivity tools, online classrooms, and digital workflows.',
      'Prepared practical exercises for Microsoft Office, Canva, and classroom platforms.',
      'Helped students become more confident with technology in daily work.',
    ],
  },
  {
    role: 'Online Education System Developer',
    company: 'Independent Product Work',
    years: '2024 - Present',
    icon: 'systems',
    responsibilities: [
      'Built concepts and prototypes for online learning and student management systems.',
      'Created dashboards that combine education data, progress metrics, and clear UI.',
      'Explored AI-powered features for personalized learning and teacher support.',
    ],
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Sahar N.',
    role: 'English Student',
    quote:
      'Nazia explains with patience, clarity, and confidence. Her teaching style makes learning feel organized, modern, and encouraging.',
    rating: 5,
  },
  {
    name: 'Bilal R.',
    role: 'Coding Learner',
    quote:
      'She turns technical topics into practical steps. The project-based approach helped me understand how real websites and systems work.',
    rating: 5,
  },
  {
    name: 'Mina A.',
    role: 'Training Coordinator',
    quote:
      'Reliable, professional, and strong with communication. Nazia can teach, lead, and build digital systems with impressive attention to detail.',
    rating: 5,
  },
  {
    name: 'Farid H.',
    role: 'Project Collaborator',
    quote:
      'The dashboards and education platform ideas feel polished and practical. She thinks like a founder, not only a developer.',
    rating: 5,
  },
]

export const studentAnalytics: AnalyticsPoint[] = [
  { name: 'Speaking', value: 34 },
  { name: 'Grammar', value: 22 },
  { name: 'Writing', value: 18 },
  { name: 'Coding', value: 26 },
]

export const projectAnalytics: AnalyticsPoint[] = [
  { name: 'Education', value: 42 },
  { name: 'Dashboards', value: 28 },
  { name: 'Business', value: 18 },
  { name: 'AI Concepts', value: 12 },
]

export const skillGrowth: GrowthPoint[] = [
  { month: 'Jan', frontend: 62, ai: 28, teaching: 78 },
  { month: 'Feb', frontend: 68, ai: 36, teaching: 81 },
  { month: 'Mar', frontend: 73, ai: 44, teaching: 84 },
  { month: 'Apr', frontend: 78, ai: 52, teaching: 87 },
  { month: 'May', frontend: 84, ai: 61, teaching: 90 },
  { month: 'Jun', frontend: 90, ai: 70, teaching: 94 },
]
