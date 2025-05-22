import { useTheme } from '../../context/ThemeContext'
import { HiSun, HiMoon } from 'react-icons/hi'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <motion.button
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-700 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-800 transition-colors duration-300"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <HiSun className="text-yellow-500 w-5 h-5" />
      ) : (
        <HiMoon className="text-primary-500 w-5 h-5" />
      )}
    </motion.button>
  )
}

export default ThemeToggle