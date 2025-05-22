import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import ThemeToggle from '../ui/ThemeToggle'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'Home', to: 'hero', offset: 0 },
  { name: 'About', to: 'about', offset: -70 },
  { name: 'Skills', to: 'skills', offset: -70 },
  { name: 'Projects', to: 'projects', offset: -70 },
  { name: 'Experience', to: 'experience', offset: -70 },
  { name: 'Contact', to: 'contact', offset: -70 },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [navBackground, setNavBackground] = useState(false)
  const { isDarkMode } = useTheme()

  // Change nav background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground(true)
      } else {
        setNavBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.menu-button')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      navBackground ? 'bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm shadow-md py-3' : 'py-6'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="z-50"
          >
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="text-2xl font-bold cursor-pointer"
            >
              <span className="text-primary-500">Pra</span>
              <span className={isDarkMode ? 'text-white' : 'text-dark-900'}>nesh</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
                activeClass="text-primary-500 font-medium"
                className="relative text-dark-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-300 cursor-pointer after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>

          {/* Theme Toggle and Mobile Menu Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center z-50"
          >
            <ThemeToggle />
            
            <button
              className="ml-4 md:hidden menu-button focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? (
                <HiX className="w-6 h-6 text-dark-900 dark:text-white" />
              ) : (
                <HiMenu className="w-6 h-6 text-dark-900 dark:text-white" />
              )}
            </button>
          </motion.div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="mobile-menu fixed top-0 right-0 h-screen w-[70%] bg-white dark:bg-dark-800 shadow-lg z-40 flex flex-col items-center justify-center"
            >
              <div className="flex flex-col items-center space-y-8 py-8">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={link.offset}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-medium text-dark-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* Overlay for mobile menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-30"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
      </div>
    </header>
  )
}

export default Header