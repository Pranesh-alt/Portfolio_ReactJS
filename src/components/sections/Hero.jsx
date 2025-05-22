import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'
import { FaArrowDown } from 'react-icons/fa'
import Button from '../ui/Button'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center py-20 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="heading-xl text-dark-900 dark:text-white mb-6">
                Hi, I'm <span className="text-primary-500">Pranesh</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-dark-800 dark:text-dark-100 mb-6"
            >
              <TypeAnimation
                sequence={[
                  'Backend Developer',
                  1000,
                  'Problem solver',
                  1000,
                  'Creative Thinker',
                  1000,
                ]}
                wrapper="span"
                repeat={Infinity}
                cursor={true}
              />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-body-lg text-dark-600 dark:text-dark-200 mb-8 max-w-2xl"
            >
              Crafting robust digital foundations through scalable architecture and efficient code.
              I specialize in building secure, high-performance backend systems that power modern applications with reliability, 
              flexibility, and seamless integration.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button variant="primary" size="lg">
                  Get in Touch
                </Button>
              </Link>
              
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button variant="outline" size="lg">
                  View My Work
                </Button>
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-1">
              <div className="absolute inset-1 rounded-full overflow-hidden bg-white dark:bg-dark-800">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/comics-tv-8e695.appspot.com/o/Images%2FHome%20Page%2FWhatsApp%20Image%202025-05-22%20at%204.43.28%20PM.jpeg?alt=media&token=dc00cd2a-375c-4a04-a9cd-80dc55f44a64"
                  alt="Pranesh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex flex-col items-center cursor-pointer"
          >
            <span className="text-dark-500 dark:text-dark-300 text-sm mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaArrowDown className="text-primary-500" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero