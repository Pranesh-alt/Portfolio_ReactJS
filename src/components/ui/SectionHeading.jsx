import { motion } from 'framer-motion'

const SectionHeading = ({ title, subtitle, align = 'center' }) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  }

  return (
    <div className={`mb-12 ${alignmentClasses[align]} max-w-3xl`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="heading-lg mb-4 text-dark-900 dark:text-white relative inline-block"
      >
        {title}
        <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary-500"></span>
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-body-lg text-dark-600 dark:text-dark-200"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionHeading