import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import Button from '../ui/Button'
import { motion } from 'framer-motion'

const Projects = () => {
  const allProjects = [
    {
      title: 'Comics TV',
      description: 'Comics TV is a web application that allows users to watch and manage their favorite comic series.',
      image: 'https://firebasestorage.googleapis.com/v0/b/comics-tv-8e695.appspot.com/o/Images%2FHome%20Page%2FOTT.webp?alt=media&token=d2525093-04c8-458e-ae55-1bd576535940',
      technologies: [ 'Express Js', 'Node JS', 'MySQL'],
      github: 'https://github.com/Pranesh-alt/Node-JS-OTT',
      demo: 'https://node-js-ott-6.onrender.com/'
    },
    {
      title: 'Expense Tracker',
      description: 'A web application for tracking personal expenses, providing insights into spending habits and budget management.',
      image: 'https://firebasestorage.googleapis.com/v0/b/comics-tv-8e695.appspot.com/o/Images%2FHome%20Page%2FExpense_tracker.webp?alt=media&token=02e73033-1a12-449f-b846-35cccfb34bf5',
      technologies: ['Python', 'FastAPI', 'MySQL'],
      github: 'https://github.com/Pranesh-alt/Expense_tracker',
      demo: 'https://demo.com'
    },
    
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with modern technologies to showcase creative work and professional experience.',
      image: 'https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'TailwindCSS', 'Framer Motion'],
      github: 'https://github.com/Pranesh-alt/Portfolio_ReactJS',
      demo: 'portfolio-react-js-peach-psi.vercel.app'
    },
    {
      title: 'GO Chat',
      description: 'Go Chat App is a real-time chat application built using Go and WebSockets. It allows multiple users to connect, send, & receive messages instantly.',
      image: 'https://firebasestorage.googleapis.com/v0/b/comics-tv-8e695.appspot.com/o/Images%2FHome%20Page%2FChatGPT%20Image%20Jul%2017%2C%202025%2C%2011_28_40%20AM.png?alt=media&token=79f5ace6-5306-4616-b83b-e0a07a5196a7',
      technologies: ['React', 'GO'],
      github: 'https://github.com/Pranesh-alt/Chat-Application',
      demo: 'https://storied-gelato-850d0c.netlify.app/'
    }
  ]

  const [visibleProjects, setVisibleProjects] = useState(4)
  const [filter, setFilter] = useState('all')

  const filterCategories = [
    { id: 'all', name: 'All' },
    { id: 'python', name: 'Python' },
    { id: 'node', name: 'Node JS' },
    {id: 'react', name: 'React'}
  ]

  const filteredProjects = allProjects.filter(project => {
    if (filter === 'all') return true
    return project.technologies.some(tech => 
      tech.toLowerCase().includes(filter.toLowerCase())
    )
  })

  const displayedProjects = filteredProjects.slice(0, visibleProjects)
  const hasMore = visibleProjects < filteredProjects.length

  const handleLoadMore = () => {
    setVisibleProjects(prevCount => prevCount + 2)
  }

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <SectionHeading
          title="My Projects"
          subtitle="Check out some of my recent work"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {filterCategories.map(category => (
            <button
              key={category.id}
              onClick={() => {
                setFilter(category.id)
                setVisibleProjects(4)
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-white dark:bg-dark-700 text-dark-700 dark:text-dark-200 hover:bg-gray-100 dark:hover:bg-dark-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        {hasMore && (
          <div className="flex justify-center mt-12">
            <Button variant="outline" onClick={handleLoadMore}>
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects