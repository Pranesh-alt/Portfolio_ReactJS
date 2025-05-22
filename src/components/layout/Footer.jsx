import { FaGithub, FaLinkedinIn, FaTwitter, FaDribbble } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com', label: 'GitHub' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaDribbble />, url: 'https://dribbble.com', label: 'Dribbble' }
  ]

  return (
    <footer className="bg-white dark:bg-dark-900 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-start"
            >
              <h2 className="text-2xl font-bold mb-2">
                <span className="text-primary-500">Pra</span>
                <span className="dark:text-white">nesh</span>
              </h2>
              <p className="text-dark-500 dark:text-dark-200 text-center md:text-left">
                Creating digital experiences that matter
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-700 flex items-center justify-center text-dark-500 dark:text-dark-200 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 dark:border-dark-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-dark-500 dark:text-dark-300 text-sm mb-4 md:mb-0">
            © {currentYear} Pranesh. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#privacy"
              className="text-sm text-dark-500 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-sm text-dark-500 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer