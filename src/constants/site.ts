import type { NavItem } from '../types/portfolio'

export const profile = {
  name: 'Nazia Zazai',
  initials: 'NZ',
  title: 'Software Engineering Student, Technical Educator, AI Systems Builder',
  email: 'Available in CV',
  whatsapp: 'Available on request',
  location: 'Kabul, Afghanistan',
  cvPath: '/nazia-zazai-cv.pdf',
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/',
  email: profile.cvPath,
  whatsapp: 'https://wa.me/93700000000',
}

export const seo = {
  title: 'Nazia Zazai | Software Engineering Student and Technical Educator',
  description:
    'Premium portfolio for Nazia Zazai, a Software Engineering student, technical educator, frontend developer, and future AI systems founder.',
  image: '/og-image.png',
}
