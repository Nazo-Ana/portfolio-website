export type Theme = 'light' | 'dark'

export type NavItem = {
  label: string
  href: string
  id: string
}

export type Metric = {
  label: string
  value: string
  detail: string
  icon: 'teaching' | 'students' | 'technology' | 'projects'
}

export type Skill = {
  name: string
  level: number
}

export type SkillCategory = {
  title: string
  description: string
  icon: 'frontend' | 'programming' | 'tools' | 'soft'
  skills: Skill[]
}

export type Project = {
  title: string
  image: string
  description: string
  longDescription: string
  stack: string[]
  impact: string
  liveUrl: string
  githubUrl: string
}

export type Service = {
  title: string
  description: string
  icon:
    | 'frontend'
    | 'ai'
    | 'dashboard'
    | 'education'
    | 'design'
    | 'optimization'
    | 'systems'
}

export type Experience = {
  role: string
  company: string
  years: string
  icon: 'education' | 'code' | 'language' | 'training' | 'systems'
  responsibilities: string[]
}

export type Testimonial = {
  name: string
  role: string
  quote: string
  rating: number
}

export type AnalyticsPoint = {
  name: string
  value: number
}

export type GrowthPoint = {
  month: string
  frontend: number
  ai: number
  teaching: number
}
