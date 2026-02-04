'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    id: 'deadline',
    title: 'DEADLINE',
    category: 'Games',
    description: 'An 8-bit competitive maze racer where players descend a collapsing office building floor-by-floor, racing AI opponents to corner exits before each level implodes.',
    image: '/images/flowers/IMG_6657.jpeg', // Placeholder - replace with actual game screenshot
    tags: ['HTML5', 'JavaScript', 'Godot', 'Procedural Generation', 'AI'],
    link: '#',
    featured: true,
  },
  {
    id: 'robotics',
    title: 'Robotics Platform',
    category: 'Robotics',
    description: 'Physical computing and automation systems that bridge the gap between digital intelligence and real-world interaction.',
    image: '/images/logos/5DBCC896-5AE4-4D17-815A-DD7AFC0E14F6.png',
    tags: ['Hardware', 'Embedded Systems', 'Motion Control', 'Sensors'],
    link: '#',
    featured: false,
  },
  {
    id: 'ai',
    title: 'AI Systems',
    category: 'AI',
    description: 'Intelligent systems and machine learning solutions that adapt and evolve, creating seamless human-machine experiences.',
    image: '/images/logos/7498A9C5-69A7-4869-A8A7-D9F456FBB39B.png',
    tags: ['Machine Learning', 'Neural Networks', 'Computer Vision', 'NLP'],
    link: '#',
    featured: false,
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-3xl overflow-hidden bg-brand-dark border border-brand-cream/10 hover:border-brand-cream/30 transition-all duration-500 ${
        project.featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Image container */}
      <div className={`relative overflow-hidden ${project.featured ? 'aspect-video md:aspect-[16/10]' : 'aspect-video'}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent opacity-80" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider bg-brand-cream/20 backdrop-blur-sm text-brand-cream rounded-full border border-brand-cream/30">
            {project.category}
          </span>
        </div>

        {/* Glow effect on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-brand-gold/10"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className={`font-bold text-brand-cream mb-2 ${project.featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
          {project.title}
        </h3>
        <p className={`text-brand-light/60 mb-4 ${project.featured ? 'text-base' : 'text-sm'} line-clamp-3`}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, project.featured ? 5 : 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-brand-cream/5 text-brand-cream/70 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <motion.a
          href={project.link}
          className="inline-flex items-center gap-2 text-brand-cream hover:text-brand-gold transition-colors"
          whileHover={{ x: 5 }}
        >
          <span className="text-sm font-medium">View Project</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>
      </div>

      {/* Border glow effect */}
      <div className="absolute inset-0 rounded-3xl border border-brand-cream/0 group-hover:border-brand-cream/20 transition-colors pointer-events-none" />
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-black" />
      <div className="absolute inset-0 circuit-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Our Projects</span>
          </h2>
          <p className="text-lg text-brand-light/60 max-w-2xl mx-auto">
            Exploring the frontiers of games, robotics, and artificial intelligence
            with hands-on projects that push boundaries.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-brand-cream/30 text-brand-cream rounded-full hover:bg-brand-cream/10 transition-all"
          >
            <span>Have a Project Idea?</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
