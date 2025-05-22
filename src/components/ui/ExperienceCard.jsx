import { motion } from 'framer-motion'

const ExperienceCard = ({ position, company, period, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-primary-200 dark:bg-dark-600"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-dark-800"></div>
      
      <div className="bg-white dark:bg-dark-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
        <div className="flex flex-col sm:flex-row justify-between mb-4">
          <h3 className="text-xl font-bold text-dark-900 dark:text-white">{position}</h3>
          <span className="text-sm font-medium text-primary-500 bg-primary-50 dark:bg-dark-600 px-3 py-1 rounded-full mt-2 sm:mt-0">
            {period}
          </span>
        </div>
        
        <h4 className="text-lg font-medium text-dark-700 dark:text-dark-200 mb-4">{company}</h4>
        
        <ul className="text-dark-600 dark:text-dark-300 space-y-2">
          {description.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-2"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default ExperienceCard