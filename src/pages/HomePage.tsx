import { lazy, Suspense, useEffect } from 'react'
import { HeroSection } from '../components/HeroSection'
import { PageTransition } from '../components/PageTransition'
import { SectionLoader } from '../components/ui/SectionLoader'
import { seo } from '../constants/site'
import { applySeo } from '../utils/seo'

const AboutSection = lazy(() => import('../components/AboutSection'))
const SkillsSection = lazy(() => import('../components/SkillsSection'))
const ProjectsSection = lazy(() => import('../components/ProjectsSection'))
const ServicesSection = lazy(() => import('../components/ServicesSection'))
const ExperienceTimeline = lazy(() => import('../components/ExperienceTimeline'))
const TestimonialSection = lazy(() => import('../components/TestimonialSection'))
const AnalyticsDashboard = lazy(() => import('../components/AnalyticsDashboard'))
const ContactSection = lazy(() => import('../components/ContactSection'))

export default function HomePage() {
  useEffect(() => {
    applySeo(seo)
  }, [])

  return (
    <PageTransition>
      <HeroSection />
      <Suspense fallback={<SectionLoader />}>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceTimeline />
        <ServicesSection />
        <TestimonialSection />
        <AnalyticsDashboard />
        <ContactSection />
      </Suspense>
    </PageTransition>
  )
}
