import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  return useContext(ThemeContext)
}

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        return savedTheme === 'dark'
      }
      // If no localStorage value, use system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  // Apply theme changes to HTML element and localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = () => {
      // Only change if user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(mediaQuery.matches)
      }
    }
    
    mediaQuery.addEventListener('change', handleChange)
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev)
  }

  const value = {
    isDarkMode,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider