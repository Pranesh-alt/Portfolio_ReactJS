import { motion } from 'framer-motion'

const SkillCard = ({ icon, title, level, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-dark-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2">{title}</h3>
      
      <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2.5 mb-2">
        <div 
          className="bg-primary-500 h-2.5 rounded-full" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between text-sm text-dark-500 dark:text-dark-300">
        <span>Beginner</span>
        <span>Advanced</span>
      </div>
    </motion.div>
  )
}

export default SkillCard