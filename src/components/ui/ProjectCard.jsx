import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-50px' }}
      className="rounded-xl overflow-hidden bg-white dark:bg-dark-700 shadow-lg hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-[240px]">
        <motion.img
          animate={{ 
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-70"></div>
        
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="text-xs font-medium px-2 py-1 rounded-full bg-primary-500/80 text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-dark-700 dark:text-dark-200 mb-6">{project.description}</p>
        
        <div className="flex space-x-4">
          {project.github && (
            <Button 
              variant="outline" 
              size="sm"
              icon={<FaGithub />}
              iconPosition="left"
              onClick={() => window.open(project.github, '_blank')}
            >
              Code
            </Button>
          )}
          
          {project.demo && (
            <Button 
              variant="primary" 
              size="sm"
              icon={<FaExternalLinkAlt />}
              iconPosition="right"
              onClick={() => window.open(project.demo, '_blank')}
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard